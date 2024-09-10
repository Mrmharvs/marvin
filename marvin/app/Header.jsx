// import React from 'react'
// import{data} from './Data';

// console.log(data);

// // const filter = data.filter((data)=> data.profession === "Software engineer");

// // console.log(filter);

// const Header = () => {
//   return <div>
//     {data.map((data, key) => (
// <li key={key}>{data.name}</li>
//     ))}
//     </div>;
// }

// export default Header

import React from 'react'
import {data} from "./data"

console.log(data);

const filter = data.filter ((data)=> data.profession === "Software engineer");

console.log(filter);

const Header = () => {
  return <div>
        {data.map((data, key) => (
    <li key={key}>{data.name}</li>
     ))}
    </div>;
}

export default Header