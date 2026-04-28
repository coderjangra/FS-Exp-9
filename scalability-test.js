const http = require('http');

const options = {
  hostname: '54.242.232.156',
  port: 80,
  path: '/api/data',
  method: 'GET'
};

console.log("Starting Scalability Test: 100 concurrent requests...");

let completed = 0;
const start = Date.now();

for (let i = 0; i < 100; i++) {
  const req = http.request(options, (res) => {
    res.on('data', () => {});
    res.on('end', () => {
      completed++;
      if (completed === 100) {
        const end = Date.now();
        console.log(`Test Completed!`);
        console.log(`Total Time: ${end - start}ms`);
        console.log(`Avg Request Time: ${(end - start) / 100}ms`);
      }
    });
  });

  req.on('error', (e) => {
    console.error(`Problem with request: ${e.message}`);
  });

  req.end();
}
