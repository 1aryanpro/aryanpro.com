<script>
    import "./layout.css";
    import favicon from "$lib/assets/favicon.svg";

    let { children } = $props();
    let nav = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Menu", href: "/menu" },
    ];
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<nav class="sticky top-0 z-50 border-b-4 border-brand p-2 mb-4">
    <div class="mx-auto max-w-3xl flex justify-between ">
        <a href="/" class="text-xl font-bold">aryanpro</a>
        <div class="flex items-center">
            {#each nav as item}
                <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    class="pl-4 text-lg"
                >
                    {item.label}
                </a>
            {/each}
        </div>
    </div>
</nav>

{@render children()}
