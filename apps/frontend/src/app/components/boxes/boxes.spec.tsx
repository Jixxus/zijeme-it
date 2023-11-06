import { render } from "@testing-library/react";

import BoxesComponent from "./boxes";

describe("Boxes", () => {
    it("should render successfully", () => {
        const { baseElement } = render(<BoxesComponent />);
        expect(baseElement).toBeTruthy();
    });
});
