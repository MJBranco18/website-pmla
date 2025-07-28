'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom'
import logo2 from '../assets/logo2.png';
import logo from '../assets/logo.png';
import Footer from '../components/Footer';

const navigation = [
  { name: 'Sobre Nós', href: '/sobre-nos' },
  { name: 'Equipa', href: '/equipa' },
  { name: 'Áreas de Atuação', href: '#' },
  { name: 'Contactos', href: '/contactos' },
]

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="bg-white font-['Montserrat']">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">PMLA</span>
              <img
                alt="PMLA Logo"
                src={logo2}
                className="h-20 w-auto"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
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
        </nav>
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
      </header>

      <main className="isolate">
        {/* Contact Form Section */}
        <div className="isolate bg-white px-6 pt-32 pb-24 sm:pt-40 sm:pb-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
              {/* Left Column - Contact Form */}
              <div>
                <div className="mx-auto max-w-2xl lg:mx-0">
                  <h2 className="text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl">Trabalha Conosco</h2>
                  <p className="mt-4 text-lg/8 text-gray-600">Todas os grandes projetos começam com uma conversa. Entre em contacto conosco</p>
                </div>
                <form action="#" method="POST" className="mt-12">
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm/6 font-semibold text-gray-900">
                        Nome
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="given-name"
                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#6C4F9C]"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm/6 font-semibold text-gray-900">
                        Assunto
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          autoComplete="off"
                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#6C4F9C]"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                        Email
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#6C4F9C]"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                        Mensagem
                      </label>
                      <div className="mt-2.5">
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#6C4F9C]"
                          defaultValue={''}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-10">
                    <button
                      type="submit"
                      className="block w-full rounded-md bg-[#6C4F9C] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-[#5a3f7a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6C4F9C]"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </div>

              {/* Right Column - Contact Information */}
              <div className="flex flex-col items-start">
                <div className="mb-8">
                  <div className="flex items-center gap-3">
                    <img
                      alt="PMLA Logo"
                      src={logo}
                      className="h-36 w-auto"
                    />
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <svg className="h-6 w-6 text-[#6C4F9C] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-base text-gray-900">
                        Rua do Infante D. Henrique, nº 123, 3.º A<br />
                        4050-297 Porto, Portugal
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="h-6 w-6 text-[#6C4F9C] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="text-base text-gray-900">
                        (+351) 225 800 655
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="h-6 w-6 text-[#6C4F9C] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-base text-gray-900">
                        geral@pmlainvestments.pt
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
} 