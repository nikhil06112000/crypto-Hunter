import React, { useMemo, useState } from 'react'


// const Navbar = () => {
//     const [height, setHeight] = useState(70);
//     const [weight, setWeight] = useState(180)

//     const handleWeight = (e) => {
//         setWeight(e.target.value);
//     }

//     const handleHeight = (e) => {
//         setHeight(e.target.value);
//     }
//     const output = useMemo(() => {
//         const calHeight = height / 100;
//         return (weight / (calHeight * calHeight))
//     }, [weight, height])
//     return (
//         <div>
//             <h1>BMI CALCULATOR</h1>
//             <br />
//             <span>
//                 <p>Weight :{weight}</p>
//                 <input type='range'
//                     step='1'
//                     min='30'
//                     max='100'
//                     onChange={handleWeight}

//                 />
//             </span>
//             <span>
//                 <p>Height :{height}</p>
//                 <input type='range'
//                     onChange={handleHeight}


//                 />
//             </span>
//             <p>your BMI </p>
//             <h1>{output}</h1>


//         </div>
//     )
// }


// const Navbar = () => {
//     const [weight, setWeight] = useState(0)

//     const handleChange = (e) =>{
//         setWeight(e.target.value);

//     }
//   return (
//     <div>

//           <h1>BMI CALCULATOR</h1>
//           <span>
//           <p>Weight : {weight}</p>
//           <input  type='range'
//           min="1"
//           max="100"
//           onChange={handleChange}
          
//           />
//           </span>
//           <span>
//           <p>height : 100 cm</p>
//           <input  type='range'/>
//           </span>
         
//     </div>
//   )
// }

// export default Navbar


