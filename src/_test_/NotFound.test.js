import { render,screen } from "@testing-library/react";
import NotFound from "../pages/NotFound";


describe("<NotFound />", () => {
    it("renders without crashing", () => {
        render(
           
            <NotFound />
         
        )
        expect(screen.getByText(/404 Error: Page Not Found!/i)).toBeInTheDocument
    })
})