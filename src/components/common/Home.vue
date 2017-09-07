<template>
  <div class="warpper">

    <vHead></vHead>
    <vSide></vSide>
    <div class="content">
            <transition name="move" mode="out-in"><router-view></router-view></transition>
        </div>
  </div>
</template>

<script>
import vSide from './sideBar.vue'
import vHead from './header.vue'
export default {
  name: 'home',
  components:{
      vHead,vSide
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
    position: absolute;
    left: 200px;
    right: 0;
    width: auto;
    padding:0px 15px;
    margin-top:60px;
    box-sizing: border-box;
    overflow-y: scroll;
    height:calc( 100% - 60px);
}
</style>
