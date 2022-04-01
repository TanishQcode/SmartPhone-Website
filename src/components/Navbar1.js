import React from 'react';
import "../styles/Navbar1.css";

const bag=<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/><path d="M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M18,20H6V8h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8h4v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8 h2V20z"/></g>
            </svg>;

const Navbar1 = () => {
    return (
        <div className='nav1'>
            <div>
            <a href="https://www.mi.com/in/">DOT INDIA</a><span>|</span>
            <a href="https://in.event.mi.com/in/install-mi-store">DOT APP</a><span>|</span>
            <a href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">ONLINE HELP</a><span>|</span>
            <a href="https://www.mi.com/in/service/authorized_stores/">RETAIL STORE</a><span>|</span>
            </div>

            <div>
            <a href="https://store.mi.com/in/site/login">SIGN IN</a><span>|</span>
            <a href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN">SIGN UP</a><span>|</span>
            <a href="https://store.mi.com/in/cart">{bag} BAG(0)</a><span>|</span>
            </div>

        </div>
    );
}

export default Navbar1;
