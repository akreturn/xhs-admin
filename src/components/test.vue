<template>
    <div>
      <ul v-for="aaa in msg">
        <p>{{ aaa.name }}</p>
        {{msg}}
      </ul>
    </div>
</template>
<script>
  export default {
    props:['msg']
  }
</script>
