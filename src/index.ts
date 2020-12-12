import { getArguments } from './utils/getArguments';
import { doesExist } from './utils/doesExist';
import { getMatchingFiles } from './utils/getMatchingFiles';
import { createFullDirPath } from './utils/createFullDirPath';
import { sortFiles } from './utils/sortFiles';
import { renameFiles } from './utils/renameFiles';
import { errorAndExit, infoAndExit } from './utils/logger';

const init = async () => {
  try {
    // throw new Error('error test');
    const { argv } = process;
    const { userDir, ext, sourcePath, pattern, order, sort } = getArguments(
      argv,
    );
    const fullDirPath = createFullDirPath(sourcePath, userDir);

    const isDirectoryExist = await doesExist(fullDirPath);
    if (!isDirectoryExist) {
      infoAndExit(
        'Sorry, given directory with files for renaming does not exist',
      );
    }

    const files = await getMatchingFiles(fullDirPath, ext);

    const sortedFiles = sortFiles(files, sort, order);

    const result = await renameFiles(sortedFiles, pattern);

    if (result) {
      infoAndExit('File rename completed successfully.');
    } else {
      infoAndExit('File rename completed with some errors.');
    }
  } catch (error) {
    errorAndExit('Something goes wrong, please read help and try again', error);
  }
};

void init();
