/* eslint-disable @typescript-eslint/indent */
/* eslint-disable unicorn/no-fn-reference-in-iterator */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as fs from 'fs';
import * as path from 'path';
import { errorAndExit, infoAndExit } from './logger';

const fsPromise = fs.promises;

interface IFilterCallback<E> {
  (element: E): Promise<boolean>;
}

interface IFilterTwoArgumentsCallback<T, G> {
  (element: T, argument: G): Promise<boolean>;
}

interface IAsyncFilter<T> {
  (array: T[], condition: IFilterCallback<T>): Promise<T[]>;
}

interface IAsyncFilterWithArgument<T, G> {
  (
    array: T[],
    argument: G,
    condition: IFilterTwoArgumentsCallback<T, G>,
  ): Promise<T[]>;
}

interface IGetFilteredByExtensions {
  (files: string[], exts: string[]): Promise<string[]>;
}

interface IGetMatchingFiles {
  (dirPath: string, extArray: string[]): Promise<string[]>;
}

const checkIfFile: IFilterCallback<string> = async (element) => {
  try {
    const stats = await fsPromise.stat(element);

    return stats.isFile();
  } catch (error) {
    return errorAndExit(
      'Error occurs during checking files in directory',
      error,
    );
  }
};

const checkIfHasExtension: IFilterTwoArgumentsCallback<
  string,
  string[]
> = async (element, arrayOfExtensions) => {
  try {
    const extension = path.extname(element);
    if (arrayOfExtensions.includes(extension)) {
      return Promise.resolve(true);
    }

    return Promise.resolve(false);
  } catch (error) {
    return errorAndExit('Error occurs during checking files extension', error);
  }
};

const stringAsyncFilter: IAsyncFilter<string> = async (array, condition) => {
  const results = await Promise.all(array.map(condition));

  return array.filter((_v, index) => results[index]);
};

const stringAsyncFilterWithArgument: IAsyncFilterWithArgument<
  string,
  string[]
> = async (array, argument, condition) => {
  const results = await Promise.all(
    array.map((element) => condition(element, argument)),
  );

  return array.filter((_v, index) => results[index]);
};

const getDirectoryContentWithAbsolutePath = async (
  dirPath: string,
): Promise<string[]> => {
  try {
    const directoryContent = await fsPromise.readdir(dirPath);
    if (!directoryContent.length) return directoryContent;
    const directoryContentWithAbsolutePath = directoryContent.map(
      (file: string) => path.join(dirPath, file),
    );

    return directoryContentWithAbsolutePath;
  } catch (error) {
    return errorAndExit(
      'Error occurs during reading content of directory',
      error,
    );
  }
};

const getFilesFromDirectory = async (
  directoryContent: string[],
): Promise<string[]> => {
  const files = await stringAsyncFilter(directoryContent, checkIfFile);

  return files;
};

const checkUniversalSelector = (arrayOfExtensions: string[]): boolean => {
  if (arrayOfExtensions.length === 0) {
    return true;
  }

  return false;
};

const filterMatchingFiles: IGetFilteredByExtensions = async (files, exts) => {
  const isUniversalSelector = checkUniversalSelector(exts);
  if (isUniversalSelector) {
    return files;
  }

  const filteredElements = await stringAsyncFilterWithArgument(
    files,
    exts,
    checkIfHasExtension,
  );

  return filteredElements;
};

const getMatchingFiles: IGetMatchingFiles = async (dirPath, extArray) => {
  try {
    const directoryContentWithAbsolutePath = await getDirectoryContentWithAbsolutePath(
      dirPath,
    );

    if (!directoryContentWithAbsolutePath.length) {
      infoAndExit('Given directory is empty');
    }

    const filesInDirectory = await getFilesFromDirectory(
      directoryContentWithAbsolutePath,
    );

    const matchingFiles = await filterMatchingFiles(filesInDirectory, extArray);

    if (!matchingFiles.length) {
      infoAndExit(
        `No find files with matching extensions: ${extArray.join(', ')}.`,
      );
    }

    return matchingFiles;
  } catch (error) {
    return errorAndExit('Error during checking matching files', error);
  }
};

export { getMatchingFiles };
