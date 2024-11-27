import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const name = formData.get('name').trim();
        const email = formData.get('email').trim();
        const message = formData.get('message').trim();

        if (!name || !email || !message) {
            alert("Please enter all the details.");
            return;
        }
    
        formData.append("access_key", "bd07c425-f974-4248-a1a4-3d22ceed830e");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        } else {
            alert("Something went wrong, please try again.");
        }

      };

    return (
        <div id='contact' className="contact">
            <div className="contact-title">
                <h1>Contact Me</h1>
                <img src={theme_pattern} alt="theme_pattern" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently looking for full time oppurtunities, To know more about me please feel free to contact.</p>
                    <div className="contact-details">
                        <div className="contact-det">
                            <img src={mail_icon} /><p>mohammedshoaibshaik5@gmail.com</p>
                        </div>
                        <div className="contact-det">
                            <img src={call_icon} /><p>+562-607-3956</p>
                        </div>
                        <div className="contact-det">
                            <img src={location_icon} /><p>5050 E Garford St, CA, United States</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor=''>Your Name</label>
                    <input type='text' placeholder='Enter Your name' name='name'/>
                    <label htmlFor=''>Your Email</label>
                    <input type='email' placeholder='Enter Your email' name='email'/>
                    <label htmlFor=''>Message</label>
                    <textarea name='message' rows={8} placeholder='Enter your message'/>
                    <button type='submit' className="contact-submit">Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact