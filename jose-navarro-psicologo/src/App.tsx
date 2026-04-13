import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { AboutMe } from './pages/AboutMe/AboutMe'
import { Contact } from './pages/Contact/Contact'
import { Servicios } from './pages/Servicios/Servicios'
import { ScrollToTop } from './components/ScrollToTop'
import { db, analytics } from './firebaseConfig'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { logEvent } from 'firebase/analytics'

export default function App() {
  useEffect(() => {
    fetch('https://ipinfo.io/json')
      .then(res => res.json())
      .then(async (data) => {
        const pais = data.country ?? 'desconocido'
        const ciudad = data.city ?? 'desconocida'
        await addDoc(collection(db, 'visitas'), {
          pais,
          ciudad,
          fecha: Timestamp.now()
        })
        logEvent(analytics, 'nueva_visita', { pais, ciudad })
      })
      .catch(() => {
        // Si falla la geolocalización, no bloqueamos la app
      })
  }, [])

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/acerca-de-mi" element={<AboutMe />} />
      </Routes>
    </>
  )
}
