'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom'
import logo from './assets/logo.png';
import logo2 from './assets/logo2.png';
import city from './assets/city.png';
import Footer from './components/Footer';

const navigation = [
  { name: 'Sobre Nós', href: '/sobre-nos' },
  { name: 'Equipa', href: '/equipa' },
  { name: 'Áreas de Atuação', href: '#' },
  { name: 'Contactos', href: '/contactos' },
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="bg-white min-h-screen w-full flex flex-col font-['Montserrat']">
      {/* Main Content Row */}
      <div className="flex flex-row flex-1">
        {/* Left Side */}
        <div className="flex flex-col basis-[65%] bg-white min-h-screen">
          {/* Navigation */}
          <header className="w-full pt-8 pb-4">
            <nav className="flex justify-center items-center gap-x-16">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">PMLA</span>
                <img
                  alt="PMLA Logo"
                  src={logo2}
                  className="h-20 w-auto"
                />
              </Link>
              {/* Desktop Navigation */}
              <div className="hidden lg:flex gap-x-16">
                {navigation.map((item) => (
                  <Link 
                    key={item.name} 
                    to={item.href} 
                    className={`text-xl transition-colors ${
                      location.pathname === item.href 
                        ? 'font-bold text-[#6C4F9C]' 
                        : 'font-normal text-gray-800 hover:text-purple-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden -m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
            </nav>
          </header>
          {/* Main Content */}
          <main className="flex-1 flex flex-col items-start justify-center pl-24">
            {/* Logo Row */}
            <div className="flex items-center mb-8">
              <img src={logo} alt="Lion Logo" className="h-56 w-auto" />
              {/* Add your PMLA logo here if needed */}
            </div>
            {/* Tagline */}
            <p className="text-2xl text-gray-900 mb-10 max-w-3xl font-medium">
              Construímos valor com visão global e princípios sólidos. Investimos com propósito, rigor e compromisso com o futuro.
            </p>
            {/* Buttons */}
            <div className="flex gap-6 mb-8">
              <a
                href="#"
                className="px-10 py-4 rounded-md bg-[#6C4F9C] text-white text-lg font-semibold shadow hover:bg-[#5a3f7a] transition-colors"
              >
                Trabalhe connosco
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-[#6C4F9C] text-lg font-semibold hover:underline"
              >
                Conheça-nos <span aria-hidden="true">→</span>
              </a>
            </div>
          </main>
        </div>
        {/* Right Side (Image) */}
        <section className="hidden lg:block flex-1 relative min-h-screen">
          <div className="absolute inset-0 w-full h-full clip-diagonal overflow-hidden">
            <img
              alt="Hero"
              src={city}
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      </div>
      {/* Footer - spans full width */}
      <Footer />
      
      {/* Mobile menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">PMLA</span>
              <img
                alt=""
                src={logo2}
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base hover:bg-gray-50 ${
                      location.pathname === item.href 
                        ? 'font-bold text-[#6C4F9C]' 
                        : 'font-semibold text-gray-900'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
      
      {/* Diagonal Clip Path Style */}
      <style>{`
        .clip-diagonal {
          clip-path: polygon(12% 0, 100% 0, 100% 100%, 0% 100%);
        }
      `}</style>
    </div>
  );
}