import React, { useState, useRef } from "react";

import "./styles/contactMe.css";

import emailjs from "emailjs-com";
import Button from "../components/button";

const ContactMe = () => {
    const initial_values = { email: "", message: "" };
    const [notification, setNotification] = useState(false);
    const [values, setValues] = useState(initial_values);
    const [loading, setLoading] = useState(false);

    const form = useRef();

    const sendEmail = async () => {
        try {
            const result = await emailjs.sendForm(
                `service_mhpvuoo`,
                `template_sfxujcl`,
                form.current,
                `iwIx0pW5y_rN_8C9r`
            );
            console.log("result", result.text);
            setNotification(true);
        } catch (error) {
            console.log("ERROR", error);
        }
    };

    const clearForm = () => {
        setValues(initial_values);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        await sendEmail();
        setLoading(false);
        clearForm();
        setNotification(true);
    };

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const thankYouStyle = {
        fontFamily: '"Abril Fatface", serif',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: '40px',
        color: '#F7F6FC',
        paddingTop: '25px',
    };

    return (
        <div className="content">

            <div className="contact-me-title">
                Contact Me!
            </div>

            <div className="contact-me-container">
                <form onSubmit={handleSubmit} ref={form}>
                    <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                    />
                    <textarea
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        placeholder="Message"
                        required
                    ></textarea>
                    < Button
                        text={loading ? "Sending..." : "Send"}
                        loading={loading}
                        type="submit"
                    />
                    {notification && (
                    <span style={thankYouStyle}>
                        Thank you!
                    </span>
                    )}
                </form>
            </div>
        </div>
    )
}

export default ContactMe;