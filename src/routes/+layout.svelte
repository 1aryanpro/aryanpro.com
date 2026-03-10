<script>
    import "./layout.css";
    import favicon from "/favicon.svg";
    import BottomBend from "$lib/components/BottomBend.svelte";

    let { children } = $props();
    let nav = [
        { label: "Home", href: "/" },
        { label: "Projects", href: "/projects" },
        { label: "Contact", href: "/contact" },
    ];
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<nav class="py-5 md:px-2 bg-ink">
    <div class="responsive-width flex justify-between text-surface">
        <a href="/" class="text-3xl font-bold font-title"
            >aryan<span class="text-purple">pro</span></a
        >
        <div class="flex items-center">
            {#each nav as item}
                <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    class="ml-4 text-xl hover:cursor-pointer"
                >
                    {item.label}
                </a>
            {/each}
        </div>
    </div>
</nav>

<div class="grow">
    {@render children()}
</div>

<footer class="mt-5">
    <div class="rotate-180">
        <BottomBend />
    </div>
    <div class="bg-ink text-surface pt-8 pb-2 sm:pb-4 text-sm -mt-px">
        <div class="responsive-width grid sm:grid-cols-3 gap-3 text-center">
            <div class="text-center">
                <h2 class="uppercase tracking-wider font-semibold">
                    Aryan Prodduturi
                </h2>
                <p class="sm:mt-4 max-w-xs mx-auto">
                    Open to freelance and full-time opportunities. Let's build
                    something together.
                </p>
            </div>

            <div class="text-center">
                <h3 class="font-semibold uppercase tracking-wider sm:mb-4">
                    interested?
                </h3>
                <a href="/resume.pdf" class="block sm:mb-2">Download My Resume</a>
                <a href="/resume.pdf" class="block">Meet With Me</a>
            </div>

            <div class="text-center">
                <h3 class="font-semibold uppercase tracking-wider">Connect</h3>
                <ul class="sm:mt-4 sm:space-y-2">
                    <li>
                        <a href="/contact">
                            Email Form
                        </a>
                    </li>
                    <li>
                        <a href="#">GitHub</a> ·
                        <a href="#">LinkedIn</a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="h-3 sm:h-9"></div>

        <!-- Bottom section -->
        <div
            class="responsive-width flex flex-col items-center justify-between
            sm:gap-4 text-sm sm:flex-row"
        >
            <p>© 2026 Aryan Prodduturi. All rights reserved.</p>

            <p>
                Built with <span class="text-yellow">Svelte</span>,
                <span class="text-yellow">Tailwind</span>, and care.
            </p>
        </div>
    </div>
</footer>
