import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Results() {
  const navigate = useNavigate()
  const [contactEmail, setContactEmail] = useState('')

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-1">
          <span className="text-navy text-xl font-bold tracking-tight">bpifrance</span>
          <span className="text-navy text-[9px] tracking-wide ml-1 uppercase">Servir l'avenir</span>
        </div>
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-navy text-sm font-medium hover:underline"
        >
          <span>↻</span>
          Retour à la page d'accueil
        </button>
      </header>

      {/* Hero */}
      <section className="text-center py-12 px-4">
        <h1 className="text-navy text-2xl md:text-4xl font-bold mb-4">
          Cette offre semble vous correspondre
        </h1>
        <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Les résultats obtenus sont à titre indicatif et ne constituent en aucun cas une garantie d'acceptation de votre dossier : la décision finale relève exclusivement de la compétence de Bpifrance.
        </p>
      </section>

      {/* Result card */}
      <section className="max-w-5xl mx-auto w-full px-4 mb-12">
        <div className="bg-white border border-border-gray rounded-2xl shadow-sm overflow-hidden">
          {/* Green top border */}
          <div className="h-1.5 bg-gradient-to-r from-green-400 to-teal-400" />

          <div className="px-8 py-10">
            {/* Category */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 text-sm text-gray-500 mb-2">
                <span className="text-lg">🌿</span>
                <span>Transition énergétique & écologique</span>
              </div>
              <p className="text-navy/60 text-xs uppercase tracking-wider font-semibold mb-2">Diag Adaptation</p>
              <h2 className="text-navy text-xl md:text-2xl font-bold">
                Réduisez les risques liés à votre exposition au changement climatique
              </h2>
            </div>

            {/* Three info columns */}
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">👤</span>
                  <h3 className="text-navy font-bold text-sm">Pour qui ?</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-accent-yellow mt-0.5">●</span>
                    Pour chaque site de 1 à 499 salariés
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-accent-yellow mt-0.5">●</span>
                    Au moins un an d'existence
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">📋</span>
                  <h3 className="text-navy font-bold text-sm">Comment ?</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-accent-yellow mt-0.5">●</span>
                    Notre expert se déplace dans votre entreprise.
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-accent-yellow mt-0.5">●</span>
                    Il vous aide à collecter et analyser les informations clés existantes en effectuant des observations directement sur le site.
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-accent-yellow mt-0.5">●</span>
                    Il vous permet d'anticiper les impacts du changement climatique sur votre activité.
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">📄</span>
                  <h3 className="text-navy font-bold text-sm">Pour quels résultats ?</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-accent-yellow mt-0.5">●</span>
                    Un diagnostic complet de la vulnérabilité de votre site
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-accent-yellow mt-0.5">●</span>
                    Un plan d'action prioritaire pour renforcer la résilience de l'entreprise
                  </li>
                </ul>
              </div>
            </div>

            {/* Pricing row */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-start gap-3 bg-light-gray rounded-xl p-5">
                <span className="text-lg">🧾</span>
                <div>
                  <p className="text-navy font-bold text-base">
                    <span className="bg-light-yellow px-2 py-0.5 rounded">2000€ HT</span>
                  </p>
                  <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                    Pour les sites de 1 à 49 salariés après prise en charge de 67%<sup>1</sup>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-light-gray rounded-xl p-5">
                <span className="text-lg">🧾</span>
                <div>
                  <p className="text-navy font-bold text-base">
                    <span className="bg-light-yellow px-2 py-0.5 rounded">3000€ HT</span>
                  </p>
                  <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                    Pour les sites de 50 à 499 salariés après prise en charge de 50%<sup>1</sup>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-light-gray rounded-xl p-5">
                <span className="text-lg">📅</span>
                <div>
                  <p className="text-navy font-bold text-base">
                    <span className="bg-light-yellow px-2 py-0.5 rounded">7 jours</span>
                  </p>
                  <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                    d'intervention d'un expert, répartis sur 3 à 6 mois.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-xs mb-8">1.sous réserve d'éligibilité</p>

            {/* CTA */}
            <div className="text-center">
              <button className="bg-accent-yellow hover:bg-accent-yellow-hover text-navy font-semibold text-sm px-10 py-3.5 rounded-full transition-colors">
                Déposer une demande
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="max-w-5xl mx-auto w-full px-4 mb-12">
        <div className="bg-light-gray rounded-2xl px-8 py-10 text-center">
          <h2 className="text-navy text-xl md:text-2xl font-bold mb-3">
            Être recontacté(e)
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Besoin de renseignements ? Laissez-nous vos coordonnées, nous vous recontacterons dans les meilleurs délais.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              placeholder="Email"
              className="w-full sm:flex-1 px-5 py-3 rounded-full sm:rounded-r-none text-sm bg-white text-gray-700 placeholder-gray-400 outline-none border border-border-gray focus:border-navy"
            />
            <button className="w-full sm:w-auto bg-accent-yellow hover:bg-accent-yellow-hover text-navy font-semibold text-sm px-6 py-3 rounded-full sm:rounded-l-none transition-colors mt-2 sm:mt-0">
              En savoir plus
            </button>
          </div>
          <p className="text-gray-400 text-[10px] mt-6 leading-relaxed max-w-3xl mx-auto text-left">
            Vos données de caractère personnel sont collectées et traitées par Bpifrance en qualité de responsable de traitement dans le cadre du présent formulaire. Conformément à la Réglementation Applicable, et sous réserve des conditions prévues par celle-ci vous bénéficiez d'un droit d'accès, de rectification, d'opposition, à la portabilité, de limitation de traitement et d'effacement ;Pour en savoir plus sur le traitement de données à caractère personnel vous concernant et vos droits, vous pouvez accéder à la mention d'information complète via <a href="#" className="underline">ce lien</a>.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-border-gray mt-auto">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-1">
            <span className="text-navy text-lg font-bold tracking-tight">bpifrance</span>
            <span className="text-navy text-[8px] tracking-wide ml-1 uppercase">Servir l'avenir</span>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-500">
            <a href="#" className="hover:underline">Contactez-nous</a>
            <a href="#" className="hover:underline">Accessibilité : non conforme</a>
            <a href="#" className="hover:underline">F.A.Q</a>
            <a href="#" className="hover:underline">CGU</a>
            <a href="#" className="hover:underline">Protection des données personnelles</a>
            <a href="#" className="hover:underline">Cookies</a>
            <a href="#" className="hover:underline">Mentions légales</a>
            <a href="#" className="hover:underline">Réclamation</a>
          </nav>
          <p className="text-xs text-gray-400">Copyright © 2023 Bpifrance</p>
        </div>
      </footer>
    </div>
  )
}
