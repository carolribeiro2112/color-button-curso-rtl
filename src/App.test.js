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
