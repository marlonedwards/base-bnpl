import React from 'react';
import Link from 'next/link';
import { Users, TrendingUp, DollarSign } from 'lucide-react';

const DocsPage = () => (
  <div className="min-h-screen bg-gray-50">
    {/* Header */}
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">Base-BNPL</h1>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/borrow" className="text-gray-600 hover:text-blue-600">
              Borrow
            </Link>
            <Link href="/lend" className="text-gray-600 hover:text-blue-600">
              Lend
            </Link>
            <Link href="/merchants" className="text-gray-600 hover:text-blue-600">
              Merchants
            </Link>
            <span className="text-blue-600 font-medium">Docs</span>
          </nav>
        </div>
      </div>
    </header>

    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <Users className="h-8 w-8 text-blue-600" />
          How the Site Works
        </h1>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2 flex items-center gap-2">
            <DollarSign className="h-6 w-6 text-green-500" /> For Retailers
          </h2>
          <p className="text-gray-700">
            Retailers can offer Buy Now, Pay Later (BNPL) options to their customers by integrating with our platform. After onboarding, retailers can manage their offers, track customer repayments, and access analytics through the dashboard. The platform handles credit checks, payment scheduling, and risk management, making it easy for retailers to boost sales and customer satisfaction.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2 flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-purple-500" /> For Retail Investors
          </h2>
          <p className="text-gray-700">
            Retail investors can participate by providing liquidity to the BNPL pools. By doing so, they earn a share of the interest paid by consumers. Investors can view pool performance, deposit or withdraw funds, and monitor their returns through the investor dashboard. The platform ensures transparency and risk mitigation for all investments.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2 flex items-center gap-2">
            <Users className="h-6 w-6 text-orange-500" /> For Consumers
          </h2>
          <p className="text-gray-700">
            Consumers can use BNPL at participating retailers to split purchases into manageable payments. After a quick approval process, consumers can select a payment plan that fits their needs. The platform provides reminders, payment tracking, and customer support to ensure a smooth experience.
          </p>
        </section>
      </div>
    </div>
  </div>
);

export default DocsPage; 