import React, { useState } from 'react';
import logo from './assets/logo.png';

const HostOnboarding = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const resources = [
    {
      title: 'Food Safety Guide',
      description: 'Essential guidelines for safe food handling and storage',
      url: 'https://nicunursekatie.github.io/sandwichinventory/toolkit/20230525-TSP-Food+Safety+Volunteers%20(2).pdf',
      icon: '🛡️'
    },
    {
      title: 'Deli Sandwich Labels',
      description: 'Printable labels for deli meat sandwiches',
      url: 'https://nicunursekatie.github.io/sandwichinventory/toolkit/Deli%20labels_1749341916236.pdf',
      icon: '🏷️'
    },
    {
      title: 'PB&J Labels',
      description: 'Printable labels for peanut butter & jelly sandwiches',
      url: 'https://nicunursekatie.github.io/sandwichinventory/toolkit/Pbj%20labels.pdf',
      icon: '🏷️'
    },
    {
      title: 'Find Open Hosts',
      description: 'See which collection sites are accepting sandwiches this week',
      url: 'https://tsp-host-finder-tool.web.app',
      icon: '📍'
    }
  ];

  const onboardingSteps = [
    {
      id: 'role',
      title: 'What Is a Host?',
      content: (
        <div className="space-y-4">
          <p>
            A host is the central collection point for their community. Sandwich makers in your area drop off their sandwiches at your home, and a driver picks them up for delivery to partner sites.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal">
              <h4 className="font-semibold text-teal mb-2">What You Do</h4>
              <ul className="space-y-1 text-sm">
                <li>• Receive sandwiches from local makers</li>
                <li>• Store them safely until pickup</li>
                <li>• Report weekly counts</li>
                <li>• Coordinate with your driver</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-300">
              <h4 className="font-semibold text-gray-700 mb-2">What You Don't Do</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Deliver sandwiches</li>
                <li>• Handle money or donations</li>
                <li>• Manage other volunteers</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'setup',
      title: 'First Week Setup',
      content: (
        <div className="space-y-4">
          <p>Get your collection station ready before your first week.</p>
          <div className="bg-gold/10 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-3">Your Setup Checklist</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-gold font-bold">□</span>
                <span><strong>Designate a drop-off spot</strong> — porch, garage, or inside entryway works great</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold font-bold">□</span>
                <span><strong>Set up a cooler</strong> — sandwiches need to stay cold (below 40°F)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold font-bold">□</span>
                <span><strong>Stock ice packs</strong> — frozen water bottles work too</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold font-bold">□</span>
                <span><strong>Print labels</strong> — every sandwich needs a label</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold font-bold">□</span>
                <span><strong>Save your driver's contact</strong> — you'll coordinate pickup times</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold font-bold">□</span>
                <span><strong>Review the food safety guide</strong> — takes 5 minutes, prevents problems</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'food-safety',
      title: 'Food Safety Essentials',
      content: (
        <div className="space-y-4">
          <p>
            We serve vulnerable populations. Food safety isn't optional — it's the foundation of everything we do.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-red-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">🌡️</div>
              <h4 className="font-semibold text-crimson">Temperature</h4>
              <p className="text-sm mt-1">Keep sandwiches below 40°F at all times</p>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">🏷️</div>
              <h4 className="font-semibold text-teal">Labels</h4>
              <p className="text-sm mt-1">Every sandwich must be labeled with date and contents</p>
            </div>
            <div className="bg-gold/10 p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">⏰</div>
              <h4 className="font-semibold text-gray-800">Timing</h4>
              <p className="text-sm mt-1">Sandwiches are delivered within 24-48 hours of making</p>
            </div>
          </div>
          <a 
            href="https://nicunursekatie.github.io/sandwichinventory/toolkit/20230525-TSP-Food+Safety+Volunteers%20(2).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal text-white px-4 py-2 rounded-lg hover:bg-teal-dark transition-colors mt-2"
          >
            📄 Read Full Food Safety Guide
          </a>
        </div>
      )
    },
    {
      id: 'weekly',
      title: 'Your Weekly Routine',
      content: (
        <div className="space-y-4">
          <p>Hosting is low-commitment but requires consistency. Here's what a typical week looks like:</p>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-teal/30"></div>
            <div className="space-y-6 pl-10">
              <div className="relative">
                <div className="absolute -left-10 w-8 h-8 bg-teal text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <h4 className="font-semibold">Confirm You're Open</h4>
                <p className="text-sm text-gray-600">Let your sandwich makers know you're collecting this week</p>
              </div>
              <div className="relative">
                <div className="absolute -left-10 w-8 h-8 bg-teal text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <h4 className="font-semibold">Receive Drop-Offs</h4>
                <p className="text-sm text-gray-600">Makers bring sandwiches to your collection spot; store them cold</p>
              </div>
              <div className="relative">
                <div className="absolute -left-10 w-8 h-8 bg-teal text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <h4 className="font-semibold">Count & Report</h4>
                <p className="text-sm text-gray-600">Tally sandwiches by type and submit your count</p>
              </div>
              <div className="relative">
                <div className="absolute -left-10 w-8 h-8 bg-gold text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                <h4 className="font-semibold">Driver Pickup</h4>
                <p className="text-sm text-gray-600">Your driver collects everything and takes it to the delivery site</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'troubleshooting',
      title: 'When Things Go Wrong',
      content: (
        <div className="space-y-4">
          <p>Stuff happens. Here's how to handle the common issues:</p>
          <div className="space-y-3">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-crimson">Driver No-Show</h4>
              <p className="text-sm mt-1">Text your driver first. If no response within 30 minutes, contact your coordinator. Keep sandwiches cold.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-crimson">Sandwiches Arrived Warm</h4>
              <p className="text-sm mt-1">If sandwiches with meat aren't cold when they arrive, they can't be used. Let the maker know for next time.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-crimson">Way More Sandwiches Than Expected</h4>
              <p className="text-sm mt-1">Great problem to have! Contact your coordinator — we can often reroute a driver or split between sites.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-crimson">You Need to Skip a Week</h4>
              <p className="text-sm mt-1">Let your coordinator know ASAP. We'll mark you as closed in the system so makers know to go elsewhere.</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-teal to-teal-dark text-white">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <div className="flex items-center gap-3 mb-6">
            <img src={logo} alt="The Sandwich Project" className="h-12 md:h-16" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Host Onboarding Guide
          </h1>
          <p className="text-xl text-teal-100 max-w-2xl">
            Everything you need to start collecting sandwiches for your community. You're joining a network that's fed thousands — welcome.
          </p>
        </div>
      </header>

      {/* Quick Stats Bar */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-teal">2M+</div>
              <div className="text-sm text-gray-500">Sandwiches since 2020</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-teal">Metro Atlanta</div>
              <div className="text-sm text-gray-500">Service Area</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gold">You</div>
              <div className="text-sm text-gray-500">The newest link in the chain</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Onboarding Steps */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Getting Started</h2>
          <div className="space-y-4">
            {onboardingSteps.map((step) => (
              <div 
                key={step.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(step.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                  <span className={`text-2xl text-teal transition-transform duration-200 ${expandedSection === step.id ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {expandedSection === step.id && (
                  <div className="px-6 pb-6 text-gray-700">
                    {step.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Resources Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Resources & Downloads</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:border-teal hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{resource.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-teal transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{resource.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-br from-teal to-teal-dark rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Questions?</h2>
          <p className="text-teal-100 mb-6">
            If something's unclear or you run into issues, reach out to your coordinator. We'd rather answer a "dumb" question than have you guess wrong.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://thesandwichproject.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-teal px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Visit Main Site
            </a>
            <a 
              href="https://tsp-host-finder-tool.web.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors"
            >
              Find Open Hosts
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm">
            The Sandwich Project · Fighting Food Insecurity in Metro Atlanta
          </p>
          <p className="text-xs mt-2 text-gray-500">
            Made with 🥪 by volunteers, for volunteers
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HostOnboarding;
