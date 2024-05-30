const { createApp } = Vue;

createApp({
    data() {
        return {
            shoppingList: [
                {
                    text: "Latte",
                    done: false
                },
                {
                    text: "Pane",
                    done: true
                },
                {
                    text: "Uova",
                    done: false
                },
                {
                    text: "Pasta",
                    done: false
                },
                {
                    text: "Pomodori",
                    done: true
                },
                {
                    text: "Formaggio",
                    done: false
                },
                {
                    text: "Carne",
                    done: true
                }
            ]
        };

       
    },

    methods: {
        removeItem(index) {
            this.shoppingList.splice(index, 1);
        }
    }

    
}).mount("#app");
