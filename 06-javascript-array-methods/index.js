// 1. Sort the below array of employees in ascending order by age

let employees = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 27,
        joinedDate: 'December 15, 2017' 
    },
    {
        firstName: 'Ana',
        lastName: 'Rosy',
        age: 25,
        joinedDate: 'January 15, 2019'
    },
    {
        firstName: 'Zion',
        lastName: 'Albert',
        age: 30,
        joinedDate: 'February 15, 2011'
    }
];

employees.sort(function(a, b) {
    return a.age - b.age;
  });
  
  console.log(employees);


//2. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.

let numbers = [10, 23, 45, 67, -100];

function getLastElements(numbers, n) {
    if (n === undefined || n >= numbers.length) {
        return numbers[numbers.length - 1];
    } else if (n < 0) {
        return [];
    } else {
        return numbers.slice(-n);
    }
};

console.log(getLastElements(numbers, 3));

// 3. Write a JavaScript program that prints the elements of the following array. Use nested for loops.

const arr = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];

for (const i in arr) 
{
   console.log("row " + i);
   for (const j in arr[i]) 
     {
      console.log(" " + arr[i][j]);
     }
}

// 4. Write a JavaScript function to find the difference between two arrays.

function difference (array1, array2) {
    const temp = [];
    array1 = array1.toString().split(',').map(Number);
    array2 = array2.toString().split(',').map(Number);
    
    for (const i in array1) {
        if(array2.indexOf(array1[i]) === -1) temp.push(array1[i]);
    }
    for(i in array2) {
        if(array1.indexOf(array2[i]) === -1) temp.push(array2[i]);
    }
    return temp.sort((a,b) => a-b);
};

console.log(difference([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([10, 23, 34], [10, 23, 1, 10]));

// 5. Write a JavaScript function to filter false, null, 0 and blank values from an array.

function filter_array_values(arr) {
    arr = arr.filter(isEligible);
    return arr;
  }
  
  function isEligible(value) {
    if(value !== false || value !== null || value !== 0 || value !== "") {
      return value;
    }
  }
  
  console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
  console.log(filter_array_values(['', 0, 100, false, null, false, 0, 'Random', true]));