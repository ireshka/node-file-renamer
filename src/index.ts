/* eslint-disable unicorn/prevent-abbreviations */
import { getArguments } from './utils/getArguments';
import { doesExist } from './utils/doesExist';
import { getMatchingFiles } from './utils/getMatchingFiles';
import { createFullDirPath } from './utils/createFullDirPath';

// const isError = (element: string | string[] | Error): boolean => {
//   if (element instanceof Error) {
//     return true;
//   }
//   return false;
// };

const init = async () => {
  try {
    const { argv } = process;
    const { userDir, ext, sourcePath, pattern } = getArguments(argv);
    console.log(typeof ext);
    console.log(ext, pattern);
    const fullDirPath = createFullDirPath(sourcePath, userDir);
    console.log(fullDirPath);
    const isDirectoryExist = await doesExist(fullDirPath);
    if (!isDirectoryExist) {
      // create function for exiting
      console.log(
        "Sorry, given directory with files for renaming doesn't exist",
      );
      process.exit(0);
    }
    const files = await getMatchingFiles(fullDirPath, ext);
    console.log(files);

    // if (!files.length) {
    //   console.log('Sorry, files with given extensions not found');
    // }
  } catch (error) {
    console.log('Something goes wrong, please read help and try again');
    console.log(error);
  }
};

void init();
