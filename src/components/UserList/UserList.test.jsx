import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { UserList } from ".";

const userListMock = [
   { id: 1, name: "John Doe", email: "johndoe@email.com" },
   { id: 2, name: "Otavio", email: "otavio@email.com" },
];

describe("UserList", () => {
   test("should render correctly with all the itens", () => {
      render(<UserList userList={userListMock} />);

      const items = screen.getAllByRole("listitem");
      expect(items).toHaveLength(2);

      items.forEach((item, index) => {
         expect(item).toHaveTextContent(userListMock[index].name);
         expect(item).toHaveTextContent(userListMock[index].email);
      });
   });
});
