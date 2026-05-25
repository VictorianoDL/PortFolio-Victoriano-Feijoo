/**
 * Devuelve una posición aleatoria (left, top) válida dentro del viewport
 * para que un elemento de tamaño dado quede completamente visible.
 *
 * @param elWidth - ancho del elemento en píxeles
 * @param elHeight - alto del elemento en píxeles
 * @param options.margin - margen en píxeles desde los bordes del viewport (opcional)
 */
export function randomPositionWithinViewport(
  elWidth: number,
  elHeight: number,
  options: { margin?: number } = {}
): { left: number; top: number } {
  const margin = Math.max(0, options.margin ?? 0);

  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

  const maxLeft = Math.max(0, vw - elWidth - margin * 2);
  const maxTop = Math.max(0, vh - elHeight - margin * 2);

  const left = Math.floor(Math.random() * (maxLeft + 1)) + margin;
  const top = Math.floor(Math.random() * (maxTop + 1)) + margin;

  return { left, top };
}

/**
 * Posiciona un elemento DOM de forma aleatoria dentro del viewport.
 * - Si el elemento no tiene dimensiones (por ejemplo aún no está renderizado),
 *   puedes pasar width/height en las opciones.
 * - La función deja `position` en `fixed` por defecto para que sea relativo al viewport.
 */
export function positionElementRandomly(
  el: HTMLElement,
  options: { margin?: number; position?: 'fixed' | 'absolute'; width?: number; height?: number } = {}
): void {
  const { margin = 0, position = 'fixed', width, height } = options;

  const elWidth = typeof width === 'number' ? width : el.offsetWidth || el.getBoundingClientRect().width;
  const elHeight = typeof height === 'number' ? height : el.offsetHeight || el.getBoundingClientRect().height;

  const { left, top } = randomPositionWithinViewport(elWidth, elHeight, { margin });

  el.style.position = position;
  el.style.left = `${left}px`;
  el.style.top = `${top}px`;
}

export default randomPositionWithinViewport;
