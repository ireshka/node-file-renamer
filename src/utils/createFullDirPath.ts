import path = require('path');

const createFullDirPath = (sourcePath: string, userDir: string): string => {
  const scriptDir = path.dirname(sourcePath);
  console.log(scriptDir);
  const fileDir = path.join(scriptDir, userDir);
  return fileDir;
};

export { createFullDirPath };
