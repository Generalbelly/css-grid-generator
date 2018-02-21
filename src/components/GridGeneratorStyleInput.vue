<template>
  <div class="controller">
    <span
      class="controller__label flex-center"
    >
      {{ label }}
    </span>
		<div class="input-field flex-center">
			<input
        :id="id"
        class="center-align"
        :placeholder="placeholder"
				type="text"
				@input="updateValue($event.target.value)"
        @change="valueChanged($event.target.value)"
				:value="value"
			>
			<label
				class="hide"
				:for="id"
			>
				{{ label }}
			</label>
		</div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    }
  },
  methods: {
    updateValue(val) {
      this.$emit('input', val)
    },
    valueChanged(val) {
      this.$emit('change', val)
    },
  },
}
</script>
<style scoped>
.controller {
  display: grid;
  grid-template-areas: 
    "label"
    "field";
  grid-template-rows: 30px 40px;
  grid-template-columns: 120px;
  border: solid 1px #2196F3;
}
.controller__label {
  grid-area: label;
  padding: 5px;
  border-bottom: solid 1px #2196F3;
}
.input-field {
  grid-area: field;
}
</style>
