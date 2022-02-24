'use strict';

const app = new Vue({
    el: '#app',
    data: {
        modelWin: false,
        isCheckbox: false,
        isCheckbox1: false,
        number: '',
        number1: '',
        name: '',
    },
    methods: {
        openModelWin() {
            if ((this.isCheckbox === true && this.number.length > 10) || (this.isCheckbox1 === true && this.number1.length > 10))
                this.modelWin = true;
        },
        closeModalWin() {
            this.modelWin = false;
        },
    },
});