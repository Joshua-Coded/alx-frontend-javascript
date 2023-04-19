export default function handleResponseFromAPI(promise) {
  const ob = { status: 200, body: 'success' };
  return promise
    .then(() => ob)
    .catch(() => new Error())
    .finally(() => { console.log('Got a response from the API'); });
}
