import React from 'react'

export const Footer = () => {
    return (
        <>
            <hr />
            <footer className="page-footer font-small pt-4">  
                <div className="container-fluid text-center text-md-left"> 
                    <div className="row"> 
                        <div className="col-md-4 mt-md-0 mt-3"> 
                            <h5 className="text-uppercase">egeon project</h5>
                            <p>static web page for view and download gifs powered by the Giphy API.</p>
                        </div> 

                        <hr className="clearfix w-100 d-md-none pb-3" /> 
                        <div className="col-md-3 mb-md-0 mb-3"> 
                            <h5 className="text-uppercase">Platform</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://github.com/GerezPablo">Creator</a>
                                </li>
            
                                <li>
                                    <a href="#!">Brand & Agencies</a>
                                </li>
                                
                                <li>
                                    <a href="#!">Pricing</a>
                                </li>
                                
                                <li>
                                    <a href="#!">Comunity</a>
                                </li>
                            </ul>
                        </div> 

                        <div className="col-md-2 mb-md-0 mb-2"> 
                            <h5 className="text-uppercase">Company</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">Careers</a>
                                </li>
                            </ul>
                        </div>


                        <div className="col-md-3 mb-md-0 mb-2"> 
                            <h5 className="text-uppercase">Resources</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://github.com/GerezPablo/egeon-project">Backend</a>
                                </li>

                                <li>
                                    <a href="https://github.com/GerezPablo/front-egeon">Frontend</a>
                                </li>

                                <li>
                                    <a href="#!">Help </a>
                                </li>

                                <li>
                                    <a href="#!">Terms of use</a>
                                </li>

                                <li>
                                    <a href="#!">Privacy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="footer-copyright text-center py-3">© 2020 Copyright: Egeon industries </div>
            </footer>
        </>
    )
}