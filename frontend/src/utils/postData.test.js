jest.mock('node-fetch');

import fetch, {Response} from 'node-fetch'
import {getEvents} from '../components/TestComponent'

test('getEvents calls fetch and returns an array of events', async () => {
  fetch.mockReturnValue(Promise.resolve(new Response([])));

  const resonseData = await getEvents();

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith('http://localhost:5000/api/events');
  expect(resonseData).toBe([]);
})