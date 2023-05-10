import { render, screen } from "@testing-library/react";
import Header from '../components/Header'
import { BrowserRouter } from "react-router-dom";


describe("<Header/>", () => {
  it("It should render for the user", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const element = screen.getByText(/Hello World/i)
    expect(element).toBeInTheDocument();
  });
});