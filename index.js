fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },
    each: function(collection, func) {
      for(index in collection) {
        func(collection[index], index, collection)
      }
      return collection
    },
    map: function(collection, func) {
      let output = []
      for(index in collection) {
        output.push(func(collection[index], index, collection))
      }
      return output
    },
    reduce: function(collection, iteratee, acc) {
      let total = acc
      for(index in collection) {
        total = iteratee(total, collection[index], collection)
      }
      return total
    },
    find: function(collection, predicate) {
      for(index in collection) {
        if (predicate(collection[index])) {
          return true
          break
        }
      }
      return false
    },
    filter: function(collection, predicate) {
      let output = []
      for(index in collection) {
        if (predicate(collection[index])) {
          output.push(collection[index])
        }
      }
      return output
    },
    size: function(collection) {
      let output = 0
      for(index in collection) {
        output++
      }
      return output
    },
    first: function(collection, n) {
      n = n || 1;
      if (n === 1) {
        return collection[0]
      } else {
        return collection.slice(0,n)
      }
    },
    last: function(collection, n) {
      n = n || 1;
      if (n === 1) {
        return collection[collection.length - 1]
      } else {
        return collection.slice(collection.length - n)
      }
    },
    compact: function(collection) {
      let output = []
      for(index in collection) {
        if (collection[index]) {
          output.push(collection[index])
        }
      }
      return output
    },
    sortBy: function(collection, func) {
      let output = []
      let copy = [...collection]
      let smallest
      let test_smallest
      while (output.length < collection.length) {
        test_smallest = func(copy[0])
        smallest = copy[0]
        for(index in copy) {
          if (func(copy[index]) < test_smallest) {
            test_smallest = func(copy[index])
            smallest = copy[index]
          }
        }
        output.push(smallest)
        copy.splice(copy.indexOf(smallest), 1)
      }
      return output
    },
    flatten: function(collection, bool) {
      let output = []
      for(index in collection) {
        if (Array.isArray(collection[index])) {
          output.push(...collection[index])
        } else {
          output.push(collection[index])
        }
      }
      if (!bool) {
        let flag = true
        while (flag) {
          flag = false
          temp_out = []
          for(index in output) {
            if (Array.isArray(output[index])) {
              temp_out.push(...output[index])
              flag = true
            } else {
              temp_out.push(output[index])
            }
          }
          output = [...temp_out]
        }
      }
      return output
    },
    uniq: function(array, isSorted, iteratee){
      let output = []
      let values = []
      if (isSorted === false){
        for(index in array) {
          if (!values.includes(iteratee(array[index]))) {
            values.push(iteratee(array[index]))
            output.push(array[index])
          }
        }
      } else if (isSorted === true){
      } else {
        for(index in array) {
          if (!output.includes(array[index])) {
            output.push(array[index])
          }
        }
      }
      return output
    },
    keys: function(obj) {
      let output = []
      for(key in obj) {
        output.push(key)
      }
      return output
    },
    values: function(obj) {
      let output = []
      for(key in obj) {
        output.push(obj[key])
      }
      return output
    },
    functions: function(obj) {
      let output = []
      for(key in obj) {
        if (typeof(obj[key]) === "function")
        output.push(obj[key])
      }
      return output.sort()
    }
  }
})()
fi.libraryMethod()
