import * as React from 'react';
import request from '../src/index';

export default () => <div>213</div>;

async function doit() {
  const result = await request({
    url: 'https://api.github.com/users/technoweenie',
    params: {
      a: 1,
      b: 2,
      c: { d: 3 }
    },
    requestType: 'form',
    method: 'post'
  });

  // eslint-disable-next-line no-console
  console.log(result);
}

doit();
