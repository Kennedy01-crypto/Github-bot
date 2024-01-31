const jsonfile = require('jsonfile');
// import fetch from "node-fetch";
const moment = require('moment');
const simpleGit = require('simple-git');
// const random = require('random');
const FILE_PATH = './data.json';

// const makeCommit = n =>{
//     const x = random.int(0,54);
//     const y = random.int(0,6);
//     const DATE = moment().subtract(1,'y').add(1, 'd')
//                         .add(x, 'w').add(y, 'd').format();
//     const data = {
//         date: DATE
//     }
//     jsonfile.writeFile(FILE_PATH, data, ()=>{
//         simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE});
//     });
// }
// makeCommit(100);


const randomPromise = import('random');
randomPromise.then(random => {
    // const x = random.default(0, 20);
    // Rest of your code that uses 'x'
    const makeCommit = n =>{
    if(n===0) return simpleGit().push();
    const x = Math.random(0,54);
    const y = Math.random(0,6);
    const DATE = moment().subtract(1,'y').add(1, 'd')
                        .add(x, 'w').add(y, 'd').format();
    const data = {
        date: DATE
    }
    console.log(DATE);
    jsonfile.writeFile(FILE_PATH, data, ()=>{
        simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE },
        makeCommit.bind(this, --n));
    });
    }
    makeCommit(500);    
}).catch(error => {
  console.error('Failed to import "random" module:', error);
});
