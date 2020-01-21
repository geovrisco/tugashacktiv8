/**
Olah Data Students
Function menerima input berupa array-of-objects yang berisi nama student beserta score mereka. Function `groupStudents`
akan mengelompokkan student menjadi 2 kelompok: student dengan nilai >= (lebih besar atau sama dengan) rata-rata di dalam array di property 'above'
dan student dengan nilai dibawah rata-rata di dalam array di property 'under'. 
Contoh:
- input: [
    { name: 'Foobar', score: 75 },
    { name: 'Foobaz', score: 60 },
    { name: 'Foo', score: 75 }]
- output:
   { above: [ 'Foobar', 'Foo' ], under: [ 'Foobaz' ] }
 
Aturan coding:
Dilarang menggunakan built-in function:
- .map()
- .filter()
- .reduce()
*/
function groupStudents (students) {
  //implement here
  let res = {}
  let avg=0
  for (let i=0; i <students.length; i++){
    avg=avg+students[i].score
  }

  let rate= avg/students.length
  for (let a = 0 ; a < students.length ; a++){
    if (students[a].score<rate){
      if (res.under === undefined){
        res.under=[]
      }
      res.under.push(students[a].name)


    }
    else if (students[a].score>=rate){
      if (res.above===undefined){
        res.above=[]
      }
      res.above.push(students[a].name)
    }
  }
  


  return res
}

//test-cases
console.log(groupStudents([
{ name: 'Dimitri', score: 90 },
{ name: 'Sergei', score: 70 },
{ name: 'Alisa', score: 50 },
{ name: 'Viktor', score: 65 },
{ name: 'Vladimir', score: 40 },
{ name: 'Alexei', score: 70 }
]));
//{
// above: [ 'Dimitri', 'Sergei', 'Viktor', 'Alexei' ],
// under: [ 'Alisa', 'Vladimir' ]
//}

console.log(groupStudents([
{ name: 'Foo', score: 100 },
{ name: 'Bar', score: 100 },
{ name: 'Baz', score: 100 }
]));
// { above: [ 'Foo', 'Bar', 'Baz' ] }

console.log(groupStudents([]));
// {}