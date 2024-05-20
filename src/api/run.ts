import http from 'node:http';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { initFileRouter } from 'node-file-router';

async function runMockServer() {
  const rootDir = dirname(fileURLToPath(import.meta.url));

  const useFileRouter = await initFileRouter({
    baseDir: `${rootDir}/routes`
  });

  const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');

    return useFileRouter(req, res);
  });
  const port = 4000;
  server.listen(port, () =>
    console.log(`Mock server is running at http://localhost:${port}/`)
  );
}

runMockServer();
