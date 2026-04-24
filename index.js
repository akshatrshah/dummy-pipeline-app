// Dummy Pipeline App — used to trigger GitHub Actions CI/CD for PipelineSync demo
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ status: "ok", service: "dummy-pipeline-app", ts: new Date().toISOString() }));
});

server.listen(3001, () => console.log("Dummy app running on :3001"));
