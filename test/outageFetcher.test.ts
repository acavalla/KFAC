import { OutageFetcher } from '../src/outageFetcher';
import fetch from 'node-fetch';
import { tooEarly, matchingOutage, noMatchingID, devices, output } from './testData'

jest.mock('node-fetch');
const { Response } = jest.requireActual('node-fetch');
const apiKey = <API-KEY>
const url = 'https://api.krakenflex.systems/interview-tests-mock-api/v1/outages'
describe('OutageFetcher', () => {
    const outageFetcher = new OutageFetcher();

    it('returns the api response with getEvent', async () => {
        (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue(
            new Response(JSON.stringify({ name: 'teresa teng' }), { url: 'url', status: 200, statusText: 'OK' })
        );
        const response = await outageFetcher.getEvent(apiKey, url);
        expect(response).toEqual({ name: 'teresa teng' });
    });

    it('wrangle does not return non matching IDs', () => {
        const result = outageFetcher.wrangle(noMatchingID, devices)
        expect(result).toEqual([])
    })

    it('wrangle does not return outages with matching IDs from before 2022-01-01T00:00:00.000Z', () => {
        const result = outageFetcher.wrangle(tooEarly, devices)
        expect(result).toEqual([])
    })

    it('wrangle outputs correct data when there is a matching outage from after the cutoff', () => {
        const result = outageFetcher.wrangle(matchingOutage, devices)
        expect(result).toEqual(output)
    })

    it('posts the result with postEvent', async () => {
        (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue(
            new Response(JSON.stringify({ name: 'teresa teng' }), { url: 'url', status: 200, statusText: 'OK' })
        );
        const response = await outageFetcher.postEvent(url, apiKey, output);
        expect(response).toEqual({ name: 'teresa teng' });
    });
});


