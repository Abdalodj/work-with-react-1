import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
    const [inputValue, setInputValue] = useState('')

    const handleFormValidation = (value) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(value).toLowerCase())) {
            alert('Attention, ceci n\'est pas un email\n Entrer un email valide SVP!!!')
        } else {
            setInputValue(value)
        }
    };
    return (
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
                Pour les passionné·e·s de plantes 🌿🌱🌵
            </div>
            <div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <div className="lmj-footer-email">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onBlur={(e) => handleFormValidation(e.target.value)}
                />
            </div>
        </footer>
    )
}

export default Footer