CREATE TABLE `email_log` (
	`id` text PRIMARY KEY NOT NULL,
	`to` text NOT NULL,
	`subject` text NOT NULL,
	`sent_at` text NOT NULL,
	`html` text NOT NULL,
	`failure_reason` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `inbox` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`message` text NOT NULL,
	`created_at` integer NOT NULL
);
