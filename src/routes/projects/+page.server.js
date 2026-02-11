import shortProjects from '$lib/projects/projects.json';

export const load = async () => {
    const modules = import.meta.glob('$lib/projects/*.svx', { eager: true });

    const full = Object.entries(modules)
        .map(([path, mod]) => {
            const slug = path.split('/').pop().replace('.svx', '');

            return {
                ...(mod.metadata ?? mod.meta ?? {}),
                slug,
                hasWriteup: true
            };
        })


    const short = (shortProjects ?? [])
        .map((p) => ({ ...p, hasWriteup: false }))

    // Optional: guard against duplicates by title+date (or by repo link)
    // Keeping it simple: just concatenate.
    const projects = [...full, ...short]
        .filter((p) => p?.title && p?.date);

    // Sort: featured first, then newest date first
    projects.sort((a, b) => {
        const fa = a.featured ? 1 : 0;
        const fb = b.featured ? 1 : 0;
        if (fa !== fb) return fb - fa;
        return String(b.date).localeCompare(String(a.date));
    });

    return { projects };
};

