<template>
  <div class="messageList">
    <h3>新闻资讯 <span>more</span></h3>
    <ul class="">
      <li v-for="news in newList">
        <i class="fa fa-angle-right"></i>


        <router-link :to="{ path:'/detail',query:{title:news.title,content:news.content}}">{{ news.title }}</router-link>





        <span class="message_time">{{ news.time}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
      data(){
          return {
            newList :[
              {title: '李克强签国务院令 修改建设项目环保管理条例',time:'07-12',content:'李克强签国务院令 修改建设项目环保管理条例'},
              {title: '军民融合助力科技强国:空调背心、灭火导弹亮相',time:'07-11'},
              {title: '[守望相助70载]相思树下戍边关:傲立风霜守卫北疆',time:'07-10'},
              {title: 'VR全景看军旗升起的地方 武警"生命之舟"护江城',time:'07-09'},
              {title: '北京集中任命33名纪检监察组组长 派驻机构全覆盖',time:'07-08'},
              {title: '罗文任工信部副部长 孙梅君任食药监总局副局长',time:'07-07'},
              {title: '国家信访局请律师"坐堂":"第三方"怎样接访?',time:'07-06'},
              {title: '浙江省委常委徐加爱任浙江省委政法委书记 简历',time:'07-05'},
              {title: '中央巡视组原副部级巡视专员张化为被开除党籍',time:'07-04'},
              {title: '孙梅君任食药监总局副局长',time:'07-04'}
            ]
          }
      },
    methods:{
      open(title,content) {
        var target = event.target || window.event.srcElement;
       // console.log(target)
        const h = this.$createElement;
        this.$msgbox({
          title: title,
          message:h('p', content)
        })
      }
    }
  }
</script>
<style scoped="">
  .messageList h3{
    margin: 0;
    height: 32px;
    line-height: 32px;
    border-bottom: 2px solid #97a8be;
    margin-bottom:15px;
  }
  .messageList h3 span{
    float: right;
    font-size: 12px;
    color: #97a8be;
    font-weight: normal;
  }
  ul li {
    list-style-type: none;
    line-height: 26px;
    cursor: pointer;
    font-size: 14px;
  }
  ul li a{
    text-decoration: none;
  }
  ul li a:link,ul li a:active,ul li a:visited{
    color: #333;
  }
  ul li:hover{
    color: #2c3e59;
    text-decoration: underline;
  }
  .messageList .message_time{
    float: right;
    color: #97a8be;
  }




</style>
