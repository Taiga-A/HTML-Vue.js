let hello = new Vue({
    el: '#hello',
    data: {
        hello: '你好',
        red: false,
        blue: true,
    },
    methods: {
        inclick: function () {
            this.red = !this.red;
            this.blue = !this.blue;
        },
        colorChange: function () {
            return {
                red: this.red,
                blue: this.blue
            };
        },
    },
})