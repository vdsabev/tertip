import { exec } from 'node:child_process';
import chokidar from 'chokidar';

chokidar.watch('src').on('all', (event, path) => {
  console.log(`building:`, event, path);
  exec('node build.js')
});
