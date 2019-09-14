const promisify = (action: string, ...args: string[]) => {
  return new Promise<any>((res, rej) => {
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

export const getStorageData = (key: string) => {
  return promisify("getItem", key).then((data: string) => JSON.parse(data));
};
export const setStorageData = (key: string, data: any) => promisify("setItem", key, JSON.stringify(data));
