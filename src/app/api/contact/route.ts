import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email and message are all required.' },
                { status: 400 }
            );
        }

        const { error } = await supabase
            .from('contact_messages')
            .insert([{ name, email, message }]);

        if (error) {
            console.error('Supabase insert error:', error);
            return NextResponse.json(
                { error: 'Failed to save message. Please try again.' },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true }, { status: 200 });

    } catch (err) {
        console.error('API route error:', err);
        return NextResponse.json(
            { error: 'Something went wrong on the server.' },
            { status: 500 }
        );
    }
}
