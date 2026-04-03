"use client"

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Sparkles, Award, Beaker, TrendingUp, Heart, HelpCircle, BookOpen } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="small"
      sizing="mediumLargeSizeLargeTitles"
      background="circleGradient"
      cardStyle="layered-gradient"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="glass"
      headingFontWeight="semibold"
    >
      <ReactLenis root>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="UMBRA"
          navItems={[
            { name: "Collection", id: "products" },
            { name: "Craft", id: "ingredients" },
            { name: "Journal", id: "blog" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Shop Now", href: "#products" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardRotatedCarousel
          title="A Fragrance That Lingers Long After You Leave"
          description="Discover our award-winning perfumes crafted with rare botanicals and master perfumery. Find your signature scent — the one they never forget."
          tag="Luxury Fragrance"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "plain" }}
          buttons={[
            { text: "Explore Our Collection", href: "#products" },
            { text: "Our Craft", href: "#ingredients" }
          ]}
          buttonAnimation="slide-up"
          carouselItems={[
            {
              id: "1",
              imageSrc: "/templates/skincare-luxury/hero-1.webp",
              imageAlt: "UMBRA Solum Eau de Parfum held against earth tones"
            },
            {
              id: "2",
              imageSrc: "/templates/skincare-luxury/hero-2.webp",
              imageAlt: "UMBRA Solum white bottle with draped fabric"
            },
            {
              id: "3",
              imageSrc: "/templates/skincare-luxury/hero-3.webp",
              imageAlt: "UMBRA Solum with botanical wood and greenery"
            },
            {
              id: "4",
              imageSrc: "/templates/skincare-luxury/hero-4.webp",
              imageAlt: "UMBRA Solum on stone pedestal with natural light"
            },
            {
              id: "5",
              imageSrc: "/templates/skincare-luxury/hero-5.webp",
              imageAlt: "Model with bronzing face drops"
            },
            {
              id: "6",
              imageSrc: "/templates/skincare-luxury/hero-6.webp",
              imageAlt: "UMBRA Solum flat lay with golden serums"
            }
          ]}
          autoPlay={true}
          autoPlayInterval={4000}
          marqueeItems={[
            { type: "image", src: "/templates/skincare-luxury/logo-vogue.webp" },
            { type: "image", src: "/templates/skincare-luxury/logo-harpers-bazaar.webp" },
            { type: "image", src: "/templates/skincare-luxury/logo-elle.svg" },
            { type: "image", src: "/templates/skincare-luxury/logo-forbes.webp" },
            { type: "image", src: "/templates/skincare-luxury/logo-allure.webp" },
          ]}
          showMarqueeCard={false}
        />
        </div>

      <div id="products" data-section="products">
        <ProductCardFour
          title="Featured Collection"
          description="Discover our bestselling fragrances composed with rare essences and the finest ingredients from around the world."
          tag="Best Sellers"
          tagIcon={Award}
          tagAnimation="slide-up"
          products={[
            {
              id: "1",
              name: "Solum Eau de Parfum",
              price: "$185",
              variant: "50ml • Earthy & Warm",
              imageSrc: "/templates/skincare-luxury/product-1.webp",
              imageAlt: "Solum Eau de Parfum"
            },
            {
              id: "2",
              name: "Aura Eau de Parfum",
              price: "$165",
              variant: "50ml • Floral & Soft",
              imageSrc: "/templates/skincare-luxury/product-2.webp",
              imageAlt: "Aura Eau de Parfum"
            },
            {
              id: "3",
              name: "Velour Body Mist",
              price: "$125",
              variant: "100ml • Light & Fresh",
              imageSrc: "/templates/skincare-luxury/product-3.webp",
              imageAlt: "Velour Body Mist"
            },
            {
              id: "4",
              name: "Noir Absolu Parfum",
              price: "$195",
              variant: "30ml • Rich & Intense",
              imageSrc: "/templates/skincare-luxury/product-4.webp",
              imageAlt: "Noir Absolu Parfum"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="ingredients" data-section="ingredients">
        <FeatureCardSix
          title="The Art Behind Our Fragrances"
          description="Each perfume is meticulously composed with rare essences and noble raw materials to create scents that captivate and endure."
          tag="Perfumery Craft"
          tagIcon={Beaker}
          tagAnimation="slide-up"
          features={[
            {
              id: 1,
              title: "Rare Ingredient Sourcing",
              description: "We source precious essences from sustainable fields worldwide — Grasse rose, Madagascan vanilla, and Italian bergamot at their peak.",
              imageSrc: "http://img.b2bpic.net/free-photo/organic-cosmetic-product-with-dreamy-aesthetic-fresh-background_23-2151382870.jpg",
              imageAlt: "Botanical extraction process"
            },
            {
              id: 2,
              title: "Master Perfumers",
              description: "Every composition is crafted by world-renowned noses who balance top, heart, and base notes into unforgettable olfactory journeys.",
              imageSrc: "http://img.b2bpic.net/free-photo/preparing-utensils-microneedling-procedure_23-2149374097.jpg",
              imageAlt: "Laboratory research"
            },
            {
              id: 3,
              title: "Lasting Sillage",
              description: "Our concentrated formulas are designed for exceptional longevity — a single application carries you beautifully from dawn to dusk.",
              imageSrc: "http://img.b2bpic.net/free-photo/coffee-machine-with-water-cup_23-2148892890.jpg",
              imageAlt: "Formulation development"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="influencers" data-section="influencers">
        <FeatureCardOne
          title="Worn By Those Who Set The Standard"
          description="The women shaping culture choose UMBRA as their signature."
          tag="Community"
          tagIcon={Heart}
          tagAnimation="slide-up"
          features={[
            {
              title: "Amara Osei",
              description: " ",
              videoSrc: "/templates/skincare-luxury/influencer-amara.mp4",
              videoAriaLabel: "Amara Osei wearing UMBRA fragrance",
            },
            {
              title: "Chloe Marchand",
              description: " ",
              videoSrc: "/templates/skincare-luxury/influencer-chloe.mp4",
              videoAriaLabel: "Chloe Marchand getting ready with UMBRA",
            },
            {
              title: "Elena Vasquez",
              description: " ",
              videoSrc: "/templates/skincare-luxury/influencer-elena.mp4",
              videoAriaLabel: "Elena Vasquez wearing UMBRA fragrance",
            },
            {
              title: "Isla Montgomery",
              description: " ",
              videoSrc: "/templates/skincare-luxury/influencer-isla.mp4",
              videoAriaLabel: "Isla Montgomery wearing UMBRA fragrance",
            },
            {
              title: "Zara Kimani",
              description: " ",
              videoSrc: "/templates/skincare-luxury/influencer-zara.mp4",
              videoAriaLabel: "Zara Kimani getting ready with UMBRA fragrance",
            },
            {
              title: "Nadia Petrova",
              description: " ",
              videoSrc: "/templates/skincare-luxury/influencer-nadia.mp4",
              videoAriaLabel: "Nadia Petrova wearing UMBRA fragrance",
            },
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          showVerifiedBadge={true}
          cardDescriptionClassName="hidden"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardEleven
          title="Why Women Choose UMBRA"
          description="Our fragrances deliver an emotional connection that goes beyond scent — a presence that speaks before you do."
          tag="The Numbers"
          tagIcon={TrendingUp}
          tagAnimation="slide-up"
          metrics={[
            {
              id: "1",
              value: "92%",
              title: "Receive Compliments Daily",
              description: "Women report being asked what perfume they're wearing within the first week.",
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-using-face-roller_23-2148803514.jpg",
              imageAlt: "Skin radiance transformation"
            },
            {
              id: "2",
              value: "87%",
              title: "Repurchase Their Scent",
              description: "Our customers return for the same fragrance — a true sign of finding your signature.",
              imageSrc: "http://img.b2bpic.net/free-photo/scientist-examining-substance-petri-dish-while-conducting-virus-research_181624-1110.jpg",
              imageAlt: "Anti-aging results"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="The UMBRA Journal"
          description="Stories of scent, craft, and the women who inspire us. Explore the world behind our fragrances."
          tag="Journal"
          tagIcon={BookOpen}
          tagAnimation="slide-up"
          blogs={[
            {
              id: "1",
              category: "Fragrance Notes",
              title: "The Art of Layering Scents for Every Season",
              excerpt: "Discover how to combine UMBRA fragrances for a signature scent that evolves with you throughout the day.",
              imageSrc: "http://img.b2bpic.net/free-photo/skin-regeneration-product-still-life_23-2151232284.jpg",
              imageAlt: "Luxury perfume bottles arranged artfully",
              authorName: "Camille Laurent",
              authorAvatar: "http://img.b2bpic.net/free-photo/portrait-successful-businesswoman-with-charming-smile-osing-street-with-interesting-architecture-background_613910-3354.jpg",
              date: "Feb 2026",
            },
            {
              id: "2",
              category: "Behind the Bottle",
              title: "From Grasse to Your Vanity: Sourcing Rose Absolute",
              excerpt: "A journey through the fields of Provence where our master perfumers hand-select the rarest rose petals.",
              imageSrc: "http://img.b2bpic.net/free-photo/organic-cosmetic-product-with-dreamy-aesthetic-fresh-background_23-2151382870.jpg",
              imageAlt: "Rose fields in Provence",
              authorName: "Elena Vasquez",
              authorAvatar: "http://img.b2bpic.net/free-photo/senior-woman-portrait_23-2148891695.jpg",
              date: "Jan 2026",
            },
            {
              id: "3",
              category: "Women of UMBRA",
              title: "How Amara Osei Found Her Signature Scent",
              excerpt: "The model and entrepreneur shares why Noir Absolu became the fragrance she never leaves the house without.",
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-using-face-roller_23-2148803514.jpg",
              imageAlt: "Amara Osei portrait",
              authorName: "Nadia Petrova",
              authorAvatar: "http://img.b2bpic.net/free-photo/pretty-blonde-woman-with-wavy-hair-dressed-skirt-light-blouse-white-jacket-sits-chair_197531-33594.jpg",
              date: "Jan 2026",
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Everything you need to know about our luxury fragrances, ingredients, and satisfaction guarantee."
          tag="Support"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          imageSrc="/templates/skincare-luxury/faq-image.webp"
          imageAlt="UMBRA Solum Eau de Parfum with botanical elements"
          mediaPosition="left"
          mediaAnimation="slide-up"
          faqs={[
            {
              id: "1",
              title: "What makes UMBRA fragrances different from other luxury brands?",
              content: "UMBRA combines rare natural essences with master perfumery techniques. Every composition is developed over months of refinement to deliver extraordinary depth and longevity. We prioritize ingredient quality and sustainable sourcing."
            },
            {
              id: "2",
              title: "How long does the fragrance last on skin?",
              content: "Most of our Eau de Parfums last 8-12 hours on skin. Our Parfum concentrations can last up to 16 hours. For best results, apply to pulse points — wrists, neck, and behind the ears — right after moisturizing."
            },
            {
              id: "3",
              title: "Are your fragrances suitable for sensitive skin?",
              content: "Our perfumes are formulated with high-quality, dermatologically considered ingredients. They are free from common irritants and suitable for most skin types. If you have fragrance sensitivities, we recommend trying our discovery set first."
            },
            {
              id: "4",
              title: "Do you offer a satisfaction guarantee?",
              content: "We're confident in our compositions. If a fragrance doesn't feel right within 14 days of purchase, we offer a full refund—no questions asked. Your confidence in your scent is our priority."
            },
            {
              id: "5",
              title: "Are your ingredients natural or synthetic?",
              content: "We blend premium natural essences — oud, jasmine, rose — with refined aroma molecules for stability and projection. This hybrid approach ensures both authenticity and lasting performance in every bottle."
            },
            {
              id: "6",
              title: "How do I choose the right fragrance for me?",
              content: "Start with our Discovery Set to explore all four scents. Solum is earthy and warm, Aura is soft and floral, Velour is light and fresh, and Noir Absolu is rich and intense. Wear each for a full day to find your match."
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get in Touch"
          description="Have a question or looking for your signature scent? We'd love to hear from you. Fill out the form and our fragrance advisors will respond within 24 hours."
          inputs={[
            { name: "name", type: "text", placeholder: "Your name", required: true },
            { name: "email", type: "email", placeholder: "your@email.com", required: true },
            { name: "phone", type: "tel", placeholder: "+1 (555) 000-0000", required: false },
            { name: "subject", type: "text", placeholder: "How can we help?", required: true }
          ]}
          textarea={{ name: "message", placeholder: "Tell us about your fragrance preferences...", required: true }}
          useInvertedBackground={false}
          buttonText="Send Message"
          mediaAnimation="slide-up"
          mediaPosition="right"
          imageSrc="http://img.b2bpic.net/free-photo/skin-regeneration-product-still-life_23-2151232284.jpg?_wi=2"
          imageAlt="Luxury fragrance contact"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="UMBRA"
          columns={[
            {
              items: [
                { label: "Shop", href: "#products" },
                { label: "Our Craft", href: "#ingredients" },
                { label: "Why UMBRA", href: "#metrics" }
              ]
            },
            {
              items: [
                { label: "Our Story", href: "#" },
                { label: "Sustainability", href: "#" },
                { label: "Community", href: "#influencers" }
              ]
            },
            {
              items: [
                { label: "Customer Care", href: "#" },
                { label: "Contact", href: "#contact" },
                { label: "FAQ", href: "#faq" }
              ]
            },
            {
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms & Conditions", href: "#" },
                { label: "Return Policy", href: "#" }
              ]
            }
          ]}
        />
      </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
