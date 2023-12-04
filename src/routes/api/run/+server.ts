import { SECRET_SUPABASE_ANON_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request, fetch }) => {
	const { language, code, input } = await request.json();
	const headers = {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${SECRET_SUPABASE_ANON_KEY}`
	};
	const body = JSON.stringify({ code, language, input });

	return await fetch('https://egbpkhiraqqrqratikmp.supabase.co/functions/v1/runner', {
		method: 'POST',
		headers,
		body
	})
		.then((response) => {
			return response.json();
		})
		.catch((error) => {
			return json({ error: error });
		})
		.then((data) => {
			return json(data);
		});
};
