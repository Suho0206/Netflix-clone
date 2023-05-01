import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
      <Main/>
      <Row rowID="1" title='UpComing' fetchURL={requests.requestUpcoming}/>
      <Row rowID="2" title='Popular' fetchURL={requests.requestPopular}/>
      <Row rowID="3" title='Trending' fetchURL={requests.requestTrending}/>
      <Row rowID="5" title='Toprated' fetchURL={requests.requestTopRated}/>
      <Row rowID="6" title='NowPlaying' fetchURL={requests.requestSimilar}/>
    </>
  )
}

export default Home
