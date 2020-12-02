import { getArguments } from './utils/getArguments';

try {
  const { argv } = process;
  const providedRenameOptions = getArguments(argv);

  console.log(providedRenameOptions);
} catch (error) {
  console.log('Error here:');
  console.log(error);
}
