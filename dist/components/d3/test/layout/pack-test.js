function layout(e){return{value:e.value,depth:e.depth,r:e.r,x:e.x,y:e.y}}require("../env");var vows=require("vows"),assert=require("assert"),suite=vows.describe("d3.layout.pack");suite.addBatch({pack:{topic:d3.layout.pack,"can handle an empty children array":function(e){assert.deepEqual(e.nodes({children:[{children:[]},{value:1}]}).map(layout),[{value:1,depth:0,x:.5,y:.5,r:.5},{value:0,depth:1,x:0,y:.5,r:0},{value:1,depth:1,x:.5,y:.5,r:.5}])},"can handle zero-valued nodes":function(e){assert.deepEqual(e.nodes({children:[{value:0},{value:1}]}).map(layout),[{value:1,depth:0,x:.5,y:.5,r:.5},{value:0,depth:1,x:0,y:.5,r:0},{value:1,depth:1,x:.5,y:.5,r:.5}])},"can handle small nodes":function(){assert.deepEqual(d3.layout.pack().sort(null).nodes({children:[{value:.01},{value:2},{value:2},{value:1}]}).map(layout),[{y:.5,x:.5,value:5.01,r:.5,depth:0},{y:.5084543199854831,x:.4682608366855136,value:.01,r:.016411496513964046,depth:1},{y:.5084543199854831,x:.7167659426883449,value:2,r:.23209360948886723,depth:1},{y:.34256315498862167,x:.2832340573116551,value:2,r:.23209360948886723,depth:1},{y:.7254154893606051,x:.38524055061025186,value:1,r:.16411496513964044,depth:1}]),assert.deepEqual(d3.layout.pack().sort(null).nodes({children:[{value:2},{value:2},{value:1},{value:.01}]}).map(layout),[{y:.5,x:.5,value:5.01,r:.5,depth:0},{y:.6274712284943809,x:.26624891409386664,value:2,r:.23375108590613333,depth:1},{y:.6274712284943809,x:.7337510859061334,value:2,r:.23375108590613333,depth:1},{y:.30406466355343187,x:.5,value:1,r:.1652869779539461,depth:1},{y:.3878967195987758,x:.3386645534068854,value:.01,r:.01652869779539461,depth:1}])},"can handle residual floating point error":function(e){var t=e.nodes({children:[{value:.005348322447389364},{value:.8065882022492588},{value:0}]}).map(layout);assert.isFalse(t.map(function(e){return e.depth}).some(isNaN)),assert.isFalse(t.map(function(e){return e.value}).some(isNaN)),assert.isFalse(t.map(function(e){return e.x}).some(isNaN)),assert.isFalse(t.map(function(e){return e.y}).some(isNaN)),assert.isFalse(t.map(function(e){return e.r}).some(isNaN))},"avoids coincident circles":function(e){var t=e({children:[{children:[{value:17010},{value:5842},{value:0},{value:0}]},{children:[{children:[{value:721},{value:4294},{value:9800},{value:1314},{value:2220}]},{value:1759},{value:2165},{value:586},{value:3331},{value:772},{value:3322}]}]}).map(layout);t.sort(function(e,t){return e.x<t.x&&e.y<t.y?-1:1}),assert.isFalse(t.slice(1).some(function(e,n){return e.x===t[n].x&&e.y===t[n].y&&e.value>0}))}}}),suite.export(module)