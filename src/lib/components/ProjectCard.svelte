<script>
    let { title, langs, tags, summary, hasWriteup, slug } = $props();
</script>

<div class="card {hasWriteup ? 'border-red shadow-lg/50 shadow-red' : ''}">
    <h4 class="text-xl/5 mb-1">{title}</h4>
    <div class="flex flex-wrap gap-1 mb-1.5">
        {#each langs as lang}
            {@const displayLang = lang.replace(" ", "-")}
            <span class="text-red text-base/3">@{displayLang}</span>
        {/each}
        {#each tags as tag}
            {@const displayTag = tag.replace(" ", "-")}
            <span class="text-purple-fg text-base/3">#{displayTag}</span>
        {/each}
    </div>
    <p class="text-base/5">{summary}</p>
    {#if hasWriteup}
        <a class="text-red hover:underline mt-auto" href="/projects/{slug}">See More...</a>
    {/if}
</div>
