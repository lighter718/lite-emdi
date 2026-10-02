import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { ProblemSolution } from './components/sections/ProblemSolution';
import { About } from './components/sections/About';
import { Pricing } from './components/sections/Pricing';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { Workflow } from './components/sections/Workflow';
import { FAQ } from './components/sections/FAQ';
import { Portfolio } from './components/sections/Portfolio';
import { Clients } from './components/sections/Clients';
import { Footer } from './components/layout/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F4F7FA] text-slate-800 font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <About />
        <Pricing />
        <WhyChooseUs />
        <Workflow />
        <Portfolio />
        <Clients />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;