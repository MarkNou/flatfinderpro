import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ApartmentIndex from "../pages/ApartmentIndex";

describe("<ApartmentIndex />", () => {
    it("It should render without crashing", () => {
      render(
        <BrowserRouter>
          <ApartmentIndex/>
        </BrowserRouter>
      );
      const element = screen.getByText(/Apartments/i)
      expect(element).toBeInTheDocument();
    });
  });