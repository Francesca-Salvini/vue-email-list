// CONSEGNA

// ESERCIZIO : Attraverso l'apposita API di Boolean 
// https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email 
// e stamparli in pagina all'interno di una lista.

// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.


var app = new Vue ( 
    {
        el: '#root',
        data : {
            emails : [],
            numberOfEmail : 10
        },
        methods : {
        
        },
        mounted() {
            
            for(i = 0; i < this.numberOfEmail; i++ ){
                    
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    const result = response.data;
                    console.log(result);
                    this.emails.push(result.response);
                });
                
            }
               

                
        }

    }
);
