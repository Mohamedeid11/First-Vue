<template>
  <h1> {{ title }}</h1>
  <br>
  
  <input type="text" ref="name">
  <input type="text" ref="age">
  <button @click="handleRefs" >Click Me</button>
  <br>
  
  <h2> Welcome ... </h2>
  <button @click.shift="toggleModal1" >Show Modal 1 (with Shift)</button>
  <!-- old modal -->
  <!-- <div v-if="showModal">
      <Test header="this is modal title from app" :text="text" theme="saasle" @close="toggleModal"/>
  </div> -->

  <!-- new modal -->
  <div v-if="showModal1">
      <Modal  theme="saasle" @close="toggleModal1"> 
          <h1> {{ header }}</h1>
          <p> {{ text }}</p>
          <template v-slot:links>
            <a href="#"> Link1 </a>
            <a href="#"> Link2 </a>
          </template>
      </Modal>
  </div>
  <br>
  <br>
  <br>

  <button @click="toggleModal2" >Show Modal 2 </button>
  <!-- new modal -->
  <div v-if="showModal2">
      <Modal  theme="sale" @close="toggleModal2"> 
          <h1> This is Modal 2</h1>
          <p> Some Text for Modal 2</p>
          <template v-slot:links>
            <a href="#"> Link3 </a>
            <a href="#"> Link4 </a>
          </template>
      </Modal>
  </div>

  <br>
  <br>
  <br>

  <button @click="toggleModal3" >Show Teleported Modal  </button>
  <!-- new modal -->
  <Teleport to="#modals" v-if="showModal3">
      <Modal  theme="sale" @close="toggleModal3"> 
          <h1> This is Teleported Modal</h1>
          <p> Some Text for Teleported Modal </p>
      </Modal>
  </Teleport >

  <br>
  <br>
  <br>



</template>

<script>

  import Modal from './components/Modal.vue'

  export default {

    name : 'App',

    data(){

      return {
        title : 'My First Vue App ',
        header : 'this is modal title from app',
        text : 'this is modal text from app',
        showModal1 : false,
        showModal2 : false,
        showModal3 : false,
      }

    },

    components : { Modal },

    methods : {
      handleRefs (){
          console.log(this.$refs.name)

          this.$refs.name.focus();
          this.$refs.age.classList.add('active')
        },

        toggleModal1 (){

          this.showModal1 = !this.showModal1

        },

        toggleModal2 (){

          this.showModal2 = !this.showModal2

        },

        toggleModal3 (){

          this.showModal3 = !this.showModal3

        },

      }
    
  }

</script>



<style >
#app {
  text-align: center;
  font-weight: normal;
}

h1{
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom:10px ;
}

</style>
