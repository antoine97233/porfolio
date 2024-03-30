function Accordion({ openAccordion }: { openAccordion: boolean }) {
  return (
    <div
      className={`mt-8 accordion overflow-hidden transition-all duration-500 ${
        openAccordion ? 'h-64 opacity-100' : 'h-0 opacity-0'
      }`}>
      <p className="text-sm leading-6">
        Après 8 années d’expérience dans le marketing digital, j’ai récemment
        décidé de me reconvertir dans le développement web. Passionné et
        autodidacte, ma curiosité m'amène à être constamment en quête
        d’apprentissage dans ce domaine. J'aime explorer tous les aspects des
        projets, de la conception à la réalisation, et j'apprécie la rigueur que
        le métier exige.{' '}
      </p>
    </div>
  )
}

export default Accordion
