<template>
	<div>
		<div class="container-wrapper">
			<div class="col-width-controller-panel flex-row">
				<GridGeneratorStyleInput
					v-for="(col, colIndex) in cols"
					:key="'col-width-'+colIndex"
					:id="'col-width-'+colIndex"
					class="col-width-controller"
					label="Col width"
					v-model="cols[colIndex]"
					@change="(val) => {
						if (!val.match(/(px|%|vw|vh|fr|em|rem|ch|ex|cm|mm|in|pt|pc)$/)) return
						changeContainerStyle('grid-template-columns', cols.join(' '))
					}"
				></GridGeneratorStyleInput>
			</div>
			<div class="row-height-controller-panel flex-col">
				<GridGeneratorStyleInput
					v-for="(row, rowIndex) in rows"
					:key="'row-height-'+rowIndex"
					:id="'row-height-'+rowIndex"
					class="row-height-controller"
					label="Row height"
					v-model="rows[rowIndex]"
					@change="(val) => {
						if (!val.match(/(px|%|vw|vh|fr|em|rem|ch|ex|cm|mm|in|pt|pc)$/)) return
						changeContainerStyle('grid-template-rows', rows.join(' '))
					}"
				></GridGeneratorStyleInput>
			</div>
			<div
				class="container green darken-4"
				:style="containerStyle"
			>
				<GridGeneratorRect
					v-for="(rect, rectIndex) in rects"
					:key="'child-'+rectIndex"
					:rect="rect"
					@height="rectStyleChanged(rectIndex, 'height', $event)"
					@width="rectStyleChanged(rectIndex, 'width', $event)"
					:inputDisabled="true"
				>
				</GridGeneratorRect>
			</div>
			<div class="controller-panel flex-row">
				<GridGeneratorStyleController
					label="Grid Item"
					:count="rectNum"
					@increment="add('rect')"
					@decrement="remove('rect')"
				></GridGeneratorStyleController>
				<GridGeneratorStyleController
					label="Row"
					:count="rowNum"
					@increment="add('row')"
					@decrement="remove('row')"
				></GridGeneratorStyleController>
				<GridGeneratorStyleController
					label="Col"
					:count="colNum"
					@increment="add('col')"
					@decrement="remove('col')"
				></GridGeneratorStyleController>
				<GridGeneratorStyleInput
					id="row-height"
					label="Row Gap Width"
					v-model="rowGapWidth"
				></GridGeneratorStyleInput>
				<GridGeneratorStyleInput
					id="col-width"
					label="Col Gap Width"
					v-model="colGapWidth"
				></GridGeneratorStyleInput>
				<button class="btn btn-large generate-btn teal darken-4 modal-trigger" data-target="snippet-modal">Generate CSS</button>
			</div>
		</div>
		<div id="snippet-modal" class="modal">
			<div class="modal-content">
				<textarea
					readonly
					v-model="htmlSnippet"
					style="cursor:-webkit-grab; white-space: pre-wrap; height: auto;"
					onfocus="this.select();"
					:rows="rectNum+2"
				>
				</textarea>
				<textarea
					readonly
					v-model="cssSnippet"
					style="cursor:-webkit-grab; white-space: pre-wrap; height: auto;"
					onfocus="this.select();"
					rows="18"
				>
				</textarea>
			</div>
			<div class="modal-footer">
				<button class="modal-action modal-close waves-effect waves-green btn-flat">Close</button>
			</div>
		</div>
	</div>
</template>
<script>
import GridGeneratorStyleController from './GridGeneratorStyleController'
import GridGeneratorStyleInput from './GridGeneratorStyleInput'
import GridGeneratorRect from './GridGeneratorRect'

export default {
  components: {
    GridGeneratorStyleController,
		GridGeneratorRect,
		GridGeneratorStyleInput,
  },
  data() {
    return {
      containerStyle: {
				'grid-template-rows': '',
				'grid-template-columns': '',
			},
      rowGapWidth: '',
			colGapWidth: '',
			rows: [],
			cols: [],
      rects: [],
    }
  },
  methods: {
    add(type) {
      if (type === 'rect') {
        this.rects.push({
          style: {
            width: '1fr',
            height: '1fr',
          }
        })
      } else if (type === 'row') {
				this.rows.push('1fr')
      } else if (type === 'col') {
				this.cols.push('1fr')
      }
      this.changeContainerStyle()
    },
    remove(type) {
      if (this[`${type}Num`] === 0) return 
      if (type === 'rect') {
        this.rects = this.rects.slice(0, -1)
      } else {
        this[`${type}Num`] -= 1
      }
      this.changeContainerStyle()
    },
    changeContainerStyle(key, value) {
      if (key) {
				console.log(key);
				console.log(value);
				this.containerStyle[key] = value
				this.$forceUpdate()
      } else {
        if (this.rowNum > 0) {
					let val = this.containerStyle['grid-template-rows'].split(' ')
					for (var i = 0; i < (this.rowNum - val.length + 1); i++) {
						val.push('1fr')
					}
          this.containerStyle['grid-template-rows'] = val.join(' ') 
        }
				if (this.colNum > 0) {
					let val = this.containerStyle['grid-template-columns'].split(' ')
					for (var j = 0; j < (this.colNum - val.length + 1); j++) {
						val.push('1fr')
					}
          this.containerStyle['grid-template-columns'] = val.join(' ')
        }
      }
		},
		// rectStyleChanged(rectIndex, key, value) {
		// 	if (!value.match(/(px|%|vw|vh|fr|em|rem|ch|ex|cm|mm|in|pt|pc)$/)) return
		// 	const targetIndex = (rectIndex+1)%this.colNum - 1
		// 	if (key === 'height') {
		// 		let val = this.containerStyle['grid-template-columns'].split(' ')
		// 		val[targetIndex] = value
    //     this.changeContainerStyle('grid-template-columns', val.join(' '))
		// 	} else if (key === 'width') {
		// 		let val = this.containerStyle['grid-template-rows'].split(' ')
		// 		val[targetIndex] = value
		// 		this.changeContainerStyle('grid-template-rows', val.join(' '))
		// 	}
		// }
  },
  mounted() {
		$(document).ready(function(){
			$('.modal').modal();
		});
    for (var i = 0; i < 9; i++) {
      this.add('rect');
    }
    for (var j = 0; j < 3; j++) {
      this.add('row');
    }
    for (var k = 0; k < 3; k++) {
      this.add('col');
		}
		this.rowGapWidth = '5px'
		this.colGapWidth = '5px'
},
	watch: {
		rowGapWidth(value) {
			if (!value.match(/(px|%|vw|vh|fr|em|rem|ch|ex|cm|mm|in|pt|pc)$/)) return
			this.changeContainerStyle('grid-row-gap', value)
		},
		colGapWidth(value) {
			if (!value.match(/(px|%|vw|vh|fr|em|rem|ch|ex|cm|mm|in|pt|pc)$/)) return
			this.changeContainerStyle('grid-column-gap', value)
		},
	},
  computed: {
    rectNum() {
      return this.rects.length
		},
		rowNum() {
			return this.rows.length
		},
		colNum() {
			return this.cols.length
		},
		htmlSnippet() {
			return (
				`<div class="container">\n`+
				Array(this.rectNum).fill('\t<div class="item"></div>').join('\n')+'\n'+
				`</div>`
			)
		},
		cssSnippet() {
			return (
				`.container {\n`+
				`\tdisplay: grid;\n`+
				`\tdisplay: -ms-grid;\n`+
				`\tgrid-template-rows: ${this.containerStyle['grid-template-rows']};\n`+
				`\tgrid-template-columns: ${this.containerStyle['grid-template-columns']};\n`+
				`\t-ms-grid-rows: ${this.containerStyle['grid-template-rows']};\n`+
				`\t-ms-grid-columns: ${this.containerStyle['grid-template-columns']};\n`+
				`\t/* IE does not support grid-row-gap and grid-column-gap */\n`+
				`\tgrid-row-gap: ${this.containerStyle['grid-row-gap']};\n`+
				`\tgrid-column-gap: ${this.containerStyle['grid-column-gap']};\n`+
				`\t/* Change the following styles accoding to your requirements */\n`+
				`\tbackground-color: #1B5E20;\n`+
				`\theight: 100vh;\n`+
				`\twidth: 100vw;\n`+
				`}\n`+
				`.item {\n`+
				`\tbackground-color: #aeea00;\n`+
				`}`
			)
		}
	},
};
</script>

<style>
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 100%;
}
.flex-row {
  display: flex;
  flex-direction: row;
}
.flex-col {
  display: flex;
  flex-direction: column;
}
</style>

<style scoped>
.container-wrapper {
  width: 100vw;
	height: 100%;
	min-height: 100vh;
  display: grid;
	grid-template-areas:
		". col-width-controller-panel"
		"row-height-controller-panel container"
		". controller-panel";
		grid-template-columns: auto 1fr;
		grid-template-rows: auto 1fr auto;
}
.row-height-controller-panel {
	grid-area: row-height-controller-panel;
	justify-content: space-around;
}
.col-width-controller-panel {
	grid-area: col-width-controller-panel;
	justify-content: space-around;
}
.container {
	grid-area: container;
  display: grid;
	margin: 0;
	width: 100%;
}
.controller-panel {
	grid-area: controller-panel;
}
.generate-btn {
	width: 100%;
	height: auto;
}

</style>
