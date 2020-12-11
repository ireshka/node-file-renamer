const appDescription = `Simple node renamer

powered by Node & Typescript

Usage:
$0 --dir photos --pattern files-$$$ -ext png jpg --sort name --order asc

! Files are renamed without creating backup. Always makes backup before renaming.

! Do not use the same pattern more than once on partly renamed directory (for example: do not rename photo-$$$ again if you already have renamed some files with this pattern) - risk of file loss.
`;

export { appDescription };
