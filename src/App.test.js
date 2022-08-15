import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import {replaceCamelWithSpaces} from './App';

test('the button has the correct initial color', () => {
  render(<App/>);
  //find an element with role of button and text of 'Change to blue'
  const buttonElement = screen.getByRole('button', {name: 'Change to Midnight Blue'});
  // expect the background color to be red
  expect(buttonElement).toHaveStyle({backgroundColor:'MediumVioletRed'});
  // click the button
  fireEvent.click(buttonElement);
  // expect the background color to be blue
  expect(buttonElement).toHaveStyle({backgroundColor:'MidnightBlue'});
  // expect the button text to be 'Change to red'
  expect(buttonElement.textContent).toBe('Change to Medium Violet Red');
});

test('initial conditions', () => {
  render(<App/>);
  // check that the button starts out enabled
    const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
    expect(colorButton).toBeEnabled();
  // check that the checkbox starts out unchecked
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
});

test('Checkbox disables button on first click and enables on second click', ()=>{
  render(<App/>);
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  const button = screen.getByRole('button');

  // disables button on first click
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  // enables button on second click
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

test("Disabled button has gray background and reverts to MediumVioletRed", ()=>{
  render(<App/>);
  const checkbox = screen.getByRole("checkbox", {name: 'Disable button'});
  const colorButton = screen.getByRole("button", {name:'Change to Midnight Blue'});

  // disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: gray');
  //re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: MediumVioletRed');
});

test("Disabled button has gray background and reverts to MidnightBlue", ()=>{
  render(<App/>);
  const checkbox = screen.getByRole("checkbox", {name: 'Disable button'});
  const colorButton = screen.getByRole("button", {name:'Change to Midnight Blue'});

  //Change button color
  fireEvent.click(colorButton);

  // disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: gray');
  //re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: MidnightBlue');
});

describe('Spaces before camel-case capital letters', ()=> {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red')
  });
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  });
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  });
});