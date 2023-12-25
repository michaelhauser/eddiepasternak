<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide'
	import '@splidejs/svelte-splide/css'

	const photos = import.meta.glob('./images/*.jpg', { eager: true })
	const urls = Object.keys(photos).map((key) => photos[key].default)

	//const urls = import.meta.glob("../static/images/**/*.{png,svg}");
</script>

<div class="container">
	<h1>Photos</h1>
	<div>
		<Splide options={{ rewind: true, width: 600, autoplay: true }}>
			{#each urls as url}
				<SplideSlide>
					<img src={url} />
				</SplideSlide>
			{/each}
		</Splide>
	</div>
</div>
