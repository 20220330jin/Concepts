console.log(window);

var globalVar = 'global';

console.log(globalVar);
console.log(window.globalVar);

window.setTimeout(() => {
    console.log('1초')
}, 1000)