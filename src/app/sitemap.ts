import { MetadataRoute } from 'next';
import industries from '@/data/industries.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pseo.avatar-alchemy.com';

  const industryRoutes = industries.map((industry) => ({
    url: `${baseUrl}/${industry.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...industryRoutes,
  ];
}
