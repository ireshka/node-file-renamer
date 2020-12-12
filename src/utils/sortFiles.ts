import * as fs from 'fs';
import * as path from 'path';
import { errorAndExit } from './logger';

interface ISortFiles {
  (files: string[], sortType: string, orderType: string): string[];
}

interface ISortCallback {
  (first: string, second: string): number;
}

const sortByNameCallback: ISortCallback = (first, second) => {
  const firstName = path.basename(first).toLowerCase();
  const secondName = path.basename(second).toLowerCase();

  if (firstName < secondName) return -1;
  if (firstName > secondName) return 1;
  return 0;
};

const sortByDateCallback: ISortCallback = (first, second) => {
  const firstStat = fs.statSync(first);
  const secondStat = fs.statSync(second);

  return firstStat.birthtime.getTime() - secondStat.birthtime.getTime();
};

const setCallback = (sortType: string): ISortCallback => {
  if (sortType === 'date') return sortByDateCallback;

  return sortByNameCallback;
};

const sortFiles: ISortFiles = (files, sortType, orderType) => {
  try {
    const usedCallback = setCallback(sortType);
    const sortedFiles = [...files].sort(usedCallback);
    if (orderType === 'desc') sortedFiles.reverse();

    return sortedFiles;
  } catch (error) {
    return errorAndExit(
      'Something wrong during sorting files. Please check files and try again',
      error,
    );
  }
};

export { sortFiles };
