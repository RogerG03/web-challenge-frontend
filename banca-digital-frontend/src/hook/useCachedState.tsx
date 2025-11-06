/**
 * useCachedState - Hook para manejar un estado que se sincroniza automáticamente con localStorage.
 *
 * Este hook permite mantener un valor en el estado de React y, al mismo tiempo, persistirlo
 * en el almacenamiento local del navegador. Útil para datos que deben sobrevivir a recargas de página.
 *
 * @template T - Tipo del estado que se desea almacenar.
 * @param {string} key - Clave única en localStorage para guardar el estado.
 * @param {T} initialValue - Valor inicial del estado, usado si no hay nada en localStorage.
 * @returns {[T, React.Dispatch<React.SetStateAction<T>>]} - Array con el estado y su función de actualización.
 *
 * @example
 * const [username, setUsername] = useCachedState<string>("username", "");
 *
 * // El estado se guarda automáticamente en localStorage bajo la clave "username"
 * // y se recupera automáticamente cuando se recarga la página.
 */

import { useState, useEffect } from "react";

export function useCachedState<T>(key: string, initialValue: T) {
  const [state, setState] = useState<T>(() => {
    if (typeof window === "undefined") return initialValue;
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch {}
  }, [key, state]);

  return [state, setState] as const;
}
