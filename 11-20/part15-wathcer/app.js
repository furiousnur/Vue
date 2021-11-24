var app = Vue.createApp({
    data() {
        return {
            mobile: "",
            name: {
                firstName: "",
                lastName: ""
            }
        }
    },
    watch: {
        mobile(newValue, oldValue) {
            console.log(newValue);
            if (isNaN(newValue)) {
                alert('Enter a valid mobile number');
                this.mobile = oldValue;
            }

            if (newValue.length == 12) {
                alert('An OTP has been sent');
                this.mobile = oldValue;
            }
        },
        //nested variable watch
        // 'name.firstName' : function (newValue, oldValue){
        //     console.log(newValue, oldValue);
        // },
        // 'name.lastName' : function (newValue, oldValue){
        //     console.log(newValue, oldValue);
        // },
        //    full object watch
        name: {
            deep: true,
            handler: function (newValue, oldValue) {
                console.log(newValue, oldValue);
            }
        }
    }
});

app.mount("#app");