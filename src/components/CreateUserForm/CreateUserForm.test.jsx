import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { UsersContext } from "../../providers/UsersContext";
import { CreateUserForm } from ".";

describe("CreateUserForm", () => {
   const createUserMock = vi.fn();

   beforeEach(() => {
      render(
         <UsersContext.Provider value={{ createUser: createUserMock }}>
            <CreateUserForm />
         </UsersContext.Provider>
      );
   });

   test("should render correctly", () => {
      const form = screen.getByRole("form");
      expect(form).toBeInTheDocument();

      const name = screen.getByPlaceholderText("Nome");
      const email = screen.getByPlaceholderText("E-mail");

      expect(name).toBeInTheDocument();
      expect(email).toBeInTheDocument();

      const submitButton = screen.getByText("Cadastrar usuário");
      expect(submitButton).toBeInTheDocument();
   });

   test("inputs are working correctly", () => {
      const userMock = {
         name: "John doe",
         email: "johndoe@email.com",
      };

      const name = screen.getByPlaceholderText("Nome");
      const email = screen.getByPlaceholderText("E-mail");

      fireEvent.change(name, { target: { value: userMock.name } });
      fireEvent.change(email, { target: { value: userMock.email } });

      expect(name).toHaveValue(userMock.name);
      expect(email).toHaveValue(userMock.email);
   });

   test("submit function should fire correctly", () => {
    const submitButton = screen.getByText("Cadastrar usuário");
    fireEvent.click(submitButton);

    expect(createUserMock).toBeCalledTimes(1);
   });
});
