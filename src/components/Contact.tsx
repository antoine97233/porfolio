function Contact({ isMobile }: { isMobile: boolean }) {
  return (
    <footer
      className={`w-full bg-black h-20 z-20 text-white ${
        isMobile ? '' : 'fixed bottom-0'
      }`}></footer>
  )
}

export default Contact
