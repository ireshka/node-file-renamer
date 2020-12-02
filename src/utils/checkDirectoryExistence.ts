import path = require('path');
const fsPromise = require('fs').promises;

// to test with https://github.com/tschaub/mock-fs
const checkDirectoryExistence = async (scriptPath: string, dir: string): Promise<boolean> => {
  try {
    const scriptDir = path.dirname(scriptPath);
    console.log(scriptDir);
    const fileDir = path.join(scriptDir, dir);
    await fsPromise.access(fileDir);
    return true;
  } catch (error) {
    // console.log(error);
    return false;
  }
};

export { checkDirectoryExistence };
