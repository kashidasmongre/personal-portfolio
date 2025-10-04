
"use client";

import { useState } from 'react';
import { Check, X, CreditCard, Code, BarChart, Settings, Users, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useAnimation } from '@/hooks/use-animation';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

const plans = [
  {
    name: 'Basic',
    price: '₹1,500',
    description: 'For a simple & professional online presence.',
    features: [
      { text: '1-3 static pages', included: true },
      { text: 'Responsive design', included: true },
      { text: 'Contact form', included: true },
      { text: 'Basic SEO setup', included: true },
      { text: 'Blog/news section', included: false },
      { text: 'Interactive forms', included: false },
      { text: 'Basic analytics', included: false },
      { text: 'Product catalog / service listing', included: false },
      { text: 'Payment gateway integration', included: false },
      { text: 'Shopping cart & checkout', included: false },
      { text: 'Sales analytics', included: false },
      { text: 'SEO + basic marketing tools', included: false },
      { text: 'Multiple integrations (Swiggy/Zomato, CRM, ERP)', included: false },
      { text: 'Advanced analytics & reporting', included: false },
      { text: 'Priority support', included: false },
    ],
    idealFor: 'Small businesses / startups wanting a simple online presence',
    isPopular: false,
  },
  {
    name: 'Dynamic',
    price: '₹2,500',
    description: 'For growing businesses who need to update content.',
    features: [
      { text: '5-10 dynamic pages', included: true },
      { text: 'Responsive design', included: true },
      { text: 'Contact form', included: true },
      { text: 'Basic SEO setup', included: true },
      { text: 'Blog/news section', included: true },
      { text: 'Interactive forms', included: true },
      { text: 'Basic analytics', included: true },
      { text: 'Product catalog / service listing', included: false },
      { text: 'Payment gateway integration', included: false },
      { text: 'Shopping cart & checkout', included: false },
      { text: 'Sales analytics', included: false },
      { text: 'SEO + basic marketing tools', included: false },
      { text: 'Multiple integrations (Swiggy/Zomato, CRM, ERP)', included: false },
      { text: 'Advanced analytics & reporting', included: false },
      { text: 'Priority support', included: false },
    ],
    idealFor: 'Growing businesses updating content regularly',
    isPopular: false,
  },
  {
    name: 'Advanced / E-Commerce',
    price: '₹5,000',
    description: 'For businesses ready to start selling online.',
    features: [
      { text: 'Unlimited pages', included: true },
      { text: 'Responsive design', included: true },
      { text: 'Contact form', included: true },
      { text: 'Basic SEO setup', included: true },
      { text: 'Blog/news section', included: true },
      { text: 'Interactive forms', included: true },
      { text: 'Basic analytics', included: true },
      { text: 'Product catalog / service listing', included: true },
      { text: 'Payment gateway integration', included: true },
      { text: 'Shopping cart & checkout', included: true },
      { text: 'Sales analytics', included: true },
      { text: 'SEO + basic marketing tools', included: true },
      { text: 'Multiple integrations (Swiggy/Zomato, CRM, ERP)', included: false },
      { text: 'Advanced analytics & reporting', included: false },
      { text: 'Priority support', included: false },
    ],
    idealFor: 'Businesses starting online sales (retailers, restaurants, service providers)',
    isPopular: true,
  },
  {
    name: 'Custom',
    price: '₹8,000+',
    description: 'For businesses with unique, large-scale needs.',
    features: [
      { text: 'Fully customized website', included: true },
      { text: 'Responsive design', included: true },
      { text: 'Contact form', included: true },
      { text: 'Basic SEO setup', included: true },
      { text: 'Blog/news section', included: true },
      { text: 'Interactive forms', included: true },
      { text: 'Basic analytics', included: true },
      { text: 'Product catalog / service listing', included: true },
      { text: 'Payment gateway integration', included: true },
      { text: 'Shopping cart & checkout', included: true },
      { text: 'Sales analytics', included: true },
      { text: 'SEO + basic marketing tools', included: true },
      { text: 'Multiple integrations (Swiggy/Zomato, CRM, ERP)', included: true },
      { text: 'Advanced analytics & reporting', included: true },
      { text: 'Priority support', included: true },
    ],
    idealFor: 'Medium/large SMBs needing unique requirements and advanced integrations',
    isPopular: false,
  },
];

const allFeatures = [
    { text: 'Pages', icon: Code },
    { text: 'Responsive design', icon: Code },
    { text: 'Contact form', icon: Users },
    { text: 'Basic SEO setup', icon: Settings },
    { text: 'Blog/news section', icon: Code },
    { text: 'Interactive forms', icon: Users },
    { text: 'Basic analytics', icon: BarChart },
    { text: 'Product catalog / service listing', icon: Code },
    { text: 'Payment gateway integration', icon: CreditCard },
    { text: 'Shopping cart & checkout', icon: Code },
    { text: 'Sales analytics', icon: BarChart },
    { text: 'SEO + basic marketing tools', icon: Settings },
    { text: 'Multiple integrations (Swiggy/Zomato, CRM, ERP)', icon: Settings },
    { text: 'Advanced analytics & reporting', icon: BarChart },
    { text: 'Priority support', icon: Users },
]


const SubscriptionPlans = () => {
    const { ref, isVisible } = useAnimation(0.1);
    const [showTable, setShowTable] = useState(false);

    return (
        <section id="subscription-plans" ref={ref} className="py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl inline-block relative transition-all duration-700", isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
                        Website Solutions for Your Business
                        <span className={cn("absolute -bottom-2 left-0 w-full h-1 bg-primary transition-all duration-1000 delay-300", isVisible ? "scale-x-100" : "scale-x-0")} style={{transformOrigin: 'left'}}/>
                    </h2>
                    <p className={cn("mt-4 max-w-2xl mx-auto text-muted-foreground transition-opacity duration-700 delay-200", isVisible ? "opacity-100" : "opacity-0")}>
                        Choose a plan that fits your needs and budget. I offer flexible and powerful solutions for businesses of all sizes.
                    </p>
                </div>
                
                <div className={cn("flex justify-center items-center gap-4 mb-10 transition-all duration-700 delay-300", isVisible ? 'opacity-100' : 'opacity-0')}>
                    <Label htmlFor="view-toggle">Card View</Label>
                    <Switch id="view-toggle" checked={showTable} onCheckedChange={setShowTable} aria-label="Toggle between card and table view"/>
                    <Label htmlFor="view-toggle">Comparison View</Label>
                </div>
                
                {!showTable ? (
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 items-stretch">
                        {plans.map((plan, index) => (
                            <div key={plan.name} className={cn('transition-all duration-700', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} style={{ transitionDelay: `${index * 150 + 400}ms` }}>
                                <Card className={cn("glassmorphism h-full flex flex-col relative overflow-hidden", plan.isPopular ? "border-primary shadow-2xl shadow-primary/20" : "")}>
                                    {plan.isPopular && (
                                        <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">MOST POPULAR</div>
                                    )}
                                    <CardHeader className="text-center">
                                        <CardTitle className="text-2xl">{plan.name}</CardTitle>
                                        <CardDescription>{plan.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow flex flex-col">
                                        <div className="text-center my-4">
                                            <span className="text-4xl font-bold">{plan.price}</span>
                                            <span className="text-muted-foreground">/month</span>
                                        </div>
                                        <ul className="space-y-3 text-sm text-muted-foreground flex-grow">
                                            {plan.features.slice(0, 4).map((feature, i) => (
                                                <li key={i} className="flex items-center gap-3">
                                                    <Check className="h-5 w-5 text-primary" />
                                                    <span>{feature.text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Button asChild className="w-full mt-6">
                                            <Link href="/#contact">Get Started</Link>
                                        </Button>
                                        <p className="text-xs text-center text-muted-foreground mt-4"><strong>Ideal for:</strong> {plan.idealFor}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className={cn("overflow-x-auto transition-all duration-700", isVisible ? 'opacity-100' : 'opacity-0')} style={{ transitionDelay: '400ms' }}>
                        <table className="w-full min-w-[1000px] comparison-table">
                            <thead>
                                <tr>
                                    <th className="w-1/4">Features</th>
                                    {plans.map(plan => (
                                        <th key={plan.name} className={cn(plan.isPopular && "bg-primary/10")}>
                                            <h3 className="text-xl font-bold">{plan.name}</h3>
                                            <p className="font-normal text-muted-foreground">{plan.price}/month</p>
                                             <Button asChild size="sm" className="mt-2">
                                                <Link href="/#contact">Get Started</Link>
                                            </Button>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {allFeatures.map(feature => (
                                     <tr key={feature.text}>
                                        <td>
                                            <div className="flex items-center gap-2">
                                                <feature.icon className="h-4 w-4 text-primary"/>
                                                <span>{feature.text}</span>
                                            </div>
                                        </td>
                                        {plans.map(plan => {
                                            const planFeature = plan.features.find(f => f.text.startsWith(feature.text.split(" ")[0]));
                                            const isIncluded = planFeature ? planFeature.included : false;
                                            const featureText = planFeature ? planFeature.text : null;
                                            
                                            return (
                                                <td key={`${plan.name}-${feature.text}`} className={cn(plan.isPopular && "bg-primary/5")}>
                                                    {isIncluded ? (
                                                        featureText && featureText !== feature.text ? <span className='text-sm'>{featureText}</span> : <Check className="h-6 w-6 text-primary mx-auto" />
                                                    ) : (
                                                        <X className="h-6 w-6 text-muted-foreground/50 mx-auto" />
                                                    )}
                                                </td>
                                            );
 H                                       })}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </section>
    );
};

export default SubscriptionPlans;
