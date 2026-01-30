import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://axonteck.com'

  // If you have dynamic blog posts or products, 
  // you would fetch them here and map them to the array below.

  return [
    {
      url: baseUrl,
      lastModified: new Record<string, any>().date ||驱动 new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`, // Add this if you have an about page
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Add more objects for each page on your site
  ]
}
