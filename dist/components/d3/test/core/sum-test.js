require("../env");var vows=require("vows"),assert=require("assert"),suite=vows.describe("d3.sum");suite.addBatch({sum:{topic:function(){return d3.sum},"sums numbers":function(e){assert.equal(d3.sum([1]),1),assert.equal(d3.sum([5,1,2,3,4]),15),assert.equal(d3.sum([20,3]),23),assert.equal(d3.sum([3,20]),23)},"sums types that can be coerced to numbers":function(e){assert.equal(d3.sum(["20","3"]),23),assert.equal(d3.sum(["3","20"]),23),assert.equal(d3.sum(["3",20]),23),assert.equal(d3.sum([20,"3"]),23),assert.equal(d3.sum([3,"20"]),23),assert.equal(d3.sum(["20",3]),23)},"ignores non-numeric types":function(e){assert.equal(d3.sum(["a","b","c"]),0),assert.equal(d3.sum(["a",1,"2"]),3)},"ignores null, undefined and NaN":function(e){assert.equal(d3.sum([NaN,1,2,3,4,5]),15),assert.equal(d3.sum([1,2,3,4,5,NaN]),15),assert.equal(d3.sum([10,null,3,undefined,5,NaN]),18)},"applies the optional acccessor function":function(e){assert.equal(d3.sum([[1,2,3,4,5],[2,4,6,8,10]],function(e){return d3.sum(e)}),45),assert.equal(d3.sum([1,2,3,4,5],function(e,t){return t}),10)},"returns zero for the empty array":function(e){assert.equal(d3.sum([]),0)}}}),suite.export(module)