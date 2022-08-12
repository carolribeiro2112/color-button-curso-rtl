import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('the button has the correct initial color', () => {
  render(<App/>);
  //find an element with role of button and text of 'Change to blue'
  const buttonElement = screen.getByRole('button', {name: 'Change to blue'});
  // expect the background color to be red
  expect(buttonElement).toHaveStyle({backgroundColor:'red'});
  // click the button
  fireEvent.click(buttonElement);
  // expect the background color to be blue
  expect(buttonElement).toHaveStyle({backgroundColor:'blue'});
  // expect the button text to be 'Change to red'
  expect(buttonElement.textContent).toBe('Change to red');
});

test('initial conditions', () => {
  render(<App/>);
  // check that the button starts out enabled
    const colorButton = screen.getByRole('button', {name: 'Change to blue'});
    expect(colorButton).toBeEnabled();
  // check that the checkbox starts out unchecked
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
});

test('Checkbox disables button on first click and enables on second click', ()=>{
  render(<App/>);
  const checkbox = screen.getByRole('checkbox');
  const button = screen.getByRole('button');

  // disables button on first click
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  // enables button on second click
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});
