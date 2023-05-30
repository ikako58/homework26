function isMultipleOfThree(number) {
  if (number % 3 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isMultipleOfThree(9));  
console.log(isMultipleOfThree(7));

function getCurrencySymbolFromCode(currencyCode) {
  switch (currencyCode) {
    case 'USD':
      return '$';
    case 'EUR':
      return '€';
    case 'GEL':
      return 'ლ';
    default:
      return currencyCode;
  }
}


console.log(getCurrencySymbolFromCode('USD'));  
console.log(getCurrencySymbolFromCode('EUR'));  
console.log(getCurrencySymbolFromCode('GEL'));  
console.log(getCurrencySymbolFromCode('GBP'));

function toUppercaseString(str) {
  return str.toUpperCase();
}

console.log(toUppercaseString('my name is joe'));

function calculateProfitPercentage(sellingPrice, costPrice) {
  const profit = sellingPrice - costPrice;
  const profitPercentage = (profit / costPrice) * 100;
  return profitPercentage;
}

console.log(calculateProfitPercentage(150, 100));

function filterEvenNumbers(numbers) {
  const filteredNumbers = numbers.filter(number => number % 2 === 0);
  return filteredNumbers;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterEvenNumbers(numbers));

function findObjectByName(objects, name) {
  const foundObject = objects.find(object => object.name === name);
  return foundObject;
}

const products = [
  { name: "Apple", price: 1 },
  { name: "Banana", price: 0.5 },
  { name: "Orange", price: 0.75 }
];
console.log(findObjectByName(products, "Banana")); 