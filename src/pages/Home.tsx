import React from 'react';
import { TrendingUp, Zap, Shield } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-4">Powerful Trading Indicators for TradingView</h1>
        <p className="text-xl text-gray-600">Enhance your trading strategy with our advanced indicators</p>
      </header>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <TrendingUp className="text-blue-500 w-12 h-12 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Trend Analysis</h2>
          <p>Identify market trends with precision using our advanced algorithms.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Zap className="text-yellow-500 w-12 h-12 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Real-time Alerts</h2>
          <p>Get instant notifications for potential trading opportunities.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Shield className="text-green-500 w-12 h-12 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Risk Management</h2>
          <p>Protect your investments with our risk assessment tools.</p>
        </div>
      </section>

      <section className="bg-blue-100 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Why Choose Our Indicators?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Developed by professional traders with years of experience</li>
          <li>Customizable to fit your trading style</li>
          <li>Compatible with multiple timeframes and markets</li>
          <li>Regular updates and improvements</li>
          <li>Excellent customer support</li>
        </ul>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Trading?</h2>
        <a href="/price" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
          View Pricing Plans
        </a>
      </section>
    </div>
  );
};

export default Home;