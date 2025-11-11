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
          logoSrc="https://pixabay.com/get/gf4bcfb9c15e44a2dada7a14fd8c8d8a00d2cd619c201ba777c15ed44ee63f458d1ed96af1646e4eb20a38fbb0536a16a87855548996e5f148be578eae23bf887_1280.jpg"
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
          imageSrc="https://pixabay.com/get/ga79579fed859b7d760ab942d70de5ed507b2c37e7d4cc1f4715044354ace5612b608dfdef5dd1038fe44dc714d7d20207aecc0fe08272fc8401c32720e2844e0_1280.jpg"
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
              imageSrc: "https://pixabay.com/get/g502aca3fa97ae82e7c118748f394eebe0af530eadda3aa95c61f3cb06ebdfb7a743cc03232f5d75a3c6bf2e221080a7a12b325264fb4c91d75f446698268553d_1280.jpg",
              imageAlt: "Deluxe room with king bed"
            },
            {
              id: "suite",
              brand: "Grand Palace",
              name: "Executive Suite",
              price: "$599/night",
              rating: 5,
              reviewCount: "856",
              imageSrc: "https://pixabay.com/get/g2de975947fb5f8b7974fbac8847ca03bd54c6ecfb2df15d93fba4d6f18db5f7c640f161b3e67c94655d25b382ba809ee6468bdf2b6011634c6f9666750fbbff6_1280.jpg",
              imageAlt: "Executive suite living area"
            },
            {
              id: "penthouse",
              brand: "Grand Palace",
              name: "Presidential Penthouse",
              price: "$1,299/night",
              rating: 5,
              reviewCount: "342",
              imageSrc: "https://pixabay.com/get/g5b1b342e552c072be1014b3d1b241282490b89f4846d882e88e54a7a2f2154d2f7bacdf654713dc0a06abd206416dc1a9db92bbc04b4c5e6316eb2a6daed98c3_1280.jpg",
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
              imageSrc: "https://pixabay.com/get/ga691ccf8e7c567e56be09c95608e678e6c862adcfa46dc6516a9afffe55f450d7e94f59990c1e8b4131db7953872bb834a79d73179481f55719a54ecb6e7684d_1280.jpg",
              imageAlt: "James Wellington"
            },
            {
              id: "2",
              name: "Maria Santos",
              role: "Head Concierge",
              imageSrc: "https://pixabay.com/get/gc77d7b485af43cf65c9a3c08b38598d57277d020e99fba8a512f2aab022ca90fc1550ddc59928a90a685b92246e24aff61b1e49aee3fa5e3b6a291c182afb152_1280.jpg",
              imageAlt: "Maria Santos"
            },
            {
              id: "3",
              name: "Chef Antoine Dubois",
              role: "Executive Chef",
              imageSrc: "https://pixabay.com/get/g8b676b1698984e81b0bdcc71a01597f765771c48d614e827481c038cc836c8db37427de9635f0c39ba8647952bb6ba2dd74bd363941ebe561cbcbf0ed074d363_1280.jpg",
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
              imageSrc: "https://pixabay.com/get/g6745cb7e50f7c6bf7b171fccbb0366cb034634041db476a65dca3ab5984c37633e41e330aa029136c4b591edf774c3a0c9d121b9ac2d7680c8ff03f3c50fd6f3_1280.png",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              name: "Robert Chen",
              role: "Investment Director",
              testimonial: "From the moment I arrived, I felt like royalty. The attention to detail and personalized service made my business trip memorable. I'll definitely be returning.",
              imageSrc: "https://pixabay.com/get/g14587fc7be1086b61bdcf456505fabca52259a366c5992c191719601bee5f1fad2cc9a664d9b670e1b91debb2a2b4ee9394a263f4e96798d282ad2a4b2c72d81_1280.jpg",
              imageAlt: "Robert Chen"
            },
            {
              id: "3",
              name: "Emma & David Johnson",
              role: "Anniversary Celebration",
              testimonial: "Our 25th anniversary celebration was perfect thanks to the Grand Palace team. The romantic package, spa treatments, and special dinner created memories we'll treasure forever.",
              imageSrc: "https://pixabay.com/get/gaf3345663e61c2aaf2f53bb54104cb5bb66ffaf7602d5183a7512b5a2a0c2e077cc0a87f8b8fe5cdd2b8ff668e37d62a488102e8cbbf5d9eb878752a2d1693cc_1280.jpg",
              imageAlt: "Emma and David Johnson"
            },
            {
              id: "4",
              name: "Lisa Anderson",
              role: "Travel Blogger",
              testimonial: "As someone who stays in luxury hotels worldwide, I can confidently say Grand Palace Hotel sets the gold standard. Every detail is thoughtfully considered and perfectly executed.",
              imageSrc: "https://pixabay.com/get/g320a567b6c78a73ef13d0f56e6137428a18e4f7b3248367e9b326e2af54cc40792ec5f4818fa201e8113c47c39a41a8c502190d71252d5b5531d705ad80bb0be_1280.png",
              imageAlt: "Lisa Anderson"
            },
            {
              id: "5",
              name: "The Williams Family",
              role: "Family Vacation",
              testimonial: "Our family vacation was absolutely magical. The kids loved the pool, the parents enjoyed the spa, and we all loved the exceptional dining. Perfect for families seeking luxury.",
              imageSrc: "https://pixabay.com/get/g993d8a7ef7f66dacdf1421bf18a7b55d4ab6f07683bd5f603e79c82233ca2434a6c6df442320a16a50d9425a31d592bb41257607abe5025f17be4730eb2d5f17_1280.jpg",
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
            "https://pixabay.com/get/ge5bef1465c36a054d8a9cafcf9bca21dbcf73663e454885c25c1029efdea9d9f4082aad68a34f27cdbe4dea7a09660d5171c96ce251a0b19afabd1adb3f454a3_1280.jpg",
            "https://pixabay.com/get/gafb7396933f76601d983a4b71a0f158d675ad46dcdc394117b2ff77f1217fb03d1f1129630514bfd23b83117e22bfa4b9840fa99b3f6fcb3f9db7e2072106973_1280.jpg",
            "https://pixabay.com/get/gc165e3b9cf43565f4cb819fadb5cb883c5b052519ab6f98cbf0ab4a8864a7aa7e0943292988e8b6d2926c02f30c2a151d52d048bcc1b385438de3298023100d2_1280.jpg",
            "https://pixabay.com/get/gd881283afe915d293ae69d881c78db4651f746751e6bcf89259fc3bc3acce1b414710ea6a614db7fa22fe92b2c8acd8088fb1b621c4ffb2291f266b54936a261_1280.jpg",
            "https://pixabay.com/get/gd4b05ef36d1fb7d251a758b0b372d820139335c9e7078d93d0eed8b0cd74254a62ed983bee28b517331ec7fbce6daa72c71fa521f7646fd7eaa37f791f561e48_1280.jpg",
            "https://pixabay.com/get/g36b559fe8afc2cea047be8f78c08b8f281c76abfaf36367c05f5b051cf5a74aeb4a4d8f8b987fb6f68042226673a7a9ae1e2c7a9f81a428b88dca4e551e4fe94_1280.jpg",
            "https://pixabay.com/get/gb0ac0b900392dbab3934e56a02c51250945c91a3bc91c543ea1e794abc267ee04d15c00e10cfd5b730a2ae705b724d2326cc753e2119542483c16e0fb908dca3_1280.jpg",
            "https://pixabay.com/get/gf1c2a81e2c0aeeb592bdb38c11d7ab639d054427decfea87b89f936804c4b44619611d08ef56d8264264cad826243cd5ad68e44592da47e28fbd4d411adf4991_1280.jpg"
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
              imageSrc: "https://pixabay.com/get/gbd319c8c70049711448d263c5d5b1f1d2b81b543cfb3bc3bbc7ab3d82756410fa2c02e34cc89b2a5cb83ca96874a381d0a828015dcbc291fc2a4c657d12984e2_1280.jpg",
              imageAlt: "Luxury hotel room interior",
              authorName: "Isabella Martinez",
              authorAvatar: "https://pixabay.com/get/g3166ee776696e357a17be5af105309f04a92fbfb8a5b584929f0ac7cd1dd723b50cb85ddc529ecb6b606be105c3602175fc14893ece745ff600f6367034d90e9_1280.jpg",
              date: "15 Jan 2024"
            },
            {
              id: "2",
              category: "Dining",
              title: "Farm-to-Table Excellence",
              excerpt: "Learn about our commitment to sustainable dining and how our chef sources the finest local ingredients for our restaurant.",
              imageSrc: "https://pixabay.com/get/gadec9a150d53aeab5c7d59215d0ab0185845f0880d57f342c8aeec0cdf9ce9b65740f3994c4633620a81296f70c39387dcf3221a55fad6e4e88b13b2d9d12da3_1280.jpg",
              imageAlt: "Fine dining restaurant",
              authorName: "Isabella Martinez",
              authorAvatar: "https://pixabay.com/get/g3166ee776696e357a17be5af105309f04a92fbfb8a5b584929f0ac7cd1dd723b50cb85ddc529ecb6b606be105c3602175fc14893ece745ff600f6367034d90e9_1280.jpg",
              date: "10 Jan 2024"
            },
            {
              id: "3",
              category: "Wellness",
              title: "Ultimate Spa Relaxation Guide",
              excerpt: "Discover our signature spa treatments and wellness programs designed to rejuvenate your mind, body, and spirit.",
              imageSrc: "https://pixabay.com/get/g86cd16dd5935084de25fbadfd46898bbf3e25fe82a4f05ae6f9dc665a73828f63beb0cdafc7b7ec5e9eb69d1b115a4cd5b0ef291b33b427d01a5519ba73e1dae_1280.jpg",
              imageAlt: "Luxury spa treatment room",
              authorName: "Isabella Martinez",
              authorAvatar: "https://pixabay.com/get/g3166ee776696e357a17be5af105309f04a92fbfb8a5b584929f0ac7cd1dd723b50cb85ddc529ecb6b606be105c3602175fc14893ece745ff600f6367034d90e9_1280.jpg",
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
          textarea={{
            name: "message",
            placeholder: "How can we help make your stay exceptional?",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoSrc="https://pixabay.com/get/gf4bcfb9c15e44a2dada7a14fd8c8d8a00d2cd619c201ba777c15ed44ee63f458d1ed96af1646e4eb20a38fbb0536a16a87855548996e5f148be578eae23bf887_1280.jpg"
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