// alert('Be prepared for some KITTEN AWESOMENESS!!!');

const dog = {
  name: 'fido',
  color: 'brown',
  weight: 500,
}

console.log(dog.name);

dog.name = 'rover'

console.log(dog.name);

dog.name = 'spot'

if(dog.name === 'rover') {
  console.log('Red rover, come over');
} else if(dog.name === 'spot') {
  console.log('Howdy spot!');
} else {
  console.log('You are a normal dog');
  
}

// Count up to ten

const veggies = ['carrot', 'potato', 'turnip']

for (let i = 0; i <= 2; i++) {
  console.log(veggies[i]);
}