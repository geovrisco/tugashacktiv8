var rows1=5;



for(i=0;i<=rows1;i++)
{
    console.log("*")    
}


//nested looping

var rows2=5;
var bintang2=""

for( i=0; i<=rows2; i++){

    for(j=0; j<=rows2; j++){
        bintang2+="*"
    } bintang2+="\n"
}
console.log(bintang2);


//nested looping 3
var rows3=5;
var bintang3="";

for(i=0; i<=rows3;i++){
    for(j=0;j<=i;j++){ 
        bintang3+="*"
    }bintang3+="\n"
}
console.log(bintang3)
