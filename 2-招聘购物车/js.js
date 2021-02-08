const app = new Vue({
  el: '.app',
  data: {
    list: [
      {
        id: '001',
        name: '白某',
        age: 65,
        gender: '女',
        price: 2.00,
        disable: true,
        pushed: false,
      },
      {
        id: '002',
        name: '某泽',
        age: 18,
        gender: '男',
        price: 998.00,
        disable: false,
        pushed: false,
      },
      {
        id: '003',
        name: '梁某',
        age: 5,
        gender: '男',
        price: 558.00,
        disable: false,
        pushed: false,
      },
      {
        id: '004',
        name: '段某',
        age: 48,
        gender: '女',
        price: 100.00,
        disable: false,
        pushed: false,
      },
      {
        id: '005',
        name: '某洋',
        age: 15,
        gender: '男',
        price: 389.00,
        disable: true,
        pushed: false,
      },
      {
        id: '006',
        name: '倪某',
        age: 3,
        gender: '男',
        price: 280.00,
        disable: false,
        pushed: false,
      },
    ],
    head: ['工号','姓名','年龄','性别','价格','选择操作','特殊操作'],


  },


  computed: {            //计算属性
    totalPrice(){
      let price=0;
      for(let i of this.list){
        if(i.pushed){
          price += i.price;
        }
      }
      return price;
    },


  },


  methods: {
    onClick(people) {
      people.pushed = !people.pushed;
    },
    disLike(index){
      this.list.splice(index,1);
    },


  }, 


  filters: {          //过滤器
    getPrice(price){
      return '￥' + price.toFixed(2);
    },


  },
})