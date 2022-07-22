// CONST IN JS

/* three difference b/w var & const
1) read only
2) initiallize at the time of declaration
3) can not hoist */


var a=10;
a=30;
console.log(a);

//in var we perform read & write operation both
//but in the case of 'const' we only perform read, it means if we assign value to const we can't re-initiallize.

const b=40;
console.log(b);
b=50;    //TypeError: Assignment to constant variable. (read only)
console.log(b);

//In var we first create and then initiallize it.
var c;
console.log(c);    // undefined
c=30;
console.log(c);    // 30

// But in the case of const we can't do this.
// we must be initiallize at the time of creating.

const d;     //Error: Missing initializer in const declaration 
console.log(d);

//variable hoisting use in var
console.log(x);
var x=10;      //undefined

//but in const we can't hoist
console.log(y);     // ReferenceError: Cannot access 'y' before initialization
const y=10;
