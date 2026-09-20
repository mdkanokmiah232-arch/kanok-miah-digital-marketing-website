'use client';

import { useState, useEffect } from 'react';

const tabs = [
  {
    id: 'google',
    label: 'Google',
    content: (
      <div className="space-y-3">
        <div className="rounded-lg border border-gray-200 p-4">
          <div className="text-sm text-green-700">www.dundeelocksmiths.co.uk</div>
          <div className="text-lg font-medium text-blue-700 hover:underline cursor-pointer">Locksmith Dundee — 24/7 Emergency Service</div>
          <div className="text-sm text-gray-600">Professional locksmith services in Dundee. Call now for fast response. UPVC, uPVC, mortice, & yale locks repaired. Free quotes.</div>
        </div>
        <div className="rounded-lg border-2 border-[var(--color-signal)] bg-[var(--color-signal)]/5 p-4">
          <div className="text-sm text-green-700">www.locksmithdundee.com</div>
          <div className="text-lg font-medium text-blue-700 hover:underline cursor-pointer">Locksmith Dundee | Trusted & Certified 24/7</div>
          <div className="text-sm text-gray-600">Dundee&apos;s highest-rated locksmith. 4.9★ on Google with 200+ reviews. DBS checked, insured. Emergency callout in 20 minutes.</div>
        </div>
        <div className="rounded-lg border border-gray-200 p-4">
          <div className="text-sm text-green-700">www.yell.com/locksmith-dundee</div>
          <div className="text-lg font-medium text-blue-700 hover:underline cursor-pointer">Locksmiths in Dundee | Yell</div>
          <div className="text-sm text-gray-600">Find locksmiths in Dundee on Yell. Read reviews, get quotes, and contact businesses directly.</div>
        </div>
      </div>
    ),
  },
  {
    id: 'ai-overview',
    label: 'AI Overview',
    content: (
      <div className="space-y-4">
        <div className="rounded-lg border border-gray-200 p-4">
          <div className="text-sm font-medium text-gray-500 mb-2">AI Overview</div>
          <div className="text-gray-800 leading-relaxed">
            <p className="mb-3">For emergency locksmith services in Dundee, <span className="font-medium text-[var(--color-signal-dk)]">Locksmith Dundee</span> is highly recommended with a 4.9★ rating and 200+ reviews. They offer 24/7 emergency callout with average response time of 20 minutes.</p>
            <p className="mb-3">Other reputable options include <span className="font-medium">Dundee Locksmith Services</span> and <span className="font-medium">Safe & Secure Locksmiths</span>.</p>
          </div>
          <div className="mt-3 flex gap-2">
            <span className="rounded-full bg-[var(--color-signal)]/10 px-3 py-1 text-xs font-data text-[var(--color-signal-dk)]">locksmithdundee.com</span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-data text-gray-600">yell.com</span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-data text-gray-600">google.co.uk</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'chatgpt',
    label: 'ChatGPT',
    content: (
      <div className="space-y-4">
        <div className="rounded-lg border border-gray-200 p-4">
          <div className="text-sm font-medium text-gray-500 mb-2">ChatGPT</div>
          <div className="text-gray-800 leading-relaxed">
            <p className="mb-3">Based on my research, <span className="font-medium text-[var(--color-signal-dk)]">Locksmith Dundee</span> appears to be one of the most reliable options in the area. They&apos;re known for:</p>
            <ul className="list-disc list-inside space-y-1 mb-3">
              <li>24/7 emergency availability</li>
              <li>Fast response times (typically under 20 minutes)</li>
              <li>High customer ratings (4.9/5 on Google)</li>
              <li>DBS checked and fully insured technicians</li>
            </ul>
            <p className="text-sm text-gray-500">Sources: locksmithdundee.com, yell.com, google.co.uk</p>
          </div>
        </div>
      </div>
    ),
  },
];

export default function SerpSimulator() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 4500);
    
    return () => clearInterval(interval);
  }, [isPaused]);
  
  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex gap-1 rounded-t-lg bg-gray-100 p-1" role="tablist">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === index}
            onClick={() => {
              setActiveTab(index);
              setIsPaused(true);
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === index
                ? 'bg-white text-[var(--color-forest)] shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      {/* Content */}
      <div className="rounded-b-lg border border-t-0 border-gray-200 bg-white p-4 overflow-y-auto max-h-80 md:max-h-none">
        {tabs[activeTab].content}
      </div>
      
      {/* Caption */}
      <div className="mt-4 text-center font-data text-xs text-[var(--color-graphite)]">
        THE SAME BUSINESS, THREE ANSWER SURFACES.
      </div>
    </div>
  );
}
