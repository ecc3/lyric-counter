(this["webpackJsonplyric-counter"]=this["webpackJsonplyric-counter"]||[]).push([[0],{28:function(t,e,n){t.exports=n(50)},33:function(t,e,n){},38:function(t,e,n){},46:function(t,e){},50:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(13),i=n.n(r),s=(n(33),n(14)),l=n(15),c=n(24),u=n(16),d=n(25),m=function(t,e){fetch("http://musicbrainz.org/ws/2/artist/?query=artist:".concat(t,"%20&fmt=json")).then((function(t){return t.json()})).then((function(n){var a=n.artists[0].id;f(a,t,e)}))},f=function(t,e,n){fetch("http://musicbrainz.org/ws/2/work?artist=".concat(t,"&fmt=json&limit=50")).then((function(t){return t.json()})).then((function(t){h(t.works,e,n)}))},h=function(t,e,n){var a,o,r=0,i=t.length,s=0,l=[];t.forEach((function(t){fetch("https://orion.apiseeds.com/api/music/lyric/".concat(e,"/").concat(t.title,"?apikey=8bNBudkPyx6tcUQJ2dRUtPlUF6bwnRGPlrvnIZ4m5ySvJIziuLAP8o4TJ8uST2A7")).then((function(t){return t.json()})).then((function(t){var e=t.result.track.text.split(/\s/);l=l.concat(e);var c=e.length;if(r+=c,s++,o||(o=c,a=c),c<o&&(o=c),c>a&&(a=c),s===i){var u=(r/i).toFixed(0);n(u,o,a,l)}})).catch((function(t){if(i--,s===i){var e=(r/i).toFixed(0);n(e,o,a,l)}}))}))},p=n(17),g=n.n(p),v=function(){return o.a.createElement("div",{className:"loader"},o.a.createElement("h2",null,"LOADING"),o.a.createElement(g.a,null))},b=(n(38),n(23)),C=n(22),E={display:"flex",alignItems:"center",justifyContent:"center",border:"solid 1px #ddd",background:"#ffffff"},w={colors:["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b"],enableTooltip:!0,deterministic:!1,fontFamily:"Open Sans",fontSizes:[5,60],fontStyle:"normal",fontWeight:"normal",padding:1,rotations:3,rotationAngles:[0,90],scale:"sqrt",spiral:"archimedean",transitionDuration:1e3},S=function(t){var e=t.words.reduce((function(t,e){return(e=e.toLowerCase()).length>5&&!/,.:[\]]/.test(e)&&(t[e]?t[e]++:t[e]=1),t}),{}),n=[];for(var a in e)e[a]>0&&n.push({text:a,value:e[a]});return o.a.createElement(C.Resizable,{defaultSize:{width:600,height:300},style:E},o.a.createElement("div",{style:{width:"100%",height:"100%"}},o.a.createElement(b.a,{options:w,words:n})))},W=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(c.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={artist:"",averageWordCount:"",minWordCount:"",maxWordCount:"",allSongWords:[],isLoading:!1,showWordCloud:!1},n.handleChange=function(t){var e=t.target;""===e.value?n.setState({artist:"",averageWordCount:"",allSongWords:[]}):n.setState({artist:e.value})},n.handleSubmit=function(t){t.preventDefault(),n.setState({isLoading:!0}),m(n.state.artist,n.updateData)},n.updateData=function(t,e,a,o){n.setState({averageWordCount:t,minWordCount:e,maxWordCount:a,allSongWords:o,isLoading:!1})},n.handleClick=function(){n.setState((function(t){return n.setState({showWordCloud:!t.showWordCloud})}))},n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.state,e=t.artist,n=t.averageWordCount,a=t.isLoading,r=t.minWordCount,i=t.maxWordCount,s=t.allSongWords,l=t.showWordCloud;return o.a.createElement("main",{className:"main"},o.a.createElement("div",{className:"content"},o.a.createElement("form",{action:"",onSubmit:this.handleSubmit},"Artist name:"," ",o.a.createElement("input",{type:"text",name:"artist",value:e,onChange:this.handleChange,className:"submit"}),o.a.createElement("br",null),o.a.createElement("input",{type:"submit",value:"Submit",className:"submit"}),this.state.averageWordCount&&o.a.createElement("div",null,o.a.createElement("p",null,"Average words in songs by ",e,": ",n),o.a.createElement("p",null,"Maximum words across songs sampled: ",i),o.a.createElement("p",null,"Minimum words across songs sampled: ",r)),a&&o.a.createElement(v,null)),o.a.createElement("section",null,o.a.createElement("button",{onClick:this.handleClick,className:"submit"},"Show Word Cloud"),l&&!n&&o.a.createElement("p",null,"Please search for an artist"),l&&n&&o.a.createElement(S,{words:s}))))}}]),e}(a.Component);i.a.render(o.a.createElement(W,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.d501e9e0.chunk.js.map