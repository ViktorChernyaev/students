const promisify = (action, ...args) => {
  return new Promise((res, rej) => {
    const id = setTimeout(() => {
      try {
        const result = localStorage[action](...args);
        res(result);
      } catch(e) {
        rej(e);
      }
      clearTimeout(id);
    }, 300);
  });
};

export const getStorageData = key => promisify("getItem", key).then(JSON.parse);
export const setStorageData = (key, data) => promisify("setItem", key, JSON.stringify(data));
