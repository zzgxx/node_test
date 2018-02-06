var counter1 = require('./util/counter.js');
var    counter2 = require('./util/counter');
var data = require('./data.json');//加载和使用一个JSON文件。


console.log(counter1.count());//打印数字1 在count
console.log(counter2.count());
console.log(counter2.count());
