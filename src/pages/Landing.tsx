import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormContext } from '../context/FormContext'

export default function Landing() {
  const navigate = useNavigate()
  const { updateFormData } = useFormContext()
  const [siren, setSiren] = useState('')

  const handleTestEligibility = () => {
    if (siren.trim()) {
      updateFormData({ siren: siren.trim(), companyName: 'La Manufacture' })
      navigate('/step1')
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-1">
            <span className="text-navy text-2xl font-bold tracking-tight">bpifrance</span>
            <span className="text-navy text-[10px] tracking-wide ml-1 uppercase">Servir l'avenir</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-navy font-medium">
            <a href="#" className="hover:underline">Nos solutions</a>
            <a href="#" className="hover:underline">Ressources</a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-accent-yellow hover:bg-accent-yellow-hover text-navy font-semibold text-sm px-5 py-2.5 rounded-full transition-colors">
            Je souscris aux offres
          </button>
          <button className="border border-navy text-navy font-medium text-sm px-5 py-2.5 rounded-full flex items-center gap-2">
            Nous contacter
            <span className="text-xs text-gray-500">9h30 à 12h30 - 14h à 17h<br />01 89 19 86 47</span>
            <span className="text-navy">📞</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-light-yellow rounded-3xl mx-4 md:mx-8 mt-4 px-8 py-12 md:py-16 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h1 className="text-navy text-3xl md:text-5xl font-bold mb-4">
            Faites progresser votre entreprise
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Découvrez nos programmes d'accompagnement, guidés par des experts. Des ressources aux plans d'action, nous subventionnons votre progression.
          </p>
        </div>

        {/* Two-column cards */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Left: Categories */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            {[
              { icon: '🌿', label: 'Transition Énergétique & Écologique', subtitle: 'Engagez votre transition écologique' },
              { icon: '🔒', label: 'Cybersécurité', subtitle: 'Protégez votre entreprise' },
              { icon: '🤖', label: 'Intelligence artificielle', subtitle: 'Exploitez la puissance de vos données' },
              { icon: '🌐', label: 'International', subtitle: 'Franchissez le cap de l\'international' },
              { icon: '🎯', label: 'Stratégie', subtitle: 'Redéfinissez le chemin du succès' },
            ].map((item, i) => (
              <button
                key={i}
                className="w-full flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors text-left"
              >
                <div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                  <p className="text-navy font-semibold text-sm mt-0.5">{item.subtitle}</p>
                </div>
                <span className="text-gray-400">›</span>
              </button>
            ))}
          </div>

          {/* Right: Diagnostic options */}
          <div className="flex flex-col gap-3">
            {[
              { color: 'bg-green-100', icon: '♻️', label: 'Diag Eco-Flux' },
              { color: 'bg-green-100', icon: '🏭', label: 'Diag Décarbon\'Action' },
              { color: 'bg-green-100', icon: '♻️', label: 'Diag Ecoconception' },
              { color: 'bg-green-50', icon: '🌡️', label: 'Diag Adaptation' },
              { color: 'bg-yellow-50', icon: '🌱', label: 'Diag Biodiversité' },
              { color: 'bg-yellow-50', icon: '🏢', label: 'Diag Perf\'Immo' },
            ].map((item, i) => (
              <button
                key={i}
                className="w-full flex items-center justify-between bg-white rounded-xl px-5 py-3.5 shadow-sm hover:shadow-md transition-shadow text-left"
              >
                <div className="flex items-center gap-3">
                  <span className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center text-sm`}>
                    {item.icon}
                  </span>
                  <span className="text-navy font-medium text-sm">{item.label}</span>
                </div>
                <span className="text-gray-400">›</span>
              </button>
            ))}
            <a href="#" className="text-navy font-semibold text-sm underline text-center mt-2">
              Découvrir la thématique
            </a>
          </div>
        </div>
      </section>

      {/* Eligibility CTA Section */}
      <section className="bg-accent-yellow mt-12 py-16 relative">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-navy text-2xl md:text-4xl font-bold mb-3">
            À quelle(s) solution(s) suis-je éligible ?
          </h2>
          <p className="text-navy/70 text-base mb-8">
            Nous subventionnons jusqu'à 70% du montant des solutions proposées.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-0 max-w-xl mx-auto">
            <input
              type="text"
              value={siren}
              onChange={(e) => setSiren(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleTestEligibility()}
              placeholder="Tapez un nom d'entreprise ou un numéro SIREN"
              className="w-full sm:flex-1 px-5 py-3.5 rounded-full sm:rounded-r-none text-sm bg-white text-gray-700 placeholder-gray-400 outline-none border-2 border-white focus:border-navy/20"
            />
            <button
              onClick={handleTestEligibility}
              className="w-full sm:w-auto bg-navy hover:bg-navy-light text-white font-semibold text-sm px-8 py-3.5 rounded-full sm:rounded-l-none transition-colors mt-2 sm:mt-0"
            >
              Je teste mon éligibilité
            </button>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-navy text-2xl md:text-4xl font-bold text-center mb-16">
            Comment se déroule un Diagnostic ?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 relative">
            {[
              { num: 1, text: 'Trouvez l\'offre faite pour votre entreprise', offset: 'md:mt-16' },
              { num: 2, text: 'Si besoin, nous sélectionnons pour vous un expert agréé par Bpifrance', offset: 'md:mt-4' },
              { num: 3, text: 'L\'expert se déplace sur votre site', offset: 'md:mt-20' },
              { num: 4, text: 'Vous recevez un plan d\'actions et des recommandations sur-mesure', offset: 'md:mt-8' },
              { num: 5, text: 'Votre transformation est enclenchée', offset: 'md:mt-2' },
            ].map((step) => (
              <div key={step.num} className={`text-center ${step.offset}`}>
                <div className="w-10 h-10 rounded-full border-2 border-green-400 flex items-center justify-center text-green-600 font-bold text-sm mx-auto mb-3">
                  {step.num}
                </div>
                <p className="text-navy text-sm font-medium leading-snug">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
