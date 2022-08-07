class SortedList {

  constructor() {
    this.length = 0;
    this.items = [];
  }
  add(x) {
   this.items.push(x)
   this.length = this.items.length;
   this.items.sort(function(a, b){return a - b});
  }
  get(i) {
    if(i < this.length && i > 0){
      return this.items[i]
    }
    throw new Error("OutOfBounds")

  }
  max() {
    if(this.length <= 0){
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items)
  }
  min() {
    if(this.length <= 0){
      throw new Error("EmptySortedList");
    }
    return Math.min(...this.items)

  }
  avg() {
    if(this.length <= 0){
      throw new Error("EmptySortedList");
    }
    return this.sum()/this.length
  }

  sum() {
    let sum = 0;
    this.items.forEach(element => {
      sum+=element
    });
    return sum;
  }
  
};

module.exports = SortedList;

let l = new SortedList();

for(var i = 0; i < 5; i++){
  l.add(i);
}

console.log(l.avg());

