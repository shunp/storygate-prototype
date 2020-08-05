import { shallowEqual } from 'react-redux'

export class Editable<T> {
  editable: T

  readonly original: T

  constructor(private _original: T) {
    this.original = _original
    this.editable = { ...this._original }
  }

  hasChanged = () => shallowEqual(this.editable, this.original)
}
