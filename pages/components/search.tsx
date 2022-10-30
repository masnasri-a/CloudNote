import { FaSearch } from "react-icons/fa";

const Search = (props: any) => {
    return (
        <>
            <div className="searchComponent">
            <input type="text" className="searchInput"/>
            <button type="button" className="searchButton" ><FaSearch/></button>
            </div>
        </>
    )
}

export default Search;