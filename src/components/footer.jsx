import React, { useState } from 'react';






function Footer() {
      const [email, setEmail] = useState('');

    const handleInputChange = (event) => {
        setEmail(event.target.value);
    };


    return (
        <footer>
            <div className="footer-row">
                <div className="footer-name">
                    <p className="col">Monogram</p>
                    <address>305 King St. W.<br></br>
                             Suite 502<br></br>
                             Kitchener, ON<br></br>
                             Canada
                    </address>         
                </div>
            
                <div className="footer-col">
                    <p className="col">Quick Links</p>
                    <ul className="list-unstyled">
                        <li><a className="text-light" href="">Home</a>
                        </li>
                        <li><a className="text-light" href="">How it Works</a>
                        </li>
                        <li><a className="text-light" href="">Shop</a>
                        </li>
                        <li><a className="text-light" href="">Download</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-col">
                    <p className="col">Help</p>
                    <ul className="list-unstyled">
                        <li><a className="text-light" href="">FAQs</a>
                        </li>
                        <li><a className="text-light" href="">Support Center</a>
                        </li><li><a className="text-light" href="">Shipping and Sales</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-col">
                    <p className="col">Information</p>
                    <ul className="list-unstyled">
                        <li><a className="text-light" href="">About Us</a>
                        </li>
                        <li><a className="text-light" href="">Work with us</a>
                        </li>
                        <li><a className="text-light" href="">Privacy Policy</a>
                        </li>
                        <li><a className="text-light" href="">Terms of Use</a>
                        </li>
                        <li><a className="text-light" href="">Terms of Sale</a>
                        </li>
                        <li><a className="text-light" href="">Press Kit</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-last">
                <p className="col">Subscribe to Monogram</p>
                <p className="mb-2">Master productivity with Creative Console and get all the latest Monogram news.</p>
                <form id="subscribe-form" name="subscribe-form" action="" method="post" className="subscribe">
                <noscript></noscript>
                    
                    <div className="form-row">
                        <div className="form-col-1">
                            <input
                                id="subscribe-form-EmailField"
                                name="subscribeEmailField"
                                type="email"
                                className="footerFormControl"
                                aria-describedby="subscribe-form-emailHelp"
                                placeholder="Email Address"
                                value={email}
                                onChange={handleInputChange}
                            />
                            <span id="subscribe-form-emailHelp" className="subscribe-form-module" role="alert" aria-live="assertive" tabIndex="0">&nbsp;</span>
                        </div>
          <div className="form-group col">
            <input type="submit" className="btn rounded-pill" disabled={!email} value="Submit" />
          </div>
        </div>
        <input type="hidden" name="$timezone_offset" value="5.5" />
      </form>
      <ul className="list-inline">
        <li className="list-inline-item 1">
          <a href="" className="footer-icon" title="Instagram">
            <svg viewBox="0 0 448 512">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
            </svg>
          </a>
        </li>
        <li className="list-inline-item 2">
          <a href="" className="footer-icon" title="Twitter">
            <svg viewBox="0 0 512 512">
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
            </svg>
          </a>
        </li>
        <li className="list-inline-item 2">
          <a href="" className="footer-icon" title="Facebook">
            <svg viewBox="0 0 264 413">
              <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
            </svg>
          </a>
        </li>
        <li className="list-inline-item 3">
          <a href="" className="footer-icon" title="YouTube">
            <svg viewBox="0 0 576 512">
              <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
            </svg>
          </a>
        </li>
      </ul>
      <p className="copy-block">© Monogram 2024</p>
    </div>

            
            </div>
        </footer>
    );
}

export default Footer;
