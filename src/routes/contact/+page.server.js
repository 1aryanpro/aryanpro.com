import { sendContactEmail } from '$lib/email';
import { fail } from '@sveltejs/kit';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        const name = data.get('name');
        const email = data.get('email');
        const message = data.get('message');

        if (!name || !email || !message) {
            return fail(400, { error: 'Missing fields' });
        }

        if (data.get('company')) {
            return { success: true }; // silently drop bots
        }

        await sendContactEmail({ name, email, message });

        return { success: true };
    }
};
