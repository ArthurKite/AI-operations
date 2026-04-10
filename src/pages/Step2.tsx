import { useNavigate } from 'react-router-dom'
import { useFormContext } from '../context/FormContext'

export default function Step2() {
  const navigate = useNavigate()
  const { formData, updateFormData } = useFormContext()

  const canSubmit = formData.email && formData.acceptCGU

  const handleSubmit = () => {
    if (canSubmit) {
      navigate('/results')
    }
  }

  return (
    <div className="min-h-screen bg-light-gray flex flex-col">
      {/* Header with stepper */}
      <header className="bg-white border-b border-border-gray px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center">
          {/* Logo */}
          <div className="flex items-center gap-1 shrink-0">
            <span className="text-navy text-xl font-bold tracking-tight">bpifrance</span>
            <span className="text-navy text-[9px] tracking-wide ml-1 uppercase">| Servir l'avenir</span>
          </div>

          {/* Stepper */}
          <div className="flex-1 flex items-center gap-0 ml-8">
            {/* Step 1 - Completed */}
            <div className="flex-1">
              <div className="flex items-center gap-2 pb-3">
                <span className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center text-xs">✓</span>
                <span className="text-navy font-semibold text-sm">Votre entreprise</span>
              </div>
              <div className="h-1 bg-navy rounded-full" />
            </div>

            {/* Step 2 - Active */}
            <div className="flex-1">
              <div className="flex items-center gap-2 pb-3">
                <span className="text-navy font-semibold text-sm">2.</span>
                <span className="text-navy font-semibold text-sm">Informations complémentaires</span>
              </div>
              <div className="h-1 bg-navy rounded-full" />
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={() => navigate('/')}
            className="ml-6 text-gray-400 hover:text-navy text-2xl transition-colors"
          >
            ✕
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-12 grid md:grid-cols-2 gap-12 items-start">
        {/* Left column */}
        <div>
          {/* Company card */}
          <div className="inline-flex items-center gap-3 bg-white border border-border-gray rounded-xl px-4 py-3 mb-8">
            <div className="w-10 h-10 bg-light-gray rounded-lg flex items-center justify-center text-lg">
              🏢
            </div>
            <div>
              <p className="text-navy font-semibold text-sm">{formData.companyName || 'La Manufacture'}</p>
              <p className="text-gray-500 text-xs">{formData.siren || '798 958 302'}</p>
            </div>
          </div>

          <h1 className="text-navy text-3xl md:text-4xl font-bold mb-6">
            Dites-nous en plus sur vous
          </h1>

          <hr className="border-border-gray mb-6" />

          <div className="flex items-start gap-3">
            <span className="text-gray-400 text-lg mt-0.5">🔒</span>
            <p className="text-gray-500 text-sm leading-relaxed">
              Nous vous demandons uniquement les informations essentielles.
            </p>
          </div>
        </div>

        {/* Right column - Form */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          {/* Email */}
          <div className="mb-6">
            <label className="block text-navy font-semibold text-sm mb-2">
              Votre adresse e-mail <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => updateFormData({ email: e.target.value })}
              placeholder="exemple@bpifrance.fr"
              className="w-full border border-border-gray rounded-lg px-4 py-3 text-sm outline-none text-gray-700 placeholder-gray-400 focus:border-navy transition-colors"
            />
          </div>

          {/* CGU Checkbox */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="acceptCGU"
              checked={formData.acceptCGU}
              onChange={(e) => updateFormData({ acceptCGU: e.target.checked })}
              className="mt-1 w-5 h-5 rounded border-border-gray text-navy accent-navy cursor-pointer shrink-0"
            />
            <label htmlFor="acceptCGU" className="text-navy text-sm leading-relaxed cursor-pointer">
              J'accepte les <a href="#" className="underline font-semibold">Conditions Générales d'Utilisation</a> et j'atteste avoir pris connaissance des <a href="#" className="underline font-semibold">mentions d'information relatives au traitement des données à caractère personnel</a> présentées en article 9 des CGU.<span className="text-red-500">*</span>
            </label>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-400 text-xs py-6 px-4 space-x-4">
        <span>Accessibilité : non/partiellement/totalement conforme</span>
        <span>Mentions légales</span>
        <span>CGU</span>
        <span>Protection des données</span>
        <span>Gestion des cookies</span>
        <span>© Bpifrance 2025</span>
      </footer>

      {/* Bottom navigation */}
      <div className="sticky bottom-0 bg-white border-t border-border-gray px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between">
          <button
            onClick={() => navigate('/step1')}
            className="flex items-center gap-2 text-navy font-semibold text-sm px-6 py-3 rounded-full border border-border-gray hover:bg-gray-50 transition-colors"
          >
            <span>←</span>
            Retour
          </button>
          <button
            onClick={handleSubmit}
            disabled={!canSubmit}
            className={`flex items-center gap-2 font-semibold text-sm px-8 py-3 rounded-full transition-colors ${
              canSubmit
                ? 'bg-accent-yellow hover:bg-accent-yellow-hover text-navy cursor-pointer'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Je teste mon éligibilité
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  )
}
