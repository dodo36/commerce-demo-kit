"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { track } from '@/lib/analytics';

export default function LeadForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (res.ok) {
                setStatus('success');
                track('generate_lead', { value: 0, currency: 'USD' });
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div style={{
                padding: '2rem',
                backgroundColor: 'var(--color-surface)',
                borderRadius: 'var(--radius-md)',
                textAlign: 'center'
            }}>
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-muted mb-4">We will get back to you shortly.</p>
                <Button onClick={() => setStatus('idle')} variant="secondary">Send Another</Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
                <label className="text-sm font-medium mb-1 block">Name</label>
                <input
                    required
                    minLength={2}
                    className="input"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                />
            </div>
            <div>
                <label className="text-sm font-medium mb-1 block">Email</label>
                <input
                    required
                    type="email"
                    className="input"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                />
            </div>
            <div>
                <label className="text-sm font-medium mb-1 block">Message</label>
                <textarea
                    required
                    minLength={10}
                    className="input"
                    style={{ height: '120px', paddingTop: '1rem', resize: 'vertical' }}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help?"
                />
            </div>
            {status === 'error' && <div style={{ color: 'var(--color-error)' }}>Something went wrong. Please try again.</div>}
            <Button type="submit" isLoading={status === 'loading'} fullWidth>Send Message</Button>
        </form>
    );
}
