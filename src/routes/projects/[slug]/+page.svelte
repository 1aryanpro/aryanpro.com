<script>
    import Hero from "$lib/components/Hero.svelte";

    export let data;
    const { Content, meta } = data;
</script>

<Hero>
    <a href="/projects" class="underline z-50">⬅  Back to Projects</a>
    <h1>{meta.title}</h1>

    <div class="flex flex-wrap gap-1 mb-1.5 mt-3">
        {#each meta.langs as lang}
            <span class="pill pill-red">{lang}</span>
        {/each}
        {#each meta.tags as tag}
            <span class="pill">{tag}</span>
        {/each}
    </div>
</Hero>

<div class="prose max-w-none responsive-width">
    <Content />
</div>
