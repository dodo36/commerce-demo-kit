type GTAG = (cmd: string, action: string, params?: object) => void;
type FBQ = (cmd: string, action: string, params?: object) => void;

declare global {
    interface Window {
        dataLayer?: object[];
        gtag?: GTAG;
        fbq?: FBQ;
    }
}

export function track(eventName: string, params: object = {}) {
    if (typeof window === 'undefined') return;

    // Debug log (for verify steps)
    console.log(`[Analytics] ${eventName}`, params);

    // GTM
    if (window.dataLayer) {
        window.dataLayer.push({ event: eventName, ...params });
    }

    // GA4
    if (window.gtag) {
        window.gtag('event', eventName, params);
    }

    // Meta Pixel Mapping
    if (window.fbq) {
        const fbEvent = getFbEvent(eventName);
        if (fbEvent) {
            window.fbq('track', fbEvent, params); // simplified mapping
        }
    }
}

function getFbEvent(gaEvent: string): string | null {
    const map: Record<string, string> = {
        'view_item': 'ViewContent',
        'add_to_cart': 'AddToCart',
        'begin_checkout': 'InitiateCheckout',
        'purchase': 'Purchase',
        'generate_lead': 'Lead',
        'view_item_list': 'ViewContent', // Close approximation
    };
    return map[gaEvent] || null;
}
