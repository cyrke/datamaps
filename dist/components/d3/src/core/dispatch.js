function d3_dispatch(){}function d3_dispatch_event(e){function r(){var n=t,r=-1,i=n.length,s;while(++r<i)(s=n[r].on)&&s.apply(this,arguments);return e}var t=[],n=new d3_Map;return r.on=function(r,i){var s=n.get(r),o;return arguments.length<2?s&&s.on:(s&&(s.on=null,t=t.slice(0,o=t.indexOf(s)).concat(t.slice(o+1)),n.remove(r)),i&&t.push(n.set(r,{on:i})),e)},r}d3.dispatch=function(){var e=new d3_dispatch,t=-1,n=arguments.length;while(++t<n)e[arguments[t]]=d3_dispatch_event(e);return e},d3_dispatch.prototype.on=function(e,t){var n=e.indexOf("."),r="";return n>0&&(r=e.substring(n+1),e=e.substring(0,n)),arguments.length<2?this[e].on(r):this[e].on(r,t)}