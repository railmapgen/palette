import { PaletteEntry } from './types';

let RESPONSE_CACHE: Record<string, any> = {};

export const cachedFetch = async (url: string, init?: RequestInit): Promise<any> => {
    if (url in RESPONSE_CACHE) {
        return RESPONSE_CACHE[url];
    }

    const res = await fetch(url, init);
    const data = await res.json();
    RESPONSE_CACHE[url] = data;
    return data;
};

export const _clearCache = () => {
    RESPONSE_CACHE = {};
};

export const getPalette = async (cityId: string, signal?: AbortSignal): Promise<PaletteEntry[]> => {
    return await cachedFetch(`/rmg-palette/resources/palettes/${cityId}.json`, { signal });
};
