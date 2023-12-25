<script lang="ts">
	import * as config from '$lib/config'
	import logo from '$lib/images/logo.png'
	import bgimage from '$lib/images/bgimage.png'
</script>

<div>
	<a href="/">
		<img src={logo} alt={config.title} />
	</a>

	<nav>
		<ul class="links">
			<li>
				<a href="/about">ABOUT EDDIE</a>
			</li>
			<li>
				<a href="/yourevent">YOUR EVENT</a>
			</li>
			<li>
				<a href="/guitarlessons">GUITAR LESSONS</a>
			</li>
			<li>
				<a href="/latestcd">LATEST CD</a>
			</li>
			<li>
				<a href="/photos">PHOTOS</a>
			</li>
			<li>
				<a href="/contact">CONTACT EDDIE</a>
			</li>
		</ul>
	</nav>
	<img src={bgimage} />
</div>

<!--style>
	nav {
		padding-block: var(--size-7);
	}

	.links {
		margin-block: var(--size-7);
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	@media (min-width: 768px) {
		nav {
			display: flex;
			justify-content: space-between;
		}

		.links {
			display: flex;
			gap: var(--size-7);
			margin-block: 0;
		}
	}
</style-->
