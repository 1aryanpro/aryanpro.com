<script>
    let { title, langs, tags, summary, hasWriteup, slug, links, date } =
        $props();

    if (hasWriteup) {
        links.writeup = "/projects/" + slug;
    }

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

    const highlight = hasWriteup || links?.paper != undefined;
    const cardStyles = highlight
        ? `border-red shadow-lg/50 shadow-red hover:shadow-2xl`
        : `shadow-purple hover:shadow-lg`;
</script>

<div class="h-45 relative">
    <div
        class="card transition-all {cardStyles} group absolute hover:z-20
        h-45 hover:h-62 hover:-translate-y-10 hover:-translate-x-[4.5%] w-full hover:w-[110%]"
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
                    <span class="text-purple-fg text-base/3">#{displayTag}</span
                    >
                {/each}
            </div>
        </div>

        <p
            class="text-base/5 flex-1 flex group-hover:items-center overflow-hidden"
        >
            {summary}
        </p>

        <div class="flex w-full gap-3 items-center font-semibold mt-auto">
            {#each Object.keys(links || {}) as linkKey}
                <a href={links[linkKey]} target="_blank"
                    >[<span
                        class="text-{highlight ? 'red' : 'purple-fg'} underline"
                    >
                        {cap(linkKey)}
                    </span>]</a
                >
            {/each}
            <p
                class="text-right flex-1 text-{highlight
                    ? 'red'
                    : 'purple-fg'} group-hover:hidden"
            >
                More...
            </p>
        </div>
    </div>
</div>
