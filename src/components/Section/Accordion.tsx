interface AccordionProps {
  openAccordion: boolean
  longDescription?: string
}

function Accordion({ openAccordion, longDescription }: AccordionProps) {
  return (
    <div
      className={`mt-8 accordion overflow-hidden transition-all duration-500 ${
        openAccordion ? 'h-64 opacity-100' : 'h-0 opacity-0'
      }`}>
      <p className="text-sm leading-6">{longDescription}</p>
    </div>
  )
}

export default Accordion
