

const WpToast = () => {
  return (
    <a href="https://web.whatsapp.com/send?phone=5575981112124"
    target="_blank" className="fixed bottom-2 right-1 flex gap-2 bg-green-500 rounded-lg p-2 animate-bounce z-50">
      <img src="/assets/icons/wpp.svg" alt="whatsapp icon" width={30} />
      <span className="font-medium font-monstserrat textmdl text-slate-100">Fale conosco!</span>
    </a>
  )
}

export default WpToast