<script>
    import Hero from "$lib/components/Hero.svelte";
</script>

<svelte:head>
    <title>aryanpro | Contact</title>
</svelte:head>

<Hero>
    <h1>Contact</h1>
    <p>I'm always happy to talk about any oppurtunities you have for me.</p>
</Hero>

<div class="responsive-width flex flex-col sm:flex-row gap-8">
    <div class="flex-1 gap-4 flex flex-col">
        <h2 class="text-2xl">Socials:</h2>
        <div>
            <label for="">See my other work:</label>
            <a href="https://github.com/1aryanpro" class="btn">Check out my Github</a>
        </div>
        <div>
            <label for="">Check out my career:</label>
            <a href="https://www.linkedin.com/in/aryanpro/" class="btn"
                >Connect on LinkedIn</a
            >
        </div>
        <div>
            <label for="">Want to refer me?</label>
            <a href="/resume.pdf" class="btn">View my Resume</a>
        </div>
        <div>
            <label for="">Want to meet with me?</label>
            <a href="#" class="btn">Schedule a Meeting</a>
        </div>
    </div>

    <form method="POST" class="flex-2 gap-4 flex flex-col">
        <h2 class="text-2xl">Contact Me:</h2>
        <div class="flex flex-col gap-4 sm:flex-row sm:gap-8">
            <div class="flex-1">
                <label for="">Name</label>
                <input type="text" name="name" required />
            </div>

            <div class="flex-1">
                <label for="">Email</label>
                <input type="email" name="email" required />
            </div>
        </div>
        <div>
            <label for="">Message</label>
            <textarea class="h-50" name="message" required ></textarea>
        </div>

        <!-- Honey Pot Spam Protection -->
        <input name="company" tabindex="-1" autocomplete="off" class="hidden" />

        <button type="submit" class="btn">Send</button>
    </form>
</div>
