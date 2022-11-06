import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'
import {BrowserRouter as Router} from 'react-router-dom';
import Users from "../Users";

afterEach(() => {
    cleanup(); 
});
  
describe("Users View" ,() => {
    const setToggle= jest.fn();

    render(
        <Router>
            <Users setToggle={setToggle} />
        </Router>
    );
    const users = screen.getByTestId("users");
      
    test("Valid Rendering", () => {
        expect(users).toBeInTheDocument();
    })
});