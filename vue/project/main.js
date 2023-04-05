new Vue({
  el: '#app',
  data() {
    return {
      title: 'titleデータ',
      body: 'bodyです',
    }
  },
  methods: {
    showDate() {
      return new Date().toISOString()
    }
  }
})
