import Image from "next/image";
export default function Home() {
  return (
    <main>
            {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-14 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image 
        src="/logo.png" 
        alt="Logo Altevia" 
        width={300}   // largeur en pixels
        height={200}  // hauteur en pixels
        className="mb-6 object-contain"
      />
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-brand">
            Former, 
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-brand">
            Accompagner, 
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-brand">
            Faire grandir
          </h1>
          <p className="mt-4 text-[17px] text-slate-700">
            Faites fleurir votre potentiel -
            Bagnères-de-Bigorre & à distance.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="/plaquette.pdf"
              className="px-5 py-3 rounded-xl bg-accent text-white font-semibold hover:opacity-90"
              download
            >
              📄 Télécharger la plaquette
            </a>
            <a
              href="#contact"
              className="px-5 py-3 rounded-xl border border-brand text-brand hover:bg-brand/10"
            >
              Parler de mon besoin
            </a>
          </div>
        </div>
        {/* Image à droite */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/image.png"
            alt="Visuel Altevia"
            width={600}     // largeur en pixels
            height={400}    // hauteur en pixels
            className="object-cover w-full h-full"
          />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl border p-5">
              <h3 className="font-semibold mb-2">Conseil HSE</h3>
              <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1">
                <li>Mise en conformité sécurité</li>
                <li>DUERP : élaboration & mise à jour</li>
                <li>Audits / inspections</li>
                <li>Etude de poste</li>
              </ul>
            </div>
            <div className="rounded-xl border p-5">
              <h3 className="font-semibold mb-2">Formations / Ateliers</h3>
              <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1">
                <li>SST</li>
                <li>Risques pro (chimique, bruit, vibration, ergonomie…)</li>
                <li>Bureautique (Word/Excel/PowerPoint)</li>
                <li>Communication / Assertivité</li>
              </ul>
            </div>
            <div className="rounded-xl border p-5">
              <h3 className="font-semibold mb-2">Accompagnement</h3>
              <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1">
                <li>Suivi de chantier / activité</li>
                <li>Plans de prévention & procédures </li>
                <li>Indicateurs & reporting</li>
                <li>Gestion de projet</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact</h2>
        <p className="text-slate-700">Bagnères-de-Bigorre • ch**avasse**axelle@gmail.com • 07 49 69 82 25</p>
      </section>
      <footer className="text-center text-slate-500 text-sm py-8">
        © {new Date().getFullYear()} Altéxa — Tous droits réservés.
      </footer>
    </main>
  );
  {/* Contact */}
<section id="contact" className="bg-gray-50 py-16 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6">Contact</h2>

    <p className="text-lg text-gray-700 mb-2">
      📍 Bagnères-de-Bigorre & à distance
    </p>

    <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
      <a
  href="mailto:chavasseaxelle@gmail.com?subject=Demande%20information%20Altexa"
  className="px-5 py-3 rounded-xl border border-gray-300 hover:bg-white shadow-sm"
>
  ✉️ chavasseaxelle@gmail.com
</a>
      <a
        href="tel:+33749698225"
        className="px-5 py-3 rounded-xl bg-orange-500 text-white hover:bg-orange-600 shadow"
      >
        📞 07 49 69 82 25
      </a>
    </div>

    <p className="mt-6 text-sm text-gray-500">
      Réponse sous 24–48h les jours ouvrés.
    </p>
  </div>
</section>
}
