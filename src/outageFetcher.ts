import fetch from 'node-fetch'
import { IDevice } from './IDevice'
import { IOutage } from './IOutage'
import { IOutput } from './IOutput'
export class OutageFetcher {
    cutoffDate = '2022-01-01T00:00:00.000Z'
    async getEvent(url: string, apiKey: string) {
        const headers = {
            'x-api-key': apiKey,
        };

        const response = await fetch(url, {
            headers: headers,
        });
        return response.json();
    }

    wrangle(outages: Array<IOutage>, devices: Array<IDevice>) {
        const output: Array<IOutput> = []

        devices.forEach((device) => outages.forEach((outage) => {
            if (outage.id == device.id && outage.begin > this.cutoffDate) {
                output.push({ id: device.id, name: device.name, begin: outage.begin, end: outage.end })
            }  } ))

        return output;
    }

    async postEvent(url: string, apiKey: string, body: Array<IOutput>) {
        const headers = {
            'method': 'POST',
            'x-api-key': apiKey,
            'body': JSON.stringify(body)
        };

        const response = await fetch(url, {
            headers: headers,
        });
        return response.json();
    }
}
