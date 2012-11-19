require("../env");var vows=require("vows"),assert=require("assert"),suite=vows.describe("d3.quantile");suite.addBatch({quantile:{topic:function(){return d3.quantile},"requires sorted numeric input":function(e){assert.equal(e([1,2,3,4],0),1),assert.equal(e([1,2,3,4],1),4),assert.equal(e([4,3,2,1],0),4),assert.equal(e([4,3,2,1],1),1)},"uses the R-7 algorithm":function(e){var t=[3,6,7,8,8,10,13,15,16,20];assert.equal(e(t,0),3),assert.equal(e(t,.25),7.25),assert.equal(e(t,.5),9),assert.equal(e(t,.75),14.5),assert.equal(e(t,1),20);var t=[3,6,7,8,8,9,10,13,15,16,20];assert.equal(e(t,0),3),assert.equal(e(t,.25),7.5),assert.equal(e(t,.5),9),assert.equal(e(t,.75),14),assert.equal(e(t,1),20)},"returns an exact value for integer p-values":function(e){var t={},n={},r={},i={},s=[t,n,r,i];assert.equal(e(s,1/3),n),assert.equal(e(s,2/3),r)},"returns the first value for p = 0":function(e){var t={},n={},r={},i={},s=[t,n,r,i];assert.equal(e(s,0),t)},"returns the last value for p = 1":function(e){var t={},n={},r={},i={},s=[t,n,r,i];assert.equal(e(s,1),i)}}}),suite.export(module)