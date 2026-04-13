import { useEffect, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * ScrollToTop Component - Versión Ultra Robusta
 * 
 * Elimina completamente cualquier efecto visual de scrolling al cambiar de página.
 * Estrategia múltiple para garantizar inicio instantáneo en todas las páginas.
 */
export function ScrollToTop() {
  const { pathname } = useLocation()

  // Estrategia 1: Reseteo INMEDIATO antes del render (bloqueante, sin animación)
  useLayoutEffect(() => {
    // Desactivar scroll suave temporalmente
    const htmlElement = document.documentElement
    const bodyElement = document.body
    
    // Guardar el comportamiento de scroll original
    const originalScrollBehavior = htmlElement.style.scrollBehavior
    
    // Forzar scroll instantáneo (sin animación)
    htmlElement.style.scrollBehavior = 'auto'
    bodyElement.style.scrollBehavior = 'auto'
    
    // Resetear scroll en todos los elementos posibles
    htmlElement.scrollTop = 0
    bodyElement.scrollTop = 0
    window.scrollTo(0, 0)
    
    // Restaurar el comportamiento de scroll después de un pequeño delay
    const timeoutId = setTimeout(() => {
      htmlElement.style.scrollBehavior = originalScrollBehavior
      bodyElement.style.scrollBehavior = originalScrollBehavior
    }, 50)

    return () => clearTimeout(timeoutId)
  }, [pathname])

  // Estrategia 2: Configuración global del navegador
  useEffect(() => {
    // Desactivar restauración automática de scroll del navegador
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  return null
}
