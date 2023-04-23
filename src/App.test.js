import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import BookingDetail from "./pages/BookingDetail";

describe("Feedback Form", () => {
  test("Form button", () => {
    const handleSubmit = jest.fn();
    render(<BookingDetail onSubmit={handleSubmit} />);

    const confirmButton = screen.getByRole("button");
    fireEvent.click(confirmButton);

    expect(handleSubmit).not.toHaveBeenCalled();
    expect(confirmButton).toHaveAttribute("disabled");
  });
});
