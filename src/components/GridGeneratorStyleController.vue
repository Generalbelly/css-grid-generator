<template>
  <div class="controller">
    <span
      class="controller__label flex-center"
    >
      {{ label }}
    </span>
    <button
      class="controller__decrement-btn flex-center blue waves-effect waves-light"
      @click.stop.prevent="decrementClicked"
    >
      &minus;
    </button>
    <span
      class="controller__counter flex-center"
    >
      {{ count }}
    </span>
    <button
      class="controller__increment-btn flex-center blue waves-effect waves-light"
      @click.stop.prevent="incrementClicked"
    >
      +
    </button>  
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    incrementClicked() {
      this.$emit('increment')
    },
    decrementClicked() {
      this.$emit('decrement')
    },
  },
}
</script>
<style scoped>
.controller {
  display: grid;
  grid-template-areas: 
    "label label label"
    "decrement-btn counter increment-btn";
  grid-template-rows: 30px 40px;
  grid-template-columns: repeat(3, 40px);
  border: solid 1px #2196F3;
}
.controller__label {
  grid-area: label;
  padding: 5px;
  border-bottom: solid 1px #2196F3;
}
.controller__counter {
  grid-area: counter;
  color: black;
  font-size: 24px;
}
.controller__increment-btn {
  grid-area: increment-btn;
}
.controller__decrement-btn {
  grid-area: decrement-btn;
}

.controller__increment-btn,
.controller__decrement-btn {
  color: white;
  font-size: 30px;
}
</style>
