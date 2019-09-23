// message from parent
process.on('message', (message) => {
    console.log('message in child:', message);
    process.send('i want to killed');
});

// send to parent process
process.send('hello parent');