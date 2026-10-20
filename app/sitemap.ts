import { MetadataRoute } from 'next'

// Requerido para output: export
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://franciscodev.cl'

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/en`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/en/case-study/domos-el-tabo`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ]
}
