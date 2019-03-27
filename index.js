const server = "./server.js";

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`\n The server is listening on port ${port}. \n`);
});
