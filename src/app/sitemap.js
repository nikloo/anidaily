export default function sitemap() {
  const base = 'https://anidaily.net';
  const now = new Date().toISOString();

  const staticPages = [
    { url: base, lastModified: now, changeFrequency: 'hourly', priority: 1.0 },
    { url: `${base}/anime`, lastModified: now, changeFrequency: 'hourly', priority: 0.9 },
    { url: `${base}/manga`, lastModified: now, changeFrequency: 'hourly', priority: 0.9 },
    { url: `${base}/tcg`, lastModified: now, changeFrequency: 'hourly', priority: 0.9 },
    { url: `${base}/viral`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${base}/rankings`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${base}/reviews`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.1 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.1 },
  ];

  // TODO: Add dynamic article URLs from your CMS/database here
  // const articles = await fetch('your-api/articles').then(r => r.json());
  // const articlePages = articles.map(a => ({ url: `${base}/${a.slug}`, lastModified: a.updatedAt }));

  return staticPages;
}
