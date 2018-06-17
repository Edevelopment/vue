<template>
  <div class="container">
    <div class="h2">
      Hello Men
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      quote: ''
    }
  },
  computed: {
    // quite : this.getQuote()
  },
  methods: {
    getQuote () {
      axios.get('http://www.objgen.com/json/models/YST')
        .then((res) => {
          this.quote = res
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
