import { render,screen } from "@testing-library/react";
import Footer from "../components/Footer";
import { BrowserRouter } from "react-router-dom";

describe("<Footer />", () => {
    it("renders without crashing", () => {
        render(
            <BrowserRouter>
            <Footer />
            </BrowserRouter>
        )
        expect(screen.getByText(/developed by JEMV/i)).toBeInTheDocument
    })
})