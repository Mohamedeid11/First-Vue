const app = Vue.createApp({
        data(){
                return {
                        showElements : true ,
                        showFav : true ,
                        url : 'https://www.google.com/',
                        // title : 'Test From Vue' ,
                        // name : 'Mohamed ' ,
                        // year : '1996' ,

                        // x : 0,
                        // y : 0,

                        books : [
                                {title : 'First Book name' , author : 'Mohamed' , image : 'assests/1.jpeg' , isFav : true},
                                {title : 'Second Book name' , author : 'Ahmed' , image : 'assests/2.jpeg' , isFav : false},
                                {title : 'Thired Book name' , author : 'Kamal' , image : 'assests/3.jpeg' , isFav : true},
                        ],
                }
        },

        methods: {
                // changeTitle(){

                //         this.title = " Changed Title" ;
                // },

                // changeTitleParameter(title){

                //         this.title = title;
                // },
                
                toggleElement(){

                        this.showElements = !this.showElements;
                },

                toggleAppearFav(){
                        
                        this.showFav = !this.showFav;

                },

                // handleEvent1(event){

                //         console.log('mouse over event ' , 'event type :' , event)
                // },

                // handleEvent2(event , paramater){

                //         console.log('mouse leave event' , 'event type :' , event.type  , 'paramter :' , paramater)
                // },

                // handleEvent3(){

                //         console.log('double click event')
                // },

                // MouseMove(event){

                //         this.x = event.offsetX;
                //         this.y = event.offsetY;
                // },

                toggleFav(book){
                        console.log(book.isFav)
                        book.isFav = !book.isFav;
                }


        },
        computed :{

                filterFavBooks() {

                        return this.books.filter( (book) => book.isFav)
                }
        }

}).mount('#app')