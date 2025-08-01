import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Workflow, 
  Globe, 
  Clock, 
  Users,
  ArrowRight 
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Models",
      description: "Leverage cutting-edge machine learning algorithms trained on massive datasets for superior performance and accuracy.",
      benefits: ["99.9% accuracy", "Real-time processing", "Custom model training"]
    },
    {
      icon: Zap,
      title: "Lightning Fast Processing",
      description: "Process millions of operations per second with our optimized infrastructure and intelligent caching systems.",
      benefits: ["Sub-second response", "Auto-scaling", "Global CDN"]
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption, compliance certifications, and advanced threat protection.",
      benefits: ["SOC 2 compliant", "256-bit encryption", "Zero-trust architecture"]
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Comprehensive insights and analytics dashboard to monitor performance, usage, and business metrics.",
      benefits: ["Live dashboards", "Custom reports", "Predictive analytics"]
    },
    {
      icon: Workflow,
      title: "Seamless Integration",
      description: "Connect with 500+ popular tools and platforms through our robust API and pre-built integrations.",
      benefits: ["REST & GraphQL APIs", "Webhook support", "No-code connectors"]
    },
    {
      icon: Globe,
      title: "Global Infrastructure",
      description: "Deployed across 15+ regions worldwide for optimal performance and compliance with local regulations.",
      benefits: ["99.99% uptime", "Edge computing", "Data residency"]
    }
  ];

  const stats = [
    { number: "10M+", label: "API Calls Daily", icon: Zap },
    { number: "500+", label: "Enterprise Clients", icon: Users },
    { number: "99.99%", label: "Uptime SLA", icon: Clock },
    { number: "15+", label: "Global Regions", icon: Globe }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Powerful Features for Modern Businesses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to transform your business with AI-powered automation and intelligence
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-primary" size={32} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="text-primary" size={32} />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>

              <ul className="space-y-2 mb-6">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                className="text-primary hover:text-primary/80 font-medium flex items-center gap-2 group-hover:gap-3 transition-all"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Learn More
                <ArrowRight size={16} />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using our AI platform to drive growth and innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Start Free Trial
            </motion.button>
            <motion.button
              className="demo-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Schedule Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;

