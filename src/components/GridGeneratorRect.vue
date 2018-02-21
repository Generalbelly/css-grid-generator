<template>
	<div
		class="flex-center lime accent-4"
	>
	<div
		v-if="!inputDisabled"
		class="flex-col"
	>
		<div class="input-field">
			<input
				placeholder="Set height"
				id="rect.id+'-height'"
				type="text"
				class="validate"
				@input="updateHeight($event.target.value)"
				:value="rect.style.height"
			/>
			<label
				class="active"
				for="rect.id+'-height'"
			>
				Height
			</label>
		</div>
		<div class="input-field">
			<input
				placeholder="Set width"
				id="rect.id+'-width'"
				type="text"
				class="validate"
				@input="updateWidth($event.target.value)"
				:value="rect.style.width"
			/>
			<label
				class="active"
				for="rect.id+'-width'"
			>
				Width
			</label>
		</div>
	</div>
</div>
</template>
<script>
export default {
	props: {
		rect: {
			type: Object,
			default() {
				return {}
			}
		},
		inputDisabled: {
			type: Boolean,
			default: false,
		}
	},
	methods: {
		updateHeight(value) {
			this.$emit('height', value)
		},
		updateWidth(value) {
			this.$emit('width', value)
		},
	}
}
</script>
