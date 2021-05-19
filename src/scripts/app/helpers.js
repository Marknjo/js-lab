//Helper methods
import { TIMEOUT_SEC } from './config';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    //1. Loading single recipe
    const resp = await Promise.race([timeout(TIMEOUT_SEC), fetch(url)]);

    //convert to JSON -> Get data
    const data = await resp.json();

    //check errors
    if (!resp.ok) throw new Error(`${data.message} (${resp.status})`);

    //return data
    return data;
  } catch (err) {
    throw `${err} 💥💥`;
  }
};

export const calcNumPages = (resultsArr, resultsPerPage) => {
  return Math.ceil(resultsArr.length / resultsPerPage);
};
