'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom'
import logo2 from '../assets/logo2.png';
import Footer from '../components/Footer';

const navigation = [
  { name: 'Sobre Nós', href: '/sobre-nos' },
  { name: 'Equipa', href: '/equipa' },
  { name: 'Áreas de Atuação', href: '#' },
  { name: 'Contactos', href: '/contactos' },
]

const people = [
  {
    name: 'João Silva',
    role: 'CEO / Fundador',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Maria Santos',
    role: 'Diretora de Investimentos',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Pedro Costa',
    role: 'Diretor Financeiro',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Ana Rodrigues',
    role: 'Diretora de Operações',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Carlos Ferreira',
    role: 'Diretor de Estratégia',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Sofia Martins',
    role: 'Diretora de Marketing',
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Ricardo Almeida',
    role: 'Diretor de Tecnologia',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Luísa Pereira',
    role: 'Diretora de Recursos Humanos',
    imageUrl:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Miguel Oliveira',
    role: 'Diretor de Compliance',
    imageUrl:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
]

export default function TeamPage() {
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
        {/* Team section */}
        <div className="bg-white pt-40 pb-24 sm:pt-48 sm:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">A Nossa Equipa</h2>
              <p className="mt-6 text-lg/8 text-gray-600">
                Na PMLA Investments, são as pessoas que tornam a visão possível, líderes com experiência, visão estratégica e compromisso com os nossos valores.
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <img
                    alt=""
                    src={person.imageUrl}
                    className="aspect-3/2 w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
                  />
                  <h3 className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-base/7 text-gray-600">{person.role}</p>
                  <ul role="list" className="mt-6 flex gap-x-6">
                    <li>
                      <a href={person.xUrl} className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">X</span>
                        <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5">
                          <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">LinkedIn</span>
                        <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5">
                          <path
                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                            clipRule="evenodd"
                            fillRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
} 