// Общие пакеты
const { src, dest, watch, series, parallel } = require("gulp");
const browserSync = require("browser-sync").create();
const del         = require("del");
const plumber     = require("gulp-plumber");
const notify      = require("gulp-notify");
const rename      = require('gulp-rename');
const sourcemaps  = require('gulp-sourcemaps');
const newer       = require("gulp-newer");

// Html пакеты
const fileInclud = require("gulp-file-include");
const htmlmin    = require("gulp-htmlmin");
const webpHtml   = require("gulp-webp-html");

// Styles пакеты
const sass         = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const shorthand    = require("gulp-shorthand");
const сssMedia     = require("gulp-group-css-media-queries");
const csso         = require("gulp-csso");
const webpCss      = require("gulp-webp-css");

// Scripts пакеты
const babel  = require("gulp-babel");
const uglify = require("gulp-uglify");
const concat = require('gulp-concat');

// Пакеты для изоброжений
const imagemin = require("gulp-imagemin");
const webp     = require("gulp-webp");
const svgstore = require("gulp-svgstore");

// Пакеты для шрифтов
const fonter    = require("gulp-fonter");
const ttf2woff2 = require("gulp-ttf2woff2");

// Пути
const projectFolder = 'public';
const sourceFolder = 'src';
const paths = {
  src: {
    html: sourceFolder + '/html/*.html',
    styles: sourceFolder + '/scss/main.scss',
    libs: sourceFolder + '/scss/libs.scss',
    scripts: sourceFolder + '/js/*.js',
    img: sourceFolder + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
    webp: sourceFolder + '/img/**/*.{jpg,png}',
    sprite: sourceFolder + '/img/svg/sprite/*.svg',
    fonts:sourceFolder + '/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
  },
  build: {
    styles: projectFolder + '/css/',
    scripts: projectFolder + '/js/',
    img: projectFolder + '/img/',
    sprite: projectFolder + '/img/svg/',
    fonts: projectFolder + '/fonts/',
  },
  watch: {
    html: sourceFolder + '/html/**/*.html',
    styles: sourceFolder + '/scss/**/*.scss',
    scripts: sourceFolder + '/js/**/*.js',
    img: sourceFolder + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
    fonts:sourceFolder + '/fonts/',
  },
}

// Удаление дериктории
const clean = () => {
  return del(projectFolder)
}

// Сервер
const server = () => {
  browserSync.init({
    server: {
        baseDir: projectFolder
    }
  })
}

// Обработка HTML
const html = () => {
  return src(paths.src.html)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "HTML",
        message: error.message
      }))
    }))
    .pipe(fileInclud())
    .pipe(webpHtml())
    .pipe(htmlmin({
        collapseWhitespace: true
    }))
    .pipe(dest(projectFolder))
    .pipe(browserSync.stream());
}

// Обработка стилей
const style = () => {
  return src(paths.src.styles)
    .pipe(sourcemaps.init())
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "SCSS",
        message: error.message
      }))
    }))
    .pipe(sass())
    .pipe(webpCss())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(сssMedia())
    .pipe(csso())
    .pipe(rename({suffix: ".min"}))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(paths.build.styles))
    .pipe(browserSync.stream())
}

const styleLibs = () => {
  return src(paths.src.libs)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(csso())
    .pipe(rename({suffix: ".min"}))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(paths.build.styles))
}

// Обработка JavaScript
const script = () => {
  return src(paths.src.scripts)
    .pipe(sourcemaps.init())
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "JavaScript",
        message: error.message
      }))
    }))
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(paths.build.scripts))
    .pipe(browserSync.stream())
}

// Обработка Image
const images = () => {
  return src(paths.src.img)
    .pipe(dest(paths.build.img))
}

const createWebp = () => {
  return src(paths.src.webp)
    .pipe(newer(paths.build.img))
    .pipe(webp())
    .pipe(newer(paths.build.img))
    .pipe(dest(paths.build.img))
}

const optimizeImages = () => {
  return src(paths.src.img)
    .pipe(newer(paths.build.img))
    .pipe(imagemin({verbose: true}))
    .pipe(newer(paths.build.img))
    .pipe(dest(paths.build.img))
}

const sprite = () => {
  return src(paths.src.sprite)
    .pipe(svgstore({inlineSvg: true}))
    .pipe(rename("sprite.svg"))
    .pipe(dest(paths.build.sprite))
}

// Обработка Fonts
const fonts = () => {
  return src(paths.src.fonts)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "Font",
        message: error.message
      }))
    }))
    .pipe(newer(paths.build.fonts))
    .pipe(fonter({formats: ['woff', 'ttf']}))
    .pipe(ttf2woff2())
    .pipe(newer(paths.build.fonts))
    .pipe(dest(paths.build.fonts))
}

// Наблюдение
const watcher = () => {
  watch(paths.watch.html, html);
  watch(paths.watch.styles, style);
  watch(paths.watch.scripts, script);
  watch(paths.watch.img, images);
  watch(paths.watch.fonts, fonts);
}

// Сборка задач
const start = series(
  clean,
  parallel (html, style, styleLibs, script, createWebp, fonts, sprite)
)

const build = series(
  start,
  optimizeImages
);

const dev = series(
  start,
  images,
  parallel(server, watcher)
);

exports.default = dev;
exports.build = build;
