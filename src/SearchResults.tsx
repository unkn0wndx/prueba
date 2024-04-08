import ResultItem from "./ResultItem"

const SearchResults = ({ albums, tracks, artist }: { albums: any, tracks: any, artist: any }) => {
  return (
    <div>


      <div>
        <label>Albums</label>
        {
          albums && albums.map((a: any) => {

            return (
              <ResultItem key={a.mbid} data={a} />
            )
          })
        }
      </div>

      <div>
        <label>Canciones</label>
        {
          tracks && tracks.map((a: any) => {
            return (
              <ResultItem key={a.mbid} data={a} />
            )
          })
        }
      </div>

      <div>
        <label>Artist</label>
        {
          artist && artist.map((a: any) => {
            return (
              <ResultItem key={a.mbid} data={a} />
            )
          })
        }
      </div>

    </div>
  )
}

export default SearchResults