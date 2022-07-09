import React from 'react';

export const Menu = () => {
  return (
    <div>
        <nav className='navbar navbar-expand-lg navbar-dark nav-color'>
        <div className='container nav-brand mt-1'>
            <a className='navbar-brand'><i className='fa-solid fa-trophy nav-icon'></i></a>
            <h1><b className='retro-size'>Retro</b><br/>Consultancy</h1>
            <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse nav-links justify-content-end' id="navbarNav">
                <ul className='navbar-nav ms-auto mb-2'>
                    <li className='nav-item'>
                        <a className='nav-link active' aria-current="page" href="#">Home</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href="#">About</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href="#">Services</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href="#">Portfolio</a>
                    </li>
                    <li className='nav-item dropdown'>
                        <li className='nav-item'>
                          <a className='nav-link' href="#">Contact</a>
                        </li>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
  )
}