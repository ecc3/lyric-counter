(this["webpackJsonplyric-counter"]=this["webpackJsonplyric-counter"]||[]).push([[0],{28:function(t,e,n){t.exports=n(50)},33:function(t,e,n){},38:function(t,e,n){},46:function(t,e){},50:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(13),i=n.n(o),s=(n(33),n(14)),l=n(15),c=n(24),u=n(16),d=n(25),m=function(t,e){fetch("https://musicbrainz.org/ws/2/artist/?query=artist:".concat(t,"%20&fmt=json")).then((function(t){return t.json()})).then((function(n){var a=n.artists[0].id;f(a,t,e)})).catch((function(t){e("","","",[],!0)}))},f=function(t,e,n){fetch("https://musicbrainz.org/ws/2/work?artist=".concat(t,"&fmt=json&limit=100")).then((function(t){return t.json()})).then((function(t){h(t.works,e,n)})).catch((function(t){n("","","",[],!0)}))},h=function(t,e,n){if(0===t.length)return n("","","",[],!0);var a,r,o=0,i=t.length,s=0,l=[];t.forEach((function(t){fetch("https://api.lyrics.ovh/v1/".concat(e,"/").concat(t.title)).then((function(t){return t.json()})).then((function(t){var e=t.lyrics.split(/\s/);l=l.concat(e);var c=e.length;if(o+=c,s++,r||(r=c,a=c),c<r&&(r=c),c>a&&(a=c),s===i){var u=(o/i).toFixed(0);n(u,r,a,l)}})).catch((function(t){if(i--,s===i){var e=(o/i).toFixed(0);n(e,r,a,l)}}))}))},g=n(17),p=n.n(g),v=function(){return r.a.createElement("div",{className:"loader"},r.a.createElement("h2",null,"LOADING"),r.a.createElement(p.a,null))},E=(n(38),n(23)),b=n(22),C={display:"flex",alignItems:"center",justifyContent:"center",border:"solid 1px #ddd",background:"#ffffff"},w={colors:["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b"],enableTooltip:!0,deterministic:!1,fontFamily:"Open Sans",fontSizes:[5,60],fontStyle:"normal",fontWeight:"normal",padding:1,rotations:3,rotationAngles:[0,90],scale:"sqrt",spiral:"archimedean",transitionDuration:1e3},W=function(t){var e=t.words.reduce((function(t,e){return/[\w]+/.test(e)&&e.length>5&&(t[e=e.toLowerCase().match(/[\w']+/)[0]]?t[e]++:t[e]=1),t}),{}),n=[];for(var a in e)n.push({text:a,value:e[a]});return r.a.createElement(b.Resizable,{defaultSize:{width:600,height:300},style:C},r.a.createElement("div",{style:{width:"100%",height:"100%"}},r.a.createElement(E.a,{options:w,words:n})))},y=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={artist:"",averageWordCount:"",minWordCount:"",maxWordCount:"",allSongWords:[],artistError:!1,isLoading:!1,showWordCloud:!1},n.handleChange=function(t){var e=t.target;""===e.value?n.setState({artist:"",averageWordCount:"",allSongWords:[]}):n.setState({artist:e.value,averageWordCount:""})},n.handleSubmit=function(t){t.preventDefault(),n.setState({isLoading:!0}),m(n.state.artist,n.updateData)},n.updateData=function(t,e,a,r,o){n.setState({averageWordCount:t,minWordCount:e,maxWordCount:a,allSongWords:r,artistError:o,isLoading:!1})},n.handleClick=function(){n.setState((function(t){return{showWordCloud:!t.showWordCloud}}))},n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.state,e=t.artist,n=t.averageWordCount,a=t.isLoading,o=t.minWordCount,i=t.maxWordCount,s=t.allSongWords,l=t.showWordCloud,c=t.artistError;return r.a.createElement("main",{className:"main"},r.a.createElement("div",{className:"content"},r.a.createElement("form",{action:"",onSubmit:this.handleSubmit},"Artist name:"," ",r.a.createElement("input",{type:"text",name:"artist",value:e,onChange:this.handleChange,className:"submit"}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Submit",className:"submit"}),(isNaN(n)||c)&&r.a.createElement("p",null,"Not found. Please search for a different artist."),n&&!isNaN(n)&&r.a.createElement("div",null,r.a.createElement("p",null,"Average words in songs by ",e,": ",n),r.a.createElement("p",null,"Maximum words across songs sampled: ",i),r.a.createElement("p",null,"Minimum words across songs sampled: ",o)),a&&r.a.createElement(v,null)),r.a.createElement("section",null,r.a.createElement("button",{onClick:this.handleClick,className:"submit"},l&&"Hide Word Cloud",!l&&"Show Word Cloud"),l&&!n&&r.a.createElement("p",null,"Please search for an artist"),l&&n&&r.a.createElement(W,{words:s}))))}}]),e}(a.Component);i.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.f0f11856.chunk.js.map