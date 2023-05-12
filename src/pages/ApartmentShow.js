import React from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const ApartmentShow = ({ apt, deleteApt }) => {

  const { id } = useParams()
  let selectedApt = apt?.find((apt) => apt.id === +id )

  if (!selectedApt) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <h1 className="text-2xl font-bold mb-4 ml-4 text-center">Your listing:</h1>
    <div className="flex justify-center">
      <div className="bg-white shadow overflow-hidden rounded-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <img className="w-full" alt="Card" src={selectedApt.image} />
        <div className="px-4 py-3">
          <h3 className="text-lg font-medium text-gray-900">{selectedApt.price}</h3>
          <p className="mt-1 text-sm text-gray-500">{selectedApt.street} {selectedApt.unit} {selectedApt.city}, {selectedApt.state}</p>
        </div>
        <div className="border-t border-gray-200 px-4 py-2">
          <dl>
            <div className="flex text-sm font-medium text-gray-600">
              <dt className="py-2">BR:</dt>
              <dd className="py-2 pl-2">{selectedApt.bedrooms}</dd>
            </div>
            <div className="flex text-sm font-medium text-gray-600">
              <dt className="py-2">Bath:</dt>
              <dd className="py-2 pl-2">{selectedApt.bathrooms}</dd>
            </div>
            <div className="flex text-sm font-medium text-gray-600">
              <dt className="py-2">Sqft:</dt>
              <dd className="py-2 pl-2">{selectedApt.square_footage}</dd>
            </div>
            <div className="flex text-sm font-medium text-gray-600">
              <dt className="py-2">Pets:</dt>
              <dd className="py-2 pl-2">{selectedApt.pets}</dd>
            </div>
          </dl>
          <div>        
            <NavLink
              to={`/apartmentedit/${selectedApt.id}`}
              className="mx-2"
            >
              <button className="backdrop bg-white bg-opacity-0 border border-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10 text-lg justify-center text-center">
                Edit Profile
              </button>
            </NavLink>
            <NavLink
          color="primary"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "3rem",
          }}
          to="/apartmentindex/"
          className="nav-link"
        >
          <button className="backdrop bg-white bg-opacity-0 border border-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10 text-lg" onClick={() => deleteApt(selectedApt.id)} name="destroyer">
            Delete Apartment
          </button>
        </NavLink>
          </div>
        </div>
       
      </div>  
    </div>
  </>
  
  )
}

export default ApartmentShow