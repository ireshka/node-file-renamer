import fs = require('fs');

const fsPromise = fs.promises;

// to test with https://github.com/tschaub/mock-fs
const doesExist = async (path: string): Promise<boolean> => {
  try {
    await fsPromise.access(path);
    return true;
  } catch {
    // console.log(error);
    return false;
  }
};

export { doesExist };
