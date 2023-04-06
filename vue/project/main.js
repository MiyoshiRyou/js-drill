new Vue({
  el: '#app',
  data() {
    return {
      title: 'titleデータ',
      body: 'bodyです',
      url: 'https://google.com',
    }
  },
  methods: {
    showDate() {
      return new Date().toISOString()
    },
    clickButton() {
      alert('クリック！！');
    }
  }
})
