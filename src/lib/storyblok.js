import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

import AboutItemLeft from "@/components/sb/AboutItemLeft";
import AboutItemRight from "@/components/sb/AboutItemRight";
import AboutPage from "@/components/sb/AboutPage";
import Page from "@/components/sb/Page";
import Teaser from "@/components/sb/Teaser";
import Feature from "@/components/sb/Feature";
import Grid from "@/components/sb/Grid";
import DoesNotExist from "@/components/sb/DoesNotExist";
import Hero from "@/components/sb/Hero";
import Header from "@/components/sb/Header";
import Footer from "@/components/sb/Footer";
import FeaturedProductsSection from "@/components/sb/FeaturedProductsSection";
import Banner from "@/components/sb/Banner";

export const components = {
  // Add your components here
  header: Header,
  footer: Footer,
  page: Page,
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  hero: Hero,
  doesNotExist: DoesNotExist,
  featured_products: FeaturedProductsSection,
  banner: Banner,

    about_page: AboutPage,
    about_item_1: AboutItemLeft,
    about_item_2: AboutItemRight,
  };

/**
 * Get the Storyblok API exports a StoryblokApi object to be used in the application
 * @returns {StoryblokApi}
 */
export const getStoryblokApi = storyblokInit({
  accessToken:
    process.env.STORYBLOK_DELIVERY_API_ACCESS_TOKEN ||
    process.env.NEXT_PUBLIC_STORYBLOK_DELIVERY_API_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
  components,
});
