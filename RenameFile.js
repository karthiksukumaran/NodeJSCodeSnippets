const fs = require('fs')

fs.rename('testfiles/somefile.txt', 'testfiles/newNameTofile.txt', error => {
    if (error) {
        return console.error(error)
    }
});
