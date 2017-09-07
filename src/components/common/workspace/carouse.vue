
<template>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in imgArr" :key="item.time">
      <img :src="item.src" alt="">
    </el-carousel-item>
  </el-carousel>
</template>
<script>
  export default{
      data(){
          return{
              imgArr :[
                {
                  src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1501671886274&di=45a3678392d9cb4a3e4fa1f26db20dfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F0d338744ebf81a4ca96d93efdd2a6059252da6bd.jpg",
                  time:'10'
                },
                {
                  src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1501671886272&di=580bc02e4f436b5109a953c3632cac5c&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F63d9f2d3572c11dfe4e05b01692762d0f703c2db.jpg",
                  time:'11'
                },
                {
                  src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1501672001465&di=dfa8ec849e6fb72a69101b41f0761601&imgtype=0&src=http%3A%2F%2Fupload.chinaz.com%2F2015%2F1014%2F1444819863943.jpg",
                  time:'12'
                },
                {
                  src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1501672001465&di=2615910b73f3ebcef0e476e4351d0bf0&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F0dd7912397dda144bfee0994b8b7d0a20cf48634.jpg",
                  time:'13'
                }
              ]
          }
      }
  }
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
