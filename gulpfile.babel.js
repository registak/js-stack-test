/* eslint-disable import/no-extraneous-dependencies */

import gulp from 'gulp';
import babel from 'gulp-babel';
import eslint from 'gulp-eslint';
// Flowは静的型チェッカー。コード内の一貫性のない型を検出し、
// アノテーションを使って明示的な型宣言を追加することができる
import flow from 'gulp-flowtype';
import mocha from 'gulp-mocha';
import del from 'del';
import webpack from 'webpack-stream';
import webpackConfig from './webpack.config.babel';

const paths = {
  allSrcJs: 'src/**/*.js?(x)',
  // .jsファイルと.jsxファイルにマッチするパターン
  serverSrcJs: 'src/server/**/*.js?(x)',
  sharedSrcJs: 'src/shared/**/*.js?(x)',
  clientEntryPoint: 'src/client/app.jsx',
  clientBundle: 'dist/client-bundle.js?(.map)',
  gulpFile: 'gulpfile.babel.js',
  webpackFile: 'webpack.config.babel.js',
  libDir: 'lib',
  distDir: 'dist',
  allLibTests: 'lib/test/**/*.js',
};

gulp.task('lint', () =>
  gulp.src([
    paths.allSrcJs,
    paths.gulpFile,
    paths.webpackFile,
  ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    // abortオプションはFlowが問題を検出した場合にGulpタスクを中断させる
    .pipe(flow({ abort: true })),
);

gulp.task('clean', () => del([
  paths.libDir,
  paths.clientBundle,
]));

gulp.task('build', ['lint', 'clean'], () =>
  gulp.src(paths.allSrcJs)
    .pipe(babel())
    .pipe(gulp.dest(paths.libDir)),
);

gulp.task('test', ['build'], () =>
  gulp.src(paths.allLibTests)
    .pipe(mocha()),
);
// lint > build > test > main
gulp.task('main', ['test'], () =>
  gulp.src(paths.clientEntryPoint)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(paths.distDir)),
);

gulp.task('watch', () => {
  gulp.watch(paths.allSrcJs, ['main']);
});

gulp.task('default', ['watch', 'main']);
