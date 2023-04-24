import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import BookingDetail from "./pages/BookingDetail";
import "@testing-library/jest-dom";

// describe("Feedback Form", () => {
//   test("Form button", () => {
//     const handleSubmit = jest.fn();
//     render(<BookingDetail onSubmit={handleSubmit} />);

//     const confirmButton = screen.getByRole("button");
//     fireEvent.click(confirmButton);

//     expect(handleSubmit).not.toHaveBeenCalled();
//     expect(confirmButton).toHaveAttribute("disabled");
//   });
// });

test("is heading present", () => {
  render(<BookingDetail />);
  const headingElement = screen.getByText("Your Contact");
  expect(headingElement).toBeInTheDocument();
});

test("does reducer work as expected", () => {
  render(<BookingDetail />);
  const confirmButton = screen.getByRole("button");
  fireEvent.click(confirmButton);
  expect(confirmButton).toHaveBeenCalled();
});
