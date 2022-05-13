import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
    });

    it('should add an item on add button click', async () => {
        const addInput = screen.getByPlaceholderText('New Item');
        userEvent.type(addInput, 'pickles');

        const addButton = await screen.findByLabelText('add item');

        userEvent.click(addButton);

        const listItem = await screen.findByRole('list-item');

        expect(listItem).toHaveTextContent('pickles', { exact: false });
    });

    it('should delete an item on delete button click', async () => {
        const addInput = screen.getByPlaceholderText('New Item');
        userEvent.type(addInput, 'pickles');

        const addButton = await screen.findByLabelText('add item');

        userEvent.click(addButton);
        
        const listItem = await screen.findByRole('list-item');

        const deleteButton = await screen.findByLabelText(`delete button`);

        userEvent.click(deleteButton);
        
        expect(listItem).not.toBeInTheDocument();
    });
});