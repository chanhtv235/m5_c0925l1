import {Link} from "react-router-dom";

const Header = ({appName,address})=>{
    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{appName}{address}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to={'/'}>Home</Link>
                        <Link className={'mx-lg-5'} to={'/dashboard'}>Dasboard</Link>
                        {/*<Link to={'/dashboard/student'}>List student</Link>*/}
                        {/*<Link to={'/dashboard/student/add'}>Add New</Link>*/}
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default Header;