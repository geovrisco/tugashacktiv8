//input "hello world!"
//output
//"!dlrow olleh"


let a = "hello world!"
let b=""

for (let i=a.length-1;i>=0;i--){
    b+=a[i]
}

console.log(b)