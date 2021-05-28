// Farenheit to celsius task

const convertFahrToCelsius = (f) => {
    const type = Object.prototype.toString.call(f).slice(1,-1).split(' ')[1];

    
    if ((type === "Number") || ((type === "String") && !isNaN(Number(f)))) {
        return Number(((f - 32) * 5/9).toFixed(4));
    } else {
        return `${JSON.stringify(f).replace(/\"/g, "'")} is not a valid number but a/an ${type}`;
    }
}

// CheckYuGiOh TASK

const checkYuGiHo = (n)=>{
        if (Array.isArray(n)) {
        return `[${n}] Is not valid parameter but a/an array.`
    }
        if(typeof n === "object") {
        let result = JSON.stringify(n)
        return '${result}: is not a valid parameter but a/an ${typeof(n)}';
    }

        if(typeof n === "string" || typeof n === "boolean" || typeof n === 'undefined' || typeof n === "object" ||
        typeof n === "function") {
        var topping = JSON.stringify(n)
        return `invalid parameter: ${topping} is a/an ${typeof(n)}`; 

    }else {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 ===0 && i%3===0 && i % 5 === 0) {
        arr.push('yu-gi-ho')
        } else if (i%2 ===0 && i% 3===0) {
          arr.push('yu-gi')
        } else if (i % 3===0 && i % 5 === 0) {
        arr.push('yu-ho');
        } else if (i%2===0 && i%3===0) {
        arr.push('gi-ho')
        } else if (i%2===0 && i%5===0) {
        arr.push('yu-gi')
        } else if (i%3===0 && i%5===0) {
          arr.push('yu-ho')
        } else if (i%2===0 ) {
        arr.push('yu')
        } else if (i % 3 === 0) {
        arr.push('gi')
        } else if(i % 5===0) {
        arr.push('ho');
        } else {
        arr.push(i)
      }
    }
    return arr;
  
  }
}
  console.log(checkYuGiHo(30))
  console.log(checkYuGiHo(10))
  console.log(checkYuGiHo("fizzbuzz is meh"))
