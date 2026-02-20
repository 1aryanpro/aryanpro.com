<script>
    const { company, role, start, end, bullets } = $props();
</script>

<div class="card pr-5">
    <div class="flex">
        <h3 class="text-xl">{role}</h3>
        <p class="text-lg flex-1 text-right">
            {start}
            {#if end}
                - {end}
            {/if}
        </p>
    </div>
    <p class="text-lg">{company}</p>
    <ul class="list-disc list-outside ml-2 pl-5 text-base">
        {#each bullets as bullet}
            <li>{bullet}</li>
        {/each}
    </ul>
</div>
