import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

import { db } from './src/db.js';
import Page from './src/Page.js';

const page = Page(db.data);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const buildDirectory = path.join(__dirname, 'build');
fs.mkdirSync(buildDirectory, { recursive: true });
fs.writeFileSync(path.join(buildDirectory, 'index.html'), page);
