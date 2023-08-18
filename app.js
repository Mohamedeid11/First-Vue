const app = Vue.createApp({
        data(){
                return {
                        showElements : true ,
                        title : 'Test From Vue' ,
                        name : 'Mohamed ' ,
                        year : '1996' ,
                }
        },

        methods: {
                changeTitle(){

                        this.title = " Changed Title" ;
                },

                changeTitleParameter(title){

                        this.title = title;
                },
                
                toggleElement(){

                        this.showElements = !this.showElements;
                },

        }

}).mount('#app')