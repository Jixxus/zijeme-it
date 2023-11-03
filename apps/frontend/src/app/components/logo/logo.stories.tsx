import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "./logo";

import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof Logo> = {
    component: Logo,
    title: "Logo",
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Primary = {
    args: {
        imageSrc: "",
        text: "",
    },
};

export const Heading: Story = {
    args: {
        imageSrc: "",
        text: "",
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        expect(canvas.getByText(/Welcome to Logo!/gi)).toBeTruthy();
    },
};
