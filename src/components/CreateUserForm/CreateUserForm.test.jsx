import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { UsersContext } from "../../providers/UsersContext";
import { CreateUserForm } from ".";

describe("CreateUserForm", () => {
   const createUserMock = vi.fn();

   test("should render correctly", () => {
      render(
         <UsersContext.Provider value={{ createUser: createUserMock }}>
            <CreateUserForm />
         </UsersContext.Provider>
      );

      const form = screen.getByRole("form");
      expect(form).toBeInTheDocument();

      const name = screen.getByPlaceholderText("Nome");
      const email = screen.getByPlaceholderText("E-mail");

      expect(name).toBeInTheDocument();
      expect(email).toBeInTheDocument();

      const submitButton = screen.getByText("Cadastrar usuário");
      expect(submitButton).toBeInTheDocument();
   });
});
