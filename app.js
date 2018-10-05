process.stdin.on('data', function(name) {
    name = Array.from(String(name).trim());
  
    while (name.length > 0) {
      let random = Math.floor(Math.random() * name.length);
  
      let removed = name[random];
  
      name.splice(random, 1);
  
      process.stdout.write(removed);
    }
  
    process.exit();
  });

  console.log('123');
