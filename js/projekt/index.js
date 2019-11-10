// const _wait = ms => new Promise((resolve, reject) => {
//   resolve = () => setTimeout(resolve('Holy.'), ms);
// });

const _wait = (ms, msg) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(msg);
    }, ms);
  });
};

const wait = async (ms, msg) => {
  try {
    const response = await _wait(ms, msg);
    return response;
  } catch (error) {
    throw new Error('Let me know.');
  }
};

const combine = async () => {
  // const result1 = wait(1000, 'Boi');
  // const result2 = wait(2000, 'pretty');

  console.time('oboi');

  const [result1, result2] = await Promise.all([
    wait(1000, 'hello'),
    wait(1000, 'there')
  ]);

  console.timeEnd('oboi');

  return result1 + ' ' + result2;
};

// combine().then((response) => {
//   console.log(response);
// });

_wait(1000, 'tho').then((value) => console.log(value));