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
  </div>
</template>

<script>
import Counter from './components/Counter';

export default {
  name: 'Fuga',
  components: {
    Counter
  }
}

</script>

<style>
</style>
