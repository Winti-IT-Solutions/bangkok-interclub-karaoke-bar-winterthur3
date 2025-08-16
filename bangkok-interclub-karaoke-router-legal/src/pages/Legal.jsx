import React from 'react'
import { Link } from 'react-router-dom'

export default function Legal() {
  return (
    <div className='min-h-screen text-white bg-vibe'>
      <div className='w-[92vw] max-w-[900px] mx-auto py-10'>
        <h1 className='text-sm font-bold uppercase tracking-widest opacity-70'>Anbieterangaben & Datenschutz</h1>
        <div className='mt-3 text-[13px] leading-6 opacity-90'>
          <p><strong>Verantwortliche Stelle / Anbieter:</strong><br/>
          Bangkok Interclub Karaoke Bar, General-Guisan-Strasse 31, 8400 Winterthur, Schweiz<br/>
          E‑Mail: <a className='underline' href='mailto:annydao3333@gmail.com'>annydao3333@gmail.com</a> · Tel/WhatsApp: <a className='underline' href='https://wa.me/41796161006' target='_blank' rel='noreferrer noopener'>+41 79 616 10 06</a></p>
          <ul className='list-disc list-inside mt-3 space-y-1'>
            <li><strong>Zweck der Datenbearbeitung:</strong> Kommunikation, Terminabstimmung und Durchführung des Barbetriebs.</li>
            <li><strong>Kontaktformular:</strong> erfolgt via <code>mailto:</code>; keine serverseitige Speicherung auf dieser Website.</li>
            <li><strong>Keine Analyse-/Tracking‑Tools:</strong> keine Cookies für Analysezwecke, kein Analytics.</li>
            <li><strong>Drittanbieter:</strong> Bei Nutzung von WhatsApp oder Zahlung (TWINT/Kartenterminal) gelten deren Datenschutzbestimmungen.</li>
            <li><strong>Rechte nach revDSG:</strong> Auskunft, Berichtigung, Löschung – Anfrage per E‑Mail an <a className='underline' href='mailto:annydao3333@gmail.com'>annydao3333@gmail.com</a>.</li>
          </ul>
          <p className='mt-3 text-[12px] opacity-70'>Geltendes Recht: Schweiz · Stand: 2025-08-16</p>
        </div>

        <div className='mt-6'>
          <Link to='/' className='text-[12px] underline opacity-70 hover:opacity-100'>Zurück zur Startseite</Link>
        </div>
      </div>
      <footer className='text-center text-white/70 py-6 text-[11px]'>
        © 2025 Bangkok Interclub Karaoke Bar · Winterthur
      </footer>
    </div>
  )
}
