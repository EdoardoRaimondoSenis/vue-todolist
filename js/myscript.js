const { createApp } = Vue;

createApp({
    data() {
        return {
            ListaNuo: '',
            Lista: [
                { 
                    task: "Comprare il pane", 
                    fatto: false
                },
                { 
                    task: "Portare in giro i cani", 
                    compito: false
                },
                { 
                    task: "Comprare un nuovo computer che questo fra poco esplode", 
                    fatto: false
                }
            ]
        }
    },
    methods: {
        ListaAgg() {
            if (this.ListaNuo !== '' && this.ListaNuo.length >= 2) {
                this.Lista.unshift({task: this.ListaNuo, fatto: false});
                this.ListaNuo = '';
            }
        },

        ListaDel(index) {
            this.Lista.splice(index, 1);
        }
    }
}).mount('.prisultato');