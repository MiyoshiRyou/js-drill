<template>
  <div class="button" @click="$emit('onClick', 'abc@@@', title, $event)">
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
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
