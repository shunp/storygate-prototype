import * as React from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper, Polygon } from 'google-maps-react'

interface User {
  id: string
  name: string
  lat: number
  lng: number
}

const MapPage = ({ google }) => {
  const [activeMarker, setActiveMarker] = React.useState(null)
  const [targetUser, setTargetUser] = React.useState<User>()

  const onMarkerClick = (props, marker, e, user: User) => {
    console.log('onMarketClick', marker)
    setTargetUser(user)
    setActiveMarker(marker)
  }

  const onInfoWindowOpen = activeMarker => {
    console.log('onInfoWindowOpen', activeMarker)
  }

  const onInfoWindowClose = () => {
    console.log('onInfoWindowClose')
  }

  const onMapClicked = () => {
    console.log('onMapClicked')
  }

  const markerList = []
  const users = [
    {
      id: 1,
      name: '小池 駿平',
      img:
        'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/1sLl53hRd7Z0LDksz9iB%2Fprofile.jpg?alt=media&token=2e5eda6a-07c8-4fd4-bbc1-1a5a30f455f4',
      lat: 35.6804,
      lng: 139.769
    },
    {
      id: 2,
      name: '小池 駿平',
      img:
        'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/443502378%2Fprofile.jpg?alt=media&token=bc87f7be-760d-4f9a-92e1-c6b2abc0eba4',
      lat: 35.6904,
      lng: 139.749
    }
  ]
  users.map((user, i) => {
    return markerList.push(
      <Marker
        key={i}
        title={user.name}
        position={{ lat: user.lat, lng: user.lng }}
        onClick={(props, marker, e) => onMarkerClick(props, marker, e, user)}
      />
    )
  })

  const TargetInfo = () => {
    return (
      <div className="flex justify-center items-center flex-col">
        <img src={targetUser.img} alt="" className="w-20" />
        <div className="text-gray-600 mt-1">{targetUser.name}</div>
      </div>
    )
  }

  return (
    <>
      <div>
        <Map
          google={google}
          zoom={14}
          initialCenter={{
            lat: 35.6804,
            lng: 139.769
          }}
          onClick={onMapClicked}
        >
          {markerList}
          <InfoWindow marker={activeMarker} onOpen={() => onInfoWindowOpen(activeMarker)} onClose={onInfoWindowClose} visible>
            <TargetInfo />
          </InfoWindow>
        </Map>
      </div>
    </>
  )
}
export default GoogleApiWrapper({
  apiKey: process.env.GATSBY_MAP_API_KEY || ''
})(MapPage)
