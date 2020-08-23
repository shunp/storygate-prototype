import * as React from 'react'

import { Map, InfoWindow, Marker, GoogleApiWrapper, Polygon, GoogleAPI, IMapProps } from 'google-maps-react'
import Geocode from 'react-geocode'
import { LatLngModel } from 'src/services/MapService/LatLngModel'
import 'src/styles/map-footer.css'

Geocode.setApiKey(process.env.GATSBY_MAP_API_KEY)

const INITIAL_POSITION = new LatLngModel(35.6804, 139.769)
type MapPageProps = {
  google: GoogleAPI
  initialPosition?: LatLngModel
  onCenterChanged: (latlng: LatLngModel) => void
}
const LocatingMapComponent: React.FC<MapPageProps> = ({ google, initialPosition = INITIAL_POSITION, onCenterChanged }) => {
  const [centerPos, setCenterPos] = React.useState<LatLngModel>(initialPosition)
  const onCenterChangedWrapper = (mapProps?: IMapProps, map?: GoogleAPI.maps.Map, event?) => {
    const center = map.getCenter()
    const latlng = new LatLngModel(center.lat(), center.lng())
    setCenterPos(latlng)
    onCenterChanged(latlng)
  }
  return (
    <Map
      google={google}
      onCenterChanged={onCenterChangedWrapper}
      initialCenter={{
        lat: initialPosition.lat,
        lng: initialPosition.lng
      }}
    >
      <Marker
        position={{ lat: centerPos.lat, lng: centerPos.lng }}
        icon={{
          url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          anchor: new google.maps.Point(32, 32),
          scaledSize: new google.maps.Size(64, 64)
        }}
      />
    </Map>
  )
}
export const LocatingMap = GoogleApiWrapper({
  apiKey: ''
})(LocatingMapComponent)
