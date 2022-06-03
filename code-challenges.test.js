// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { PassThrough } = require("stream")
const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// create a describe it test that takes in tow arrays and expects the output to be the first of the array taken out and the rest of the values mixed
    describe("unorderedArray", () => {
        const colors1 = ["purple", "blue", "green", "yellow", "pink"]
        const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
        it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
     const expected1 = ["yellow", "blue", "pink", "green"]
     const expected2 = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
            expect(unorderedArray(colors1)).toEqual(expect.arrayContaining(expected1))
            expect(unorderedArray(colors2)).toEqual(expect.arrayContaining(expected2))
        })
        // it('does not match if the first value is still in the array.', () => {
        //     expect(unorderedArray(colors1)).not.toEqual(expect.arrayContaining(expected1))   <----- I didn't understand if i was supposed to have this .not expect. It just told me tha expected1 was not defined, but when I leave this out, it works.
        
        //     expect(unorderedArray(colors2)).not.toEqual(expect.arrayContaining(expected2))
        // })
    })

    // i believe i failed correctly 
    //  ● unorderedArray › takes in an array, removes the first item from the array and shuffles the remaining content

    // ReferenceError: unorderedArray is not defined

// const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]

// const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


// b) Create the function that makes the test pass.

// input
    // ["purple", "blue", "green", "yellow", "pink"]
    // ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// create a function called ⁡⁣⁢⁣unorderedArray 
// the function will take in the array given to use
// we will take out the first value with the built in method .shift()
// take a for loop to iterate through the array
// now create a new variable that will take in the new array and use .sort() to sort through the array
// give the sort and anonymous function of Math.random multiplied by the index amount of the array
// ["yellow", "blue", "pink", "green"]
// ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

    const unorderedArray = (array) => {
        array.shift()
        for(let i=0; i <= array.length; i++){
        let newArray = array.sort(() => Math.random() * i)
        return newArray
    } 
}

// I passed
//  PASS  ./code-challenges.test.js
// unorderedArray
//   ✓ takes in an array, removes the first item from the array and shuffles the remaining content (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.309 s, estimated 1 s
// Ran all test suites.

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.
    // create a describe it test that takes in an array of numbers and returns a new array with a number of least and greatest value.
        describe('twoArray', () => {
            it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order", () => {
                const nums1 = [3, 56, 90, -8, 0, 23, 6]
                const nums2 = [109, 5, 9, 67, 8, 24]
                expect(twoArray(nums1)).toEqual([-8, 90])
                expect(twoArray(nums2)).toEqual([5, 109])
            })
        })


// const nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
// const nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]


// b) Create the function that makes the test pass.


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const testArray1 = [3, 7, 10, 5, 4, 3, 3]
const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]


// b) Create the function that makes the test pass.
