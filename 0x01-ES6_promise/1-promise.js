export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (sucess) {
	resolve({status: 200, body: 'Success' });
    } else {
      reject(new Error('The api is not working!'));
      }
  });
}
