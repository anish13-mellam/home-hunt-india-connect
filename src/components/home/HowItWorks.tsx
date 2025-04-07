
import React from "react";
import { Search, House, Key } from "lucide-react";

const steps = [
  {
    icon: <Search className="h-8 w-8 text-white" />,
    title: "Search & Filter",
    description: "Use our advanced search to find properties that match your exact requirements."
  },
  {
    icon: <House className="h-8 w-8 text-white" />,
    title: "Visit Properties",
    description: "Schedule viewings and visit your shortlisted properties with verified agents."
  },
  {
    icon: <Key className="h-8 w-8 text-white" />,
    title: "Close the Deal",
    description: "Get assistance with paperwork and close the deal to move into your new home."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">How HomeHunt Works</h2>
          <p className="text-muted-foreground">Find and secure your dream property in just three simple steps</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="rounded-full bg-gradient-to-r from-primary to-orange-dark p-4 mb-5">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
