main();

function main() {
    var input = './txt';
    var output = './gh-pages';

    var exec = require('child_process').exec;
    var child;
    child = exec("gitbook build " + input + " " + output, 
                function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
        console.log('exec error: ' + error);
      }
    });
}