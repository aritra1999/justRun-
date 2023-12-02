<script>
	import { page } from '$app/stores';
</script>

<div class="h-screen w-screen flex items-center justify-center">
	<div class="fixed text-[50vw] text-background font-black">{$page.status}</div>
	<div class="fixed">{$page.error?.message}</div>
</div>
