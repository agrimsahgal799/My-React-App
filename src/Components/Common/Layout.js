import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Link className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <img className="site-logo" src={process.env.PUBLIC_URL + '/assets/img/bootstrap-logo.svg'} alt="" />
                    </Link>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><Link type="button" className="nav-link text-white" to="/">Home</Link></li>
                        <li><Link type="button" className="nav-link text-white" to="/blogs">Blogs</Link></li>
                        <li><Link type="button" className="nav-link text-white" to="/contact">Contact</Link></li>
                        <li><Link type="button" className="nav-link text-white" to="/students">Students</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    
        <Outlet />
    </>
  )
}
