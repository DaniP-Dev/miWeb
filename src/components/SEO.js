import Head from 'next/head';

// Utilidad para procesar robots avanzados
function robotsToString(robots) {
    if (typeof robots === 'string') return robots;
    let result = [];
    if (robots.index) result.push('index');
    else result.push('noindex');
    if (robots.follow) result.push('follow');
    else result.push('nofollow');
    return result.join(', ');
}

export default function SEO({ metadata = {}, children }) {
    // Título con plantilla
    let title = metadata.title?.default || 'Mi Sitio Next.js';
    if (metadata.title?.template && metadata.title?.current) {
        title = metadata.title.template.replace('%s', metadata.title.current);
    }

    const description = metadata.description || '';
    const og = metadata.openGraph || {};
    const twitter = metadata.twitter || {};
    const robots = metadata.robots || {};
    const verification = metadata.verification || {};

    // Robots avanzados
    const robotsContent = robotsToString(robots);
    const googleBotContent = robots.googleBot ? robotsToString(robots.googleBot) : undefined;
    const bingBotContent = robots.other?.bing ? robotsToString(robots.other.bing) : undefined;
    const braveBotContent = robots.other?.brave ? robotsToString(robots.other.brave) : undefined;

    // Open Graph images
    const ogImages = Array.isArray(og.images) ? og.images : og.images ? [og.images] : [];
    // Twitter images
    const twitterImages = Array.isArray(twitter.images) ? twitter.images : twitter.images ? [twitter.images] : [];

    return (
        <Head>
            <title>{title}</title>
            {description && <meta name="description" content={description} />}

            {/* Open Graph */}
            {og.title && <meta property="og:title" content={og.title} />}
            {og.description && <meta property="og:description" content={og.description} />}
            {og.url && <meta property="og:url" content={og.url} />}
            {og.type && <meta property="og:type" content={og.type} />}
            {ogImages.map((img, i) => (
                <meta property="og:image" content={img} key={`og:image:${i}`} />
            ))}

            {/* Twitter */}
            {twitter.card && <meta name="twitter:card" content={twitter.card} />}
            {twitter.title && <meta name="twitter:title" content={twitter.title} />}
            {twitter.description && <meta name="twitter:description" content={twitter.description} />}
            {twitterImages.map((img, i) => (
                <meta name="twitter:image" content={img} key={`twitter:image:${i}`} />
            ))}

            {/* Robots */}
            {robotsContent && <meta name="robots" content={robotsContent} />}
            {googleBotContent && <meta name="googlebot" content={googleBotContent} />}
            {bingBotContent && <meta name="bingbot" content={bingBotContent} />}
            {braveBotContent && <meta name="bravebot" content={braveBotContent} />}

            {/* Verifications */}
            {verification.google && <meta name="google-site-verification" content={verification.google} />}
            {verification.bing && <meta name="msvalidate.01" content={verification.bing} />}
            {verification.brave && <meta name="brave-site-verification" content={verification.brave} />}

            {/* Idioma */}
            <meta httpEquiv="Content-Language" content="es" />
            {/* Bloques personalizados para SEO, como JSON-LD o listas ocultas */}
            {children}
        </Head>
    );
}
