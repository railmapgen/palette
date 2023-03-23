import { RootState } from './redux';
import createMockStore from 'redux-mock-store';
import { getDefaultMiddleware, ThunkDispatch } from '@reduxjs/toolkit';
import { TextEncoder } from 'util';
import { vi } from 'vitest';
import crypto from 'node:crypto';

// FIXME: any -> AnyAction?
type DispatchExts = ThunkDispatch<RootState, void, any>;
export const createMockRootStore = createMockStore<RootState, DispatchExts>(getDefaultMiddleware());

class BroadcastChannel {
    postMessage() {
        // mocked
    }

    onmessage() {
        // mocked
    }
}

global.BroadcastChannel = BroadcastChannel as any;

const originalFetch = global.fetch;
global.fetch = (...args) => {
    if (args[0].toString().includes('/info.json')) {
        return Promise.resolve({
            ok: true,
            status: 200,
            json: () =>
                Promise.resolve({
                    component: 'rmg-palette',
                    version: '9.9.9',
                    environment: 'DEV',
                    instance: 'localhost',
                }),
        }) as any;
    } else {
        return originalFetch(...args);
    }
};

global.TextEncoder = TextEncoder;
vi.stubGlobal('crypto', crypto);
