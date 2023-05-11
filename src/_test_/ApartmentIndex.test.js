import { render, screen } from "@testing-library/react";

import ApartmentIndex from "../pages/ApartmentIndex";

describe("<ApartmentIndex />", () => {
    it("It should render without crashing", () => {
      render(
        
          <ApartmentIndex/>
        
      );
      
      const element = screen.getByText(/View all listings/i)
      expect(element).toBeInTheDocument();
   

      
    });
  });