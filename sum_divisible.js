function imperative(max){
    var count = 0;
    for (var i = 1; i <= max; i++){
        if (divisibleBy3(i))
            count += i;
    }
    return count;
}

function divisibleBy3(i) {
    return i % 3 == 0;
}

function functional(max){
    return sum(filter(from(1, max), divisibleBy3));
}

function filter(arr, fun){
    if (arr.length <= 0) {
        return arr;
	  }
    var elem = fun(arr[0]) ? [arr[0]] : [];
    if (arr.length == 1) {
        return elem;
	  }
	  return elem.concat(filter(arr.slice(1), fun));
}

function sum(arr){
    if (arr.length <= 0) {
        return 0;
	  }
    return arr[0] + sum(arr.slice(1));
}

function from(min, max){
    if (min == max){
        return [min];
    }
    return [min].concat(from(min+1, max));
}
