const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// * mean look any of the file name with sass extension compile it
function buildStyles() {
  return src('styles/**/*.scss').pipe(sass()).pipe(dest('css'));
}

function wathcTasks() {
  watch(['styles/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, wathcTasks);
