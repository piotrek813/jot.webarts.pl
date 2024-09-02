export const prerender = false;

import { type APIContext } from 'astro';
import { db, Email } from 'astro:db';
export async function POST(ctx: APIContext) {
	const formData = await ctx.request.formData();
	const email = formData.get("email");
	const createdAt = new Date();

	if (typeof email !== 'string') {
		return new Response(null, {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
	}

	await db.insert(Email).values({ email, createdAt })

	return new Response(
		JSON.stringify({}), {
		status: 200,
		headers: {
			"Content-Type": "application/json"
		}
	});
}
