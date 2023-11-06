import { render } from "@testing-library/react";

import BoxComponent from "./box";

describe("Box", () => {
    it("should render successfully", () => {
        const { baseElement } = render(
            <BoxComponent
                box={{ id: 0, x: 0, y: 0, z: 0, scale: 1, color: "000000" }}
            />
        );
        expect(baseElement).toBeTruthy();
    });
});
