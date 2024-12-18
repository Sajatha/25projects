


export default function Search({search, setSearch, handleSearch}) {

    return <div className="search-engine">
        <input
        type="text"
        className="city-name"
        placeholder="Enter city name"
        name="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        />
    <button className="search-btn" onClick={handleSearch}>Search button</button>
    </div>
}