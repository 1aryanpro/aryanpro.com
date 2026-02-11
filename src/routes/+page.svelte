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
            <p>I'm a software engineer who focuses on...</p>
        </div>
        <div class="flex flex-col flex-1 gap-2">
            <a class="btn" href="/resume.pdf">Resume</a>
            <a class="btn" href="/projects">Projects</a>
        </div>
    </div>
</Hero>

<section class="responsive-width mt-6">
    <h2 class="text-4xl text-purple-fg">About Me:</h2>
    <p class="text-2xl">
        Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus
        ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus
        duis convallis tempus leo eu aenean sed diam urna tempor pulvinar
        vivamus fringilla lacus nec metus bibendum egestas iaculis massa nisl
        malesuada lacinia integer nunc posuere ut hendrerit semper vel class
        aptent taciti sociosqu ad litora torquent per conubia nostra inceptos
        himenaeos orci varius natoque penatibus et magnis dis parturient montes
        nascetur ridiculus.
    </p>
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
