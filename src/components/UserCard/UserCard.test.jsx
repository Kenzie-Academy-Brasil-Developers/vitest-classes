import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import { UserCard } from ".";

const userMock = {
    name: "John Doe",
    email: "johndoe@email.com"
}

describe("UserCard", () => {
    test("should render correctly and contain name and email", () => {       
        render(<UserCard name={userMock.name} email={userMock.email} />);

        expect(screen.getByTestId("name")).toHaveTextContent(userMock.name);
        expect(screen.getByTestId("email")).toHaveTextContent(userMock.email);
    })

    test("should be able to render button and fire click event", () => {
        const handleClickMock = vi.fn();

        render(<UserCard name={userMock.name} email={userMock.email} onClick={handleClickMock} />);

        const button = screen.getByRole("button");

        expect(button).toBeInTheDocument();

        fireEvent.click(button);

        expect(handleClickMock).toBeCalledTimes(1);
    })
})