function myFunction() {
  for (let i = 0; i < 10; i++) {
    (function(i) {
      setTimeout(function() {
        console.log(i);
      }, 1000);
    })(i);
  }
}

myFunction();