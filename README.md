# Uncommon Recursive Function Bug in JavaScript

This repository demonstrates a subtle bug in a recursive JavaScript function. The function `foo` aims to calculate something based on its inputs `a` and `b`. However, it contains a flaw that causes unexpected behavior for certain inputs. This bug is not immediately obvious and highlights potential pitfalls in recursive function design.

## The Bug

The provided `bug.js` file contains the flawed function. The function does not properly handle the scenarios where either of the inputs is negative. This leads to an infinite recursion resulting in a stack overflow error.  This is an uncommon error that might not be immediately caught during testing unless specific edge cases are considered.

## The Solution

The `bugSolution.js` file provides a corrected version of the function that addresses the negative input issue.  The solution handles negative inputs by returning a result or handling it appropriately.

## How to Run

1. Clone this repository.
2. Navigate to the repository's directory.
3. Open `bug.js` and `bugSolution.js` in your preferred text editor.
4. Run the files using a JavaScript runtime (such as Node.js). You can observe the unexpected behavior of the bug and compare it to the corrected version.