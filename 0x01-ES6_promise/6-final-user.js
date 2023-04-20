import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const t = signUpUser(firstName, lastName);
  const x = uploadPhoto(fileName);

  return Promise.allSettled([t, x]).then((values) => {
    const settled = [];
    values.forEach((val) => {
      if (val.status === 'fulfilled') {
        settled.push({ status: val.status, value: val.value });
      } else {
        settled.push({
          status: val.status,
          value: `Error: ${val.reason.message}`,
        });
      }
    });
    return settled;
  });
}
