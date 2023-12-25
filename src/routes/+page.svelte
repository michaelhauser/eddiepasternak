<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	export let data
</script>

<svelte:head>
	<!--title>{config.title}</title-->
</svelte:head>

<div>
	<section>
		<ul>
			{#each data.posts as post}
				<article>
					<a href={post.slug} class="title"><h3>{post.title}</h3></a>
					<p>{post.description ? post.description : ''}</p>
					{#if post.thumbnail}
						<a href={post.slug}><img src={post.thumbnail} alt="" height="400px" width="400px" /></a>
					{/if}
				</article>
			{/each}
		</ul>
	</section>
</div>
<!--style>
	.posts {
		display: grid;
		gap: var(--size-7);
	}

	.post {
		max-inline-size: var(--size-content-3);
	}

	.post:not(:last-child) {
		border-bottom: 1px solid var(--border);
		padding-bottom: var(--size-7);
	}

	.title {
		font-size: var(--font-size-fluid-3);
		text-transform: capitalize;
	}

	.date {
		color: var(--text-2);
	}

	.description {
		margin-top: var(--size-3);
	}
</style-->
