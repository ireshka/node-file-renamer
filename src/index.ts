import { getArguments } from './utils/getArguments';
import { checkDirectoryExistence } from './utils/checkDirectoryExistence';

const init = async () => {
  try {
    const { argv } = process;
    const { dir, ext, filepath, pattern } = getArguments(argv);
    // console.log(ext, pattern);
    const isDirectoryExist = await checkDirectoryExistence(filepath, dir);
    if (!isDirectoryExist) {
      // console.log("Sorry, given directory with files for renaming doesn't exist");
      process.exit(0);
    }
    // console.log('Ok, directory exist');
  } catch (error) {
    console.log('Something goes wrong, please read help and try again');
    console.log(error);
  }
}

init();
