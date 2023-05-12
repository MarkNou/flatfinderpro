import React from "react";
import { Card, CardBody, CardLink, CardText, CardTitle, ListGroup, ListGroupItem } from 'reactstrap'
import { NavLink } from "react-router-dom";

const ApartmentIndex = ({ apt, id }) => {
  return (
    <>
    <h1 className="text-3xl font-bold mb-8 text-center pt-6"> View all listings </h1>
    <div className="grid grid-cols-3 gap-8">
      {apt?.map(({ apt, street, unit, city, state, bedrooms, bathrooms, price, pets, image, square_footage, id }) => {
        return (
          <div key={apt} className="shadow-lg rounded-lg">
            <Card>
              <img alt="Card" src={ image } className="rounded-t-lg"/>
              <CardBody>
                <CardTitle tag="h5" className="text-lg font-bold text-gray-900 mb-2"> {price} </CardTitle>
                <CardText className="text-gray-700 mb-4">{ street } { unit } { city }, { state }</CardText>
              </CardBody>
              <ListGroup flush>
                <ListGroupItem className="text-gray-700">BR: { bedrooms }</ListGroupItem>
                <ListGroupItem className="text-gray-700">Bath: { bathrooms }</ListGroupItem>
                <ListGroupItem className="text-gray-700">Sqft: { square_footage }</ListGroupItem>
                <ListGroupItem className="text-gray-700">Pets: { pets }</ListGroupItem>
              </ListGroup>
              <CardBody>
                <CardLink href="#" className="text-indigo-600 hover:text-indigo-900"><NavLink to={`/apartmentshow/${id}`}>
                  <button className="backdrop bg-white bg-opacity-0 border border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10 text-lg">
                    View Profile
                  </button>
                </NavLink></CardLink>
    
              </CardBody>
            </Card>
          </div>
        )
      })}
    </div>
  </>
);
};









export default ApartmentIndex;












 