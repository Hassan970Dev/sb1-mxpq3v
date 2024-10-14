import React from 'react';
import { Check } from 'lucide-react';

const PricingPlan = ({ title, price, features, isPopular }: { title: string; price: string; features: string[]; isPopular?: boolean }) => (
  <div className={`bg-white p-8 rounded-lg shadow-md ${isPopular ? 'border-4 border-blue-500' : ''}`}>
    {isPopular && <div className="text-blue-500 font-semibold mb-2">Most Popular</div>}
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-4xl font-bold mb-6">${price}<span className="text-xl font-normal">/month</span></p>
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <Check className="text-green-500 mr-2" />
          {feature}
        </li>
      ))}
    </ul>
    <button className={`w-full py-2 px-4 rounded ${isPopular ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} font-semibold hover:opacity-90 transition duration-300`}>
      Choose Plan
    </button>
  </div>
);

const Price = () => {
  return (
    <div className="space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-4">Pricing Plans</h1>
        <p className="text-xl text-gray-600">Choose the perfect plan for your trading needs</p>
      </header>

      <div className="grid md:grid-cols-3 gap-8">
        <PricingPlan
          title="Basic"
          price="29"
          features={[
            "Access to 3 basic indicators",
            "Daily market analysis",
            "Email support"
          ]}
        />
        <PricingPlan
          title="Pro"
          price="79"
          features={[
            "Access to all indicators",
            "Real-time alerts",
            "Priority email support",
            "Weekly strategy webinars"
          ]}
          isPopular
        />
        <PricingPlan
          title="Enterprise"
          price="199"
          features={[
            "Custom indicator development",
            "1-on-1 strategy sessions",
            "24/7 phone support",
            "API access"
          ]}
        />
      </div>

      <section className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Can I change my plan later?</h3>
            <p>Yes, you can upgrade or downgrade your plan at any time.</p>
          </div>
          <div>
            <h3 className="font-semibold">Is there a free trial available?</h3>
            <p>We offer a 7-day free trial for new users to test our indicators.</p>
          </div>
          <div>
            <h3 className="font-semibold">How often are the indicators updated?</h3>
            <p>We release updates and improvements on a monthly basis.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Price;