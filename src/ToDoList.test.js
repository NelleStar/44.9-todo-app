import { render, fireEvent } from "@testing-library/react";
import ToDoList from "./ToDoList";

// smoke test
it("renders without crashing", function () {
  render(<ToDoList />);
});

// snapshot test
it("matches snapshot", function () {
  const { asFragment } = render(<ToDoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add new item", function () {
  const { queryByText, getByLabelText } = render(<ToDoList />);
  const input = getByLabelText("ToDo:");
  const btn = queryByText("Add Item");
  expect(queryByText("Walk Dog")).not.toBeInTheDocument();
  fireEvent.change(input, { target: { value: "Walk Dog" } });
  fireEvent.click(btn);
  expect(queryByText("Walk Dog")).toBeInTheDocument();
});
