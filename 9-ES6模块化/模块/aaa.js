let nameA = '修改前的模块A';
let sayNameA = function(){
  console.log('我是模块A');
}

/** 单独导出 */
export {
  nameA,
  sayNameA,
}

nameA = '模块A'

/** 或定义时直接导出变量名 */
/*

export let name = '模块A';
export let sayName = function(){
  console.log('我是模块A');
}

*/