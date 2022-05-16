import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../components/login/Login';
import { render, cleanup } from '@testing-library/react';


afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Login></Login>, div);
})

it("renders submit button correctly", () => {
    const {getByTestId} = render(<Login />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('btnSubmit')).toHaveAttribute('type', 'submit');
})

it("renders username input correctly", () => {
    const {getByTestId} = render(<Login />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('userName')).toHaveAttribute('placeholder', "Employee ID");
})