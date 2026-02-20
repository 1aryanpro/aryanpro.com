<script>
    import BottomBend from "$lib/components/BottomBend.svelte";
    import Hero from "$lib/components/Hero.svelte";
    import ProjectCard from "$lib/components/ProjectCard.svelte";

    export let data;
    const { projects } = data;
</script>


<Hero>
    <h1>My Projects</h1>
    <p>Here's some of the projects that I've worked on.</p>
</Hero>

<div class="responsive-width px-10 md:px-0 grid grid-cols-1 lg:grid-cols-3 gap-4">
    {#each projects as project}
        <ProjectCard {...project} />
    {/each}
</div>
