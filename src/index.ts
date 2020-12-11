import { getArguments } from './utils/getArguments';
import { doesExist } from './utils/doesExist';
import { getMatchingFiles } from './utils/getMatchingFiles';
import { createFullDirPath } from './utils/createFullDirPath';
import { sortFiles } from './utils/sortFiles';
import { renameFiles } from './utils/renameFiles';

const init = async () => {
  try {
    const { argv } = process;
    const { userDir, ext, sourcePath, pattern, order, sort } = getArguments(
      argv,
    );
    const fullDirPath = createFullDirPath(sourcePath, userDir);

    const isDirectoryExist = await doesExist(fullDirPath);
    if (!isDirectoryExist) {
      // create function for exiting
      console.log(
        "Sorry, given directory with files for renaming doesn't exist",
      );
      process.exit(0);
    }

    const files = await getMatchingFiles(fullDirPath, ext);

    const sortedFiles = sortFiles(files, sort, order);

    const result = await renameFiles(sortedFiles, pattern);

    if (result) {
      console.log('File rename completed successfully.');
    } else { 
      console.log('File rename completed with some errors.');
    }
  } catch (error) {
    console.log('Something goes wrong, please read help and try again');
    console.log(error);
  }
};

void init();
