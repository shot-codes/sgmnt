<script>
	import '../app.css';
</script>

<slot />

<style lang="postcss">
	:global(html, body) {
		height: 100vh;
		width: 100vw;
	}
	:global(canvas) {
		image-rendering: crisp-edges;
	}
</style>
