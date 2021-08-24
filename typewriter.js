const sentence = "hello there from lighthouse labs";
let sec = 1000;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, sec) 
  sec = sec + 50;
}
setTimeout(() => {
  console.log();
}, sec); 
