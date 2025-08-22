export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-teal-600 mb-6">Contact</h1>

      <p className="text-gray-700 mb-6">
        Bagnères-de-Bigorre & à distance — réponse sous 24–48h ouvrées.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="mailto:chavasseaxelle@gmail.com?subject=Demande%20information%20Altexa"
          className="px-5 py-3 rounded-xl border border-gray-300 hover:bg-white shadow-sm"
        >
          ✉️ Envoyer un e-mail
        </a>

        <a
          href="tel:+33749698225"
          className="px-5 py-3 rounded-xl bg-teal-500 text-white hover:opacity-90 shadow"
        >
          📞 07 49 69 82 25
        </a>
      </div>

      <div className="mt-8 space-y-1 text-gray-700">
        <p><span className="font-semibold">Email :</span> chavasseaxelle@gmail.com</p>
        <p><span className="font-semibold">Téléphone :</span> 07 49 69 82 25</p>
        <p><span className="font-semibold">Créneaux :</span> Lun–Ven, 9h–18h</p>
      </div>
    </section>
  );
}