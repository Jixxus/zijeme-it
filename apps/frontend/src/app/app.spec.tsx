import { render } from "@testing-library/react";
import App from "./app";

describe("App", () => {
    it("should render successfully", () => {
        const { baseElement } = render(<App />);
        expect(baseElement).toBeTruthy();
    });

    it("should have an element with 'Žijeme IT' text inside", () => {
        const { getByText } = render(<App />);
        expect(getByText(/Žijeme IT/gi)).toBeTruthy();
    });
});
