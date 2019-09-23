const { spawn } = require('child_process');
const childPkgProcess = spawn('./app', [], { stdio: ['inherit', 'inherit', 'inherit', 'ipc'] });

// on event listen
childPkgProcess.on('message', function(data) {
    console.log('message from child:', data);

    // terminate command
    if (data === 'i want to killed') {
        // if child process not killed, parent process also not terminated
        childPkgProcess.kill();
    }
});

// send message to child
childPkgProcess.send('hello');