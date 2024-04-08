
const SearchBar = ({ setValue }: { setValue: (e: string) => void }) => {



  return (
    <div>
      <label>Busca por artista, album o canción</label>
      <input type="text" placeholder="Search..." onChange={(e) => setValue(e.target.value)} />
    </div>
  )
}

export default SearchBar