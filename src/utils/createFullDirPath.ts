import * as path from 'path';

const createFullDirPath = (sourcePath: string, userDir: string): string => {
  const scriptDir = path.dirname(sourcePath);
  const fileDir = path.join(scriptDir, userDir);
  return fileDir;
};

export { createFullDirPath };
