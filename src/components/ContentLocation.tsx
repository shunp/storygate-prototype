import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { LatLngModel } from 'src/services/MapService/LatLngModel'
import { Location } from 'src/services/interfaces/Portfolio'
import { DefaultPostModal } from './Content/modal/PostModal'
import { LocatingMap } from './Map/LocatingMap'

interface ContentLocationProps {
  location?: Location
}
export const ContentLocation: React.FC<ContentLocationProps> = ({ location }) => {
  if (!location) {
    return <></>
  }
  return (
    <div id="content-location" className="flex justify-center items-center w-full mb-1">
      <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" className="text-gray-500" />
      {location.latlng ? (
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${location.latlng.lat},${location.latlng.lng}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="mx-1 text-gray-500">{location.label}</span>
        </a>
      ) : (
        <span className="mx-1 text-gray-500">{location.label}</span>
      )}
    </div>
  )
}

interface MapLocatingFormProps {
  location?: Location
  mapLocating: boolean
  endMapLocating: () => void
  onChange: (key: string, location: Location) => void
}
export const MapLocatingForm: React.FC<MapLocatingFormProps> = ({ location, mapLocating, endMapLocating, onChange }) => {
  return (
    <>
      <input
        type="text"
        placeholder="title..."
        className="border-2 border-gray-300 bg-white h-10 w-full px-5 rounded-lg text-lg focus:outline-none"
        value={location?.label}
        onChange={e => onChange('location', { ...location, label: e.target.value })}
      />
      <DefaultPostModal
        id="map-locating"
        editing={mapLocating}
        onClear={endMapLocating}
        onFocusOut={endMapLocating}
        onDone={async (id: string) => endMapLocating()}
        Post={
          <LocatingMap
            initialPosition={location?.latlng}
            onCenterChanged={(latlng: LatLngModel) => onChange('location', { ...location, latlng })}
          />
        }
        containerClassName="h-64"
      />
    </>
  )
}

interface ModifiableContentLocationProps {
  location?: Location
  onChange: (key: string, location: Location) => void
}
export const ModifiableContentLocation: React.FC<ModifiableContentLocationProps> = ({ location, onChange }) => {
  const [mapLocating, setMapLocating] = React.useState(false)
  return (
    <div id="modifiable-location" className="flex flex-col w-full mt-2">
      <div className="flex">
        <div className="m-1 text-xs text-white">場所(実店舗の場合のみ)</div>
        <FontAwesomeIcon size="1x" icon={faMapMarkerAlt} onClick={() => setMapLocating(true)} className="text-gray-500" />
      </div>
      <MapLocatingForm location={location} mapLocating={mapLocating} endMapLocating={() => setMapLocating(false)} onChange={onChange} />
    </div>
  )
}
