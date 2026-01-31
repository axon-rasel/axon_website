import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://axonteck.com'

  // If you have dynamic blog posts or products, 
  // you would fetch them here and map them to the array below.

  return [
    {
      url: baseUrl,
      lastModified: new Record<string, any>().date ||驱动 new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`, // Add this if you have an about page
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    // Add more objects for each page on your site
  ]
}
export async function GET() {
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://axonteck.com/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
    </urlset>`,
    {
      headers: { "Content-Type": "application/xml" }
    }
  );
}