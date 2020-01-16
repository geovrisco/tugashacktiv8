function highestScore(students) {

  function sortSkor(arr) {

    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i].score < arr[j].score) {
          temp = arr[i]
          arr[i] = arr[j]
          arr[j] = temp
        }
      }
    }

    return arr
  }
  sortSkor(students)

  let groupByClass = [
    [students[0]]
  ]
// console.log(groupByClass)

  for (let a = 1; a < students.length; a++) {
    let flag = true
    for (let b = 0; b < groupByClass.length; b++) {
      
      // console.log(groupByClass[b], '------')
      if (students[a].class === groupByClass[b][0].class) {
        groupByClass[b].push(students[a])
        flag = false
      }
    }
    if (flag === true) {
      groupByClass.push([students[a]])
    }
  }

var arrNilaiTop=[]
for (let d=0; d<groupByClass.length;d++){
  arrNilaiTop.push(groupByClass[d][0])
}
 var deleteClass=[]
 for (let f=0; f<arrNilaiTop.length;f++){
   deleteClass.push({...arrNilaiTop[f]})
 }

 for (let g = 0; g<deleteClass.length;g++){
   delete deleteClass[g].class
 }

//  console.log(deleteClass)

let res={}
for (let e=0; e<arrNilaiTop.length;e++){
  res[arrNilaiTop[e].class]=[deleteClass[e]]
}
  return res
}

// TEST CASE
console.log(highestScore([{
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


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


// console.log(highestScore([])); //{}