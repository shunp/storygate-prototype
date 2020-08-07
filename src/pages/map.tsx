import * as React from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper, Polygon } from 'google-maps-react'
import Geocode from 'react-geocode'
import Header from 'src/components/Header/index'
import { Link } from 'gatsby'

Geocode.setApiKey(process.env.GATSBY_MAP_API_KEY)
// Geocode.fromLatLng('48.8583701', '2.2922926').then(
//   response => {
//     const address = response.results[0].formatted_address
//     console.log(address)
//   },
//   error => {
//     console.error(error)
//   }
// )
// Geocode.fromAddress('足立区').then(
//   response => {
//     const { lat, lng } = response.results[0].geometry.location
//     console.log(lat, lng)
//   },
//   error => {
//     console.error(error)
//   }
// )

interface User {
  id: string
  name: string
  lat: number
  lng: number
}

class Pos {
  lat: number

  lng: number

  constructor(lat: number, lng: number) {
    this.lat = lat
    this.lng = lng
  }
}

const MapPage = ({ google }) => {
  navigator.geolocation.getCurrentPosition(pos => {
    console.log('location', pos)
  })
  const [activeMarker, setActiveMarker] = React.useState(null)
  const [targetUser, setTargetUser] = React.useState<User>({ id: '', name: '', lat: 0, lng: 0 })
  const [currentPos, setCurrentPos] = React.useState<Pos>(new Pos(35.6804, 139.769))

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

  const fetchCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(pos => {
      console.log('location', pos)
      console.log('coords', pos.coords)
      setCurrentPos(new Pos(pos.coords.latitude, pos.coords.longitude))
    })
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
    },
    {
      id: 3,
      name: '小池 駿平',
      img:
        'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/443502378%2Fprofile.jpg?alt=media&token=bc87f7be-760d-4f9a-92e1-c6b2abc0eba4',
      lat: 36.6904,
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
      <Link to="/persons/owner">
        <div className="flex justify-center items-center flex-col">
          <img src={targetUser.img} alt="" className="w-20" />
          <div className="text-gray-600 mt-1">{targetUser.name}</div>
        </div>
      </Link>
    )
  }

  return (
    <>
      <Header />
      <div>
        <Map
          google={google}
          zoom={14}
          initialCenter={{
            lat: currentPos.lat,
            lng: currentPos.lng
          }}
          center={{
            lat: currentPos.lat,
            lng: currentPos.lng
          }}
          onClick={onMapClicked}
        >
          {markerList}
          <InfoWindow marker={activeMarker} onOpen={() => onInfoWindowOpen(activeMarker)} onClose={onInfoWindowClose} visible>
            <TargetInfo />
          </InfoWindow>
        </Map>
      </div>
      <div id="map-footer" className="absolute z-10 bottom-0">
        <button type="button" className="p-40" onClick={fetchCurrentLocation}>
          現在地へ
        </button>
      </div>
    </>
  )
}
export default GoogleApiWrapper({
  apiKey: process.env.GATSBY_MAP_API_KEY || ''
})(MapPage)
