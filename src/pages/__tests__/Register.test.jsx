import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'
import {BrowserRouter as Router} from 'react-router-dom';
import Register from "../Register";

afterEach(() => {
    cleanup(); 
});
  
describe("Register View" ,() => {
    const setToggle= jest.fn();

    render(
        <Router>
            <Register setToggle={setToggle} />
        </Router>
    );
    const register = screen.getByTestId("register");
      
    test("Valid Rendering", () => {
        expect(register).toBeInTheDocument();
    })
});