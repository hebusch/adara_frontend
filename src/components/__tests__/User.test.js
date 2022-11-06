import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'
import User from "../User";

afterEach(() => {
    cleanup(); 
})
  
describe("User Component" ,() => {
    const setToggle= jest.fn();
    const validUser = {
        name: "Test",
        lastName: "Test",
        email: "test@example.com",
        gender: "male",
        birthday: "1990-01-01",
        region: "Test",
        comuna: "Test",
        shoe_size: "42",
    }
    const invalidUser = {}
      
    test("User Valid Rendering", () => {
        render(<User user={validUser} setToggle={setToggle} />);
        const user = screen.getByTestId("valid-user");
        expect(user).toBeInTheDocument();
    })
  
    test("User Invalid Rendering", () => {
        render(<User user={invalidUser} setToggle={setToggle} />);
        const notUser = screen.getByTestId("invalid-user");
        expect(notUser).toBeInTheDocument();
    })
})
