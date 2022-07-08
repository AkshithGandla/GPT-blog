import React from "react";
import msgNote from "../../images/noteBG.png";
import notePhoto from "../../images/notePhoto.png";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import "./note.css";

const Note = () => {
  return (
    <div className="noteContainer" id="contactUS">
      <img src={msgNote} alt="" />
      <div className="noteInternals">
        <img src={notePhoto} alt="" />
        <div className="NoteForm">
          <div class="Contactcontainer">
            <form id="contact" action="" method="post">
              <h3>Write a note to Rachita Sharma</h3>
              <fieldset>
                <input
                  placeholder="Enter Full Name"
                  type="text"
                  tabindex="1"
                  required
                  autofocus
                />
              </fieldset>
              <fieldset>
                <input
                  placeholder="Enter Email Address"
                  type="email"
                  tabindex="2"
                  required
                />
              </fieldset>
              <div className="phoneURL">
                <fieldset>
                  <input
                    placeholder="Phone Number"
                    type="tel"
                    tabindex="3"
                    required
                  />
                </fieldset>
                <fieldset>
                  <input
                    placeholder="Website URL"
                    type="url"
                    tabindex="4"
                    required
                  />
                </fieldset>
              </div>
              <fieldset>
                <textarea
                  placeholder="Message"
                  tabindex="5"
                  required
                ></textarea>
              </fieldset>
              <fieldset>
                <button
                  name="submit"
                  type="submit"
                  id="contact-submit"
                  data-submit="...Sending"
                >
                  Submit
                </button>
              </fieldset>
            </form>
            <div className="formContact">
              <div className="formMail">
                <a href="#">
                  <AiIcons.AiFillMail></AiIcons.AiFillMail>
                </a>
                <p>rachitasharma@girlpowertalk.com</p>
              </div>

              <div className="form__socialIcons">
                <IconContext.Provider
                  value={{ className: "shared-class-form-icons", size: 40 }}
                >
                  <a href="#">
                    <AiIcons.AiFillLinkedin></AiIcons.AiFillLinkedin>
                  </a>
                  <a href="#">
                    <AiIcons.AiFillYoutube></AiIcons.AiFillYoutube>
                  </a>
                  <a href="#">
                    <AiIcons.AiFillFacebook></AiIcons.AiFillFacebook>
                  </a>
                  <a href="#">
                    <AiIcons.AiFillInstagram></AiIcons.AiFillInstagram>
                  </a>
                </IconContext.Provider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
