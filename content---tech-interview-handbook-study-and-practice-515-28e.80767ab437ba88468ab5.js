(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{129:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=r.a.createContext({}),o=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},c=function(e){var t=o(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},s="mdxType",l={inlineCode:"code",wrapper:function(e){return r.a.createElement(r.a.Fragment,{},e.children)}},h=function(e){var t=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,c=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),s=o(t);return r.a.createElement(s[i+"."+a]||s[a]||l[a]||n,t?Object.assign({},c,{components:t}):c)};function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:n,o[1]=c;for(var u=2;u<i;u++)o[u]=a[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},78:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",function(){return o}),a.d(t,"rightToc",function(){return c}),a.d(t,"default",function(){return h});a(0);var n=a(129);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o={id:"study-and-practice",title:"Study and Practice"},c=[{value:"Recap CS Fundamentals",id:"recap-cs-fundamentals",children:[]},{value:"Mastery through practice",id:"mastery-through-practice",children:[{value:"Practice coding questions",id:"practice-coding-questions",children:[]},{value:"Space/time complexities",id:"spacetime-complexities",children:[]},{value:"Practice good coding style",id:"practice-good-coding-style",children:[]},{value:"Internalize the pitfalls",id:"internalize-the-pitfalls",children:[]},{value:"Broaden exposure",id:"broaden-exposure",children:[]}]}],s={rightToc:c},l="wrapper";function h(e){var t=e.components,a=i(e,["components"]);return Object(n.b)(l,r({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"recap-cs-fundamentals"})),Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#recap-cs-fundamentals"}),"#"),"Recap CS Fundamentals"),Object(n.b)("p",null,"If you have been out of college for a while, it is highly advisable to review CS fundamentals — Algorithms and Data Structures. Personally, I prefer to review as I practice, so I scan through my college notes and review the various algorithms as I work on algorithm problems from LeetCode and Cracking the Coding Interview."),Object(n.b)("p",null,"This ",Object(n.b)("a",r({parentName:"p"},{href:"https://github.com/kdn251/interviews"}),"interviews repository")," by Kevin Naughton Jr. served as a quick refresher for me."),Object(n.b)("p",null,"The Medium publication ",Object(n.b)("a",r({parentName:"p"},{href:"https://medium.com/basecs"}),"basecs")," by ",Object(n.b)("a",r({parentName:"p"},{href:"https://medium.com/@vaidehijoshi"}),"Vaidehi Joshi")," is also a great and light-hearted resource to recap on the various data structures and algorithms."),Object(n.b)("p",null,"If you are interested in how data structures are implemented, check out ",Object(n.b)("a",r({parentName:"p"},{href:"https://github.com/yangshun/lago"}),"Lago"),", a Data Structures and Algorithms library for JavaScript. It is pretty much still WIP but I intend to make it into a library that is able to be used in production and also a reference resource for revising Data Structures and Algorithms."),Object(n.b)("h2",null,Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"mastery-through-practice"})),Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#mastery-through-practice"}),"#"),"Mastery through practice"),Object(n.b)("p",null,"Next, gain familiarity and mastery of the algorithms and data structures in your chosen programming language."),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"practice-coding-questions"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#practice-coding-questions"}),"#"),"Practice coding questions"),Object(n.b)("p",null,"Practice coding algorithms using your chosen language. While ",Object(n.b)("a",r({parentName:"p"},{href:"http://www.crackingthecodinginterview.com/"}),"Cracking the Coding Interview")," is a good resource for practice, I prefer being able to type code, run it and get instant feedback. There are various Online Judges such as ",Object(n.b)("a",r({parentName:"p"},{href:"https://leetcode.com/"}),"LeetCode"),", ",Object(n.b)("a",r({parentName:"p"},{href:"https://www.hackerrank.com/"}),"HackerRank")," and ",Object(n.b)("a",r({parentName:"p"},{href:"http://codeforces.com/"}),"CodeForces")," for you to practice questions online and get used to the language. From experience, LeetCode questions are the most similar to the kind of questions being asked in interviews whereas HackerRank and CodeForces questions resemble competitive programming questions. If you practice enough LeetCode questions, there is a good chance that you would have seen/done your actual interview question (or some variant) on LeetCode before. If you are more of a visual person, ",Object(n.b)("a",r({parentName:"p"},{href:"https://www.educative.io/collection/5642554087309312/5679846214598656"}),"Coderust")," explains the common algorithm questions through step-by-step visualizations which makes understanding the solutions much easier."),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"spacetime-complexities"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#spacetime-complexities"}),"#"),"Space/time complexities"),Object(n.b)("p",null,"Learn and understand the time and space complexities of the common operations in your chosen language. For Python, this ",Object(n.b)("a",r({parentName:"p"},{href:"https://wiki.python.org/moin/TimeComplexity"}),"page")," will come in handy. Also find out the underlying sorting algorithm that is being used in the language's ",Object(n.b)("inlineCode",{parentName:"p"},"sort()")," function and its time and space complexity (in Python its Timsort which is a hybrid sort). After completing a question on LeetCode, I usually add the time and space complexities of the written code as comments above the function body to remind myself to analyze the algorithm after I am done with the implementation."),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"practice-good-coding-style"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#practice-good-coding-style"}),"#"),"Practice good coding style"),Object(n.b)("p",null,"Read up on the recommended coding style for your language and stick to it. If you have chosen Python, refer to the PEP 8 Style Guide. If you have chosen Java, refer to Google's Java Style Guide."),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"internalize-the-pitfalls"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#internalize-the-pitfalls"}),"#"),"Internalize the pitfalls"),Object(n.b)("p",null,"Find out and be familiar with the common pitfalls and caveats of the language. If you point them out during the interview and intelligently avoid falling into them, you will usually impress the interviewer and that results in bonus points for your feedback, regardless of whether the interviewer is familiar with the language or not."),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"broaden-exposure"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#broaden-exposure"}),"#"),"Broaden exposure"),Object(n.b)("p",null,"Gain a broad exposure to questions from various topics. In the second half of the article I mention algorithm topics and practice questions for each topic. Do around 100–200 LeetCode questions and you should be good."),Object(n.b)("p",null,"Practice, practice and more practice!"))}h.isMDXComponent=!0}}]);