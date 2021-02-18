let MoudleB = (function () {
  let name = '模块B';
  let sayName = function(){
    console.log('我是'+this.name);
  }

  let obj = {
    name,
    sayName,
  }

  return obj;
})();