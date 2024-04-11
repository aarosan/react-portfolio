import React from "react";
import { Helmet } from "react-helmet";

import "./styles/contact.css";

import NavBar from "../components/navBar";
import ContactMe from "../components/contactMe";
import Footer from "../components/footer";

const Contact = () => {
    return (
        <React.Fragment>

            <Helmet>
                <title></title>
                <meta />
            </Helmet>

            <div className="page-content">

                <div className="contact-navbar">
                    <NavBar active="contact" />
                </div>

                <div className="contact-me">
                    <ContactMe />
                </div>

                <div className="contact-footer">
                    <Footer />
                </div>

            </div>
        </React.Fragment>
    )
}

export default Contact;