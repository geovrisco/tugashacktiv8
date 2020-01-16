function changeMe(arr) {
  // you can only write your code here!
  if(arr.length==0){
    return ' '
  }
    let firstName =''
    let lastName=''
    let gender=''
    let ObjName=""
  for (let i = 0; i<arr.length;i++){
      firstName=arr[i][0]
      lastName=arr[i][1]
      ObjName=firstName.concat(' ',lastName)
      gender=arr[i][2]
      if (arr[i][3]>1){
         ObjName = {
          'firstName':firstName,
          'lastName':lastName,
          'gender':gender,
          'age':2019-arr[i][3]
        }
      }else {
         ObjName = {
          'firstName':firstName,
          'lastName':lastName,
          'gender':gender,
          'age':'invalid birth'
          
        }
      }
      console.log(`1. ${ObjName.firstName} ${ObjName.lastName}:`)
      console.log(ObjName)
       
  }

 return 0
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""

