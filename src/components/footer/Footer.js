export default function Footer() {
    return (
        // Footer Start
        <footer className="page-footer font-small indigo">
            <div className="container text-center text-md-left">
                <div className="row pt-5">
                    <div className="col-md-4 mx-auto">
                        <ul className="list-unstyled">
                            <li>
                                <a href="javascript:void(0);">About US</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">Contact US</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">Info</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">Website Features</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="clearfix w-100 d-md-none" />
                    <div className="col-md-4 mx-auto">
                        <ul className="list-unstyled">
                            <li>
                                <a href="javascript:void(0);">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">Support</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">Help</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="clearfix w-100 d-md-none" />
                    <div className="col-md-4 mx-auto">
                        <ul className="list-unstyled">
                            <li>
                                <a href="javascript:void(0);">Follow Us @kentsocial</a>
                            </li>
                            <div className="mt-3 flex-center">
                                <a className="fb-ic">
                                    <i className="fab fa-facebook-f fa-lg mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                <a className="ins-ic">
                                    <i className="fab fa-instagram fa-lg mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                <a className="tw-ic">
                                    <i className="fab fa-twitter fa-lg mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                <a className="li-ic">
                                    <i className="fab fa-linkedin-in fa-lg mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-5">
                KemtSocial hold no rights to any image on the website...
            </div>
        </footer>
        // Footer End
    );
}