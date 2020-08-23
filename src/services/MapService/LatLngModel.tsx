import { LatLng } from '../interfaces/LatLng'

export class LatLngModel implements LatLng {
  constructor(readonly lat: number, readonly lng: number) {}
}
