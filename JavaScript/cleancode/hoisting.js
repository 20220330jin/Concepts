var global = 0;
function outer() {
    console.log(global); // undefined
    var global = 5;
    function inner() {
        var global = 10;

        console.log(global); // 10
    }

    inner();

    global = 1;

    console.log(global); // 5
}

outer();

function duplicatedVar(){
    var a;

    console.log(a);

    var a = 100;

    console.log(a);
}

duplicatedVar();

