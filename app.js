const dog = {
  name: 'fido',
  color: 'brown',
  weight: 500,
};

console.log(dog.name);

dog.name = 'rover';

console.log(dog.name);

dog.name = 'spot';

if(dog.name === 'rover') {
  console.log('Red rover, come over');
} else if(dog.name === 'spot') {
  console.log('Howdy spot!');
} else {
  console.log('You are a normal dog');
  
}

const veggies = ['carrot', 'potato', 'turnip'];

for(let i = 0; i <= 2; i++) {
  console.log(veggies[i]);
}

function showAlert() {
  alert('Prepare for KITTEN AWESOMENESS!!!1!11');
}

function logHello() {
  console.log('Hello');
}