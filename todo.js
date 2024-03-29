// Descrizione:
// Rifare l’esercizio della to do list.
// Questa volta però ogni elemento della todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del task
// - done, un booleano (true/false) che indica se il task è stato fatto oppure no
// ------------------------------
// MILESTONE 1 
// Stampare all’interno di una lista HTML un item per ogni task.
// Se la proprietà done è uguale a true, visualizzare il testo del task sbarrato.
// ----------------------------------
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il task viene rimosso dalla lista.
// --------------------------------------
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo task, che quindi viene aggiunto alla lista dei task esistenti.

const { createApp } = Vue;
createApp({
    data(){
        return{
            myTasks: [
                {
                    text: 'Fare la spesa',
                    done: true
                },{
                    text: 'fare il bucato',
                    done: false
                },{
                    text: 'Lavare la macchina',
                    done: true
                }, {
                    text: 'Comprare la pasta ',
                    done: false
                }
            ],
            newTask: {
                text: '',
                done: false
            }
        }
    },
    methods:{
        removeMyTask(i) {
            this.myTasks.splice(i, 1)
        },

        addNewTask(){
            this.myTasks.push(this.newTask)
        }
    }
}).mount('#app');