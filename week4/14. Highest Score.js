function highestScore (students) {
  // Code disini
  // grup dlu ke sebuah array utk kelas yang sama
  //sort kelasnya
  //ambil indeks 0 tiap2 grup
  
  let objGroup=[
      [ students[0] ]
    ]
    for (var i = 1; i<students.length;i++){
        var a =true
        for( var j = 0; j<objGroup.length;j++){
            if(students[i].class===objGroup[j][0].class){
                objGroup[j].push(students[i])
                a=false
            }
        }
        if (a===true){
            objGroup.push([students[i]])
        }
    }  

// for (let i=0; i<objGroup.length;i++){
//     console.log(objGroup[i].length)
//     if (objGroup[i].length<2){
//         break
//     }else{
//         if (objGroup[i].length<2){
//         for (let j = 0; j<objGroup.length;j++){
//             for (let k=j+1; k<objGroup.length;k++){
//                 if(objGroup[i][j].score<objGroup[i][k].score){
//                     temp=objGroup[i][j]
//                     objGroup[i][j]=objGroup[i][k]
//                     objGroup[i][k]=temp
//                 }
//             }
//         }
//     }        tar lanjut lg
//     }
    
   
// }
let result=[]
let objResult={}
for (let i=0;i<objGroup.length;i++){

    objResult={
        name:objGroup[i][0].name,
        score:objGroup[i][0].score,
        class:objGroup[i][0].class
      
    }

result.push(objResult)
}

console.log('\n','\n','\n','\n','\n')


return result
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


// console.log(highestScore([
//   {
//     name: 'Alexander',
//     score: 100,
//     class: 'foxes'
//   },
//   {
//     name: 'Alisa',
//     score: 76,
//     class: 'wolves'
//   },
//   {
//     name: 'Vladimir',
//     score: 92,
//     class: 'foxes'
//   },
//   {
//     name: 'Albert',
//     score: 71,
//     class: 'wolves'
//   },
//   {
//     name: 'Viktor',
//     score: 80,
//     class: 'tigers'
//   }
// ]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


// console.log(highestScore([])); //{}