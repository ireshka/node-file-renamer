/* eslint-disable unicorn/no-fn-reference-in-iterator */
/* eslint-disable @typescript-eslint/no-unused-vars */
import fs = require('fs');
import path = require('path');

const fsPromise = fs.promises;

// interface IFile {
//   directory: string;
//   name: string;
// }

// const isElementFile = async (file: IFile): Promise<boolean> => {
//   try {
//     const { directory, name } = file;

//     const filePath = path.join(directory, name);
//     const stats = await fsPromise.stat(filePath);
//     return stats.isFile();
//   } catch {
//     return false;
//   }
// };

// let fileFilter: IAsyncFilter<IFile> = asyncFilter;

// const getMatchingFiles = async (
//   directory: string,
//   extensions: string[],
// ): Promise<string[]> => {
//   try {
//     // get all directory content
//     // filter only files

//     const filesInDirectory = await fileFilter(
//       contentWithFullPath,
//       isElementFile,
//     );
//     console.log(directoryContent);
//     console.log(filesInDirectory);

//     return [];
//   } catch (error) {
//     console.log(`Error: ${error}`);
//     console.log("Sorry, given directory with files for renaming doesn't exist");
//     process.exit(0);
//   }
// };

interface IFilterCallback<E> {
  (element: E): Promise<boolean>;
}

const checkIfFile: IFilterCallback<string> = async (element) => {
  try {
    const stats = await fsPromise.stat(element);
    return stats.isFile();
  } catch (error) {
    console.log('Error occurs during checking files in directory');
    console.log(error);
    process.exit(0);
  }
};

interface IAsyncFilter<T> {
  (array: T[], condition: IFilterCallback<T>): Promise<T[]>;
}

async function asyncFilter<T>(
  array: T[],
  condition: IFilterCallback<T>,
): Promise<T[]> {
  const results = await Promise.all(array.map(condition));
  return array.filter((_v, index) => results[index]);
}

const stringAsyncFilter: IAsyncFilter<string> = asyncFilter;

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
    console.log('Error occurs during reading content of directory');
    console.log(error);
    process.exit(0);
  }
};

const getFilesFromDirectory = async (
  directoryContent: string[],
): Promise<string[]> => {
  const files = await stringAsyncFilter(directoryContent, checkIfFile);
  console.log(files);
  return files;
};

interface IGetMatchingFiles {
  (dirPath: string, extArray: string[]): Promise<string[] | Error>;
}

const getMatchingFiles: IGetMatchingFiles = async (dirPath, extArray) => {
  // logic here
  try {
    const directoryContentWithAbsolutePath = await getDirectoryContentWithAbsolutePath(
      dirPath,
    );
    if (!directoryContentWithAbsolutePath.length) {
      console.log('Given directory is empty');
      process.exit(0);
    }
    console.log(directoryContentWithAbsolutePath);
    const filesInDirectory = await getFilesFromDirectory(
      directoryContentWithAbsolutePath,
    );
    console.log(filesInDirectory);
    console.log(dirPath);
    console.log(extArray);
    return ['a'];
  } catch (error) {
    console.log(error);
    process.exit(0);
    // return new Error(error);
  }
};

export { getMatchingFiles };
