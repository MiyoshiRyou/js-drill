new Vue({
  el: '#app',
  data() {
    return {
      title: 'titleデータ',
      body: 'bodyです',
      url: 'https://google.com',
      message: '',
    }
  },
  methods: {
    showDate() {
      return new Date().toISOString()
    },
    clickButton() {
      alert('クリック！！');
    },
    inputValue(event) {
      this.message = event.target.value;
    }
  }
})
