const app = Vue.createApp({
    data(){
        return {
            myName: "David Barrett",
            myAge: 31,

        }
    },
    methods: {
        outputAgeIn5(){
            return this.myAge + 5;
        },
        outputFavoriteNumber(){
            return Math.random();
        }
    }
});

app.mount("#user-info");