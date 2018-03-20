import Endpoint from './endpoints';

export async function movieApi(endpoint, id = undefined, page = 1) {
  try {
    route = Endpoint[endpoint]
    if (Endpoint[endpoint] === 'id' && id !== undefined ) {
      route = id
    }
    let response = await fetch(`${Endpoint['baseUrl']}${route}${Endpoint['apiKey']}&page=${page}`);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}
