import { useNavigate } from 'react-router-dom'
import { useFormContext } from '../context/FormContext'

export default function Step1() {
  const navigate = useNavigate()
  const { formData, updateFormData } = useFormContext()

  const canProceed = formData.turnover && formData.employeeCount && formData.notInDifficulty

  const handleNext = () => {
    if (canProceed) {
      navigate('/step2')
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
            {/* Step 1 - Active */}
            <div className="flex-1">
              <div className="flex items-center gap-2 pb-3">
                <span className="text-navy font-semibold text-sm">1.</span>
                <span className="text-navy font-semibold text-sm">Votre entreprise</span>
              </div>
              <div className="h-1 bg-navy rounded-full" />
            </div>

            {/* Step 2 - Inactive */}
            <div className="flex-1">
              <div className="flex items-center gap-2 pb-3">
                <span className="text-gray-400 font-medium text-sm">2.</span>
                <span className="text-gray-400 font-medium text-sm">Informations complémentaires</span>
              </div>
              <div className="h-1 bg-gray-200 rounded-full" />
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

          <h1 className="text-navy text-3xl md:text-4xl font-bold mb-4">
            Parlons de votre entreprise
          </h1>
          <p className="text-gray-500 text-base leading-relaxed">
            Pour identifier les offres auxquelles vous êtes éligible, nous avons besoin de quelques informations sur votre entreprise.
          </p>
        </div>

        {/* Right column - Form */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          {/* Turnover */}
          <div className="mb-6">
            <label className="block text-navy font-semibold text-sm mb-2">
              Votre chiffre d'affaires consolidé <span className="text-red-500">*</span>
              <span className="ml-1 inline-flex items-center justify-center w-4 h-4 rounded-full border border-gray-300 text-gray-400 text-[10px] cursor-help">i</span>
            </label>
            <div className="flex items-center border border-border-gray rounded-lg overflow-hidden focus-within:border-navy transition-colors">
              <span className="bg-light-gray px-4 py-3 text-navy font-semibold text-sm border-r border-border-gray">
                EUR
              </span>
              <input
                type="text"
                value={formData.turnover}
                onChange={(e) => updateFormData({ turnover: e.target.value })}
                placeholder="00,00"
                className="flex-1 px-4 py-3 text-sm outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Employee count */}
          <div className="mb-6">
            <label className="block text-navy font-semibold text-sm mb-2">
              Votre effectif consolidé <span className="text-red-500">*</span>
              <span className="ml-1 inline-flex items-center justify-center w-4 h-4 rounded-full border border-gray-300 text-gray-400 text-[10px] cursor-help">i</span>
            </label>
            <div className="flex items-center border border-border-gray rounded-lg overflow-hidden focus-within:border-navy transition-colors">
              <span className="px-4 py-3 text-gray-400">
                👤
              </span>
              <input
                type="text"
                value={formData.employeeCount}
                onChange={(e) => updateFormData({ employeeCount: e.target.value })}
                placeholder="ex : 450"
                className="flex-1 px-2 py-3 text-sm outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="notInDifficulty"
              checked={formData.notInDifficulty}
              onChange={(e) => updateFormData({ notInDifficulty: e.target.checked })}
              className="mt-1 w-5 h-5 rounded border-border-gray text-navy accent-navy cursor-pointer shrink-0"
            />
            <div>
              <label htmlFor="notInDifficulty" className="text-navy text-sm cursor-pointer">
                Je certifie ne pas être une entreprise en difficulté <span className="text-red-500">*</span>
              </label>
              <a href="#" className="block text-navy text-sm underline mt-1">En savoir plus</a>
            </div>
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
        <div className="max-w-6xl mx-auto flex justify-end">
          <button
            onClick={handleNext}
            disabled={!canProceed}
            className={`flex items-center gap-2 font-semibold text-sm px-8 py-3 rounded-full transition-colors ${
              canProceed
                ? 'bg-accent-yellow hover:bg-accent-yellow-hover text-navy cursor-pointer'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Suivant
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  )
}
