// Code your solution here!

function printString(string) {
    console.log(string[0])
    if (string.length > 1) {
        const substr = string.substring(1, string.length);
        printString(substr)
    } else {
        return true
    }
}

function reverseString(string) {
    if (string === "") {
        return ""
    } else {
        let popped = string.charAt(string.length - 1)
        return popped + reverseString(string.substring(0, string.length - 1))
    }
}

function isPalindrome(string) {
    if (string.length < 2) {
        return true
    } 
    
    if (string[0] === string[string.length - 1]) {
        return isPalindrome(string.substring(1, string.length - 1))
    } else {
        return false
    }
}

function addUpTo(array, idx) {
    if (idx > 0) {
        return array[idx] + addUpTo(array, idx - 1)
    } else {
        return array[0]
    }
}

function maxOf(array) {
    if (array.length === 1) {
        return array[0]
    }
    
    if (array[0] < array[1]) {
        array.shift()
        return maxOf(array)
    } else {
        array.splice(1,1)
        return maxOf(array)
    }
}

function includesNumber(array, number) {
    if (array.length === 0) {
        return false
    } else if (array[0] === number) {
        return true
    } else {
        array.shift()
        return includesNumber(array, number)
    }
}

console.log(includesNumber([1, 4, 5, 3], 5))