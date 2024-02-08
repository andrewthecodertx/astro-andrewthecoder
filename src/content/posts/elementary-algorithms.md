---
title: 'A Basic Look at Algorithms'
blurb: 'Explore the fundamentals of algorithms in our newest blog post. From basic concepts to real-world applications, discover how algorithms shape our digital world. Get insights and clarity on this essential topic.'
date: 2024-01-10
author: andrew-s-erwin # references `src/content/authors/andrew-s-erwin.json`
image: {src: './images/algorithms.jpg', alt: 'basic algorithms'}
tags: ['computer science', 'algorithms']
category: tech
slug: a-basic-look-at-algorithms
---

## Exploring Elementary Algorithms

### Introduction

I am old enough to remember a time when #algorithm wasn't a bad word.
Today there are entire college courses and multi thousand dollar boot camps
targeting algorithms specifically. Yes, I know that they tend to throw in
data structures and some minor computer science! Algorithms are an essential
part of computer science.  

Put simply, an algorithm is a set of instructions meant to produce or
reproduce some outcome. Some simple examples of algorithms that you might
not even know you do include sorting papers and following a recipe in
the kitchen. When you sort files or papers in your home office, you are
implementing an algorithm. That is, you are following a set of steps to
produce an outcome. This is a great example because we can see
that there are many different specifications that an algorithm can use! How will
you sort your files? By date? Alphabetically? Endless possibilities. And of course,
following a recipe you need certain ingredients and combine in certain ways at certain
times. And food recipes range from very simple, bordering on painfully obvious, to
flat out impossible without some measure of skill.  

### Some Examples

One of the oldest known algorithms was developed by Euclid in around 300
B.C. It is a method for computing the greatest common divisor of two
integers. And it just has a few simple steps. And that is really the point.
The core concept of an algorithm is break down complex task into its
simpler constituent parts. In plain English the algorithm goes something like this:

> a and b equal some integers. If a = b, you're done. If a is greater
> than b, subtract b and check for equality again. If b is greater
> than a, subtract a and check for equality again. Eventually a will
> equal b and that is the GCD.

In Microsoft BASIC (my first programming language), it would look
something like this:

```plaintext
10 A = 10, B = 16
20 IF A = B THEN PRINT A: END
30 IF A > B THEN A = A - B: GOTO 20
40 IF B > A THEN B = B - A: GOTO 20
```

That's it. If you are interested in something more sophisticated/low level,
here is an implementation of that very algorithm
in C:

```c
#include <stdio.h>

int euclids_algorithm(int a, int b) {
    int remainder;
    while (b != 0) {
        remainder = a % b;
        a = b;
        b = remainder;
    }
    return a;
}

int main() {
    int num1, num2;
    printf("Enter first number: ");
    scanf("%d", &num1);
    printf("Enter second number: ");
    scanf("%d", &num2);
    int gcd = euclids_algorithm(num1, num2);
    printf("The GCD of %d and %d is %d\n", num1, num2, gcd);
    return 0;
}
```

How about one more. Here is the same thing in Python:

```python
def euclids_algorithm(a, b):
    while b != 0:
        remainder = a % b
        a = b
        b = remainder
    return a

# Example usage
num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
gcd = euclids_algorithm(num1, num2)
print(f"The GCD of {num1} and {num2} is {gcd}")
```

And if you know some of the tricks of your given language, you can simplify!
Here is a quick and dirty implementation of our algorithm in OCaml:

```python
let rec euclids_algorithm : int -> int -> int = fun a b ->
    if b = 0 then a
    else euclids_algorithm b (a mod b)

let () =
    let num1, num2 = Scanf.scanf "%d %d" (fun x y -> x, y) in
    let gcd_result = euclids_algorithm num1 num2 in
    Printf.printf "The GCD of %d and %d is %d\n" num1 num2 gcd_result
```

This uses recursion, which is what I want to get into next!

### Recursion

Recursion is a powerful technique used in many algorithms. The simplest way to
explain recursion is a function that runs itself. The most popular implementation
of recursion, at least in terms of teaching, is Fibonacci generators. Some algorithms
such as backtracking (sometimes known as brute force) make use of recursion.
Here is a simple example in Javascript:

```javascript
function fibonacciRecursive(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    }
}

// Example usage
const numTerms = parseInt(prompt("Enter the number of Fibonacci terms: "));
for (let i = 0; i < numTerms; i++) {
    console.log(`Fibonacci(${i}) = ${fibonacciRecursive(i)}`);
}
```
