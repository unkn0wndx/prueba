import { useEffect, useRef, useState } from "react"

import SearchBar from "./SearchBar.tsx";
import SearchResults from "./SearchResults.tsx";

const Layout = ({ children }: { children: any }) => {

  const fetchAlbums = async (value: string) => {
    const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${value}&limit=5&api_key=fcd492e73eaf5db3fc46164916b00df9&format=json`)
    const data = await response.json()
    console.log("albums", data.results.albummatches.album)
    setAlbums(data.results.albummatches.album)
  }

  const fetchArtist = async (value: string) => {
    const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${value}&limit=5&api_key=fcd492e73eaf5db3fc46164916b00df9&format=json`)
    const data = await response.json()
    console.log("Artist", data.results.artistmatches.artist)
    setArtists(data.results.artistmatches.artist)
  }
  const fetchTracks = async (value: string) => {
    const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${value}&limit=5&api_key=fcd492e73eaf5db3fc46164916b00df9&format=json`)
    const data = await response.json()
    setTracks(data.results.trackmatches.track)
    console.log("track", data.results.trackmatches.track)
    setTracks(data.results.trackmatches.track)
  }



  const [value, setValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const [albums, setAlbums] = useState([])
  const [artists, setArtists] = useState([])
  const [tracks, setTracks] = useState([])

  const timeOutId = useRef(0)

  useEffect(() => {

    clearTimeout(timeOutId.current)
    timeOutId.current = setTimeout(() => {
      if (value.length > 1) {
        fetchAlbums(value)
        fetchArtist(value)
        fetchTracks(value)
      }
    }, 1000)

  }, [value])


  return (
    <div>

      <SearchBar setValue={setValue} />

      <h1>{value}</h1>

      <SearchResults albums={albums} tracks={tracks} artist={artists} />

      {children}



    </div >
  )
}

export default Layout