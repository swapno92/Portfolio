// import React from 'react';

const Footer = ({showContent}) => {
    return (
        <footer  className="footer footer-center p-4 bg-[#bd82d0] text-base-content">
            <div>
                <p className='font-semibold text-base'>Copyright © {(new Date().getFullYear())}. Swapno Dey All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;