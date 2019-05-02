(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(9),o=n.n(r),s=n(1),u=n(2),c=n(4),d=n(3),l=n(6),p=n(5),h=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"editor-div"},i.a.createElement("div",{className:"toolbar"},"Editor"),i.a.createElement("textarea",{id:"editor",value:this.props.input,onChange:this.props.updateInput}))}}]),t}(a.Component),m=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"previewer-div"},i.a.createElement("div",{className:"toolbar"},"Previewer"),i.a.createElement("div",{id:"preview",dangerouslySetInnerHTML:this.props.markDown}))}}]),t}(a.Component),b="# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want!\n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)",f=n(15);f.setOptions({gfm:!0,breaks:!0});var w=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={input:b,markDown:{__html:f(b)}},n.updateMarkDown=n.updateMarkDown.bind(Object(l.a)(n)),n.updateInput=n.updateInput.bind(Object(l.a)(n)),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"updateMarkDown",value:function(){this.setState({markDown:{__html:f(this.state.input)}})}},{key:"updateInput",value:function(e){this.setState({input:e.target.value})}},{key:"componentDidUpdate",value:function(e,t){t.input!==this.state.input&&this.updateMarkDown()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{id:"title"},"Markdown Previewer"),i.a.createElement("div",{id:"main",className:"container-fluid"},i.a.createElement(h,{input:this.state.input,updateInput:this.updateInput}),i.a.createElement(m,{markDown:this.state.markDown})," }"))}}]),t}(a.Component);n(16);o.a.render(i.a.createElement(w,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.4be8f20d.chunk.js.map