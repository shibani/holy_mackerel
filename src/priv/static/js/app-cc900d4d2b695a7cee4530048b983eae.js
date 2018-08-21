!function(){"use strict";var e="undefined"==typeof global?self:global;if("function"!=typeof e.require){var t={},n={},i={},o={}.hasOwnProperty,r=/^\.\.?(\/|$)/,s=function(e,t){for(var n,i=[],o=(r.test(t)?e+"/"+t:t).split("/"),s=0,a=o.length;s<a;s++)n=o[s],".."===n?i.pop():"."!==n&&""!==n&&i.push(n);return i.join("/")},a=function(e){return e.split("/").slice(0,-1).join("/")},u=function(t){return function(n){var i=s(a(t),n);return e.require(i,t)}},c=function(e,t){var i=m&&m.createHot(e),o={id:e,exports:{},hot:i};return n[e]=o,t(o.exports,u(e),o),o.exports},l=function(e){return i[e]?l(i[e]):e},h=function(e,t){return l(s(a(e),t))},f=function(e,i){null==i&&(i="/");var r=l(e);if(o.call(n,r))return n[r].exports;if(o.call(t,r))return c(r,t[r]);throw new Error("Cannot find module '"+e+"' from '"+i+"'")};f.alias=function(e,t){i[t]=e};var p=/\.[^.\/]+$/,d=/\/index(\.[^\/]+)?$/,v=function(e){if(p.test(e)){var t=e.replace(p,"");o.call(i,t)&&i[t].replace(p,"")!==t+"/index"||(i[t]=e)}if(d.test(e)){var n=e.replace(d,"");o.call(i,n)||(i[n]=e)}};f.register=f.define=function(e,i){if(e&&"object"==typeof e)for(var r in e)o.call(e,r)&&f.register(r,e[r]);else t[e]=i,delete n[e],v(e)},f.list=function(){var e=[];for(var n in t)o.call(t,n)&&e.push(n);return e};var m=e._hmr&&new e._hmr(h,f,t,n);f._cache=n,f.hmr=m&&m.wrap,f.brunch=!0,e.require=f}}(),function(){var e=("undefined"==typeof window?this:window,function(e,t,n){var i={},o=function(t,n){var r;try{return r=e(n+"/node_modules/"+t)}catch(s){if(s.toString().indexOf("Cannot find module")===-1)throw s;if(n.indexOf("node_modules")!==-1){var a=n.split("/"),u=a.lastIndexOf("node_modules"),c=a.slice(0,u).join("/");return o(t,c)}}return i};return function(r){if(r in t&&(r=t[r]),r){if("."!==r[0]&&n){var s=o(r,n);if(s!==i)return s}return e(r)}}});require.register("phoenix/priv/static/phoenix.js",function(t,n,i){n=e(n,{},"phoenix"),function(){!function(e,n){"object"==typeof t?n(t):"function"==typeof define&&define.amd?define(["exports"],n):n(e.Phoenix=e.Phoenix||{})}(this,function(e){"use strict";function t(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){var n=[],i=!0,o=!1,r=void 0;try{for(var s,a=e[Symbol.iterator]();!(i=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);i=!0);}catch(u){o=!0,r=u}finally{try{!i&&a["return"]&&a["return"]()}finally{if(o)throw r}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s="2.0.0",a={connecting:0,open:1,closing:2,closed:3},u=1e4,c=1e3,l={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},h={close:"phx_close",error:"phx_error",join:"phx_join",reply:"phx_reply",leave:"phx_leave"},f=[h.close,h.error,h.join,h.reply,h.leave],p={longpoll:"longpoll",websocket:"websocket"},d=function(){function e(t,i,o,r){n(this,e),this.channel=t,this.event=i,this.payload=o||{},this.receivedResp=null,this.timeout=r,this.timeoutTimer=null,this.recHooks=[],this.sent=!1}return r(e,[{key:"resend",value:function(e){this.timeout=e,this.reset(),this.send()}},{key:"send",value:function(){this.hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel.joinRef()}))}},{key:"receive",value:function(e,t){return this.hasReceived(e)&&t(this.receivedResp.response),this.recHooks.push({status:e,callback:t}),this}},{key:"reset",value:function(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}},{key:"matchReceive",value:function(e){var t=e.status,n=e.response;e.ref;this.recHooks.filter(function(e){return e.status===t}).forEach(function(e){return e.callback(n)})}},{key:"cancelRefEvent",value:function(){this.refEvent&&this.channel.off(this.refEvent)}},{key:"cancelTimeout",value:function(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}},{key:"startTimeout",value:function(){var e=this;this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,function(t){e.cancelRefEvent(),e.cancelTimeout(),e.receivedResp=t,e.matchReceive(t)}),this.timeoutTimer=setTimeout(function(){e.trigger("timeout",{})},this.timeout)}},{key:"hasReceived",value:function(e){return this.receivedResp&&this.receivedResp.status===e}},{key:"trigger",value:function(e,t){this.channel.trigger(this.refEvent,{status:e,response:t})}}]),e}(),v=e.Channel=function(){function e(t,i,o){var r=this;n(this,e),this.state=l.closed,this.topic=t,this.params=i||{},this.socket=o,this.bindings=[],this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new d(this,h.join,this.params,this.timeout),this.pushBuffer=[],this.rejoinTimer=new k(function(){return r.rejoinUntilConnected()},this.socket.reconnectAfterMs),this.joinPush.receive("ok",function(){r.state=l.joined,r.rejoinTimer.reset(),r.pushBuffer.forEach(function(e){return e.send()}),r.pushBuffer=[]}),this.onClose(function(){r.rejoinTimer.reset(),r.socket.log("channel","close "+r.topic+" "+r.joinRef()),r.state=l.closed,r.socket.remove(r)}),this.onError(function(e){r.isLeaving()||r.isClosed()||(r.socket.log("channel","error "+r.topic,e),r.state=l.errored,r.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",function(){if(r.isJoining()){r.socket.log("channel","timeout "+r.topic+" ("+r.joinRef()+")",r.joinPush.timeout);var e=new d(r,h.leave,{},r.timeout);e.send(),r.state=l.errored,r.joinPush.reset(),r.rejoinTimer.scheduleTimeout()}}),this.on(h.reply,function(e,t){r.trigger(r.replyEventName(t),e)})}return r(e,[{key:"rejoinUntilConnected",value:function(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this.rejoin()}},{key:"join",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.timeout;if(this.joinedOnce)throw"tried to join multiple times. 'join' can only be called a single time per channel instance";return this.joinedOnce=!0,this.rejoin(e),this.joinPush}},{key:"onClose",value:function(e){this.on(h.close,e)}},{key:"onError",value:function(e){this.on(h.error,function(t){return e(t)})}},{key:"on",value:function(e,t){this.bindings.push({event:e,callback:t})}},{key:"off",value:function(e){this.bindings=this.bindings.filter(function(t){return t.event!==e})}},{key:"canPush",value:function(){return this.socket.isConnected()&&this.isJoined()}},{key:"push",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.timeout;if(!this.joinedOnce)throw"tried to push '"+e+"' to '"+this.topic+"' before joining. Use channel.join() before pushing events";var i=new d(this,e,t,n);return this.canPush()?i.send():(i.startTimeout(),this.pushBuffer.push(i)),i}},{key:"leave",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.timeout;this.state=l.leaving;var n=function(){e.socket.log("channel","leave "+e.topic),e.trigger(h.close,"leave")},i=new d(this,h.leave,{},t);return i.receive("ok",function(){return n()}).receive("timeout",function(){return n()}),i.send(),this.canPush()||i.trigger("ok",{}),i}},{key:"onMessage",value:function(e,t,n){return t}},{key:"isMember",value:function(e,t,n,i){if(this.topic!==e)return!1;var o=f.indexOf(t)>=0;return!i||!o||i===this.joinRef()||(this.socket.log("channel","dropping outdated message",{topic:e,event:t,payload:n,joinRef:i}),!1)}},{key:"joinRef",value:function(){return this.joinPush.ref}},{key:"sendJoin",value:function(e){this.state=l.joining,this.joinPush.resend(e)}},{key:"rejoin",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.timeout;this.isLeaving()||this.sendJoin(e)}},{key:"trigger",value:function(e,t,n,i){var o=this,r=this.onMessage(e,t,n,i);if(t&&!r)throw"channel onMessage callbacks must return the payload, modified or unmodified";this.bindings.filter(function(t){return t.event===e}).map(function(e){return e.callback(r,n,i||o.joinRef())})}},{key:"replyEventName",value:function(e){return"chan_reply_"+e}},{key:"isClosed",value:function(){return this.state===l.closed}},{key:"isErrored",value:function(){return this.state===l.errored}},{key:"isJoined",value:function(){return this.state===l.joined}},{key:"isJoining",value:function(){return this.state===l.joining}},{key:"isLeaving",value:function(){return this.state===l.leaving}}]),e}(),m={encode:function(e,t){var n=[e.join_ref,e.ref,e.topic,e.event,e.payload];return t(JSON.stringify(n))},decode:function(e,t){var n=JSON.parse(e),i=o(n,5),r=i[0],s=i[1],a=i[2],u=i[3],c=i[4];return t({join_ref:r,ref:s,topic:a,event:u,payload:c})}},g=(e.Socket=function(){function e(t){var i=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n(this,e),this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.timeout=o.timeout||u,this.transport=o.transport||window.WebSocket||g,this.defaultEncoder=m.encode,this.defaultDecoder=m.decode,this.transport!==g?(this.encode=o.encode||this.defaultEncoder,this.decode=o.decode||this.defaultDecoder):(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder),this.heartbeatIntervalMs=o.heartbeatIntervalMs||3e4,this.reconnectAfterMs=o.reconnectAfterMs||function(e){return[1e3,2e3,5e3,1e4][e-1]||1e4},this.logger=o.logger||function(){},this.longpollerTimeout=o.longpollerTimeout||2e4,this.params=o.params||{},this.endPoint=t+"/"+p.websocket,this.heartbeatTimer=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new k(function(){i.disconnect(function(){return i.connect()})},this.reconnectAfterMs)}return r(e,[{key:"protocol",value:function(){return location.protocol.match(/^https/)?"wss":"ws"}},{key:"endPointURL",value:function(){var e=y.appendParams(y.appendParams(this.endPoint,this.params),{vsn:s});return"/"!==e.charAt(0)?e:"/"===e.charAt(1)?this.protocol()+":"+e:this.protocol()+"://"+location.host+e}},{key:"disconnect",value:function(e,t,n){this.conn&&(this.conn.onclose=function(){},t?this.conn.close(t,n||""):this.conn.close(),this.conn=null),e&&e()}},{key:"connect",value:function(e){var t=this;e&&(console&&console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"),this.params=e),this.conn||(this.conn=new this.transport(this.endPointURL()),this.conn.timeout=this.longpollerTimeout,this.conn.onopen=function(){return t.onConnOpen()},this.conn.onerror=function(e){return t.onConnError(e)},this.conn.onmessage=function(e){return t.onConnMessage(e)},this.conn.onclose=function(e){return t.onConnClose(e)})}},{key:"log",value:function(e,t,n){this.logger(e,t,n)}},{key:"onOpen",value:function(e){this.stateChangeCallbacks.open.push(e)}},{key:"onClose",value:function(e){this.stateChangeCallbacks.close.push(e)}},{key:"onError",value:function(e){this.stateChangeCallbacks.error.push(e)}},{key:"onMessage",value:function(e){this.stateChangeCallbacks.message.push(e)}},{key:"onConnOpen",value:function(){var e=this;this.log("transport","connected to "+this.endPointURL()),this.flushSendBuffer(),this.reconnectTimer.reset(),this.conn.skipHeartbeat||(clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(function(){return e.sendHeartbeat()},this.heartbeatIntervalMs)),this.stateChangeCallbacks.open.forEach(function(e){return e()})}},{key:"onConnClose",value:function(e){this.log("transport","close",e),this.triggerChanError(),clearInterval(this.heartbeatTimer),this.reconnectTimer.scheduleTimeout(),this.stateChangeCallbacks.close.forEach(function(t){return t(e)})}},{key:"onConnError",value:function(e){this.log("transport",e),this.triggerChanError(),this.stateChangeCallbacks.error.forEach(function(t){return t(e)})}},{key:"triggerChanError",value:function(){this.channels.forEach(function(e){return e.trigger(h.error)})}},{key:"connectionState",value:function(){switch(this.conn&&this.conn.readyState){case a.connecting:return"connecting";case a.open:return"open";case a.closing:return"closing";default:return"closed"}}},{key:"isConnected",value:function(){return"open"===this.connectionState()}},{key:"remove",value:function(e){this.channels=this.channels.filter(function(t){return t.joinRef()!==e.joinRef()})}},{key:"channel",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new v(e,t,this);return this.channels.push(n),n}},{key:"push",value:function(e){var t=this,n=e.topic,i=e.event,o=e.payload,r=e.ref,s=e.join_ref,a=function(){t.encode(e,function(e){t.conn.send(e)})};this.log("push",n+" "+i+" ("+s+", "+r+")",o),this.isConnected()?a():this.sendBuffer.push(a)}},{key:"makeRef",value:function(){var e=this.ref+1;return e===this.ref?this.ref=0:this.ref=e,this.ref.toString()}},{key:"sendHeartbeat",value:function(){if(this.isConnected()){if(this.pendingHeartbeatRef)return this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection"),void this.conn.close(c,"hearbeat timeout");this.pendingHeartbeatRef=this.makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef})}}},{key:"flushSendBuffer",value:function(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(function(e){return e()}),this.sendBuffer=[])}},{key:"onConnMessage",value:function(e){var t=this;this.decode(e.data,function(e){var n=e.topic,i=e.event,o=e.payload,r=e.ref,s=e.join_ref;r&&r===t.pendingHeartbeatRef&&(t.pendingHeartbeatRef=null),t.log("receive",(o.status||"")+" "+n+" "+i+" "+(r&&"("+r+")"||""),o),t.channels.filter(function(e){return e.isMember(n,i,o,s)}).forEach(function(e){return e.trigger(i,o,r,s)}),t.stateChangeCallbacks.message.forEach(function(t){return t(e)})})}}]),e}(),e.LongPoll=function(){function e(t){n(this,e),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(t),this.readyState=a.connecting,this.poll()}return r(e,[{key:"normalizeEndpoint",value:function(e){return e.replace("ws://","http://").replace("wss://","https://").replace(new RegExp("(.*)/"+p.websocket),"$1/"+p.longpoll)}},{key:"endpointURL",value:function(){return y.appendParams(this.pollEndpoint,{token:this.token})}},{key:"closeAndRetry",value:function(){this.close(),this.readyState=a.connecting}},{key:"ontimeout",value:function(){this.onerror("timeout"),this.closeAndRetry()}},{key:"poll",value:function(){var e=this;this.readyState!==a.open&&this.readyState!==a.connecting||y.request("GET",this.endpointURL(),"application/json",null,this.timeout,this.ontimeout.bind(this),function(t){if(t){var n=t.status,i=t.token,o=t.messages;e.token=i}else var n=0;switch(n){case 200:o.forEach(function(t){return e.onmessage({data:t})}),e.poll();break;case 204:e.poll();break;case 410:e.readyState=a.open,e.onopen(),e.poll();break;case 0:case 500:e.onerror(),e.closeAndRetry();break;default:throw"unhandled poll status "+n}})}},{key:"send",value:function(e){var t=this;y.request("POST",this.endpointURL(),"application/json",e,this.timeout,this.onerror.bind(this,"timeout"),function(e){e&&200===e.status||(t.onerror(e&&e.status),t.closeAndRetry())})}},{key:"close",value:function(e,t){this.readyState=a.closed,this.onclose()}}]),e}()),y=e.Ajax=function(){function e(){n(this,e)}return r(e,null,[{key:"request",value:function(e,t,n,i,o,r,s){if(window.XDomainRequest){var a=new XDomainRequest;this.xdomainRequest(a,e,t,i,o,r,s)}else{var u=window.XMLHttpRequest?new window.XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");this.xhrRequest(u,e,t,n,i,o,r,s)}}},{key:"xdomainRequest",value:function(e,t,n,i,o,r,s){var a=this;e.timeout=o,e.open(t,n),e.onload=function(){var t=a.parseJSON(e.responseText);s&&s(t)},r&&(e.ontimeout=r),e.onprogress=function(){},e.send(i)}},{key:"xhrRequest",value:function(e,t,n,i,o,r,s,a){var u=this;e.open(t,n,!0),e.timeout=r,e.setRequestHeader("Content-Type",i),e.onerror=function(){a&&a(null)},e.onreadystatechange=function(){if(e.readyState===u.states.complete&&a){var t=u.parseJSON(e.responseText);a(t)}},s&&(e.ontimeout=s),e.send(o)}},{key:"parseJSON",value:function(e){if(!e||""===e)return null;try{return JSON.parse(e)}catch(t){return console&&console.log("failed to parse JSON response",e),null}}},{key:"serialize",value:function(e,t){var n=[];for(var o in e)if(e.hasOwnProperty(o)){var r=t?t+"["+o+"]":o,s=e[o];"object"===("undefined"==typeof s?"undefined":i(s))?n.push(this.serialize(s,r)):n.push(encodeURIComponent(r)+"="+encodeURIComponent(s))}return n.join("&")}},{key:"appendParams",value:function(e,t){if(0===Object.keys(t).length)return e;var n=e.match(/\?/)?"&":"?";return""+e+n+this.serialize(t)}}]),e}();y.states={complete:4};var k=(e.Presence={syncState:function(e,t,n,i){var o=this,r=this.clone(e),s={},a={};return this.map(r,function(e,n){t[e]||(a[e]=n)}),this.map(t,function(e,t){var n=r[e];if(n){var i=t.metas.map(function(e){return e.phx_ref}),u=n.metas.map(function(e){return e.phx_ref}),c=t.metas.filter(function(e){return u.indexOf(e.phx_ref)<0}),l=n.metas.filter(function(e){return i.indexOf(e.phx_ref)<0});c.length>0&&(s[e]=t,s[e].metas=c),l.length>0&&(a[e]=o.clone(n),a[e].metas=l)}else s[e]=t}),this.syncDiff(r,{joins:s,leaves:a},n,i)},syncDiff:function(e,n,i,o){var r=n.joins,s=n.leaves,a=this.clone(e);return i||(i=function(){}),o||(o=function(){}),this.map(r,function(e,n){var o=a[e];if(a[e]=n,o){var r;(r=a[e].metas).unshift.apply(r,t(o.metas))}i(e,o,n)}),this.map(s,function(e,t){var n=a[e];if(n){var i=t.metas.map(function(e){return e.phx_ref});n.metas=n.metas.filter(function(e){return i.indexOf(e.phx_ref)<0}),o(e,n,t),0===n.metas.length&&delete a[e]}}),a},list:function(e,t){return t||(t=function(e,t){return t}),this.map(e,function(e,n){return t(e,n)})},map:function(e,t){return Object.getOwnPropertyNames(e).map(function(n){return t(n,e[n])})},clone:function(e){return JSON.parse(JSON.stringify(e))}},function(){function e(t,i){n(this,e),this.callback=t,this.timerCalc=i,this.timer=null,this.tries=0}return r(e,[{key:"reset",value:function(){this.tries=0,clearTimeout(this.timer)}},{key:"scheduleTimeout",value:function(){var e=this;clearTimeout(this.timer),this.timer=setTimeout(function(){e.tries=e.tries+1,e.callback()},this.timerCalc(this.tries+1))}}]),e}())})}()}),require.register("phoenix_html/priv/static/phoenix_html.js",function(t,n,i){n=e(n,{},"phoenix_html"),function(){"use strict";!function(){function e(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}return"function"==typeof window.CustomEvent?window.CustomEvent:(e.prototype=window.Event.prototype,e)}function t(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function n(e){var n=e.getAttribute("data-to"),i=t("_method",e.getAttribute("data-method")),o=t("_csrf_token",e.getAttribute("data-csrf")),r=document.createElement("form"),s=e.getAttribute("target");r.method="get"===e.getAttribute("data-method")?"get":"post",r.action=n,r.style.display="hidden",s&&(r.target=s),r.appendChild(o),r.appendChild(i),document.body.appendChild(r),r.submit()}var i=e();window.addEventListener("click",function(e){for(var t=e.target;t&&t.getAttribute;){var o=new i("phoenix.link.click",{bubbles:!0,cancelable:!0});if(!t.dispatchEvent(o))return e.preventDefault(),!1;if(t.getAttribute("data-method"))return n(t),e.preventDefault(),!1;t=t.parentNode}},!1),window.addEventListener("phoenix.link.click",function(e){var t=e.target.getAttribute("data-confirm");t&&!window.confirm(t)&&e.preventDefault()},!1)}()}()}),require.register("js/app.js",function(e,t,n){"use strict";t("phoenix_html")}),require.register("js/socket.js",function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t("phoenix"),o=new i.Socket("/socket",{params:{token:window.userToken}});o.connect();var r=o.channel("topic:subtopic",{});r.join().receive("ok",function(e){console.log("Joined successfully",e)}).receive("error",function(e){console.log("Unable to join",e)}),e["default"]=o}),require.alias("phoenix/priv/static/phoenix.js","phoenix"),require.alias("phoenix_html/priv/static/phoenix_html.js","phoenix_html"),require.register("___globals___",function(e,t,n){})}(),require("___globals___"),require("js/app");