import { OutageFetcher } from './outageFetcher';
const apiKey = <API-KEY>
const urlOutages = 'https://api.krakenflex.systems/interview-tests-mock-api/v1/outages'
const site = 'norwich-pear-tree'
const siteId = `https://api.krakenflex.systems/interview-tests-mock-api/v1/site-info/${site}`
const outageFetcher = new OutageFetcher();
Promise.all([
    outageFetcher.getEvent(urlOutages, apiKey),
    outageFetcher.getEvent(siteId, apiKey)
]).then((value) => { outageFetcher.postEvent(siteId, apiKey, outageFetcher.wrangle(value[0], value[1].devices)) });
