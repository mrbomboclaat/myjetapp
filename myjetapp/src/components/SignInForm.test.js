import { render, screen, fireEvent } from '@testing-library/react';
import SignInForm from './SignInForm';
import { registerUser } from '../services/authService';

jest.mock('../services/authService');

describe('SignInForm', () => {
    const setUsername = jest.fn();
    const setSignedIn = jest.fn();
    const onToggleForm = jest.fn();

    beforeEach(() => {
        render(<SignInForm setUsername={setUsername} setSignedIn={setSignedIn} onToggleForm={onToggleForm} />);
    });

    test('renders SignInForm and submits successfully', async () => {
        // Mock the registerUser function to resolve successfully
        registerUser.mockResolvedValueOnce({ username: 'testuser' });

        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'password123' } });
        fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'Test' } });
        fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'User' } });

        fireEvent.click(screen.getByRole('button', { name: /Sign Up/i }));

        expect(setUsername).toHaveBeenCalledWith('testuser');
        expect(setSignedIn).toHaveBeenCalledWith(true);
    });

    test('shows error message on failed registration', async () => {
        // Mock the registerUser function to reject with an error
        registerUser.mockRejectedValueOnce(new Error('Registration failed'));

        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'password123' } });
        fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'Test' } });
        fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'User' } });

        fireEvent.click(screen.getByRole('button', { name: /Sign Up/i }));

        const errorMessage = await screen.findByText(/Registration failed/i);
        expect(errorMessage).toBeInTheDocument();
    });
});
