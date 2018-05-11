console.log('destructuring.js');

//object destructering
const person = {
    name : 'Nir',
    age: 28,
    location : {
        city :'Israel',
        temp : 30
    }
};

const {name : firstName = 'Anonymous', age} = person;//name have deafult and rename
const {temp : temprature, city} = person.location;//rename and accessing subobject

console.log(`${firstName} is ${age}.`);

if(temprature && city){
    console.log(`its ${temprature} in ${city}`);
}

//array destructering
const address = ['6 V.Kandinsky',undefined,'Israel','38900'];
// const [street,myCity,state,zip] = address;
// const [street,myCity,state] = address;// give up on rest of variables, just not mention
const [,myCity ='Kyriat Atta',state] = address; //give up on first varibales, leave the comma
console.log(`You are in ${myCity}, ${state}.`);


// const add = (data)=>{
//     return data.a + data.b;
// };
// console.log(add({a:1,b:12}));

// const add = ({a,b},c)=>{
//     return a + b+c;
// };
// console.log(add({a:1,b:12},100));