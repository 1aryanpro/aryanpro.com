<script>
    import BottomBend from "$lib/components/BottomBend.svelte";
    import Hero from "$lib/components/Hero.svelte";
    import WorkCard from "$lib/components/WorkCard.svelte";

    import workExperience from "$lib/work-experience.json";
</script>

<Hero>
    <div class="flex gap-8">
        <div class="flex-3">
            <h1
                class="underline decoration-purple decoration-6 underline-offset-5"
            >
                Aryan Prodduturi
            </h1>
            <p>Software Developer - BSCS @ Georgia Tech</p>
        </div>
        <div class="flex flex-col flex-1 gap-2">
            <a class="btn" href="/resume.pdf">Resume</a>
            <a class="btn" href="/projects">Projects</a>
        </div>
    </div>
</Hero>

<section class="responsive-width mt-6">
    <h2 class="text-4xl text-purple-fg">About Me:</h2>
    <p class="text-xl/6 mb-1.5">
        I'm a Computer Science student at Georgia Tech with concentrations in
        theory and simulation.
    </p>
    <p class="text-xl/6 mb-1.5">
        Outside of programming, I have a strong background in mathematics due to
        my concentrations. I have also taken multiple courses in other subject
        areas like economics, physics, and psychology.
    </p>
    <p class="text-xl/6 mb-1.5">
        While I’ve worked across the board, I’m especially drawn to highly
        technical fields that demand deep problem-solving, mathematical
        reasoning, and careful modeling. I’m motivated by complex systems and
        challenging questions that require precision and intellectual depth to
        answer, and I’m excited by opportunities to continue developing in
        technically demanding environments.
    </p>
    <p class="text-xl/6">Take a look at <a href="/projects" class="text-red
        underline">my projects</a> to see
    what I'm about.</p>
</section>

<section class="responsive-width mt-6">
    <h2 class="text-4xl text-purple-fg">Work Experience:</h2>
    <div class="max-w-xl mx-auto mt-4 flex flex-col gap-4">
        {#each workExperience as job}
            <WorkCard {...job} />
        {/each}
    </div>
</section>

<div class="h-15"></div>
