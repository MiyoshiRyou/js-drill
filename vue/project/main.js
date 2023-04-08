Vue.component('button-counter', {
  data() {
    return {
      count: 0,
    };
  },
  template: `
    <div>
      <p>カウント : {{ count }}</p>
      <button @click="count++">インクリメント</button>
    </div>
  `
});

new Vue({
  el: '#app',
  data() {
    return {
      title: 'titleデータ',
      body: 'bodyです',
      url: 'https://google.com',
      message: '',
      text1: '',
      text2: '',
      text3: '',
      text4: '',
      count: 0,
      tweets: [
        {
          user: 'suzuki',
          text: 'good morning',
        },
        {
          user: 'takahashi',
          text: 'good afternoon',
        },
        {
          user: 'tanaka',
          text: 'good evening',
        },
      ],
      tweet: {
        user: 'Bob',
        text: 'Hello World',
        date: new Date().toLocaleString(),
      },
    }
  },
  created() {
    console.log('created!!');
  },
  mounted() {
    console.log('mounted!!');
  },
  updated() {
    console.log('updated!!');
  },
  destroyed() {
    console.log('destroyed!!');
  },
  computed: {
    capitalizedText1() {
      console.log('computed');
      if (!this.text1) {
        return '';
      }

      return this.text1.charAt(0).toUpperCase() + this.text1.slice(1);
    }
  },
  methods: {
    destroy() {
      this.$destroy();
    },
    showDate() {
      return new Date().toISOString()
    },
    clickButton() {
      alert('クリック！！');
    },
    inputValue(event) {
      this.message = event.target.value;
    },
    capitalizedText2() {
      console.log('method');
      if (!this.text2) {
        return '';
      }

      return this.text2.charAt(0).toUpperCase() + this.text2.slice(1);
    },
    increment() {
      this.count++;
    },
  },
  watch: {
    text3(newValue, oldValue) {
      console.log('newValue : ', newValue);
      console.log('oldValue : ', oldValue);
    }
  }
})
