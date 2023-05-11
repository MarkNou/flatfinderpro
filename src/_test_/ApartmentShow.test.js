import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ApartmentShow from "../pages/ApartmentShow";
import mockApartments from "../mockApartments";

describe("<ApartmentShow />", () => {
  it("It should render apartments without crashing", () => {
    render(
      <MemoryRouter initialEntries={["/apartmentshow/1"]}>
        <Routes>
          <Route
            path="/apartmentshow/:id"
            element={<ApartmentShow apt={mockApartments} />}
          />
        </Routes>
      </MemoryRouter>
    );
    const element = screen.getByText(/Your listing:/i);
    expect(element).toBeInTheDocument();
  });
});