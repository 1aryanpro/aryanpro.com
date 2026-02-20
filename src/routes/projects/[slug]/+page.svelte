<script>
    import Hero from "$lib/components/Hero.svelte";

    export let data;
    const { Content, meta } = data;
</script>

<Hero>
    <p class="text-left">
        <a href="/projects" class="hover:underline z-100 text-red"
            >⬅ &nbsp; Back to Projects</a
        >
    </p>
    <h1 class="my-3 text-left">{meta.title}</h1>

    <div class="flex flex-wrap gap-1 mb-1.5">
        {#each meta.langs as lang}
            <span class="pill pill-red">{lang}</span>
        {/each}
        {#each meta.tags as tag}
            <span class="pill">{tag}</span>
        {/each}
    </div>
</Hero>

<div class="responsive-width">
    <article class="prose lg:prose-lg max-w-none prose-li:marker:text-purple">
        <Content />
    </article>
</div>

<div class="h-15"></div>
