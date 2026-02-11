<script>
    const { company, role, start, end, bullets } = $props();
</script>

<div class="card pr-5">
    <h3 class="text-xl">{role}</h3>
    <p>
        <span class="font-bold">{company}</span> &nbsp ⎯ &nbsp
        {start}
        {#if end && start != end}
            - {end}
        {/if}
    </p>
    <ul class="list-disc list-outside pl-5">
        {#each bullets as bullet}
            <li class="marker:mr-0">{bullet}</li>
        {/each}
    </ul>
</div>
