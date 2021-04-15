import '../styles/Header.css';
import React, { useState } from 'react'
import logo from '../utils/logo.jpg'
import TelegramIcon from '@material-ui/icons/Telegram';


function Header() {

    const [theme, settheme] = useState(true)

    return (
        <div className="header" >
            
            <div className="header__left">
                <img src={logo} alt="logo"/>
            </div>
            
            <div className="header__mid">
              <div>
                  <div className="header__mid__btn1">
                  <form>
                    <select id="country" name="country">
                    <option value="au">INR</option>
                    </select>
                  </form>
                  </div>
                  <div className="header__mid__btn2">
                  <form>
                    <select id="country" name="country">
                    <option value="au">BTC</option>
                    <option value="ca">ETH</option>
                    <option value="usa">USDT</option>
                    </select>
                  </form>
                  </div>
                  <div className="header__mid__btn3">
                    Buy XRP
                  </div>
              </div>
            </div>

            <div className="header__right">
              <div className="header__right__btn">
                <TelegramIcon style={{
                  color:"white",
                  fontSize:40,
                }} /> 
                Connect Telegram
              </div>
                <label class="switch">
                  <input type="checkbox" checked={theme} onClick={(e)=>{settheme(!theme);}} />
                  <span class="slider round"></span>
                </label>
                
            </div>
        
        </div>
    )
}

export default Header