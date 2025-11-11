"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardTwo from '@/components/sections/metric/MetricCardTwo';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Briefcase, ChefHat, Crown, Dumbbell, Heart, Sparkles, Waves } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="small"
      sizing="medium"
      background="floatingGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "Dining", id: "dining" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          logoSrc="https://pixabay.com/get/gfac6b2b9810380dacfc7da4557750c2586f8224286249725e2d2ac1e381c00ee527d404976e07f7eff211723f963bc765aab8b6e7c040a1680d2fdb0147c32c6_1280.jpg"
          logoAlt="Grand Palace Hotel"
          brandName="Grand Palace Hotel"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Experience Luxury Redefined"
          description="Indulge in unparalleled elegance and comfort at Grand Palace Hotel. Where every moment becomes a cherished memory."
          tag="5-Star Luxury"
          tagIcon={Crown}
          buttons={[
            { text: "Book Your Stay", href: "https://booking.grandpalace.com" },
            { text: "Explore Rooms", href: "rooms" }
          ]}
          imageSrc="https://pixabay.com/get/g41c28d62ba0509b2634d8f5a191be78788d9e0bd2d1744a95964171e0fc53547d774bc36c32f28792d772825169587b9b637c1a306f6ec115c772d8766f1ec10_1280.jpg"
          imageAlt="Grand Palace Hotel luxury lobby"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="About Us"
          description="At Grand Palace Hotel, we embody timeless luxury and exceptional hospitality. For over three decades, we have been creating unforgettable experiences for discerning travelers who appreciate the finest in accommodation, dining, and personalized service."
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardFive
          title="World-Class Amenities"
          description="Discover our exceptional facilities designed for your ultimate comfort and relaxation"
          tag="Amenities"
          tagIcon={Sparkles}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          showIconBoxBackground={true}
          features={[
            { title: "Luxury Spa & Wellness", icon: Heart },
            { title: "Fine Dining Restaurant", icon: ChefHat },
            { title: "State-of-Art Fitness", icon: Dumbbell },
            { title: "Infinity Pool & Terrace", icon: Waves },
            { title: "Business Center", icon: Briefcase }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardTwo
          title="Luxury Accommodations"
          description="Choose from our exquisitely appointed rooms and suites, each designed to exceed your expectations"
          tag="Rooms & Suites"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "deluxe",
              brand: "Grand Palace",
              name: "Deluxe Room",
              price: "$299/night",
              rating: 5,
              reviewCount: "1.2k",
              imageSrc: "https://pixabay.com/get/gbd6e0f62369e9a079fd3ffa0282f6b93730cd0609613b35895c2ebdef7956f33d9d40422ea1b2ddc3ba329f11149bad00b1f261bb7eb68a19770a75289c51409_1280.jpg",
              imageAlt: "Deluxe room with king bed"
            },
            {
              id: "suite",
              brand: "Grand Palace",
              name: "Executive Suite",
              price: "$599/night",
              rating: 5,
              reviewCount: "856",
              imageSrc: "https://pixabay.com/get/ge4502d7eb9e59dc09542d72c924f782f8dbc141e566919cf7d1e10b5e598dcc7f441422a0e0847b467400dd94f12fd73d9289113d530524ed561033debd1a2c0_1280.jpg",
              imageAlt: "Executive suite living area"
            },
            {
              id: "penthouse",
              brand: "Grand Palace",
              name: "Presidential Penthouse",
              price: "$1,299/night",
              rating: 5,
              reviewCount: "342",
              imageSrc: "https://pixabay.com/get/g0a25a699337762e0f16fbb45196bd92757cbfed0bc0ddf053285415f53367ed79bee366337591362d21a83627bc592330975f3ca36ca90b08f2ec3337c0ca221_1280.jpg",
              imageAlt: "Presidential penthouse suite"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Exclusive Packages"
          description="Discover our carefully curated packages for an unforgettable stay experience"
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "romantic",
              badge: "Most Popular",
              badgeIcon: Heart,
              price: "$899",
              subtitle: "Perfect for romantic getaways",
              features: [
                "2 nights in Executive Suite",
                "Couples spa treatment",
                "Champagne & chocolates",
                "Private dinner for two",
                "Late checkout"
              ]
            },
            {
              id: "business",
              badge: "Executive Choice",
              badgeIcon: Briefcase,
              price: "$549",
              subtitle: "Ideal for business travelers",
              features: [
                "Deluxe room accommodation",
                "Business center access",
                "Complimentary breakfast",
                "Airport transfer",
                "Meeting room credits"
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Excellence in Numbers"
          description="Our commitment to exceptional hospitality reflected in our achievements"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            { id: "1", value: "30+", description: "Years of Luxury Hospitality" },
            { id: "2", value: "98%", description: "Guest Satisfaction Rate" },
            { id: "3", value: "150", description: "Dedicated Team Members" },
            { id: "4", value: "50k+", description: "Happy Guests Annually" }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Team"
          description="Our dedicated professionals are committed to making your stay exceptional"
          tag="Leadership"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "James Wellington",
              role: "General Manager",
              imageSrc: "https://pixabay.com/get/g79991caba054b29cc894f8ecc6d0534ea509a8b9ff0514072538c85c37fd86d139db5d9005443a14f5399ab715aec4a8b45c1b23b7aac45d2797fb359157932b_1280.jpg",
              imageAlt: "James Wellington"
            },
            {
              id: "2",
              name: "Maria Santos",
              role: "Head Concierge",
              imageSrc: "https://pixabay.com/get/g019b550663ed2ca8e60432fd414cedff519b3e6924cff65ee2d33cbda3f88817efebcb886497e260b9a2b7740ba067dade1a090434601074ec0aef261ab466d8_1280.jpg",
              imageAlt: "Maria Santos"
            },
            {
              id: "3",
              name: "Chef Antoine Dubois",
              role: "Executive Chef",
              imageSrc: "https://pixabay.com/get/g31ae248bb3e94623b58abc0595ec508fd9630e713cbdae727c1fba76ac42108f13d2de5de917b81f17772cdec4ee3e5b5cbb0e49b18c14f667ddca52d8370d24_1280.jpg",
              imageAlt: "Chef Antoine Dubois"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Guest Experiences"
          description="Hear what our valued guests say about their stay with us"
          tag="Testimonials"
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "CEO, Tech Innovations",
              testimonial: "The Grand Palace Hotel exceeded every expectation. The service was impeccable, the room was stunning, and the dining experience was world-class. Truly a five-star experience.",
              imageSrc: "https://pixabay.com/get/g1500a4410ebf008d1c409d5b417ed6574d5c93d8304561f9c315ca6f7de27a07106898aa5a50d39f8914049872ede6f896f99d6a33b89f7befcca70e53e57a0b_1280.png",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              name: "Robert Chen",
              role: "Investment Director",
              testimonial: "From the moment I arrived, I felt like royalty. The attention to detail and personalized service made my business trip memorable. I'll definitely be returning.",
              imageSrc: "https://pixabay.com/get/gd91d57f218e969204c16875cbfe1810acd714484b1b8d9845d2c070d76a45d18d7f99a513e40396c02c74119560cdedb48e41eff45a03afe8b27d1823223b1b9_1280.jpg",
              imageAlt: "Robert Chen"
            },
            {
              id: "3",
              name: "Emma & David Johnson",
              role: "Anniversary Celebration",
              testimonial: "Our 25th anniversary celebration was perfect thanks to the Grand Palace team. The romantic package, spa treatments, and special dinner created memories we'll treasure forever.",
              imageSrc: "https://pixabay.com/get/g42c6a29b2cc6bb155790091f2dd55efdccaec7445947443bd3be10dcff33c23f9b7a47ca3592f8d794cf6a96c0467f9664c6d964af98ab15894740937358cbf2_1280.jpg",
              imageAlt: "Emma and David Johnson"
            },
            {
              id: "4",
              name: "Lisa Anderson",
              role: "Travel Blogger",
              testimonial: "As someone who stays in luxury hotels worldwide, I can confidently say Grand Palace Hotel sets the gold standard. Every detail is thoughtfully considered and perfectly executed.",
              imageSrc: "https://pixabay.com/get/g2677447cb2ef919f746d9993dbf324652b31c726c0694b7b8691a43ca9594ba68f3bfee9007f9cdd3e1e202373e0f872dae1123869363a5f35ccc5b5939d4937_1280.png",
              imageAlt: "Lisa Anderson"
            },
            {
              id: "5",
              name: "The Williams Family",
              role: "Family Vacation",
              testimonial: "Our family vacation was absolutely magical. The kids loved the pool, the parents enjoyed the spa, and we all loved the exceptional dining. Perfect for families seeking luxury.",
              imageSrc: "https://pixabay.com/get/gf0f3d96dc476f1dd0dbc2c34bcd017b9e427c7b04126a24a2bb2419398f726ee2ff016f5fbc4f0066a1cfbc3118727acf553be731a02e52d13c1bbe206471f09_1280.jpg",
              imageAlt: "Williams Family"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Leading Hotel Groups"
          description="Join the exclusive network of luxury hospitality partners worldwide"
          textboxLayout="default"
          logos={[
            "https://pixabay.com/get/g107fa6acd822be7ef5d137d31f330d652624ddcc77c1ddf8a393884e02e75ab7351543138f0c7d261b7cbe0dfab3a4e66fc6a409d8a0afb19fb9da7880a407af_1280.jpg",
            "https://pixabay.com/get/g5e5a66eb9e44cb72c33a168b3fff6ebdbead70e4d8927869984cbdb02825d10401282b8c79fe08bc1645ada51ebe83a025e9a1b827ff89144e4c1e48a0282d8d_1280.jpg",
            "https://pixabay.com/get/g1e81fb7ca7cc3fa3a379d05c6881e6b210f0b5069700e66f55f53e2831fba8e86931f0e7ecf46d355e75e0c7c8f907b0e351cbfec7c31fe0117c2ced83c3f008_1280.jpg",
            "https://pixabay.com/get/g567ba8287ed03e96add9da8b5a664531d8174274c7de40f5ecd87cd90a48d3cd6bc8a2a90be99b4c2a900263f5a7e3debd8e4e5e2d49e46b555977761fbf844d_1280.jpg",
            "https://pixabay.com/get/g752b42a9c76612e8680ae7d7d4db7fd8d2b30a5cbef3cb6911bc0841e5efd15fba0a1de27630b0dc865fc20e34ee06c859892169379eb7550e7ab0cf9a810c55_1280.jpg",
            "https://pixabay.com/get/g75208a1a3d7f0cc87b4f4786c4a40973fdad4b9b4bf67b85fdc7f5eb25cbe51c7170a9425e3cbfd0134cabcaafdb628e1692e69e6e682040c6493ce79ffcae35_1280.jpg",
            "https://pixabay.com/get/g019e65e4d2dfb9c9e5258302bd86c32585eb9d3e05d8bbf8c0df8461cb71b8c84a4d611b4b8cbdc3476b5db41da51fecbaaa2698d1231c544db66d24d961966e_1280.jpg",
            "https://pixabay.com/get/geafad3e9965db4339654686ce13c8f20c1fe329d710cf07957720a5e56e793b55a6270ed7c4c80a50e77ee53718380d4e8fb3ef255e64d895d74bd990614e87d_1280.jpg"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about your stay at Grand Palace Hotel"
          tag="Help Center"
          textboxLayout="default"
          faqs={[
            {
              id: "1",
              title: "What are your check-in and check-out times?",
              content: "Check-in is at 3:00 PM and check-out is at 12:00 PM. Early check-in and late check-out may be available upon request and subject to availability."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide luxury airport transfer service. Please contact our concierge team 24 hours in advance to arrange pickup. Additional charges apply."
            },
            {
              id: "3",
              title: "Are pets allowed at the hotel?",
              content: "We welcome well-behaved pets in designated pet-friendly rooms. A pet fee of $75 per night applies, and advance notification is required."
            },
            {
              id: "4",
              title: "What dining options are available?",
              content: "We feature a fine dining restaurant, casual cafe, rooftop bar, and 24-hour room service. Our executive chef creates both international cuisine and local specialties."
            },
            {
              id: "5",
              title: "Do you have fitness and spa facilities?",
              content: "Yes, our state-of-the-art fitness center is open 24/7, and our luxury spa offers a full range of treatments. Advanced booking is recommended for spa services."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Hotel News & Insights"
          description="Stay updated with the latest news, events, and luxury travel tips from Grand Palace Hotel"
          tag="Blog"
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {
              id: "1",
              category: "Interior Design",
              title: "Luxury Room Design Trends 2024",
              excerpt: "Discover the latest trends in luxury hotel room design and how we're incorporating them into our renovated suites.",
              imageSrc: "https://pixabay.com/get/g155f42389f305447f0bc47c943b2a920393210520ef4b8b8cc3fc18c0cf04a04c65e7e2eb6040436f1e3bf3ee5de9b5cbadb1aeb610748fabbd02c47355c4589_1280.jpg",
              imageAlt: "Luxury hotel room interior",
              authorName: "Isabella Martinez",
              authorAvatar: "https://pixabay.com/get/g9e4ffcdfbadd2675fa837a19401e1a21de38e66acf176f8843157ff2be7e192b26c30ec06523cceaf2f68277068a898315ffb2fb2f52a8a7e9ce31cc40453186_1280.jpg",
              date: "15 Jan 2024"
            },
            {
              id: "2",
              category: "Dining",
              title: "Farm-to-Table Excellence",
              excerpt: "Learn about our commitment to sustainable dining and how our chef sources the finest local ingredients for our restaurant.",
              imageSrc: "https://pixabay.com/get/gf7b15bd62e2a547f30fb9737732d4c87e8596865f2f58aaa946050474c239f94312422a79c0452489d3500099b54b949fded9e163bdb05ebd84dd943caea7303_1280.jpg",
              imageAlt: "Fine dining restaurant",
              authorName: "Isabella Martinez",
              authorAvatar: "https://pixabay.com/get/g9e4ffcdfbadd2675fa837a19401e1a21de38e66acf176f8843157ff2be7e192b26c30ec06523cceaf2f68277068a898315ffb2fb2f52a8a7e9ce31cc40453186_1280.jpg",
              date: "10 Jan 2024"
            },
            {
              id: "3",
              category: "Wellness",
              title: "Ultimate Spa Relaxation Guide",
              excerpt: "Discover our signature spa treatments and wellness programs designed to rejuvenate your mind, body, and spirit.",
              imageSrc: "https://pixabay.com/get/g14e756ee6de9307204d509c43f439e677f197cf1250cff28d0c7f4b6b58a0311ad07ff26f96fa7f956d552ece3d6a2767694e702aa949da1a2d06510d25cda0b_1280.jpg",
              imageAlt: "Luxury spa treatment room",
              authorName: "Isabella Martinez",
              authorAvatar: "https://pixabay.com/get/g9e4ffcdfbadd2675fa837a19401e1a21de38e66acf176f8843157ff2be7e192b26c30ec06523cceaf2f68277068a898315ffb2fb2f52a8a7e9ce31cc40453186_1280.jpg",
              date: "5 Jan 2024"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Contact Grand Palace Hotel"
          description="Get in touch with our team for reservations, special requests, or any questions about your upcoming stay."
          inputs={[
            { name: "name", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false },
            { name: "checkin", type: "date", placeholder: "Check-in Date", required: false }
          ]}
          textarea={{ name: "message", placeholder: "How can we help make your stay exceptional?", rows: 5, required: true }}
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoSrc="https://pixabay.com/get/gfac6b2b9810380dacfc7da4557750c2586f8224286249725e2d2ac1e381c00ee527d404976e07f7eff211723f963bc765aab8b6e7c040a1680d2fdb0147c32c6_1280.jpg"
          logoAlt="Grand Palace Hotel"
          logoText="Grand Palace Hotel"
          columns={[
            {
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "dining" },
                { label: "Spa & Wellness", href: "spa" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Contact", href: "contact" },
                { label: "Careers", href: "careers" },
                { label: "Press", href: "press" }
              ]
            },
            {
              items: [
                { label: "Reservations", href: "https://booking.grandpalace.com" },
                { label: "Special Offers", href: "offers" },
                { label: "Events", href: "events" },
                { label: "Gift Cards", href: "gift-cards" }
              ]
            },
            {
              items: [
                { label: "Privacy Policy", href: "privacy" },
                { label: "Terms of Service", href: "terms" },
                { label: "Accessibility", href: "accessibility" },
                { label: "Sustainability", href: "sustainability" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}