webpackJsonp([1],{0:function(t,e,n){t.exports=n("NHnr")},C0ne:function(t,e){},M82k:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("/5sW"),r=(n("No4x"),n("MfeA"),n("mJx5"),{props:{label:{type:String,default:""},count:{type:Number,default:0}},methods:{incrementClicked:function(){this.$emit("increment")},decrementClicked:function(){this.$emit("decrement")}}}),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"controller"},[n("span",{staticClass:"controller__label flex-center"},[t._v("\n    "+t._s(t.label)+"\n  ")]),t._v(" "),n("button",{staticClass:"controller__decrement-btn flex-center blue waves-effect waves-light",on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.decrementClicked(e)}}},[t._v("\n    −\n  ")]),t._v(" "),n("span",{staticClass:"controller__counter flex-center"},[t._v("\n    "+t._s(t.count)+"\n  ")]),t._v(" "),n("button",{staticClass:"controller__increment-btn flex-center blue waves-effect waves-light",on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.incrementClicked(e)}}},[t._v("\n    +\n  ")])])},o=[],l=n("XyMi");function c(t){n("C0ne")}var s=!1,d=c,u="data-v-00a1ec16",p=null,h=Object(l["a"])(r,a,o,s,d,u,p),m=h.exports,f={props:{value:{type:String,default:""},label:{type:String,default:""},id:{type:String,default:""},placeholder:{type:String,default:""}},methods:{updateValue:function(t){this.$emit("input",t)},valueChanged:function(t){this.$emit("change",t)}}},v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"controller"},[n("span",{staticClass:"controller__label flex-center"},[t._v("\n      "+t._s(t.label)+"\n    ")]),t._v(" "),n("div",{staticClass:"input-field flex-center"},[n("input",{staticClass:"center-align",attrs:{id:t.id,placeholder:t.placeholder,type:"text"},domProps:{value:t.value},on:{input:function(e){t.updateValue(e.target.value)},change:function(e){t.valueChanged(e.target.value)}}}),t._v(" "),n("label",{staticClass:"hide",attrs:{for:t.id}},[t._v("\n\t\t\t\t"+t._s(t.label)+"\n\t\t\t")])])])},g=[];function w(t){n("cC2F")}var _=!1,y=w,C="data-v-715347e9",b=null,S=Object(l["a"])(f,v,g,_,y,C,b),x=S.exports,G={props:{rect:{type:Object,default:function(){return{}}},inputDisabled:{type:Boolean,default:!1}},methods:{updateHeight:function(t){this.$emit("height",t)},updateWidth:function(t){this.$emit("width",t)}}},k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-center lime accent-4"},[t.inputDisabled?t._e():n("div",{staticClass:"flex-col"},[n("div",{staticClass:"input-field"},[n("input",{staticClass:"validate",attrs:{placeholder:"Set height",id:"rect.id+'-height'",type:"text"},domProps:{value:t.rect.style.height},on:{input:function(e){t.updateHeight(e.target.value)}}}),t._v(" "),n("label",{staticClass:"active",attrs:{for:"rect.id+'-height'"}},[t._v("\n\t\t\t\tHeight\n\t\t\t")])]),t._v(" "),n("div",{staticClass:"input-field"},[n("input",{staticClass:"validate",attrs:{placeholder:"Set width",id:"rect.id+'-width'",type:"text"},domProps:{value:t.rect.style.width},on:{input:function(e){t.updateWidth(e.target.value)}}}),t._v(" "),n("label",{staticClass:"active",attrs:{for:"rect.id+'-width'"}},[t._v("\n\t\t\t\tWidth\n\t\t\t")])])])])},N=[],W=!1,j=null,I=null,E=null,P=Object(l["a"])(G,k,N,W,j,I,E),O=P.exports,D={components:{GridGeneratorStyleController:m,GridGeneratorRect:O,GridGeneratorStyleInput:x},data:function(){return{containerStyle:{"grid-template-rows":"","grid-template-columns":""},rowGapWidth:"",colGapWidth:"",rows:[],cols:[],rects:[]}},methods:{add:function(t){"rect"===t?this.rects.push({style:{width:"1fr",height:"1fr"}}):"row"===t?this.rows.push("1fr"):"col"===t&&this.cols.push("1fr"),this.changeContainerStyle()},remove:function(t){0!==this["".concat(t,"Num")]&&(this["".concat(t,"s")]=this["".concat(t,"s")].slice(0,-1),this.changeContainerStyle())},changeContainerStyle:function(t,e){if(t)console.log(t),console.log(e),this.containerStyle[t]=e,this.$forceUpdate();else{if(this.rowNum>0){for(var n=this.containerStyle["grid-template-rows"].split(" "),i=0;i<this.rowNum-n.length+1;i++)n.push("1fr");this.containerStyle["grid-template-rows"]=n.join(" ")}if(this.colNum>0){for(var r=this.containerStyle["grid-template-columns"].split(" "),a=0;a<this.colNum-r.length+1;a++)r.push("1fr");this.containerStyle["grid-template-columns"]=r.join(" ")}}}},mounted:function(){$(document).ready(function(){$(".modal").modal()});for(var t=0;t<9;t++)this.add("rect");for(var e=0;e<3;e++)this.add("row");for(var n=0;n<3;n++)this.add("col");this.rowGapWidth="5px",this.colGapWidth="5px"},watch:{rowGapWidth:function(t){t.match(/(px|%|vw|vh|fr|em|rem|ch|ex|cm|mm|in|pt|pc)$/)&&this.changeContainerStyle("grid-row-gap",t)},colGapWidth:function(t){t.match(/(px|%|vw|vh|fr|em|rem|ch|ex|cm|mm|in|pt|pc)$/)&&this.changeContainerStyle("grid-column-gap",t)}},computed:{rectNum:function(){return this.rects.length},rowNum:function(){return this.rows.length},colNum:function(){return this.cols.length},htmlSnippet:function(){return'<div class="container">\n'+Array(this.rectNum).fill('\t<div class="item"></div>').join("\n")+"\n</div>"},cssSnippet:function(){return".container {\n\tdisplay: grid;\n\tdisplay: -ms-grid;\n"+"\tgrid-template-rows: ".concat(this.containerStyle["grid-template-rows"],";\n")+"\tgrid-template-columns: ".concat(this.containerStyle["grid-template-columns"],";\n")+"\t-ms-grid-rows: ".concat(this.containerStyle["grid-template-rows"],";\n")+"\t-ms-grid-columns: ".concat(this.containerStyle["grid-template-columns"],";\n")+"\t/* IE does not support grid-row-gap and grid-column-gap */\n"+"\tgrid-row-gap: ".concat(this.containerStyle["grid-row-gap"],";\n")+"\tgrid-column-gap: ".concat(this.containerStyle["grid-column-gap"],";\n")+"\t/* Change the following styles accoding to your requirements */\n\tbackground-color: #1B5E20;\n\theight: 100vh;\n\twidth: 100vw;\n}\n.item {\n\tbackground-color: #aeea00;\n}"}}},H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container-wrapper"},[n("div",{staticClass:"col-width-controller-panel flex-row"},t._l(t.cols,function(e,i){return n("GridGeneratorStyleInput",{key:"col-width-"+i,staticClass:"col-width-controller",attrs:{id:"col-width-"+i,label:"Col width"},on:{change:function(e){e.match(/(px|%|vw|vh|fr|em|rem|ch|ex|cm|mm|in|pt|pc)$/)&&t.changeContainerStyle("grid-template-columns",t.cols.join(" "))}},model:{value:t.cols[i],callback:function(e){t.$set(t.cols,i,e)},expression:"cols[colIndex]"}})})),t._v(" "),n("div",{staticClass:"row-height-controller-panel flex-col"},t._l(t.rows,function(e,i){return n("GridGeneratorStyleInput",{key:"row-height-"+i,staticClass:"row-height-controller",attrs:{id:"row-height-"+i,label:"Row height"},on:{change:function(e){e.match(/(px|%|vw|vh|fr|em|rem|ch|ex|cm|mm|in|pt|pc)$/)&&t.changeContainerStyle("grid-template-rows",t.rows.join(" "))}},model:{value:t.rows[i],callback:function(e){t.$set(t.rows,i,e)},expression:"rows[rowIndex]"}})})),t._v(" "),n("div",{staticClass:"container green darken-4",style:t.containerStyle},t._l(t.rects,function(e,i){return n("GridGeneratorRect",{key:"child-"+i,attrs:{rect:e,inputDisabled:!0},on:{height:function(e){t.rectStyleChanged(i,"height",e)},width:function(e){t.rectStyleChanged(i,"width",e)}}})})),t._v(" "),n("div",{staticClass:"controller-panel flex-row"},[n("GridGeneratorStyleController",{attrs:{label:"Grid Item",count:t.rectNum},on:{increment:function(e){t.add("rect")},decrement:function(e){t.remove("rect")}}}),t._v(" "),n("GridGeneratorStyleController",{attrs:{label:"Row",count:t.rowNum},on:{increment:function(e){t.add("row")},decrement:function(e){t.remove("row")}}}),t._v(" "),n("GridGeneratorStyleController",{attrs:{label:"Col",count:t.colNum},on:{increment:function(e){t.add("col")},decrement:function(e){t.remove("col")}}}),t._v(" "),n("GridGeneratorStyleInput",{attrs:{id:"row-height",label:"Row Gap Width"},model:{value:t.rowGapWidth,callback:function(e){t.rowGapWidth=e},expression:"rowGapWidth"}}),t._v(" "),n("GridGeneratorStyleInput",{attrs:{id:"col-width",label:"Col Gap Width"},model:{value:t.colGapWidth,callback:function(e){t.colGapWidth=e},expression:"colGapWidth"}}),t._v(" "),n("button",{staticClass:"btn btn-large generate-btn teal darken-4 modal-trigger",attrs:{"data-target":"snippet-modal"}},[t._v("Generate CSS")])],1)]),t._v(" "),n("div",{staticClass:"modal",attrs:{id:"snippet-modal"}},[n("div",{staticClass:"modal-content"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.htmlSnippet,expression:"htmlSnippet"}],staticStyle:{cursor:"-webkit-grab","white-space":"pre-wrap",height:"auto"},attrs:{readonly:"",onfocus:"this.select();",rows:t.rectNum+2},domProps:{value:t.htmlSnippet},on:{input:function(e){e.target.composing||(t.htmlSnippet=e.target.value)}}}),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.cssSnippet,expression:"cssSnippet"}],staticStyle:{cursor:"-webkit-grab","white-space":"pre-wrap",height:"auto"},attrs:{readonly:"",onfocus:"this.select();",rows:"18"},domProps:{value:t.cssSnippet},on:{input:function(e){e.target.composing||(t.cssSnippet=e.target.value)}}})]),t._v(" "),t._m(0)])])},M=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"modal-action modal-close waves-effect waves-green btn-flat"},[t._v("Close")])])}];function R(t){n("M82k"),n("bo54")}var A=!1,B=R,F="data-v-09cda074",J=null,V=Object(l["a"])(D,H,M,A,B,F,J),q=V.exports,T={name:"app",components:{GridGenerator:q}},U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("GridGenerator")],1)},X=[],z=!1,K=null,L=null,Q=null,Y=Object(l["a"])(T,U,X,z,K,L,Q),Z=Y.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(Z)}}).$mount("#app")},bo54:function(t,e){},cC2F:function(t,e){}},[0]);
//# sourceMappingURL=app.76f28d0d.js.map