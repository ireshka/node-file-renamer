/* eslint-disable unicorn/prevent-abbreviations */
import yargs from 'yargs';
import { appDescription } from '../info/description';
import { validatePattern } from './validators';

interface ICommandArguments {
  _: string[];
  dir: string;
  ext: string;
  filepath: string;
  pattern: string;
}

type UserArguments = Omit<ICommandArguments, '_'>;

const getArguments = (argv: string[]): UserArguments => {
  const {
    argv: {
      d: dir,
      e: ext,
      p: pattern,
      _: [filepath],
    },
  } = yargs(argv.slice(1))
    .options({
      d: {
        alias: 'dir',
        demandOption: 'Directory name for files is required',
        describe: 'Directory name with file for rename',
        type: 'string',
      },
      // e needed as command parameter
      // eslint-disable-next-line unicorn/prevent-abbreviations
      e: {
        alias: 'ext',
        array: true,
        default: '*',
        demandOption: false,
        describe: 'File extensions for rename',
      },
      p: {
        alias: 'pattern',
        coerce: (userPattern: string): string => {
          if (!validatePattern(userPattern)) {
            throw new Error('Please enter correct pattern for file name. Ex.: file-$$$');
          }
          return userPattern;
        },
        default: 'file-$$$',
        demandOption: false,
        describe: 'Pattern for new file names ex. photo-$$$',
        type: 'string',
      },
    })
    .locale('en')
    .usage(appDescription);

  const userArguments: UserArguments = {
    dir,
    ext,
    filepath,
    pattern,
  };

  return userArguments;
};

export { getArguments, UserArguments };
