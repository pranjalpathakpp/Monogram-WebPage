import React, { useState } from 'react';

function Navbar() {
  
  const [isWorkflowDropdownOpen, setIsWorkflowDropdownOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('GBP');
  const [activeCurrency, setActiveCurrency] = useState('GBP');
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);


  
  const toggleWorkflowDropdown = () => {
    setIsWorkflowDropdownOpen(!isWorkflowDropdownOpen);
  };

  const toggleCurrencyDropdown = () => {
    setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen);
  };

  const handleCurrencySelection = (currency) => {
    setSelectedCurrency(currency);
    setActiveCurrency(currency);
    setIsCurrencyDropdownOpen(false);
  };

  const handleArrowClick = () => {
  const scrollPercentage = 0.159;
  const targetScrollPosition = document.documentElement.scrollHeight * scrollPercentage;

  window.scrollTo({
    top: targetScrollPosition,
    behavior: 'smooth',
  });
};

  const logoPath = "M 150 36 V 0 H 0 V 114 H 150 Z M 144 6 V 36 H 78 V 6 Z M 6 6 H 72 V 72 H 6 Z M 72 108 H 6 V 78 H 72 Z m 72 0 H 78 V 78 h 0 V 42 h 66 Z";

  return (
    <>
      <nav>
        <div className='coverimage'>
          <div className="cover-text">
            <h1>A CONSOLE FOR EVERY WORKFLOW</h1>
            <p>Discover the perfect console for yours.</p>
          </div>
          <img src="https://monogramcc.com/static/9a0b554db1990565457610c5f83b3ad7/cef05/shop_cta_xl_896f6b8270.webp"/>

          <div className="arrow" onClick={handleArrowClick} title="Scroll down"></div>
          
        </div>

        <div className='navbar'>
          <div className='logo'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 150 114"
              width="50"
              fill='#efc2b3'
              className="logo-svg"
              
            >
              <path d={logoPath}></path>
              <rect x="35.5" y="17" width="6" height="44"></rect>
              <rect x="53" y="17" width="6" height="44"></rect>
              <rect x="18" y="17" width="6" height="44"></rect>
              <path d="M111.5,50a25,25,0,1,0,25,25A25,25,0,0,0,111.5,50Zm0,44a19,19,0,1,1,19-19A19,19,0,0,1,111.5,94Z"></path>
            </svg>
            <h2>MONOGRAM</h2>
            
          </div>

          <ul className="items">
            <li>HOW IT WORKS</li>
            <li className="workflow-dropdown-wrapper" onClick={toggleWorkflowDropdown}>
              <span>WORKFLOWS</span>
              
              <span className={`dropdown-arrow ${isWorkflowDropdownOpen ? 'open' : ''}`}>&#9662;</span>
              
              {isWorkflowDropdownOpen && (
                <div className="workflow-dropdown-content">
                  <ul>
                    <li>AUDIO CONSOLE</li>
                    <li>PHOTO CONSOLE</li>
                    <li>VIDEO CONSOLE</li>
                    <li>MINI CONSOLE</li>
                  </ul>
                </div>
              )}
            </li>
            <li>DOWNLOAD</li>
            <li>BLOG</li>
            <li>SUPPORT</li>
            <li>SHOP</li>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                fill='#efc2b3'
                className="bi bi-bag"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"></path>
              </svg>
            <li className="workflow-dropdown-wrapper" onClick={toggleCurrencyDropdown}>
              <span >{selectedCurrency}</span>
              <span className={`dropdown-arrow ${isCurrencyDropdownOpen ? 'open' : ''}`}>&#9662;</span>
              {isCurrencyDropdownOpen && (
                <div className="workflow-dropdown-content">
                  <ul>
                    <li className={`currency-item ${activeCurrency === 'USD' ? 'active' : ''}`}
                        onClick={() => handleCurrencySelection('USD')}>USD ($)</li>
                    <li className={`currency-item ${activeCurrency === 'CAD' ? 'active' : ''}`}
                        onClick={() => handleCurrencySelection('CAD')}>CAD ($)</li>
                    <li className={`currency-item ${activeCurrency === 'EUR' ? 'active' : ''}`}
                        onClick={() => handleCurrencySelection('EUR')}>EUR (€)</li>
                    <li className={`currency-item ${activeCurrency === 'AUD' ? 'active' : ''}`}
                        onClick={() => handleCurrencySelection('AUD')}>AUD ($)</li>
                    <li className={`currency-item ${activeCurrency === 'GBP' ? 'active' : ''}`}
                        onClick={() => handleCurrencySelection('GBP')}>GBP (£)</li>
                    <li className={`currency-item ${activeCurrency === 'KRW' ? 'active' : ''}`}
                        onClick={() => handleCurrencySelection('KRW')}>KRW (₩)</li>
                    <li className={`currency-item ${activeCurrency === 'JPY' ? 'active' : ''}`}
                        onClick={() => handleCurrencySelection('JPY')}>JPY (¥)</li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
