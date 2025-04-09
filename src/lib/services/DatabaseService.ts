import type { RequestEvent } from '@sveltejs/kit';
import { drizzle, DrizzleD1Database } from 'drizzle-orm/d1';
export const getDatabaseService = async (
	e: D1Database | RequestEvent
): Promise<DrizzleD1Database<Record<string, never>>> => {
	if ('platform' in e) {
		const db = e.platform?.env.DB;
		if (!db) throw new Error('DB not found');

		if (e.locals.db) return e.locals.db;

		const client = drizzle(db);
		e.locals.db = client;
		return client;
	}

	return drizzle(e);
};

export type DatabaseService = Awaited<ReturnType<typeof getDatabaseService>>;
