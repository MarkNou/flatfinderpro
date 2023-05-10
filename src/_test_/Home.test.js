import { render,screen } from "@testing-library/react";
import Home from "../pages/Home";


describe("<Home />", () => {
    it("renders without crashing", () => {
        render(
           
            <Home />
         
        )
        expect(screen.getByText(/Welcome to FlatFinder Pro/i)).toBeInTheDocument
    })
})