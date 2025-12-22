export default function Contact() {
  return (
    <section className="py-28 px-6 bg-primary text-white">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">Свяжитесь с нами</h2>

        <p className="opacity-80 mb-10">Оставьте заявку — мы перезвоним вам</p>

        <form className="flex flex-col gap-4">
          <input placeholder="Ваше имя" className="p-4 rounded-xl text-black" />
          <input placeholder="Телефон" className="p-4 rounded-xl text-black" />
          <button className="bg-danger p-4 rounded-xl font-medium hover:opacity-90 transition">
            Отправить заявку
          </button>
        </form>
      </div>
    </section>
  )
}
