// Sass configuration
var gulp = require("gulp"),
  sass = require("gulp-sass")(require("node-sass")),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssnano = require("cssnano"),
  sourcemaps = require("gulp-sourcemaps"),
  browserSync = require("browser-sync").create();

var paths = {
  styles: {
    // By using styles/**/*.sass we're telling gulp to check all folders for any sass file
    src: "sass/*.scss",
    // Compiled files will end up in whichever folder it's found in (partials are not compiled)
    dest: "styles",
  },
};

function style() {
  return (
    gulp
      .src(paths.styles.src)
      .pipe(sourcemaps.init())
      .pipe(sass())
      .on("error", sass.logError)
      .pipe(postcss([autoprefixer(), cssnano()]))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(paths.styles.dest))
      // Add browsersync stream pipe after compilation
      .pipe(browserSync.stream())
  );
}

// A simple task to reload the page
function reload() {
  browserSync.reload();
}

function watch() {
  gulp.watch(paths.styles.src, style);
  // We should tell gulp which files to watch to trigger the reload
  // This can be html or whatever you're using to develop your website
  // Note -- you can obviously add the path to the Paths object
  gulp.watch("src/*.html", reload);
}

// Don't forget to expose the task!
exports.watch = watch;

// Expose the task by exporting it
// This allows you to run it from the commandline using
// $ gulp style
exports.style = style;

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
var build = gulp.parallel(style, watch);

/*
 * You can still use `gulp.task` to expose tasks
 */
gulp.task("sass", build);

/*
 * Define default task that can be called by just running `gulp` from cli
 */
gulp.task("default", build);
