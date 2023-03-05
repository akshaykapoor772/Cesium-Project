import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);
});

test('calls handleFetch function on button click', () => {
  const handleFetch = jest.fn();
  const { getByText } = render(<App handleFetch={handleFetch} />);
  fireEvent.click(getByText('Fetch'));
  expect(handleFetch).toHaveBeenCalled();
});

test('initial total cost is 0', () => {
  const { getByText } = render(<App />);
  const headingElement = getByText(/Materials/i);
  expect(headingElement).toBeInTheDocument();
});

test('handles adding a new material to the list', () => {
  const { getByText, getByLabelText } = render(<App />);

  // Click the Add button to show the input fields
  const addButton = getByText('Add');
  fireEvent.click(addButton);

  // Fill out the input fields
  const materialNameInput = getByLabelText('Material Name');
  fireEvent.change(materialNameInput, { target: { value: 'Material A' } });

  const volumeInput = getByLabelText('Volume');
  fireEvent.change(volumeInput, { target: { value: 5 } });

  const eachCostInput = getByLabelText('Each Cost');
  fireEvent.change(eachCostInput, { target: { value: 10 } });

  const dateInput = getByLabelText('Date');
  fireEvent.change(dateInput, { target: { value: '2022-01-01' } });

  // Click the Add button again to add the new material
  fireEvent.click(addButton);

  // Check that the new material is in the list
  const materialNameText = getByText('Material A');
  expect(materialNameText).toBeInTheDocument();

  const volumeText = getByText('5');
  expect(volumeText).toBeInTheDocument();

  const eachCostText = getByText('10');
  expect(eachCostText).toBeInTheDocument();

  const dateText = getByText('2022-01-01');
  expect(dateText).toBeInTheDocument();
});

