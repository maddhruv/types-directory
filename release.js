const git = require('simple-git/promise')
const { exec } = require('child_process')

git()
  .status()
  .then(s => {
    if (!s.modified.includes('directory.json')) {
      git()
        .add('./*')

      git() 
        .commit(':new_moon_with_face: update directory')
      
      exec('npm version minor')
    }
  })
