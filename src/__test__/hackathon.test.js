import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import Hackathon from '../components/main/Hackathon';

afterEach(cleanup);

it("renders Hackathon component", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Hackathon user="user" />, div)
})

it("renders logOut button correctly", () => {
    const {getByTestId} = render(<Hackathon user="BD5075" />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('logoutButton')).toHaveClass('logoutBtn');
})