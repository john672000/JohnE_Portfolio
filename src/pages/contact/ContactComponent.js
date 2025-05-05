import React, { Component } from "react";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";
import ContactForm from "../../components/formfill/formfill.js";


const ContactData = contactPageData.contactSection;
const addressSection = contactPageData.addressSection;


class Contact extends Component {
  render() {

    const theme = this.props.theme;
    const sign = this.props.sign;
    return (
      <div className="contact-main">
        <div className="basic-contact">
          <Fade top duration={1000} distance="30px">
            <div className="contact-heading-div">
              <div className="image-form-container">
                <img className="prf-img"
                  src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                  alt=""
                />
                <img className="sign-img"
                  src={sign}
                  alt=""
                />

                <ContactForm theme={theme} />

              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  <Button className="contact-resbtn"
                    text={"See My Resume"}
                    newTab={true}
                    href={greeting.resumeLink}
                    theme={theme}
                  />
                  {ContactData["description"]}



                </p>

                <SocialMedia theme={theme} />

                <Fade top duration={1000} distance="30px">
                  <div className="address-heading-div">
                    <div className="address-heading-text-div">
                      <h1
                        className="address-heading-text"
                        style={{ color: theme.text }}
                      >
                        {addressSection["title"]}
                      </h1>
                      <p
                        className="address-subTitle"
                        style={{ color: theme.secondaryText }}
                      >
                        {addressSection["subtitle"]}
                      </p>

                      <div className="address-btn-div">
                        <Button
                          text="Visit on Google Maps"
                          newTab={true}
                          href={addressSection.location_map_link}
                          theme={theme}
                        />
                      </div>
                    </div>
                  </div>

                </Fade>
              </div>
            </div>

          </Fade>


        </div>
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
