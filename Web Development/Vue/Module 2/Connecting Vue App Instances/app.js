const app = Vue.createApp({
    data() {
        return {
            courseGoalA: "Finish the Course and Master Vue!",
            courseGoalB: "Master Vue and build amazing apps!",
            vueLink: "https://v3.vuejs.org/guide/installation.html#cdn"
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5){
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
})
console.log(window)
app.mount("#user-goal");