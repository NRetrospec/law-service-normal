import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Award, Scale, Shield, Clock, Users, 
  CheckCircle2, Phone, Star, Gavel, FileText, Heart
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

const practiceAreas = [
  {
    icon: Scale,
    title: 'Personal Injury',
    description: 'Get the compensation you deserve for accidents and injuries.',
    link: '/practice-areas/personal-injury',
  },
  {
    icon: Heart,
    title: 'Family Law',
    description: 'Compassionate guidance through divorce, custody, and family matters.',
    link: '/practice-areas/family-law',
  },
  {
    icon: Shield,
    title: 'Criminal Defense',
    description: 'Aggressive defense to protect your rights and freedom.',
    link: '/practice-areas/criminal-defense',
  },
  {
    icon: FileText,
    title: 'Business Law',
    description: 'Strategic legal solutions for businesses of all sizes.',
    link: '/practice-areas/business-law',
  },
];

const stats = [
  { value: '$50M+', label: 'In Recoveries' },
  { value: '98%', label: 'Success Rate' },
  { value: '25+', label: 'Years Experience' },
  { value: '1000+', label: 'Cases Won' },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Personal Injury Client',
    content: 'The team at Justice & Co. was incredible. They fought for me every step of the way and secured a settlement that changed my life.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Business Client',
    content: 'Professional, responsive, and incredibly knowledgeable. They handled our complex business litigation with expertise.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Family Law Client',
    content: 'During the most difficult time of my life, they provided compassionate support and excellent legal representation.',
    rating: 5,
  },
];

export function Home() {
  useEffect(() => {
    document.title = 'Justice & Co. | Award-Winning Legal Representation';
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Using the requested layout */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000&fit=crop"
                  alt="Professional Attorney"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                
                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                      <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">Top Rated Attorney</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Super Lawyers 2024</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl" />
            </motion.div>

            {/* Right Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="space-y-8"
            >
              {/* Trust badges */}
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
                  <Shield className="h-4 w-4" />
                  Free Consultation
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-sm font-medium">
                  <Star className="h-4 w-4" />
                  5-Star Rated
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                  Protecting Your
                  <span className="text-blue-600 dark:text-blue-400"> Rights</span>,
                  <br />
                  Securing Your
                  <span className="text-blue-600 dark:text-blue-400"> Future</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                  With over 25 years of experience, our award-winning legal team 
                  has recovered millions for clients. We fight tirelessly to ensure 
                  justice is served.
                </p>
              </div>

              {/* Key benefits */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  'No Fees Unless We Win',
                  '24/7 Client Support',
                  'Free Case Evaluation',
                  'Proven Track Record',
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book-consultation">
                  <Button size="lg" className="w-full sm:w-auto">
                    Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="tel:+1234567890">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <Phone className="mr-2 h-5 w-5" />
                    (123) 456-7890
                  </Button>
                </a>
              </div>

              {/* Trust indicators */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                  Trusted by thousands of clients
                </p>
                <div className="flex items-center gap-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    4.9/5 from 500+ reviews
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Text Section - As shown in layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20 p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">
              Our Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-3 mb-4">
              Practice Areas
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              We provide comprehensive legal services across multiple practice areas,
              ensuring expert representation for all your legal needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={area.link}>
                  <Card className="h-full group hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                        <area.icon className="h-7 w-7 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                        {area.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {area.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/practice-areas">
              <Button variant="outline">
                View All Practice Areas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-3 mb-6">
                Dedicated to Your Success
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                We combine legal expertise with a client-first approach. Our team 
                is committed to providing personalized attention and aggressive 
                representation to achieve the best possible outcomes.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Users,
                    title: 'Client-Focused Approach',
                    desc: 'Your goals become our mission. We listen, understand, and tailor our strategy to your unique situation.',
                  },
                  {
                    icon: Clock,
                    title: 'Responsive Communication',
                    desc: 'Never wonder about your case status. We provide regular updates and are always available to answer questions.',
                  },
                  {
                    icon: Gavel,
                    title: 'Trial Experience',
                    desc: 'While many cases settle, our trial experience ensures we are prepared to fight for you in court if needed.',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop"
                alt="Legal consultation"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 rounded-xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 border-2 border-white dark:border-slate-900"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-slate-900 dark:text-white">
                    +1000 Clients
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Join our satisfied clients who trusted us with their legal matters.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-3 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                          {testimonial.name[0]}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 dark:bg-blue-700">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Discuss Your Case?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a free consultation today. We'll review your case and 
              discuss the best path forward for your legal matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-consultation">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 w-full sm:w-auto">
                  Schedule Free Consultation
                </Button>
              </Link>
              <a href="tel:+1234567890">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
