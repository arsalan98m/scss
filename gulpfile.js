const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// * mean look any of the file name with sass extension compile it
function buildStyles() {
  return src('*.scss').pipe(sass()).pipe(dest('css'));
}

function wathcTasks() {
  watch(['*.scss'], buildStyles);
}

exports.default = series(buildStyles, wathcTasks);
