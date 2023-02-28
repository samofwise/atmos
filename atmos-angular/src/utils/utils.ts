export const getParalaxScroll = (event: Event) => (func: (offset: number) => void) => {
  const target = event.target as Document | HTMLElement;
  const scrollTarget = 'scrollingElement' in target ? target.scrollingElement : target;
  const offset = scrollTarget?.scrollTop ?? 0;
  func(offset);
}

type CssKeys = Exclude<keyof CSSStyleDeclaration, 'parentRule' |
  'length' | 'getPropertyPriority' | 'getPropertyValue' | 'item' | 'removeProperty' | 'setProperty'>;


export const applyParalax = (element: HTMLElement | null, prop: CssKeys, adjustment: number, offset: number) => {
  if (element)
    element.style[prop] = `${adjustment * offset}px`
}

export const applyCustomParalax = (element: HTMLElement | null, prop: CssKeys, adjustment: number, value: (offset: number) => string, offset: number) => {
  if (element)
    element.style[prop] = value(adjustment * offset)
}