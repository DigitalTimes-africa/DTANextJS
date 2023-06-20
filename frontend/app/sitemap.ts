import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.digitaltimes.africa',
      lastModified: new Date(),
    },
    {
      url: 'https://www.digitaltimes.africa/about',
      lastModified: new Date(),
    },
    {
      url: 'https://www.digitaltimes.africa/blog',
      lastModified: new Date(),
    },
  ]
}