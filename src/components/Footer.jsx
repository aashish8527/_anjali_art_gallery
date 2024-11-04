import React, { useState } from 'react'

export const Footer = () => {

  const [input, setInput] = useState({ email: '', message: '' });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${input.email}\nMessage: ${input.message}`);
  };

  return (
    <section className="footer">
        <div className="footer-content">
            <div className="box">
                <div className="logo">
                <img src="src/assets/logo.png" alt="Logo" />
                <h3>AnjaliArt</h3></div>
                <div className='location'>
                <img src="src/assets/location.png" alt="" />
                <p>12 Ajoriya, BhatPar-Rani, Distt-Deoria</p>
                </div>
                <div className="email">
                <img src="src/assets/email.png" alt="" />
                <p>anjaliart123@gmail.com</p>
                </div>
                <div className="phone">
                <img src="src/assets/call.png" alt="" />
                <p>+91 78********</p>
                </div>
            </div>

            <div className="box">
                  <form className="form" onSubmit={handleSubmit}>
                      <div className="title">Contact us</div>
                      <input
                            type="email"
                            placeholder="Your email"
                            name="email"
                            value={input.email}
                            onChange={handleInput}
                            className="input"
                          />
                          <textarea
                            placeholder="Your message"
                            name="message"
                            value={input.message}
                            onChange={handleInput}
                            className="input"
                          ></textarea>
                      <button>Submit</button>
                  </form>
            </div>

            <div className="box">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1831191.7085017168!2d81.72420501708982!3d26.308804066412925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993b345e8b2d46b%3A0xab93e5ed238c3386!2sBhatpar%20Rani%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1730645192916!5m2!1sen!2sin" 
     allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <hr />
        <div className="copyright">
        &copy; 2024 Anjali Kushwaha. All rights reserved.
    </div>
    </section>
  )
}
