import { join, dirname } from 'path';
import { Low, JSONFile } from 'lowdb';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, '..', 'db.json');
const adapter = new JSONFile(file);

// Since pure ESM imports can be async, scripts importing this module will wait for the data to load
export const db = new Low(adapter);
await db.read();
