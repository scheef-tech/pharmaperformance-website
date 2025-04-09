import type { AvailableLanguageTag } from '../../lib/paraglide/runtime';
import type { ParaglideLocals } from '@inlang/paraglide-sveltekit';
import type { DatabaseService } from '../../lib/services/DatabaseService';
import type { EmailService } from '../../lib/services/EmailService';
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Platform {
			env: {
				DB: D1Database;
			};
			cf: CfProperties;
			ctx: ExecutionContext;
		}

		interface Locals {
			paraglide: ParaglideLocals<AvailableLanguageTag>;

			db: DatabaseService | null;
			email: EmailService | null;
		}
	}
}

export {};
