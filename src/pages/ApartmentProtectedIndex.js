// import React from 'react'

// const ApartmentProtectedIndex = ({apt, user}) => {

//   const myApartments =apt?.filter(apartment => user?.id === apartment.user_id) 
//   return (
//     <>
//       <h1 className="text-2xl font-bold mb-4">Your listing:</h1>
//       {myApartments.map((apartment, index) => {
//       return(
//         <div key = {index} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         <div className="bg-white shadow overflow-hidden rounded-lg">
//           <img className="w-full" alt="Card" src={apartment.image} />
//           <div className="px-4 py-3">
//             <h3 className="text-lg font-medium text-gray-900">{apartment.price}</h3>
//             <p className="mt-1 text-sm text-gray-500">{apartment.street} {apartment.unit} {apartment.city}, {apartment.state}</p>
//           </div>
//           <div className="border-t border-gray-200 px-4 py-2">
//             <dl>
//               <div className="flex justify-between text-sm font-medium text-gray-600">
//                 <dt className="py-2">BR:</dt>
//                 <dd className="py-2">{apartment.bedrooms}</dd>
//               </div>
//               <div className="flex justify-between text-sm font-medium text-gray-600">
//                 <dt className="py-2">Bath:</dt>
//                 <dd className="py-2">{apartment.bathrooms}</dd>
//               </div>
//               <div className="flex justify-between text-sm font-medium text-gray-600">
//                 <dt className="py-2">Sqft:</dt>
//                 <dd className="py-2">{apartment.square_footage}</dd>
//               </div>
//               <div className="flex justify-between text-sm font-medium text-gray-600">
//                 <dt className="py-2">Pets:</dt>
//                 <dd className="py-2">{apartment.pets}</dd>
//               </div>
//             </dl>
//           </div>
//           <div className="px-4 py-2 bg-gray-50 text-right">
//             <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Card Link</a>
//           </div>
//         </div>
        
//       </div>
        
//       )
//     })}
    
//     </>
    
//   )
// }

// export default ApartmentProtectedIndex


