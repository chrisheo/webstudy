process.on('tick', function(count) {
   console.log('tick event happened : ' + count); 
});

setTimeout(function() {
    console.log('excuted after 2 sec.');
    
    process.emit('tick', '2');
}, 2000)






