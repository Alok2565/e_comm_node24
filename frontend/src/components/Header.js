import react from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ()=>{
    const auth = localStorage.getItem("user");
    const navigate = useNavigate();
    const logout =()=>{
        localStorage.removeItem("user");
        //localStorage.clear();
        navigate("/signup");
    }
    return (
        <div className="header">
            <ul className="navbar">
                <li><Link to="/">Product</Link></li>
                <li><Link to="/add-new">Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li>{ auth ? <Link onClick={logout} to="/signup">Logout</Link> : 
                <Link to="/signup">SignUp</Link>}</li>
            </ul>
        </div>
    )
}
export default Header;