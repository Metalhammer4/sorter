class Sorter {
  
  constructor() {
      this.arr = [];
      this.compareNumbers = (a, b) => a - b;
      this.compareFunction = this.compareNumbers;
      const AGE_COMPARATOR = (left, right) => left.age - right.age;
      const REVERSE_COMPARATOR = (left, right) => right - left;
      const STRINGIFY_COMPARATOR = (left, right) => JSON.stringify(left, null, 2).length - JSON.stringify(right, null, 2).length; 
  }
  
  add(element) {
      this.arr.push(element); 
  }

  at(index) {
      return this.arr[index];
  }

  get length() {
      return this.arr.length;
  }

  toArray() {
      return this.arr.slice();
  }

  sort(indices) {  
    
    var temp =[];
    indices.sort(this.compareNumbers);

    for (var i = 0; i < indices.length; i++) {
        if (indices[i] >= 0 && indices[i] < this.arr.length){
            temp.push(this.arr[ indices[i] ]);
        }
        else{
            console.log("Index: " + indices[i] + " outs of range!");
        }
    }
    
    var tempSize = temp.length;
    temp.sort(this.compareFunction);
    
    for (var i = 0; i < tempSize; i++) {
        this.arr[ indices[i] ] = temp.shift();
    }
  }

  setComparator(compareFunction) {
      if (compareFunction != null){
          this.compareFunction = compareFunction;
      } else {
          this.compareFunction = this.compareNumbers;
      }
  }

}

module.exports = Sorter;