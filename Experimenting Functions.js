//Experimenting with Functions

function square(x) {
    var ans = x*x;
    return ans;
}

function cube(x) {
    var ans = x*x*x;
    return ans;
}

function add3num(x,y,z) {
    var ans = x+y+z;
    return ans;
}

var x = square(3);
var y = cube(2);
var z = x*10 + y*3;
var sum = add3num(x,y,z);
print(x);
print(y);
print(z);
print(sum);

function addStrings(x,y) {
    var ans = x+y;
    return ans;
}

var a = 'Hello';
var b = 'World';
var c = addStrings(a,b);
var d = 'Hamza';
var e = 'Naveed';
var f = addStrings(a,b);
print(a,'+',b,'=',c);
print(d,'+',e,'=',f);