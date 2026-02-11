<script>
    import "./layout.css";
    import favicon from "$lib/assets/favicon.svg";

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
        <a href="/" class="text-3xl font-bold">aryan<span class="text-purple">pro</span></a>
        <div class="flex items-center">
            {#each nav as item}
                <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    class="pl-4 text-xl"
                >
                    {item.label}
                </a>
            {/each}
        </div>
    </div>
</nav>

{@render children()}

