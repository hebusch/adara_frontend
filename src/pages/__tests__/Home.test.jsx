import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'
import Home from "../Home";
import {BrowserRouter as Router} from 'react-router-dom';

afterEach(() => {
    cleanup(); 
});
  
describe("Home View" ,() => {
    const setToggle= jest.fn();

    render(
        <Router>
            <Home setToggle={setToggle} />
        </Router>
    );
    const home = screen.getByTestId("home");
      
    test("Valid Rendering", () => {
        expect(home).toBeInTheDocument();
    })
});