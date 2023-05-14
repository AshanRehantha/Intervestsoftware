import React from 'react';
import { AiOutlineBarChart, AiOutlineShoppingCart, AiOutlineUser, AiOutlineSetting, AiOutlineWechat, AiOutlineLogout } from "react-icons/ai";
import { FaQuestionCircle } from "react-icons/fa";
import Cookies from "js-cookie";

const NavMenu = () => {
  return (
    <nav class="vertical-menu-wrapper">
        <div class="vertical-menu-logo">
            <div>LOGO</div>
            <span class="open-menu-btn"></span>
        </div>
        <ul class="vertical-menu">
            <li><a href='/app/dashboard'><AiOutlineBarChart/> Dashboard</a></li>
            <li><a href='/app/order'><AiOutlineShoppingCart/> Order </a></li>
            <li><a href='/app/account'><AiOutlineUser/> Account</a></li>
            <li><a href='/app/setting'><AiOutlineSetting/> Setting</a></li>
            <hr />
            <span>Support</span>
            <li><AiOutlineWechat/> Chat</li>
            <li><FaQuestionCircle/> FAQ</li>
            <hr />
            <li onClick={() => {
                Cookies.remove('inter_ib_login');
                window.location.reload(true);
                Cookies.remove('uuid');
            }}><AiOutlineLogout/> Log out</li>
        </ul>
    </nav>
  )
}

export default NavMenu
