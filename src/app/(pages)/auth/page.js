"use client"
import { useState } from 'react';
import Login from "@/components/Auth/Login";
import Register from "@/components/Auth/Register";
import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";

export default function Auth() {
  const [activeTab, setActiveTab] = useState('login');

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <HeaderOne />
      <main className="main">

        <div className="py-80">
          <div className='row justify-content-center mt-80 p-0'>
            <ul className="tabs">
              <li className={activeTab === 'login' ? 'active' : ''} onClick={() => handleTabClick('login')}>Login</li>
              <li className={activeTab === 'register' ? 'active' : ''} onClick={() => handleTabClick('register')}>Register</li>
            </ul>
          </div>
          <div className="tab__content">
            {activeTab === 'login' && <Login />}
            {activeTab === 'register' && <Register setActiveTab={setActiveTab} />}
          </div>
        </div>

        {/* <div className="py-80">
          <div className='row justify-content-center mt-80 p-0'>
            <ul className="tabs">
              <li className="active">Login</li>
              <li>Register</li>
            </ul>
          </div>
          <ul className="tab__content">
            <li className="active">
              <Login />
            </li>
            <li>
              <Register />
            </li>
          </ul>
        </div> */}
      </main>
      <FooterOne />
    </>
  );
}