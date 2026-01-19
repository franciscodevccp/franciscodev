import { MetadataRoute } from 'next'

// Requerido para output: export
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://franciscodev.cl'

    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
