<script>
    const { company, role, start, end, bullets } = $props();
</script>

<div class="card pr-5">
    <h3 class="text-xl">{role}</h3>
    <p class="text-lg">{company}</p>
    <p class="text-lg">
        {start}
        {#if end && start != end}
            - {end}
        {/if}
    </p>
    <ul class="list-disc list-outside ml-2 pl-5 text-base">
        {#each bullets as bullet}
            <li>{bullet}</li>
        {/each}
    </ul>
</div>
