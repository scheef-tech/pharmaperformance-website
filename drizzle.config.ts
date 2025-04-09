import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	schema: ['./src/lib/db/*.schema.ts'],
	dialect: 'sqlite',
	dbCredentials: {
		url: (() => {
			const fs = require('fs');
			const path = require('path');
			const wranglerDir = '.wrangler/state/v3/d1/miniflare-D1DatabaseObject';
			const files = fs.readdirSync(wranglerDir);
			const sqliteFile = files.find((file) => file.endsWith('.sqlite'));
			if (!sqliteFile) {
				throw new Error('No SQLite file found in the specified directory');
			}
			return path.join(wranglerDir, sqliteFile);
		})()
	},
	out: './drizzle/migrations'
});
