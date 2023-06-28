import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import ThemeToggler from "../ThemeToggler";

test("ThemeToggler is present", async () => {
  render(<ThemeToggler />);
  const toggleBtn = screen.queryByRole('button');
  const themeToggleBtn = screen.getByTestId('toggle-theme-btn')

  expect(toggleBtn).toBeInTheDocument();
  expect(themeToggleBtn).toBeInTheDocument();
});

// test('toggles the theme', async () => {
  
// });