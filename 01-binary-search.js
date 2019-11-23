const binarySearch = (list, item) => {
  // Establish initial lowest/highest positions
  let low = 0
  let high = list.length - 1

  // While we haven't narrowed down elements to last element
  while ( low <= high ) {
    // Find midpoint
    let mid = Math.floor(( low + high ) / 2)
    let guess = list[mid]

    // Check midpoint for possibilities
    if ( guess === item ) {
      return mid
    }
    if ( guess > item ) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  // If item does not exist, return null
  return null
}

const myList = [1, 3, 5, 7, 9]

console.log(binarySearch(myList, 3)) // => 1
console.log(binarySearch(myList, -1)) // => null
