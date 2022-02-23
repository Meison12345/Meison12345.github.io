'use strict';

const app = new Vue({
    el: '#app',
    data: {
        modelWin: false,
        isCheckbox: false,
        number: '',
        name: '',
    },
    methods: {
        openModelWin() {
            if (this.isCheckbox === true && this.number.length > 10)
                this.modelWin = true;
        },
        closeModalWin() {
            this.modelWin = false;
        },
    },
    computed: {
        me() {
            console.log('a');
        }
    }
})