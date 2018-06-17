<template>
  <div id="app">
    <li v-for="post in posts" v-bind:key="post.id">
      <router-link :to="'/page/' + post.id ">{{post.title}}</router-link>
    </li>
    <div ></div>
    <router-view/>
    <div class="form-group">
      {{inc}}
      <button v-on:click="enableSession()">Поприветствовать</button>
    </div>

    <div class="form-group">
      <button id="theBtn2">Click me to get the session</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

axios.defaults.withCredentials = true

export default {
  name: 'App',
  data () {
    return {
      posts: [],
      inc: 0
    }
  },
  created () {
  },
  methods: {
    enableSession () {
      axios.get('http://192.168.1.144:3000/admin/pages?inc=' + this.inc)
        .then((resp) => {
          this.posts = resp.data
          this.coin = resp.data[0]
          this.inc++
          console.log(this.inc)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
