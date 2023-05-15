// const user = { 
//     id: 339, 
//     name: 'Fred', 
//     age: 42, 
//     education: { 
//         degree: 'Masters'
//     }
// }


// function findNestedValue(obj, key) {
//     const keys = key.split('.');
//     let value = obj;
  
//     for (const k of keys) {
//       if (value.hasOwnProperty(k)) {
//         value = value[k];
//       } else {
//         return undefined;
//       }
//     }
  
//     return value;
//   }
  
//   const targetValue = findNestedValue(user, 'education.degree');
//   console.log(targetValue);

// function numbers_ranges(x, y) {
//     if ((x >= 40 && x <= 60 && y >= 40 && y <= 60) 
//         || 
//         (x >= 70 && x <= 100 && y >= 70 && y <= 100))
//        {
//       return true;
//        } 
//       else 
//        {
//       return false;
//     }
//   }
  
//   console.log(numbers_ranges(44, 56));


const students = [
    { name: 'David', marks: 80 },
    { name: 'Vinoth', marks: 77 },
    { name: 'Divya', marks: 88 },
    { name: 'Ishitha', marks: 95 },
    { name: 'Thomas', marks: 68 }
  ];
  
  function calculateAverageMarks(students) {
    let totalMarks = 0;
  
    for (let i = 0; i < students.length; i++) {
      totalMarks += students[i].marks;
    }
  
    return totalMarks / students.length;
  }
  
  function determineGrade(marks) {
    if (marks < 60) {
      return 'F';
    } else if (marks < 70) {
      return 'D';
    } else if (marks < 80) {
      return 'C';
    } else if (marks < 90) {
      return 'B';
    } else {
      return 'A';
    }
  }
  
  const averageMarks = calculateAverageMarks(students);
  const grade = determineGrade(averageMarks);
  
  console.log(`Average marks: ${averageMarks}`);
  console.log(`Grade: ${grade}`);
  
// const color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

// function Ordinal(n)
//  {
//   const o = ["th","st","nd","rd"];
//   const x = n%100;
//   return x+(o[(x-20)%10]||o[x]||o[0]);
//  }

// for(n = 0; n < color.length; n++){
//  const ordinal = n + 1;

//  const output = (`${Ordinal(ordinal)} choice is ${color[n]}.`);

// console.log(output);
// }

