import React from 'react';
import { PricingCard } from '../components/PricingCard';
import { Bot, Code, Users, Zap } from 'lucide-react';

export function Home() {
  const features = [
    {
      icon: <Bot className="w-6 h-6 text-red-500" />,
      title: "AI-Powered Development",
      description: "Let AI assist in writing, reviewing, and optimizing your code"
    },
    {
      icon: <Users className="w-6 h-6 text-red-500" />,
      title: "Real-time Collaboration",
      description: "Work together with your team in real-time with live preview"
    },
    {
      icon: <Code className="w-6 h-6 text-red-500" />,
      title: "Multi-language Support",
      description: "Support for all major programming languages and frameworks"
    },
    {
      icon: <Zap className="w-6 h-6 text-red-500" />,
      title: "Instant Deployment",
      description: "Deploy your projects with one click to various platforms"
    }
  ];

  const pricingPlans = [
    {
      title: "Premium",
      price: 20,
      users: 2,
      features: [
        "AI Code Generation",
        "Real-time Preview",
        "Basic Collaboration",
        "Community Support"
      ]
    },
    {
      title: "Business",
      price: 50,
      users: 6,
      features: [
        "Everything in Premium",
        "Advanced AI Features",
        "Priority Support",
        "Custom Deployment Options"
      ]
    },
    {
      title: "Business Pro",
      price: 100,
      users: 10,
      features: [
        "Everything in Business",
        "Custom AI Model Integration",
        "24/7 Premium Support",
        "Advanced Analytics"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <section className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-6">
          The Future of <span className="text-red-500">Collaborative</span> Development
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Build anything with AI-powered assistance, real-time collaboration, and seamless deployment.
        </p>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </section>
    </div>
  );
}