<script>
    import Hero from "$lib/components/Hero.svelte";

    export let data;
    const { Content, meta } = data;

    function cap(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
</script>

<svelte:head>
    <title>{meta.title}</title>
</svelte:head>

<Hero>
    <p class="text-left">
        <a href="/projects" class="hover:underline text-red">
            ⬅ &nbsp; Back to Projects
        </a>
    </p>
    <div class="max-w-[756px] mx-auto">
        <div class="flex flex-wrap gap-1 my-1.5">
            {#each meta.langs as lang}
                <span class="pill pill-red">{lang}</span>
            {/each}
            {#each meta.tags as tag}
                <span class="pill">{tag}</span>
            {/each}
        </div>
        <h1 class="text-left leading-15 mt-3">{meta.title}</h1>
    </div>
</Hero>

<div class="responsive-width">
    <article
        class="prose lg:prose-lg mx-auto prose-li:marker:text-purple-fg
        prose-headings:font-normal prose-headings:mt-5 prose-headings:mb-3
        prose-img:h-100 prose-img:mx-auto mb-8"
    >
        <Content />

        <h2>Links:</h2>
        <div class="flex w-full">
            {#each Object.keys(meta.links || {}) as linkKey}
                <strong>{cap(linkKey)}:</strong>&nbsp;
                <a href={meta.links[linkKey]} class="text-purple-fg"
                    >{meta.links[linkKey]}</a
                >
            {/each}
        </div>
    </article>

    <a href="/projects" class="hover:underline text-red text-lg">
        ⬅ &nbsp; Back to Projects
    </a>
</div>
