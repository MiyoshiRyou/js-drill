<template>
  <div class="button" @click="onClick($event, 'fugafuga')">
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    onClick: {
      type: Function,
      required: true
    }
  }
}
</script>

<style>
.button {
  display: inline-block;
  background: red;
  border-radius: 5px;
  color: white;
  padding: 10px;
  cursor: pointer;
  margin-right: 5px;
}

.button:hover {
  background: rgb(182, 0, 0);
}

.button:active {
  background: rgb(138, 13, 13);
}
</style>
