import { render } from '../../test-utils';
import CitySection from './city-section';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import rootReducer from '../../redux';
import { createMockRootStore } from '../../setupTests';

const realStore = rootReducer.getState();
const mockStore = createMockRootStore({ ...realStore, ticket: { ...realStore.ticket, country: 'CN' } });

describe('CitySection', () => {
    afterEach(() => {
        mockStore.clearActions();
    });

    it('Can populate ticket when selecting an existing city', async () => {
        render(<CitySection />, { store: mockStore });

        // select guangzhou
        fireEvent.change(screen.getByRole('combobox', { name: 'City' }), { target: { value: 'guangzhou' } });
        await waitFor(() => expect(mockStore.getActions()).toHaveLength(1));

        const actions = mockStore.getActions();
        expect(actions).toContainEqual(
            expect.objectContaining({
                type: 'ticket/populateTicket',
                payload: expect.objectContaining({
                    city: expect.objectContaining({
                        id: 'guangzhou',
                        country: 'CN',
                    }),
                }),
            })
        );
    });

    it('Can clear lines when adding a new city', async () => {
        render(<CitySection />, { store: mockStore });

        // select new
        fireEvent.change(screen.getByRole('combobox', { name: 'City' }), { target: { value: 'new' } });
        await waitFor(() => expect(mockStore.getActions()).toHaveLength(1));

        const actions = mockStore.getActions();
        expect(actions).toContainEqual({ type: 'ticket/setCity', payload: 'new' });
    });
});
