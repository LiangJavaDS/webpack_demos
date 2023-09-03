import style from './app.css';
import React from 'react'
import ReactDOM from 'react-dom'
// import 比 require 打包体积小接近一倍
/**
 * 使用 ES6 的 import 语法替代 CommonJS 的 require 语法，
 * 可以让 Webpack 在打包时更好地进行静态分析和优化，
 * 从而减小打包生成的文件大小。这是因为 import 语法是静态的，
 * 而 require 语法是动态的，
 * Webpack 在处理 import 语法时可以更好地进行 Tree Shaking 和 Scope Hoisting 等优化操作。
 * 
 * Tree Shaking 只能删除未被使用的代码，而不能删除被间接引用的代码
 * 
 * Scope Hoisting （作用域提升）是另一个用于优化 JavaScript 代码的技术，
 * 它的主要作用是将模块之间的依赖关系优化为更紧凑的形式，以减小打包后的文件大小，提高应用程序的性能。
 * 
 * 
 * 
 * 如 首先
  module A
  import { foo } from './moduleB';

  function bar() {
    console.log(foo);
  }

  bar();


  module B
  export const foo = 123;
 *******
  其次
  在没有使用 Scope Hoisting 的情况下，Webpack 会将模块 A 和模块 B 分别打包成两个单独的文件，打包后的文件如下：

  // 打包后的 module A
  function bar() {
    console.log(foo);
  }

  import { foo } from './moduleB';

  bar();

  // 打包后的 module B
  export const foo = 123;
********
  最后
  而使用 Scope Hoisting 后，Webpack 会将模块 A 和模块 B 打包成一个文件，打包后的文件如下：
  // 打包后的 module A 和 module B
  const foo = 123;

  function bar() {
    console.log(foo);
  }

  bar();

 */
// var React = require('react');
// var ReactDOM = require('react-dom');
// var style = require('./app.css');

ReactDOM.render(
  <div>
    <h1 className={style.h1}>Hello World</h1>
    <h2 className="h2">Hello Webpack</h2>
  </div>,
  document.getElementById('example')
);
