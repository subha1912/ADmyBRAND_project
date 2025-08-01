import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Calculator, Users, Zap, Crown } from 'lucide-react';

const PricingCalculator = () => {
  const [users, setUsers] = useState(10);
  const [features, setFeatures] = useState('standard');
  const [billing, setBilling] = useState('monthly');

  const basePrices = {
    starter: { monthly: 29, yearly: 290 },
    standard: { monthly: 79, yearly: 790 },
    premium: { monthly: 149, yearly: 1490 }
  };

  const userMultipliers = {
    starter: 2,
    standard: 5,
    premium: 8
  };

  const calculatePrice = () => {
    const basePrice = basePrices[features][billing];
    const userCost = users * userMultipliers[features];
    const total = basePrice + userCost;
    return billing === 'yearly' ? total * 0.8 : total; // 20% discount for yearly
  };

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      icon: Zap,
      description: 'Perfect for small teams getting started',
      features: [
        'Up to 50 AI operations/day',
        'Basic analytics',
        'Email support',
        'Standard integrations'
      ]
    },
    {
      id: 'standard',
      name: 'Standard',
      icon: Users,
      description: 'Ideal for growing businesses',
      features: [
        'Up to 500 AI operations/day',
        'Advanced analytics',
        'Priority support',
        'Custom integrations',
        'Team collaboration'
      ],
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium',
      icon: Crown,
      description: 'For enterprises with advanced needs',
      features: [
        'Unlimited AI operations',
        'Real-time analytics',
        '24/7 dedicated support',
        'Custom AI models',
        'Advanced security',
        'White-label options'
      ]
    }
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
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calculator className="text-primary" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Pricing Calculator
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calculate your perfect plan based on your team size and needs
          </p>
        </motion.div>

        {/* Calculator Controls */}
        <motion.div
          className="bg-card rounded-2xl p-8 mb-12 border border-border shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Users Slider */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-4">
                Number of Users: <span className="text-primary font-bold">{users}</span>
              </label>
              <input
                type="range"
                min="1"
                max="100"
                value={users}
                onChange={(e) => setUsers(parseInt(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>1</span>
                <span>100</span>
              </div>
            </div>

            {/* Plan Selection */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-4">
                Plan Type
              </label>
              <select
                value={features}
                onChange={(e) => setFeatures(e.target.value)}
                className="w-full p-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="starter">Starter</option>
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
              </select>
            </div>

            {/* Billing Toggle */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-4">
                Billing Cycle
              </label>
              <div className="flex bg-muted rounded-lg p-1">
                <button
                  onClick={() => setBilling('monthly')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                    billing === 'monthly'
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBilling('yearly')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                    billing === 'yearly'
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Yearly
                  <span className="ml-1 text-xs bg-green-500 text-white px-1 rounded">-20%</span>
                </button>
              </div>
            </div>
          </div>

          {/* Price Display */}
          <motion.div
            className="mt-8 text-center"
            key={`${users}-${features}-${billing}`}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-4xl md:text-6xl font-bold text-primary mb-2">
              ${calculatePrice().toFixed(0)}
              <span className="text-lg text-muted-foreground">
                /{billing === 'monthly' ? 'month' : 'year'}
              </span>
            </div>
            {billing === 'yearly' && (
              <p className="text-green-600 font-medium">
                Save ${(calculatePrice() / 0.8 - calculatePrice()).toFixed(0)} per year!
              </p>
            )}
          </motion.div>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`relative bg-card rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? 'border-primary shadow-lg scale-105'
                  : 'border-border hover:border-primary/50'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <plan.icon className="mx-auto mb-4 text-primary" size={48} />
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="text-primary flex-shrink-0" size={20} />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                  plan.popular
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'bg-muted text-foreground hover:bg-primary hover:text-primary-foreground'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setFeatures(plan.id)}
              >
                {features === plan.id ? 'Selected' : 'Choose Plan'}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;

