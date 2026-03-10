<script>
    let { title, langs, tags, summary, hasWriteup, slug, links, date } =
        $props();

    function cap(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const dateStr = new Date(
        date + (date.length === 7 ? "-01" : ""),
    ).toLocaleString("en-US", {
        month: "short",
        year: "numeric",
        timeZone: "UTC",
    });
</script>

<div
    class="card transition-all {hasWriteup
        ? `border-red shadow-lg/50 shadow-red hover:-translate-y-1.5 hover:shadow-2xl`
        : ''}"
>
    <div>
        <div class="flex">
            <h4 class="text-xl/5">{title}</h4>
            <p
                class="flex-1 text-right whitespace-nowrap leading-none
                opacity-80"
            >
                {dateStr}
            </p>
        </div>
        <div class="flex flex-wrap gap-1 mt-1.5">
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

    <p class="text-base/5 flex-1">{summary}</p>

    <div class="flex w-full gap-3 items-center font-semibold">
        {#each Object.keys(links || {}) as linkKey}
            <a
                href={links[linkKey]}
                target="_blank"
                >[<span
                    class="text-{hasWriteup ? 'red' : 'purple-fg'} underline"
                    >{cap(linkKey)}</span
                >]</a
            >
        {/each}
        {#if hasWriteup}
            <a class="text-red text-right flex-1" href="/projects/{slug}"
                >See More...</a
            >
        {/if}
    </div>
</div>
