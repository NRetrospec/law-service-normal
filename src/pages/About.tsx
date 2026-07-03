import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Briefcase, Users, Star } from 'lucide-react';

const credentials = [
  {
    icon: GraduationCap,
    title: 'Education',
    items: [
      'J.D., Harvard Law School',
      'B.A., Yale University',
      'LL.M., Taxation, NYU School of Law',
    ],
  },
  {
    icon: Briefcase,
    title: 'Bar Admissions',
    items: [
      'New York State Bar',
      'U.S. District Court, Southern District',
      'U.S. Court of Appeals, Second Circuit',
    ],
  },
  {
    icon: Award,
    title: 'Awards & Recognition',
    items: [
      'Super Lawyers, 2015-2024',
      'Best Lawyers in America',
      'AV Preeminent Rating, Martindale-Hubbell',
    ],
  },
  {
    icon: Users,
    title: 'Professional Memberships',
    items: [
      'American Bar Association',
      'New York State Bar Association',
      'American Association for Justice',
    ],
  },
];

const timeline = [
  {
    year: '1999',
    title: 'Founded Firm',
    description: 'Established Justice & Co. with a vision to provide accessible, high-quality legal services.',
  },
  {
    year: '2005',
    title: 'Landmark Victory',
    description: 'Secured a $12 million verdict in a personal injury case, establishing our reputation.',
  },
  {
    year: '2012',
    title: 'Expanded Practice',
    description: 'Added family law and criminal defense divisions to better serve our community.',
  },
  {
    year: '2018',
    title: 'Tech Innovation',
    description: 'Launched our client portal, bringing modern technology to legal services.',
  },
  {
    year: '2024',
    title: '25 Years of Excellence',
    description: 'Celebrating a quarter-century of serving clients with dedication and integrity.',
  },
];

export function About() {
  useEffect(() => {
    document.title = 'About Us | Justice & Co.';
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero */}
      <section className="relative py-24 bg-slate-900">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=600&fit=crop"
            alt="Office"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              About Justice & Co.
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A legacy of excellence in legal representation. For over 25 years, 
              we have been fighting for justice and securing victories for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Attorney Profile */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&h=800&fit=crop"
                alt="Lead Attorney"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold">25+</div>
                <div className="text-sm text-blue-100">Years Experience</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">
                Lead Attorney
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-3 mb-6">
                Jonathan Mitchell, Esq.
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Jonathan Mitchell is the founding partner of Justice & Co. With over 
                25 years of experience in complex litigation, he has built a reputation 
                as one of the most respected attorneys in the region.
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                His practice focuses on personal injury, business litigation, and 
                criminal defense. Jonathan's dedication to his clients and his 
                relentless pursuit of justice have resulted in hundreds of successful 
                outcomes and millions in recoveries.
              </p>

              <div className="flex flex-wrap gap-4">
                {[
                  { icon: Star, label: 'Top Rated' },
                  { icon: Award, label: 'Award Winning' },
                  { icon: Users, label: '1000+ Clients' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full"
                  >
                    <item.icon className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">
              Qualifications
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-3">
              Credentials & Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {credentials.map((cred, index) => (
              <motion.div
                key={cred.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <cred.icon className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  {cred.title}
                </h3>
                <ul className="space-y-2">
                  {cred.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2"
                    >
                      <span className="text-blue-600 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-3">
              25 Years of Excellence
            </h2>
          </div>

          <div className="space-y-8">
            {timeline.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {event.year}
                  </span>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-blue-600" />
                  <div className="w-0.5 h-full bg-slate-200 dark:bg-slate-800 mt-2" />
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-blue-600 dark:bg-blue-700">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              To provide exceptional legal representation with integrity, compassion, 
              and unwavering dedication to our clients' best interests. We believe 
              everyone deserves access to justice, and we work tirelessly to ensure 
              our clients receive the best possible outcomes.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
