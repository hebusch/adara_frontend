import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'
import Registered from "../Registered";

afterEach(() => {
    cleanup(); 
});
  
describe("Registered Component" ,() => {
    const setToggle= jest.fn();

    render(<Registered setToggle={setToggle} />);
    const registered = screen.getByTestId("registered");
      
    test("Valid Rendering", () => {
        expect(registered).toBeInTheDocument();
    })
});