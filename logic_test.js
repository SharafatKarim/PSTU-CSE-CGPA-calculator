import {SEM_INFO} from './variables.js';

// console.log(SEM_INFO.first) 

// iterate over the object

for (const key in SEM_INFO) {
  // capitalize key like, abcd -> Abcd
  const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
  console.log(capitalizedKey)
  // console.log(SEM_INFO[key])
}