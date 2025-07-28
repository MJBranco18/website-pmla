'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom'
import logo2 from '../assets/logo2.png';
import photo1 from '../assets/photo1.png';
import photo2 from '../assets/photo2.png';
import photo3 from '../assets/photo3.png';
import photo4 from '../assets/photo4.png';
import photo5 from '../assets/photo5.png';
import Footer from '../components/Footer';

const navigation = [
  { name: 'Sobre Nós', href: '/sobre-nos' },
  { name: 'Equipa', href: '/equipa' },
  { name: 'Áreas de Atuação', href: '#' },
  { name: 'Contactos', href: '/contactos' },
]



const values = [
  {
    name: 'Segurança Jurídica',
    description:
      'Operamos com base num quadro legal sólido e transparente.',
  },
  {
    name: 'Segurança Fiscal',
    description:
      'Priorizamos uma gestão fiscal responsável e em conformidade.',
  },
  {
    name: 'Segurança Financeira',
    description:
      'Investimos com foco na estabilidade, rentabilidade e sustentabilidade a longo prazo.',
  }
]

export default function AboutPage() {
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
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" width="100%" height="100%" strokeWidth={0} />
          </svg>
          <div
            aria-hidden="true"
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          >
            <div
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#6C4F9C] to-[#9089fc] opacity-30"
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Investimos com visão e integridade
                  </h1>
                  <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                    Na PMLA Investments, acreditamos que investir é mais do que números, é sobre propósito. Somos uma holding portuguesa com uma visão internacional, que atua em múltiplos setores com uma abordagem ética, sólida e transparente. 
                  </p>
                  <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                    A nossa essência está alicerçada em valores duradouros, guiados por uma liderança inspirada e comprometida com o impacto positivo.
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        alt="Team member working"
                        src={photo1}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        alt="Team member with tablet"
                        src={photo2}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        alt="Office space"
                        src={photo3}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        alt="Team collaboration"
                        src={photo4}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        alt="Business meeting"
                        src={photo5}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-none lg:mx-0">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">A Nossa História</h2>
            <div className="mt-6">
              <p className="text-xl/8 text-gray-600">
                A PMLA nasceu do coração visionário dos nossos fundadores. Com raízes no Norte de Portugal e uma profunda fé, a génese da empresa está ligada a uma vivência transformadora e espiritual que deu origem a um projeto empresarial único.
              </p>
              <p className="mt-6 text-xl/8 text-gray-600">
                A visão que nos guia foi moldada por experiências pessoais e pelo compromisso de criar uma estrutura de investimento com base em valores inegociáveis: fé, confiança, responsabilidade e excelência.
              </p>
            </div>
          </div>
        </div>  

        {/* Image section */}
        <div className="mt-16 sm:mt-20 xl:mx-auto xl:max-w-7xl xl:px-8">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
          />
        </div>

        {/* Missão e Visão Section */}
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Missão */}
              <div className="flex flex-col">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Missão</h2>
                <p className="text-lg leading-8 text-gray-600">
                  Desenvolver e gerir investimentos com impacto económico e social positivo, sustentados por princípios de ética, estabilidade financeira e segurança jurídica e fiscal.
                </p>
              </div>

              {/* Visão */}
              <div className="flex flex-col items-end text-right">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Visão</h2>
                <p className="text-lg leading-8 text-gray-600">
                  Tornar-nos uma holding de referência em Portugal e no mundo, reconhecida pela capacidade de identificar oportunidades estratégicas, criar valor sustentável e inspirar confiança em todos os parceiros e stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Os Nossos Valores</h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Os nossos valores são a base de cada decisão que tomamos e sustentam a confiança que construímos com os nossos parceiros.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name}>
                <dt className="font-semibold text-gray-900">{value.name}</dt>
                <dd className="mt-1 text-gray-600">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        </main>
        <div className="pb-24"></div>
        
        <Footer />
    </div>
  )
} 