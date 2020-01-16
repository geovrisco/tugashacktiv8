function graduates(students) {
  // Code disini
  let graduatedStudents = []
  let studentfix = {}

  for (let i = 0; i < students.length; i++) {
    if (students[i].score > 75) {
      graduatedStudents.push(students[i])
    }
  }
  
  let arraybener = []
  for (let push = 0; push < graduatedStudents.length; push++) {
    arraybener.push({...graduatedStudents[push]
    })
  }
  for (let a = 0; a < arraybener.length; a++) {
    delete arraybener[a].class
  }

  let res = {}
  for (let i = 0; i < graduatedStudents.length; i++) {
    res[graduatedStudents[i].class] = []
  }

  for (let j = 0; j < graduatedStudents.length; j++) {
    for (const keys in res) {
      if (graduatedStudents[j].class == keys) {
        res[keys].push(arraybener[j])
      }
    }
  }
  return res
}

console.log(graduates([{
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
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

//   console.log(graduates([
//     {
//       name: 'Alexander',
//       score: 100,
//       class: 'foxes'
//     },
//     {
//       name: 'Alisa',
//       score: 76,
//       class: 'wolves'
//     },
//     {
//       name: 'Vladimir',
//       score: 92,
//       class: 'foxes'
//     },
//     {
//       name: 'Albert',
//       score: 71,
//       class: 'wolves'
//     },
//     {
//       name: 'Viktor',
//       score: 80,
//       class: 'tigers'
//     }
//   ]));

//   // {
//   //   foxes: [
//   //     { name: 'Alexander', score: 100 },
//   //     { name: 'Vladimir', score: 92 }
//   //   ],
//   //   wolves: [
//   //     { name: 'Alisa', score: 76 },
//   //   ],
//   //   tigers: [
//   //     { name: 'Viktor', score: 80 }
//   //   ]
//   // }


//   console.log(graduates([])); //{}  