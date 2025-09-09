import { getStoryblokApi } from "@/lib/storyblok"

export default async function sitemap() {
    try {
        const baseUrl = 'https://felix-erik-cms-grupparbete.vercel.app';
        
        const staticPaths = [
            {
                url: `${baseUrl}/home/`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 1
            },
            {
                url: `${baseUrl}/products/`, 
                changeFrequency: "weekly",
                priority: 0.9
            },
            {
                url: `${baseUrl}/about/`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.8
            }
        ];

        const storyblok = getStoryblokApi()
        
        const productStories = await storyblok.get("cdn/stories/", {
            version: "published",
            starts_with: "products" 
        })

        const dynamicPaths = productStories.data.stories.map(story => ({
            url: `${baseUrl}/${story.full_slug}/`,
            lastModified: new Date(story.updated_at) || new Date(),
            changeFrequency: 'monthly',
            priority: 0.7
        }))
        
        return [...staticPaths, ...dynamicPaths]

    } catch (error) {
        return []
    }
}