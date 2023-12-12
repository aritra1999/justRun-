Deno.serve(async (req) => {
	const { language, code, input } = await req.json();
	console.log(language, code, input);
	const data = {
		message: `Hello Aritra!`
	};

	return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
});
