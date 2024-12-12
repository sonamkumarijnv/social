
import './search.css';
import { FaFacebookF } from "react-icons/fa";



function Search() {
  return (
    <div className="section">
    <div className='Search-nav'>
    <FaFacebookF size={32} className="logo-icon" color="white"/>
    <div>            
    <div >
    <input placeholder="Search Facebook" className='search'/>
    </div>
    </div>
  </div>
  </div>
  );
}

export default Search;
