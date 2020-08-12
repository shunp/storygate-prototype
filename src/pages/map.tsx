import * as React from 'react'
import { css } from '@emotion/core'

import { Map, InfoWindow, Marker, GoogleApiWrapper, Polygon } from 'google-maps-react'
import Geocode from 'react-geocode'
import { Link } from 'gatsby'
import { Noto, Montserrat } from 'src/components/SGText'
import { LatLngModel } from 'src/services/MapService/LatLngModel'
import PageRoot from 'src/components/Root/PageRoot'
import MapHeader from 'src/components/Map/Header'
import 'src/styles/map-footer.css'

const MapFooter = ({ searchWord, setSearchWord, searchLocation }) => {
  return (
    <>
      <div className="absolute w-full h-48 bg-white z-20 bottom-0" />
      <div className="absolute w-full h-48 bg-gradient-b-blue-pink-purple z-20 bottom-0 opacity-85" />
      <div className="absolute z-20 flex justify-center bottom-0 w-full mb-24">
        <input
          type="text"
          placeholder="キーワードを入力する"
          className="border-2 border-gray-300 bg-white text-pink-c1 h-12 w-56 pl-5 mx-3 rounded-full text-sm focus:outline-none"
          value={searchWord}
          onChange={e => setSearchWord(e.target.value)}
          css={css`
            &::placeholder {
              color: #cc2cb7;
              opacity: 50%;
            }
          `}
        />
        <button type="button" className="py-2 px-6 mx-2 bg-purple-c1 rounded-full" onClick={searchLocation}>
          <Noto className="text-white text-lg">検索</Noto>
        </button>
      </div>
      <div className="absolute z-20 flex justify-center w-full bottom-0 mb-6">
        <Montserrat className="text-white mx-10 text-sm">
          ヒント：地名・駅名・建物名などを入力すると周辺のメンバーやお店が見つかります。
        </Montserrat>
      </div>
    </>
  )
}

Geocode.setApiKey(process.env.GATSBY_MAP_API_KEY)

const MapPage = ({ google }) => {
  navigator.geolocation.getCurrentPosition(pos => {
    console.log('location', pos)
  })
  const [activeMarker, setActiveMarker] = React.useState('')
  const [targetUser, setTargetUser] = React.useState<User>({ id: '', name: '', link: '', img: '', lat: 0, lng: 0 })
  const [markerList, setMarkerList] = React.useState([])
  const [currentPos, setCurrentPos] = React.useState<LatLngModel>(new LatLngModel(35.6804, 139.769))
  const [searchWord, setSearchWord] = React.useState('')

  const onMarkerClick = (props, marker, e, user: User) => {
    console.log('onMarketClick', marker)
    setTargetUser(user)
    setActiveMarker(marker)
  }

  const onReady = () => {
    console.log('onReady')
    // TODO: DB
    const users = [
      {
        id: '1',
        name: '小池 駿平',
        link: 'baiUK5z4NYhFscfuwpJuT7NTwZs2',
        img:
          'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/1sLl53hRd7Z0LDksz9iB%2Fprofile.jpg?alt=media&token=2e5eda6a-07c8-4fd4-bbc1-1a5a30f455f4',
        lat: '35.6804',
        lng: '139.769'
      },
      {
        id: '2',
        name: '小池 駿平',
        link: 'baiUK5z4NYhFscfuwpJuT7NTwZs2',
        img:
          'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/443502378%2Fprofile.jpg?alt=media&token=bc87f7be-760d-4f9a-92e1-c6b2abc0eba4',
        lat: '35.6904',
        lng: '139.749'
      },
      {
        id: '3',
        name: '小池 駿平',
        link: 'baiUK5z4NYhFscfuwpJuT7NTwZs2',
        img:
          'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/1sLl53hRd7Z0LDksz9iB%2Fprofile.jpg?alt=media&token=2e5eda6a-07c8-4fd4-bbc1-1a5a30f455f4',
        lat: '35.6814',
        lng: '139.719'
      }
    ]
    const data = []
    users.map((user, i) => {
      return data.push(
        <Marker
          key={i.toString()}
          title={user.name}
          position={{ lat: user.lat, lng: user.lng }}
          onClick={(props, marker, e) => onMarkerClick(props, marker, e, user)}
          icon={{
            url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            anchor: new google.maps.Point(32, 32),
            scaledSize: new google.maps.Size(64, 64)
          }}
        />
      )
    })
    setMarkerList(data)
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
      setCurrentPos(new LatLngModel(pos.coords.latitude, pos.coords.longitude))
    })
  }

  const searchLocation = () => {
    Geocode.fromAddress(searchWord).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location
        console.log(lat, lng)
        setCurrentPos(new LatLngModel(lat, lng))
      },
      error => {
        console.error(error)
      }
    )
  }

  const TargetInfo = () => {
    return (
      <Link to={`/persons/${targetUser.link}`}>
        <div className="flex justify-center items-center flex-col">
          <img src={targetUser.img} alt="" className="w-20" />
          <div className="text-gray-600 mt-1">{targetUser.name}</div>
        </div>
      </Link>
    )
  }

  return (
    <PageRoot>
      <MapHeader />
      <div>
        <Map
          google={google}
          onReady={onReady}
          zoom={14}
          className="map"
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
      <div id="map-footer" className="absolute z-10 bottom-0 w-full flex justify-start items-center">
        <MapFooter searchWord={searchWord} setSearchWord={setSearchWord} searchLocation={searchLocation} />
      </div>
    </PageRoot>
  )
}
export default GoogleApiWrapper({
  apiKey: process.env.GATSBY_MAP_API_KEY || ''
})(MapPage)
