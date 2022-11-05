import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'
import NavButton from "../NavButton";

afterEach(() => {
    cleanup(); 
});
  
describe("NavButton Component" ,() => {
    const setToggle= jest.fn();

    render(<NavButton setToggle={setToggle} />);
    const navbutton = screen.getByTestId("navbutton");
      
    test("Valid Rendering", () => {
        expect(navbutton).toBeInTheDocument();
    })
});