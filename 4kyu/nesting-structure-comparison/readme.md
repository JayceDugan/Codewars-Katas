# Nesting Structure Comparison

https://www.codewars.com/kata/nesting-structure-comparison/javascript

## Description:

Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structure as the first array.

## Example:

`
 // should return true
[ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );
[ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );

 // should return false
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );

// should return true
[ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] );

// should return false
[ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );
`

For your convenience, there is already a function 'isArray(o)' declared and defined that returns true if its argument is an array, false otherwise.

