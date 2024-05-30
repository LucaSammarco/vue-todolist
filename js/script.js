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
            ],

            newItemText: ""
        };

       
    },

    methods: {
        removeItem(index) {
            this.shoppingList.splice(index, 1);
        },

        newItem(newItemText)
        {
            this.shoppingList.push({ text: this.newItemText, done: false });

            this.newItemText = ""
        }
    }
    
}).mount("#app");
