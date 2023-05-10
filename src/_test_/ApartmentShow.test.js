import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ApartmentShow from "../pages/ApartmentShow";

describe("<ApartmentShow />", () => {
    it("It should render apartments without crashing", () => {
      render(
        <BrowserRouter>
          <ApartmentShow/>
        </BrowserRouter>
      );
      const element = screen.getByText(/Show/i)
      expect(element).toBeInTheDocument();
    });
  });