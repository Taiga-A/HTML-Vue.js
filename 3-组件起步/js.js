/**************************************** */
//非语法糖
/*            
        
        // 创建组件构造器对象
        const cpnC = Vue.extend({
          template: `
            <div>  
              <h2>Hello_World</h2>
            </div>
          `,
          //注册子组件
          components: { 


          },
        })
        // 注册全局组件
        Vue.component('my-cpn',cpnC);
        // 使用组件
        //！！！必须创建在Vue实例之前
*/
/*************************************** */
//语法糖
Vue.components('my_cpn',{
  template:`
    <div>
      <h2>Hello_World</h2>
    </div>
  `
})


const app = new Vue({
  el: '#app',
  data: {
    
  },
  methods: {   
    
  },
  computed: {
    
  },
  components: {//局部组件注册
    'my_cpn': cpnC,
    /**
     * 'my_cpc': {
     *    template: `
     *      <div>
     *        <h2>Hello_World</h2>
     *      </div>
     *    `
     *  }
     * 
     */
    
  },
  
})
