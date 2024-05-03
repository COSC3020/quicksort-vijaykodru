function quicksort(array) {
    if (array.length <= 1) {
        return array; //return the array if the base case exists
    }
    const stack = []; 
    stack.push(0); 
    stack.push(array.length - 1); 

    while (stack.length > 0) {
        const high = stack.pop();
        const low = stack.pop();

        if (low < high) {
            const pivotIndex = partition(array, low, high);
            if (pivotIndex - 1 > low) {
                stack.push(low);
                stack.push(pivotIndex - 1);
            }
            if (pivotIndex + 1 < high) {
                stack.push(pivotIndex + 1);
                stack.push(high);
            }
        }
    }
    return array;
}

function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function partition(array, low, high) {
    let pivot = low;
    for (let i = low + 1; i <= high; i++) {
        if (array[i] < array[low]) {
            swap(array, ++pivot, i);
        }
    }
    swap(array, low, pivot);
    return pivot;
}