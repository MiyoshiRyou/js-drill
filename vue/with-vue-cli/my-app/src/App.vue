<template>
  <div id="app">
    <h1>Hello</h1>
    <Counter
      button-title="ボタン1"
      :initial-count="-10"
    />
    <Counter
      buttonTitle="ボタン2"
      :initialCount="100"
    />
    <Counter
      buttonTitle="ボタン3"
    />
    <Button title="ボタン2" :onClick="hello" />
  </div>
</template>

<script>
import Counter from './components/Counter';
import Button from './components/Button';

export default {
  name: 'Fuga',
  components: {
    Counter,
    Button
  },
  methods: {
    hello(event, data1) {
      console.log('Hello!!!', event, data1);
    }
  }
}

</script>

<style>
</style>
