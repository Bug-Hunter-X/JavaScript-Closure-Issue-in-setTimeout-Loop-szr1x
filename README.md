# JavaScript Closure Issue in setTimeout Loop

This repository demonstrates a common JavaScript bug related to closures and the `setTimeout` function within a loop.  The issue arises because closures in JavaScript lexically bind variables, leading to unexpected behavior when variables are modified within loops.

## The Bug

The `bug.js` file contains a function `myFunction` that uses `setTimeout` within a `for` loop.  Intuitively, one might expect the loop to print numbers from 0 to 9 after a delay. However, due to closure behavior, the code will print the value of `i` *after* the loop has completed (i.e. all 10 will be printed), not the value of `i` *at the time* setTimeout was called. This happens because the closure is created only after the loop is finished executing and the last value of `i` (which is 10) is captured, not the current value at each iteration.

## The Solution

The `bugSolution.js` file provides a solution using `let` to create a block scope for `i` or by using an immediately invoked function expression (IIFE) to create a new scope each time the loop runs.