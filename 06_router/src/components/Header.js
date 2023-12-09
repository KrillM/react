import {Link} from "react-router-dom";

export default function Header(){
    return(
    <>
    <header className="Header">
        <div className="logo">Router Study</div>
        <nav>
            <div>
                {/* a 태그는 페이지를 새로고침하면서 페이지를 이동한다. 
                    Link 컴포넌트는 컴포넌트를 변경하므로 페이지를 새로고침하지 않는다. */}
                <Link to="/">Home</Link>
            </div>
            <div><Link to="/products">Products</Link></div>
            <div><Link to="/photos">Photos</Link></div>
        </nav>
    </header>
    </>
    );   
}