class T{constructor(e){this.properties=e??[]}get(e){const t=this.properties.filter(n=>n.name===e).map(n=>n.value);if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(t.length!==0)return t[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,t){const n=this.get(e);if(n!==void 0){if(t!=="json"&&typeof n!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return n}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,t){const n=this.get(e);if(n===void 0)throw new Error('Property "'+e+'" is missing');if(t!=="json"&&typeof n!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return n}getType(e){const t=this.properties.filter(n=>n.name===e).map(n=>n.type);if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(t.length!==0)return t[0]}}const U="https://unpkg.com/@workadventure/scripting-api-extra@1.4.6/dist";class ne{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new T(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function q(r){const e=r?"#"+r.join():"";WA.nav.openCoWebSite(U+"/configuration.html"+e)}async function oe(r,e){const t=await WA.room.getTiledMap(),n=new Map;return Y(t.layers,n,r,e),n}function Y(r,e,t,n){for(const o of r)if(o.type==="objectgroup"){for(const s of o.objects)if(s.type==="variable"||s.class==="variable"){if(t&&o.name!==t||n&&!n.includes(s.name))continue;e.set(s.name,new ne(s))}}else o.type==="group"&&Y(o.layers,e,t,n)}let j;async function P(){return j===void 0&&(j=se()),j}async function se(){return ae(await WA.room.getTiledMap())}function ae(r){const e=new Map;return J(r.layers,"",e),e}function J(r,e,t){for(const n of r)n.type==="group"?J(n.layers,e+n.name+"/",t):(n.name=e+n.name,t.set(n.name,n))}async function ie(){const r=await P(),e=[];for(const t of r.values())if(t.type==="objectgroup")for(const n of t.objects)(n.type==="area"||n.class==="area")&&e.push(n);return e}function ue(r){let e=1/0,t=1/0,n=0,o=0;const s=r.data;if(typeof s=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let a=0;a<r.height;a++)for(let i=0;i<r.width;i++)s[i+a*r.width]!==0&&(e=Math.min(e,i),o=Math.max(o,i),t=Math.min(t,a),n=Math.max(n,a));return{top:t,left:e,right:o+1,bottom:n+1}}function Q(r){let e=1/0,t=1/0,n=0,o=0;for(const s of r){const a=ue(s);a.left<e&&(e=a.left),a.top<t&&(t=a.top),a.right>o&&(o=a.right),a.bottom>n&&(n=a.bottom)}return{top:t,left:e,right:o,bottom:n}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var ce=Object.prototype.toString,S=Array.isArray||function(e){return ce.call(e)==="[object Array]"};function O(r){return typeof r=="function"}function le(r){return S(r)?"array":typeof r}function I(r){return r.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function K(r,e){return r!=null&&typeof r=="object"&&e in r}function pe(r,e){return r!=null&&typeof r!="object"&&r.hasOwnProperty&&r.hasOwnProperty(e)}var fe=RegExp.prototype.test;function de(r,e){return fe.call(r,e)}var ge=/\S/;function he(r){return!de(ge,r)}var ye={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function me(r){return String(r).replace(/[&<>"'`=\/]/g,function(t){return ye[t]})}var ve=/\s*/,be=/\s+/,N=/\s*=/,Ae=/\s*\}/,We=/#|\^|\/|>|\{|&|=|!/;function we(r,e){if(!r)return[];var t=!1,n=[],o=[],s=[],a=!1,i=!1,u="",l=0;function p(){if(a&&!i)for(;s.length;)delete o[s.pop()];else s=[];a=!1,i=!1}var h,v,k;function L(A){if(typeof A=="string"&&(A=A.split(be,2)),!S(A)||A.length!==2)throw new Error("Invalid tags: "+A);h=new RegExp(I(A[0])+"\\s*"),v=new RegExp("\\s*"+I(A[1])),k=new RegExp("\\s*"+I("}"+A[1]))}L(e||g.tags);for(var c=new E(r),b,d,y,C,R,W;!c.eos();){if(b=c.pos,y=c.scanUntil(h),y)for(var x=0,re=y.length;x<re;++x)C=y.charAt(x),he(C)?(s.push(o.length),u+=C):(i=!0,t=!0,u+=" "),o.push(["text",C,b,b+1]),b+=1,C===`
`&&(p(),u="",l=0,t=!1);if(!c.scan(h))break;if(a=!0,d=c.scan(We)||"name",c.scan(ve),d==="="?(y=c.scanUntil(N),c.scan(N),c.scanUntil(v)):d==="{"?(y=c.scanUntil(k),c.scan(Ae),c.scanUntil(v),d="&"):y=c.scanUntil(v),!c.scan(v))throw new Error("Unclosed tag at "+c.pos);if(d==">"?R=[d,y,b,c.pos,u,l,t]:R=[d,y,b,c.pos],l++,o.push(R),d==="#"||d==="^")n.push(R);else if(d==="/"){if(W=n.pop(),!W)throw new Error('Unopened section "'+y+'" at '+b);if(W[1]!==y)throw new Error('Unclosed section "'+W[1]+'" at '+b)}else d==="name"||d==="{"||d==="&"?i=!0:d==="="&&L(y)}if(p(),W=n.pop(),W)throw new Error('Unclosed section "'+W[1]+'" at '+c.pos);return Le(Se(o))}function Se(r){for(var e=[],t,n,o=0,s=r.length;o<s;++o)t=r[o],t&&(t[0]==="text"&&n&&n[0]==="text"?(n[1]+=t[1],n[3]=t[3]):(e.push(t),n=t));return e}function Le(r){for(var e=[],t=e,n=[],o,s,a=0,i=r.length;a<i;++a)switch(o=r[a],o[0]){case"#":case"^":t.push(o),n.push(o),t=o[4]=[];break;case"/":s=n.pop(),s[5]=o[2],t=n.length>0?n[n.length-1][4]:e;break;default:t.push(o)}return e}function E(r){this.string=r,this.tail=r,this.pos=0}E.prototype.eos=function(){return this.tail===""};E.prototype.scan=function(e){var t=this.tail.match(e);if(!t||t.index!==0)return"";var n=t[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n};E.prototype.scanUntil=function(e){var t=this.tail.search(e),n;switch(t){case-1:n=this.tail,this.tail="";break;case 0:n="";break;default:n=this.tail.substring(0,t),this.tail=this.tail.substring(t)}return this.pos+=n.length,n};function w(r,e){this.view=r,this.cache={".":this.view},this.parent=e}w.prototype.push=function(e){return new w(e,this)};w.prototype.lookup=function(e){var t=this.cache,n;if(t.hasOwnProperty(e))n=t[e];else{for(var o=this,s,a,i,u=!1;o;){if(e.indexOf(".")>0)for(s=o.view,a=e.split("."),i=0;s!=null&&i<a.length;)i===a.length-1&&(u=K(s,a[i])||pe(s,a[i])),s=s[a[i++]];else s=o.view[e],u=K(o.view,e);if(u){n=s;break}o=o.parent}t[e]=n}return O(n)&&(n=n.call(this.view)),n};function f(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}f.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};f.prototype.parse=function(e,t){var n=this.templateCache,o=e+":"+(t||g.tags).join(":"),s=typeof n<"u",a=s?n.get(o):void 0;return a==null&&(a=we(e,t),s&&n.set(o,a)),a};f.prototype.render=function(e,t,n,o){var s=this.getConfigTags(o),a=this.parse(e,s),i=t instanceof w?t:new w(t,void 0);return this.renderTokens(a,i,n,e,o)};f.prototype.renderTokens=function(e,t,n,o,s){for(var a="",i,u,l,p=0,h=e.length;p<h;++p)l=void 0,i=e[p],u=i[0],u==="#"?l=this.renderSection(i,t,n,o,s):u==="^"?l=this.renderInverted(i,t,n,o,s):u===">"?l=this.renderPartial(i,t,n,s):u==="&"?l=this.unescapedValue(i,t):u==="name"?l=this.escapedValue(i,t,s):u==="text"&&(l=this.rawValue(i)),l!==void 0&&(a+=l);return a};f.prototype.renderSection=function(e,t,n,o,s){var a=this,i="",u=t.lookup(e[1]);function l(v){return a.render(v,t,n,s)}if(u){if(S(u))for(var p=0,h=u.length;p<h;++p)i+=this.renderTokens(e[4],t.push(u[p]),n,o,s);else if(typeof u=="object"||typeof u=="string"||typeof u=="number")i+=this.renderTokens(e[4],t.push(u),n,o,s);else if(O(u)){if(typeof o!="string")throw new Error("Cannot use higher-order sections without the original template");u=u.call(t.view,o.slice(e[3],e[5]),l),u!=null&&(i+=u)}else i+=this.renderTokens(e[4],t,n,o,s);return i}};f.prototype.renderInverted=function(e,t,n,o,s){var a=t.lookup(e[1]);if(!a||S(a)&&a.length===0)return this.renderTokens(e[4],t,n,o,s)};f.prototype.indentPartial=function(e,t,n){for(var o=t.replace(/[^ \t]/g,""),s=e.split(`
`),a=0;a<s.length;a++)s[a].length&&(a>0||!n)&&(s[a]=o+s[a]);return s.join(`
`)};f.prototype.renderPartial=function(e,t,n,o){if(n){var s=this.getConfigTags(o),a=O(n)?n(e[1]):n[e[1]];if(a!=null){var i=e[6],u=e[5],l=e[4],p=a;u==0&&l&&(p=this.indentPartial(a,l,i));var h=this.parse(p,s);return this.renderTokens(h,t,n,p,o)}}};f.prototype.unescapedValue=function(e,t){var n=t.lookup(e[1]);if(n!=null)return n};f.prototype.escapedValue=function(e,t,n){var o=this.getConfigEscape(n)||g.escape,s=t.lookup(e[1]);if(s!=null)return typeof s=="number"&&o===g.escape?String(s):o(s)};f.prototype.rawValue=function(e){return e[1]};f.prototype.getConfigTags=function(e){return S(e)?e:e&&typeof e=="object"?e.tags:void 0};f.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!S(e))return e.escape};var g={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(r){M.templateCache=r},get templateCache(){return M.templateCache}},M=new f;g.clearCache=function(){return M.clearCache()};g.parse=function(e,t){return M.parse(e,t)};g.render=function(e,t,n,o){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+le(e)+'" was given as the first argument for mustache#render(template, view, partials)');return M.render(e,t,n,o)};g.escape=me;g.Scanner=E;g.Context=w;g.Writer=f;class F{constructor(e,t){this.template=e,this.state=t,this.ast=g.parse(e)}getValue(){return this.value===void 0&&(this.value=g.render(this.template,this.state)),this.value}onChange(e){const t=[];for(const n of this.getUsedVariables().values())t.push(this.state.onVariableChange(n).subscribe(()=>{const o=g.render(this.template,this.state);o!==this.value&&(this.value=o,e(this.value))}));return{unsubscribe:()=>{for(const n of t)n.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,t){for(const n of e){const o=n[0],s=n[1],a=n[4];["name","&","#","^"].includes(o)&&t.add(s),a!==void 0&&typeof a!="string"&&this.recursiveGetUsedVariables(a,t)}}}async function Ce(){var r;const e=await ie();for(const t of e){const n=(r=t.properties)!==null&&r!==void 0?r:[];for(const o of n){if(o.type==="int"||o.type==="bool"||o.type==="object"||typeof o.value!="string")continue;const s=new F(o.value,WA.state);if(s.isPureString())continue;const a=s.getValue();await $(t.name,o.name,a),s.onChange(async i=>{await $(t.name,o.name,i)})}}}async function Te(){var r;const e=await P();for(const[t,n]of e.entries())if(n.type!=="objectgroup"){const o=(r=n.properties)!==null&&r!==void 0?r:[];for(const s of o){if(s.type==="int"||s.type==="bool"||s.type==="object"||typeof s.value!="string")continue;const a=new F(s.value,WA.state);if(a.isPureString())continue;const i=a.getValue();H(t,s.name,i),a.onChange(u=>{H(t,s.name,u)})}}}async function $(r,e,t){console.log(r),(await WA.room.area.get(r)).setProperty(e,t)}function H(r,e,t){WA.room.setProperty(r,e,t),e==="visible"&&(t?WA.room.showLayer(r):WA.room.hideLayer(r))}let z,D=0,_=0;function Z(r){if(WA.state[r.name]){let e=r.properties.mustGetString("openLayer");for(const t of e.split(`
`))WA.room.showLayer(t);e=r.properties.mustGetString("closeLayer");for(const t of e.split(`
`))WA.room.hideLayer(t)}else{let e=r.properties.mustGetString("openLayer");for(const t of e.split(`
`))WA.room.hideLayer(t);e=r.properties.mustGetString("closeLayer");for(const t of e.split(`
`))WA.room.showLayer(t)}}function Me(r){const e=r.properties.getString("openSound"),t=r.properties.getNumber("soundRadius");let n=1;if(t){const o=te(r.properties.mustGetString("openLayer").split(`
`));if(o>t)return;n=1-o/t}e&&WA.sound.loadSound(e).play({volume:n})}function Pe(r){const e=r.properties.getString("closeSound"),t=r.properties.getNumber("soundRadius");let n=1;if(t){const o=te(r.properties.mustGetString("closeLayer").split(`
`));if(o>t)return;n=1-o/t}e&&WA.sound.loadSound(e).play({volume:n})}function ee(r){return r.map(e=>z.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function te(r){const e=ee(r),t=Q(e),n=((t.right-t.left)/2+t.left)*32,o=((t.bottom-t.top)/2+t.top)*32;return Math.sqrt(Math.pow(D-n,2)+Math.pow(_-o,2))}function Ee(r){WA.state.onVariableChange(r.name).subscribe(()=>{WA.state[r.name]?Me(r):Pe(r),Z(r)}),Z(r)}function ke(r,e,t,n){const o=r.name;let s,a,i=!1;const u=t.getString("tag");let l=!0;u&&!WA.player.tags.includes(u)&&(l=!1);const p=!!u;function h(){var c;s&&s.remove(),s=WA.ui.displayActionMessage({message:(c=t.getString("closeTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,v()}})}function v(){var c;s&&s.remove(),s=WA.ui.displayActionMessage({message:(c=t.getString("openTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,h()}})}function k(c){const b=Q(ee(e.properties.mustGetString("closeLayer").split(`
`)));a=WA.room.website.create({name:"doorKeypad"+c,url:n+"/keypad.html#"+encodeURIComponent(c),position:{x:b.right*32,y:b.top*32,width:32*3,height:32*4},allowApi:!0})}function L(){a&&(WA.room.website.delete(a.name),a=void 0)}WA.room.onEnterLayer(o).subscribe(()=>{if(i=!0,t.getBoolean("autoOpen")&&l){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(p&&!l||!p)&&(t.getString("code")||t.getString("codeVariable"))){k(o);return}l&&(WA.state[e.name]?h():v())}),WA.room.onLeaveLayer(o).subscribe(()=>{i=!1,t.getBoolean("autoClose")&&(WA.state[e.name]=!1),s&&s.remove(),L()}),WA.state.onVariableChange(e.name).subscribe(()=>{i&&(!t.getBoolean("autoClose")&&WA.state[e.name]===!0&&h(),a&&WA.state[e.name]===!0&&L(),!t.getBoolean("autoOpen")&&WA.state[e.name]===!1&&v())})}function Re(r){const e=r.properties.mustGetString("bellSound"),t=r.properties.getNumber("soundRadius");let n=1;if(t){const o=Math.sqrt(Math.pow(r.x-D,2)+Math.pow(r.y-_,2));if(o>t)return;n=1-o/t}WA.sound.loadSound(e).play({volume:n})}function Be(r){WA.state[r.name]===void 0&&(WA.state[r.name]=0),WA.state.onVariableChange(r.name).subscribe(()=>{WA.state[r.name]&&Re(r)})}function Ge(r,e,t){let n;const o=e.getString("bellPopup");WA.room.onEnterLayer(t).subscribe(()=>{var s;o?n=WA.ui.openPopup(o,"",[{label:(s=e.getString("bellButtonText"))!==null&&s!==void 0?s:"Ring",callback:()=>{WA.state[r]=WA.state[r]+1}}]):WA.state[r]=WA.state[r]+1}),WA.room.onLeaveLayer(t).subscribe(()=>{n&&(n.close(),n=void 0)})}async function Ve(r){r=r??U;const e=await oe();z=await P();for(const t of e.values())t.properties.get("door")&&Ee(t),t.properties.get("bell")&&Be(t);for(const t of z.values()){const n=new T(t.properties),o=n.getString("doorVariable");if(o&&t.type==="tilelayer"){const a=e.get(o);if(a===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of layer "'+t.name+'"');ke(t,a,n,r)}const s=n.getString("bellVariable");s&&Ge(s,n,t.name)}WA.player.onPlayerMove(t=>{D=t.x,_=t.y})}function xe(r,e){const t=r.getString("bindVariable");if(t){const n=r.get("enterValue"),o=r.get("leaveValue"),s=r.getString("triggerMessage"),a=r.getString("tag");je(t,e,n,o,s,a)}}function je(r,e,t,n,o,s){s&&!WA.player.tags.includes(s)||(t!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{o||(WA.state[r]=t)}),n!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[r]=n}))}async function Ie(){const r=await P();for(const e of r.values()){const t=new T(e.properties);xe(t,e.name)}}let X;async function ze(r){const e=await WA.room.getTiledMap();r=r??U,X=await P();const t=e.layers.find(n=>n.name==="configuration");if(t){const o=new T(t.properties).getString("tag");(!o||WA.player.tags.includes(o))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(r+"/configuration.html",!0)});for(const s of X.values()){const a=new T(s.properties),i=a.getString("openConfig");i&&s.type==="tilelayer"&&Ue(i.split(","),s.name,a)}}}function Ue(r,e,t){let n;const o=t.getString("openConfigAdminTag");let s=!0;o&&!WA.player.tags.includes(o)&&(s=!1);function a(){var u;n&&n.remove(),n=WA.ui.displayActionMessage({message:(u=t.getString("openConfigTriggerMessage"))!==null&&u!==void 0?u:"Press SPACE or touch here to configure",callback:()=>q(r)})}function i(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const u=t.getString("openConfigTrigger");s&&(u&&u==="onaction"?a():q(r))}),WA.room.onLeaveLayer(e).subscribe(()=>{n&&n.remove(),i()})}function Oe(){return WA.onInit().then(()=>{Ve().catch(r=>console.error(r)),Ie().catch(r=>console.error(r)),ze().catch(r=>console.error(r)),Te().catch(r=>console.error(r)),Ce().catch(r=>console.error(r))}).catch(r=>console.error(r))}console.log("Script started successfully");let m,V;const De=[{zone:"WelcomeToTCM",message:"Hey! Welcome to TheCodingMachine Virtual office!",cta:[]},{zone:"MeetWATeam",message:"Meet the WorkAdventure team!",cta:[]},{zone:"RespectPeople",message:"Thank you for respecting people at work :)",cta:[]},{zone:"TCMAroundTheWorld",message:"Go to the world map to visit our collaborators around the world!",cta:[]}];WA.onInit().then(()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),Oe().then(()=>{console.log("Scripting API Extra ready")}).catch(r=>console.error(r)),WA.room.onEnterLayer("WelcomeToTCM").subscribe(()=>{m="WelcomeToTCM",B(m,m+"Popup")}),WA.room.onLeaveLayer("WelcomeToTCM").subscribe(G),WA.room.onEnterLayer("MeetWATeam").subscribe(()=>{m="MeetWATeam",B(m,m+"Popup")}),WA.room.onLeaveLayer("MeetWATeam").subscribe(G),WA.room.onEnterLayer("RespectPeople").subscribe(()=>{m="RespectPeople",B(m,m+"Popup")}),WA.room.onLeaveLayer("RespectPeople").subscribe(G),WA.room.onEnterLayer("TCMAroundTheWorld").subscribe(()=>{m="TCMAroundTheWorld",B(m,m+"Popup")}),WA.room.onLeaveLayer("TCMAroundTheWorld").subscribe(G),_e()}).catch(r=>console.error(r));function B(r,e){const t=De.find(n=>n.zone==r);typeof t<"u"&&(V=WA.ui.openPopup(e,t.message,t.cta))}function G(){typeof V!==void 0&&(V.close(),V=void 0)}function _e(){WA.room.onEnterLayer("zone-purple-door").subscribe(()=>{WA.player.tags.includes("purple")&&WA.room.hideLayer("close-purple-door")}),WA.room.onLeaveLayer("zone-purple-door").subscribe(()=>{WA.room.showLayer("close-purple-door")}),WA.room.onEnterLayer("zone-blue-door").subscribe(()=>{WA.player.tags.includes("blue")&&WA.room.hideLayer("close-blue-door")}),WA.room.onLeaveLayer("zone-blue-door").subscribe(()=>{WA.room.showLayer("close-blue-door")}),WA.room.onEnterLayer("zone-yellow-door").subscribe(()=>{WA.player.tags.includes("yellow")&&WA.room.hideLayer("close-yellow-door")}),WA.room.onLeaveLayer("zone-yellow-door").subscribe(()=>{WA.room.showLayer("close-yellow-door")}),WA.room.onEnterLayer("zone-red-door").subscribe(()=>{WA.player.tags.includes("red")&&WA.room.hideLayer("close-red-door")}),WA.room.onLeaveLayer("zone-red-door").subscribe(()=>{WA.room.showLayer("close-red-door")})}