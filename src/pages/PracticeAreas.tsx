import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Scale, Heart, Shield, FileText, Building2, Home, 
  Briefcase, ArrowRight 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const practiceAreas = [
  {
    icon: Scale,
    title: 'Personal Injury',
    slug: 'personal-injury',
    description: 'If you have been injured due to someone else\'s negligence, we fight to get you the compensation you deserve. Our personal injury practice covers car accidents, slip and falls, medical malpractice, and more.',
    cases: 'Car Accidents, Medical Malpractice, Slip & Fall, Product Liability',
  },
  {
    icon: Heart,
    title: 'Family Law',
    slug: 'family-law',
    description: 'Family legal matters require both expertise and compassion. We guide clients through divorce, child custody disputes, adoption, and other sensitive family matters with care and professionalism.',
    cases: 'Divorce, Child Custody, Adoption, Prenuptial Agreements',
  },
  {
    icon: Shield,
    title: 'Criminal Defense',
    slug: 'criminal-defense',
    description: 'Facing criminal charges can be overwhelming. Our experienced defense attorneys protect your rights and freedom, from minor misdemeanors to serious felony charges.',
    cases: 'DUI/DWI, Drug Charges, White Collar Crimes, Violent Crimes',
  },
  {
    icon: FileText,
    title: 'Estate Planning',
    slug: 'estate-planning',
    description: 'Protect your legacy and ensure your wishes are honored. We help clients create comprehensive estate plans including wills, trusts, and powers of attorney.',
    cases: 'Wills & Trusts, Probate, Power of Attorney, Estate Administration',
  },
  {
    icon: Building2,
    title: 'Business Law',
    slug: 'business-law',
    description: 'From startups to established enterprises, we provide comprehensive legal services to help your business thrive and navigate complex regulatory environments.',
    cases: 'Business Formation, Contracts, M&A, Employment Law',
  },
  {
    icon: Home,
    title: 'Real Estate',
    slug: 'real-estate',
    description: 'Whether buying your first home or managing commercial properties, our real estate attorneys ensure your transactions are smooth and your interests are protected.',
    cases: 'Residential Sales, Commercial Leases, Zoning, Title Issues',
  },
  {
    icon: Briefcase,
    title: 'Employment Law',
    slug: 'employment-law',
    description: 'We advocate for employees\' rights in workplace disputes including discrimination, harassment, wrongful termination, and wage violations.',
    cases: 'Discrimination, Harassment, Wrongful Termination, Wage Claims',
  },
  {
    icon: Scale,
    title: 'Immigration',
    slug: 'immigration',
    description: 'Navigate the complex immigration system with confidence. We assist with visas, green cards, citizenship applications, and deportation defense.',
    cases: 'Work Visas, Family Immigration, Citizenship, Deportation Defense',
  },
];

export function PracticeAreas() {
  useEffect(() => {
    document.title = 'Practice Areas | Justice & Co.';
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero */}
      <section className="relative py-24 bg-slate-900">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=600&fit=crop"
            alt="Law books"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Practice Areas
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive legal services tailored to your unique needs. 
              Our experienced attorneys are ready to help you navigate any legal challenge.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practiceAreas.map((area, index) => (
              <motion.div
                key={area.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full group hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                        <area.icon className="h-8 w-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
                          {area.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                          {area.description}
                        </p>
                        <div className="mb-4">
                          <span className="text-sm font-medium text-slate-900 dark:text-white">
                            Common Cases:
                          </span>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            {area.cases}
                          </p>
                        </div>
                        <Link to={`/practice-areas/${area.slug}`}>
                          <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
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
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Not Sure Which Practice Area?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Contact us for a free consultation. We'll help determine the best 
              approach for your specific legal needs.
            </p>
            <Link to="/book-consultation">
              <Button size="lg">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
