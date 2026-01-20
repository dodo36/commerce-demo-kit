import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        // Simple validation
        if (!name || name.length < 2) {
            return NextResponse.json({ ok: false, error: "Name invalid" }, { status: 400 });
        }
        if (!email || !email.includes('@')) {
            return NextResponse.json({ ok: false, error: "Email invalid" }, { status: 400 });
        }
        if (!message || message.length < 10) {
            return NextResponse.json({ ok: false, error: "Message too short" }, { status: 400 });
        }

        // Demo Log
        console.log("[LEAD CAPTURE]", { name, email, message, date: new Date().toISOString() });

        return NextResponse.json({ ok: true });
    } catch {
        return NextResponse.json({ ok: false, error: "Internal Error" }, { status: 500 });
    }
}
