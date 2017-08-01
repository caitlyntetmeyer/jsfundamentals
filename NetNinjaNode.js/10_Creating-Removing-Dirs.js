/*
Net Ninja Node.js - Creating and Removing Directories

Video 10: https://www.youtube.com/watch?v=Ejgd-la6nSY&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&t=2#t=3.290203

How we can create and remove directories, as well as remove files.
*/
var fs = require('fs');

// Use .unlink to delete writeMe.txt:
fs.unlink('writeMe.txt');
// Run "node app" and see that you've deleted writeMe.txt.

// CREATE (make) a directory called "stuff" SYNCHRONOUSLY:
fs.mkdirSync('stuff');

// REMOVE (delete) a directory called "stuff" SYNCHRONOUSLY:
fs.rmdirSync('stuff')

// Create a directory ASYNCHRONOUSLY:
fs.mkdir('stuff', function(){
  // Read the readMe.txt file:
  fs.readFile('readMe.txt', 'utf8', function(err, data){
    fs.writeFile('./stuff/writeMe.txt', data);
  });
});
// Run "node app" and see it created a stuff directory with writeMe.txt in it

// REMOVE a dir ASYNCHRONOUSLY:
fs.rmdir('stuff');
// Run "node app", and you'll get an error saying the dir is not empty. So you must get rid of the file in there first:
fs.unlink('./stuff/writeMe.txt', function(){
  fs.rmdir('stuff');
});
// Run "node app" and see that the file was removed and then the whole directory.
