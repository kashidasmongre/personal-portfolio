
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, X, Users, Code, ShoppingCart, Settings, BarChart2, Star, FileText, Zap, Paintbrush } from 'lucide-react';
import { useAnimation } from '@/hooks/use-animation';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'Basic',
    price: '₹1,500',
    frequency: '/month',
    description: 'Ideal for small businesses or startups wanting a simple online presence.',
    features: [
      { text: '1-3 static pages', icon: <FileText className="h-5 w-5 text-primary" /> },
      { text: 'Responsive design', icon: <Paintbrush className="h-5 w-5 text-primary" /> },
      { text: 'Contact form', icon: <Users className="h-5 w-5 text-primary" /> },
      { text: 'Basic SEO setup', icon: <BarChart2 className="h-5 w-5 text-primary" /> },
    ],
    isPopular: false,
  },
  {
    name: 'Dynamic',
    price: '₹2,500',
    frequency: '/month',
    description: 'Perfect for growing businesses that need to update content regularly.',
    features: [
      { text: '5-10 dynamic pages', icon: <FileText className="h-5 w-5 text-primary" /> },
      { text: 'Blog/news section', icon: <Code className="h-5 w-5 text-primary" /> },
      { text: 'Interactive forms', icon: <Users className="h-5 w-5 text-primary" /> },
      { text: 'Basic analytics', icon: <BarChart2 className="h-5 w-5 text-primary" /> },
      { text: 'SEO setup', icon: <Star className="h-5 w-5 text-primary" /> },
    ],
    isPopular: true,
  },
  {
    name: 'Advanced / E-Commerce',
    price: '₹5,000',
    frequency: '/month',
    description: 'For businesses starting online sales, like retailers or service providers.',
    features: [
      { text: 'Unlimited pages', icon: <FileText className="h-5 w-5 text-primary" /> },
      { text: 'Product catalog / service listing', icon: <ShoppingCart className="h-5 w-5 text-primary" /> },
      { text: 'Payment gateway integration', icon: <Zap className="h-5 w-5 text-primary" /> },
      { text: 'Shopping cart & checkout', icon: <ShoppingCart className="h-5 w-5 text-primary" /> },
      { text: 'Sales analytics', icon: <BarChart2 className="h-5 w-5 text-primary" /> },
      { text: 'SEO + basic marketing tools', icon: <Star className="h-5 w-5 text-primary" /> },
    ],
    isPopular: false,
  },
  {
    name: 'Custom',
    price: '₹8,000+',
    frequency: '/month',
    description: 'Tailored for businesses needing unique features and advanced integrations.',
    features: [
      { text: 'Fully customized website', icon: <Paintbrush className="h-5 w-5 text-primary" /> },
      { text: 'Multiple integrations (Swiggy/Zomato, CRM, ERP)', icon: <Settings className="h-5 w-5 text-primary" /> },
      { text: 'Advanced analytics & reporting', icon: <BarChart2 className="h-5 w-5 text-primary" /> },
      { text: 'Priority support', icon: <Star className="h-5 w-5 text-primary" /> },
      { text: 'Tailored design & features', icon: <Paintbrush className="h-5 w-5 text-primary" /> },
    ],
    isPopular: false,
  },
];

const allFeatures = [
    'Pages', 'Design', 'Content Updates', 'Blog/News', 'Contact Form', 'Interactive Forms', 'Basic Analytics', 'Advanced Analytics', 'SEO', 'Product Catalog', 'Payment Gateway', 'Shopping Cart', 'Integrations', 'Support'
];

const planFeaturesMapping: { [key: string]: { [key: string]: string | boolean } } = {
    'Basic': {
        'Pages': '1-3 static', 'Design': 'Responsive', 'Content Updates': false, 'Blog/News': false, 'Contact Form': true, 'Interactive Forms': false, 'Basic Analytics': false, 'Advanced Analytics': false, 'SEO': 'Basic', 'Product Catalog': false, 'Payment Gateway': false, 'Shopping Cart': false, 'Integrations': false, 'Support': 'Standard'
    },
    'Dynamic': {
        'Pages': '5-10 dynamic', 'Design': 'Responsive', 'Content Updates': true, 'Blog/News': true, 'Contact Form': true, 'Interactive Forms': true, 'Basic Analytics': true, 'Advanced Analytics': false, 'SEO': 'Standard', 'Product Catalog': false, 'Payment Gateway': false, 'Shopping Cart': false, 'Integrations': false, 'Support': 'Standard'
    },
    'Advanced / E-Commerce': {
        'Pages': 'Unlimited', 'Design': 'Customized', 'Content Updates': true, 'Blog/News': true, 'Contact Form': true, 'Interactive Forms': true, 'Basic Analytics': true, 'Advanced Analytics': false, 'SEO': 'Advanced + Marketing', 'Product Catalog': true, 'Payment Gateway': true, 'Shopping Cart': true, 'Integrations': 'Basic', 'Support': 'Priority'
    },
    'Custom': {
        'Pages': 'Unlimited', 'Design': 'Fully Tailored', 'Content Updates': true, 'Blog/News': true, 'Contact Form': true, 'Interactive Forms': true, 'Basic Analytics': true, 'Advanced Analytics': true, 'SEO': 'Advanced + Strategy', 'Product Catalog': true, 'Payment Gateway': true, 'Shopping Cart': true, 'Integrations': 'Advanced (CRM, ERP)', 'Support': 'Dedicated'
    }
}


export default function SubscriptionPlans() {
  const { ref, isVisible } = useAnimation(0.2);

  return (
    <section id="subscription-plans" ref={ref} className="bg-card/30">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
            <h2 className={cn("text-3xl font-bold tracking-tight sm:text-4xl inline-block relative transition-all duration-700", isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
                Website Solutions for Your Business
                <span className={cn("absolute -bottom-2 left-0 w-full h-1 bg-primary transition-all duration-1000 delay-300", isVisible ? "scale-x-100" : "scale-x-0")} style={{transformOrigin: 'left'}}/>
            </h2>
            <p className={cn("mt-4 max-w-2xl mx-auto text-muted-foreground transition-opacity duration-700 delay-200", isVisible ? "opacity-100" : "opacity-0")}>
                Choose a plan that fits your needs. All plans include hosting, maintenance, and support.
            </p>
        </div>

        <Tabs defaultValue="cards" className="w-full">
            <TabsList className="grid w-full max-w-sm mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="cards">Card View</TabsTrigger>
                <TabsTrigger value="table">Compare Plans</TabsTrigger>
            </TabsList>
            <TabsContent value="cards">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {plans.map((plan, index) => (
                        <div
                            key={plan.name}
                            className={cn('transition-all duration-700', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}
                            style={{ transitionDelay: `${index * 150 + 300}ms` }}
                        >
                            <Card className={cn('glassmorphism h-full flex flex-col', plan.isPopular ? 'border-primary shadow-2xl shadow-primary/20' : 'hover:border-accent hover:shadow-xl hover:shadow-accent/10')}>
                                <CardHeader className="items-center">
                                    {plan.isPopular && <div className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">Most Popular</div>}
                                    <CardTitle>{plan.name}</CardTitle>
                                    <div className="text-4xl font-bold">{plan.price}<span className="text-lg font-normal text-muted-foreground">{plan.frequency}</span></div>
                                    <CardDescription className="text-center h-12">{plan.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <ul className="space-y-3">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                {feature.icon}
                                                <span className="text-muted-foreground">{feature.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">Get Started</Button>
                                </CardFooter>
                            </Card>
                        </div>
                    ))}
                </div>
            </TabsContent>
            <TabsContent value="table">
                 <Card className="glassmorphism overflow-x-auto">
                    <table className="w-full min-w-[800px] comparison-table">
                        <thead>
                            <tr>
                                <th className="w-1/4">Features</th>
                                {plans.map(plan => <th key={plan.name} className="text-center">{plan.name}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {allFeatures.map(feature => (
                                <tr key={feature}>
                                    <td>{feature}</td>
                                    {plans.map(plan => (
                                        <td key={plan.name} className="text-center">
                                            {typeof planFeaturesMapping[plan.name][feature] === 'boolean' ? (
                                                planFeaturesMapping[plan.name][feature] ? <Check className="mx-auto check-icon" /> : <X className="mx-auto cross-icon" />
                                            ) : (
                                                <span>{planFeaturesMapping[plan.name][feature]}</span>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                             <tr>
                                <td></td>
                                {plans.map(plan => (
                                    <td key={plan.name} className="text-center p-4">
                                        <Button>Get Started</Button>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </Card>
            </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
