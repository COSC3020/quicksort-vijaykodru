[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/ZLHpg3lN)
# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.


The worst-case runtime analysis for the written code results in a time complexity of $\Theta(n^2)$, where n represents the number of elements in the array. This scenario occurs when the array is sorted in descending order. In such cases, the partitioning function repeatedly selects the first element as the pivot, resulting in unbalanced partitions. Despite the constant-time operations of the swap function and if statements, the algorithm traverses through n elements n times to sort the array. This behavior leads to a quadratic time complexity, $\Theta(n^2)$.


Reference: 

Looked at 'quicksort-swilso59-1' for the partition part of the code, as mine wouldn't run initially. 
Geeks for geeks
Stack Overflow