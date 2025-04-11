import React, { useState } from "react";
import "./formfill.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [buttonText, setButtonText] = useState("Submit");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        const formUrl =
            "https://docs.google.com/forms/d/e/1FAIpQLScyLCkgBUwnpH5gpHcncY8k9vWB20UQOcLFLas4JT4FSRG4Tg/formResponse";

        const formDataToSubmit = new URLSearchParams();
        formDataToSubmit.append("entry.2005620554", formData.name); // Name Field
        formDataToSubmit.append("entry.1045781291", formData.email); // Email Field
        formDataToSubmit.append("entry.203715829", formData.message); // Message Field

        fetch(formUrl, {
            method: "POST",
            body: formDataToSubmit,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            mode: "no-cors",
        })
            .then(() => {
                setButtonText("Submitted Successfully!");
                setTimeout(() => {
                    setButtonText("Submit");
                    setFormData({ name: "", email: "", message: "" });
                }, 3000);
            })
            .catch((error) => console.error("Error submitting form:", error));
    };

    return (
        <div className="form-div">
            <h1 className="frm-head">Fill a Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-cmpnts">
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>
                <div className="frmbtn">
                    <button type="submit">{buttonText}</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
