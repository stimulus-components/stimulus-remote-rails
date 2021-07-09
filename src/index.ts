import { Controller } from 'stimulus'

export default class extends Controller {
  // @ts-ignore
  element: HTMLElement

  replace (event: CustomEvent): void {
    event.preventDefault()
    event.stopPropagation()

    const [, , xhr] = event.detail
    this.element.outerHTML = xhr.response
  }

  append (event: CustomEvent): void {
    event.preventDefault()
    event.stopPropagation()

    const [, , xhr] = event.detail
    this.element.insertAdjacentHTML('afterend', xhr.response)
  }

  prepend (event: CustomEvent): void {
    event.preventDefault()
    event.stopPropagation()

    const [, , xhr] = event.detail

    this.element.insertAdjacentHTML('beforebegin', xhr.response)
  }
}
