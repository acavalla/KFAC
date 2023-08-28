import {IDevice} from "../src/IDevice";
import {IOutage} from "../src/IOutage";
import {IOutput} from "../src/IOutput";



export const devices:Array<IDevice> = [
    {
        id: '002b28fc-283c-47ec-9af2-ea287336dc1b',
        name: 'Battery 1'
    },
    {
        id: '086b0d53-b311-4441-aaf3-935646f03d4d',
        name: 'Battery 2'
    }]
export const matchingOutage:Array<IOutage> = [{
        id: '002b28fc-283c-47ec-9af2-ea287336dc1b',
        begin: '2022-08-18T11:45:21.690Z',
        end: '2022-08-28T13:13:50.236Z'
    }]

export const noMatchingID:Array<IOutage> = [
    {
        id: 'not-matching-id',
        begin: '2022-08-18T11:45:21.690Z',
        end: '2022-08-28T13:13:50.236Z'
    },
    {
        id: 'another-not-matching-id',
        begin: '2023-05-11T14:35:15.359Z',
        end: '2023-12-27T11:19:19.393Z'
    }]

export const tooEarly:Array<IOutage> = [{
    id: '002b28fc-283c-47ec-9af2-ea287336dc1b',
    begin: '2020-08-18T11:45:21.690Z',
    end: '2022-08-28T13:13:50.236Z'
}]


export const output:Array<IOutput> = [
    {
        id: '002b28fc-283c-47ec-9af2-ea287336dc1b',
        name: 'Battery 1',
        begin: '2022-08-18T11:45:21.690Z',
        end: '2022-08-28T13:13:50.236Z'
    }]
