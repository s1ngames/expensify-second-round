#firebase first section
ref- refference - reference to different places inside db
empty related to the root of the db

set()- set overwrite data becareful

database.ref().set({
    name:'Nir Beckermus',
    age: 26,
    isSingle: false,
    location:{
        city:'K.ata',
        country:'Israel'
    }
});

making action on database is ansyncronious meaning the code will continue to run while the request to db still processesd.
this is why we use Promises - to make a action after the action sucsedeed or not.


##writing (set, update,remove) to data base 
database.ref().set({
    name:'Nir Beckermus',
    age: 26,
    isSingle: false,
    location:{
        city:'K.ata',
        country:'Iskkraela'
    }
}).then(()=>{
    console.log('Data is saved');
}).catch((e)=>{
    console.log('This is faild.',e);
    
});

// database.ref().set('This is my data.');

// database.ref('age').set(30);
// database.ref('location/city').set('KiryatAtta');

database.ref('attributes').set({
        height: 173,
        weight: 90
}).then(()=>{
    console.log('data saved');
    
}).catch((e)=>{
    console.log('Attributes writing failed.',e);
});


// database.ref('isSingle').set(null); //like remove data

// #removing data
// database.ref('isSingle').remove().then(()=>{
//     console.log('data erased');
    
// }).catch((e)=>{
//     console.log('what a problem');
    
// });

//update - do action on more then one thing at a time
database.ref().update({//also if update key value not exsit it will be created, and put value to null also delete it
    name:'Mike',
    age: 40
});//only in root level, cant update nested objects

//to change nested-
database.ref().update({
    'location/city':'miz'
});


#fetch data.
//--once
// database.ref('location/city')
// .once('value') // once fetching data once, without watching for changes
// .then((snapshot)=>{
//     const val = snapshot.val();
//     console.log(val);
// })
// .catch((e)=>{
//     console.log('Error fetching data.', e);
// });


#fetch data with watch for changes
// database.ref().on('value', (snapshot)=>{
//     console.log(snapshot.val());
// });//not using promises because promise can run only one time

// setTimeout(() => {
//     database.ref('age').set(50);
// }, 3500);

#to stop from watching changes
database.ref().off();

if we want to remove single subscription:
// cont onValueChange = database.ref().on('value', (snapshot)=>{
//     console.log(snapshot.val());
// });

to stop from watching changes
database.ref().off(onValueChange);

#if we want to track for problems:
 cont onValueChange = database.ref().on('value', (snapshot)=>{
    console.log(snapshot.val());
 }, (e)=>{
     log(error)
 });


const onValueChange = database.ref().on('value',(snapshot)=>{
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
},(e)=>{
    console.log('something went wrong');
});

const onValueChange = database.ref().on('value',(snapshot)=>{
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
},(e)=>{
    console.log('something went wrong');
});

//some example
// database.ref().set({
//     name:'Nir Beckermus',
//     age: 29,
//     stressLevel: 6,
//     job: {
//         title: 'Softwer developer',
//         company: 'Beckermus'
//     },
//     location:{
//         city:'K.ata',
//         country:'Israel'
//     }
// }).then(()=>{
//     console.log('Data is saved');
// }).catch((e)=>{
//     console.log('This is faild.',e);
    
// });

#push
// database.ref('notes').push({ //generate random id and put the data inside
//     title:'Course Topics02',
//     body:'React native, angular'
// });

#events - except of value
//child_removed
database.ref('expenses').on('child_removed',(snapshot)=>{
    console.log(snapshot.key, snapshot.val());
});

//child_changed
database.ref('expenses').on('child_changed',(snapshot)=>{
    console.log(snapshot.key, snapshot.val());
});

//child_added - fires one time for everything already there, and again for every new one
database.ref('expenses').on('child_added',(snapshot)=>{
    console.log(snapshot.key, snapshot.val());
}); 


#leftovers (not important)
// database.ref('expenses')
// .once('value')
// .then((snapshot)=>{
//     const expenses = [];
//     snapshot.forEach((childSnapshot)=>{//key is the id, which is the snapshot component name, its not part of the object, and parse the rest of array with ...snapshot.val
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// const onValueChange  = database.ref('expenses').on('value',(snapshot)=>{
//     const expenses = [];
//     snapshot.forEach((childSnapshot)=>{//key is the id, which is the snapshot component name, its not part of the object, and parse the rest of array with ...snapshot.val
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });


// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: '109005',
//     createdAt: '999293392'
// });

