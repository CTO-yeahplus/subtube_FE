module.exports = {
  // yarn tsc -> npx tsc
  '**/*.(ts|tsx)': () => 'npx tsc --noEmit', 
  
  '**/*.(ts|tsx|js)': (filenames) => [
    // yarn eslint -> npx eslint
    `npx eslint --fix ${filenames.join(' ')}`, 
    // yarn prettier -> npx prettier
    `npx prettier --write ${filenames.join(' ')}`, 
  ],
  
  // yarn prettier -> npx prettier
  '**/*.(md|json)': (filenames) => `npx prettier --write ${filenames.join(' ')}`, 
}