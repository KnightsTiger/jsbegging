
var numbers = [1,2,"three"];
numbers.forEach(function(numbers){
  console.log(numbers);
});


var person = {
  name:"saman",
  age : 30,
  kids:['kuara','lalma'],
  address: {
    gate:24,
    street:"main",
    city:"colombo"
  },
  //adding a method
  fastlevel:function calculate(){
    //getting variables
    var final = this.age;
    return final;
  }
}
console.log(person.name);
console.log(person.kids[0]);
console.log(person.address.gate);
console.log(person.fastlevel());
