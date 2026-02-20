<script>
    let { title, langs, tags, summary, hasWriteup, slug, links } = $props();
</script>

<div class="card {hasWriteup ? 'border-red shadow-lg/50 shadow-red' : ''}">
    <div>
        <h4 class="text-xl/5">{title}</h4>
        <div class="flex flex-wrap gap-1 my-1">
            {#each langs as lang}
                {@const displayLang = lang.replace(" ", "-")}
                <span class="text-red text-base/3">@{displayLang}</span>
            {/each}
            {#each tags as tag}
                {@const displayTag = tag.replace(" ", "-")}
                <span class="text-purple-fg text-base/3">#{displayTag}</span>
            {/each}
        </div>
    </div>

    <p class="text-base/5">{summary}</p>

    {#if links}
        <div
            class="flex flex-1 w-full gap-3 items-center {hasWriteup
                ? 'orange'
                : ''}"
        >
            {#if links.repo}
                <a href={links.repo} class="btn btn-compact flex-1">Repo</a>
            {/if}
            {#if links.demo}
                <a href={links.demo} class="btn btn-compact flex-1">Demo</a>
            {/if}
        </div>
    {/if}

    {#if hasWriteup}
        <a class="text-red underline" href="/projects/{slug}">See More...</a>
    {/if}
</div>
