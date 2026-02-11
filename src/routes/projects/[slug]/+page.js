import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
    const modules = import.meta.glob('$lib/projects/*.svx');

    const entry = Object.entries(modules).find(([path]) =>
        path.endsWith(`/${params.slug}.svx`)
    );

    if (!entry) {
        throw error(404, 'Project not found');
    }

    const [, resolver] = entry;
    const mod = await resolver();

    return {
        Content: mod.default,
        meta: mod.metadata ?? mod.meta ?? {}
    };
};

