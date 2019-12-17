
const exec = require('child_process').exec;
const path = require('path');
const rootPath = path.resolve(__dirname, '..');


console.log("=========================== vue组件编译 ===========================");
console.log(rootPath)
let holder = exec(`find '${rootPath}' -name '*.vue' -exec bash -c 'node ./compileWidget/convert.js < "{}" > "{}@Compile.js"' \\;`);
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