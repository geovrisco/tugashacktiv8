// array
var students = [
    {
      name: "Brahma",
      batch: "Native",
      score: 95
    },
    {
      name: "Ulul",
      batch: "Infinite",
      score: 90
    },
    {
      name: "Geo",
      batch: "Daring",
      score: 100
    },
    {
      name: "Aziz",
      batch: "Humble",
      score: 95
    }
  ];
  
  // for (var i = 0; i < students.length; i++) {
  //   console.log(students[i].batch);
  // }
  
  // // console.log(students[0][0]);
  
  // // object
  // // var student = {
  // //   name: "Zahra",
  // //   batch: "Native"
  // // };
  
  students[1].name = students[1].name + "Fadhli";
  
  // console.log(students);
  
  // [
  //   {
  //     score: 100,
  //     students: ["Geo"]
  //   },
  //   {
  //     score: 90,
  //     students: ["Ulul"]
  //   },
  //   {
  //     score: 95,
  //     students: ["Brahma", "Aziz"]
  //   }
  // ];
  
  // LOOPING
  
  var result = [students[0]];
  
  for (var i = 1; i < students.length; i++) {
    var flag = false;
    for (var j = 0; j < result.length; j++) {
      if (students[i].score === result[j].score) {
        result[j].push(students[i].name);
        flag = true;
      }
    }
    if (flag === false) {
      result.push({
        batch: students[i].batch,
        students: [students[i].name]
      });
      // console.log(result);
    }
    //   for (var k = 0; k < result.length; k++) {
    //     if (result[k] === result[k + 1]) {
    //       delete result[k];
    //     }
    //   }
  }
  
  console.log(result);
  
  // var list = [
  //   { score: 95, students: ["Brahma", "Aziz"] },
  //   { score: 90, students: ["Ulul"] },
  //   { score: 100, students: ["Geo"] }
  // ];
  
  // for (var i = 0; i < list.length; i++) {
  //   for (var j = i + 1; j < list.length; j++) {
  //     if (list[i].score > list[j].score) {
  //       var temp = list[i].score;
  //       list[i].score = list[j].score;
  //       list[j].score = temp;
  //     }
  //   }
  // }
  
  // console.log(list);
  
//   var obj = {
//     name: "Semmi",
//     age: 80
//   };
//   var obj2 = obj;
//   obj.batch = "Daring";
  
//   console.log(obj);
//   console.log(obj2);
  
//   var arr = [1, 2, 3];
//   arr += [5];
  
//   console.log(arr);