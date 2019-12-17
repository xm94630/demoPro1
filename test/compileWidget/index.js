
const exec = require('child_process').exec;
console.log("=========================== vue组件编译 ===========================");
let holder = exec(`find . -name '*.vue' -exec bash -c 'node convert.js < "{}" > "{}@Compile.js"' \\;`);
console.log('【1】开始vue编译')
holder.stdout.on('data', function(data) {
    console.log(data)
})
holder.stdout.on('error', function(data) {
    console.log(data)
})
holder.stdout.on('close', function() {
    console.log('【2】完成vue编译')
    to();
})

function to(){
    console.log('【3】转移文件');
    console.log('【4】完成');
}