import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'
import Navbar from "../Navbar";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(() => {
    cleanup(); 
});
  
describe("Navbar Component" ,() => {
    const setToggle= jest.fn();

    render(
        <Router>
            <Navbar setToggle={setToggle} />
        </Router>
    );

    const navbar = screen.getByTestId("navbar");
      
    test("Valid Rendering", () => {
        expect(navbar).toBeInTheDocument();
    })
});