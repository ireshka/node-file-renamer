import * as fs from 'fs';
import * as path from 'path';
import { leadZero } from './leadZero';

const fsPromise = fs.promises;

interface IPatternConfigObject {
  patternBasename: string;
  patternDelimiter: string;
  zeroNumbers: number;
}

interface IGetNewFilename {
  (
    filePath: string,
    index: number,
    patternConfigObject: IPatternConfigObject,
  ): string;
}

interface IRenameFile {
  (
    filePath: string,
    index: number,
    patternConfigObject: IPatternConfigObject,
  ): Promise<boolean>;
}

interface IRenameFiles {
  (files: string[], pattern: string): Promise<boolean>;
}

const getNewFilename: IGetNewFilename = (
  filePath,
  index,
  patternConfigObject,
) => {
  const {
    patternBasename: basename,
    patternDelimiter: delimiter,
    zeroNumbers,
  } = patternConfigObject;

  const fileNumber = leadZero(index + 1, zeroNumbers);
  const { ext, dir } = path.parse(filePath);

  const newFilename = `${basename}${delimiter}${fileNumber}${ext}`;
  const newFullPath = path.join(dir, newFilename);

  return newFullPath;
};

const renameFile: IRenameFile = async (
  filePath,
  index,
  patternConfigObject,
) => {
  try {
    const pathWithNewName = getNewFilename(
      filePath,
      index,
      patternConfigObject,
    );

    await fsPromise.rename(filePath, pathWithNewName);

    return true;
  } catch {
    console.log('Error from changing filename');

    return false;
  }
};

const renameFiles: IRenameFiles = async (files, pattern) => {
  try {
    const patternDelimiter = '-';
    const [patternBasename, leadingChars] = pattern.split(patternDelimiter);
    const zeroNumbers = leadingChars.length;
    const patternConfigObject: IPatternConfigObject = {
      patternBasename,
      patternDelimiter,
      zeroNumbers,
    };
    const result = await files.reduce(async (acc, file, index) => {
      const isRenamed = await renameFile(file, index, patternConfigObject);
      return isRenamed && acc;
    }, Promise.resolve(true));

    return result;
  } catch (error) {
    console.log('Error during file renaming.');
    console.log(error);

    process.exit(0);
  }
  // return result;
};

export { renameFiles };
