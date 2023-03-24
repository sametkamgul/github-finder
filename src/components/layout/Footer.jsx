import React from 'react';

function Footer() {
    const footerYear = new Date().getFullYear();

    return (
        <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
            <div className='text-center'>
                <svg
                    fill='#fff'
                    width='64'
                    height='64'
                    viewBox='0 0 32 32'
                    xmlns='http://www.w3.org/2000/svg'
                    className='inline-block'
                >
                    <path d='M7.11,23.52l1.42-1.41C5.14,18.72,3.37,17,2.39,16L8.53,9.89A1,1,0,1,0,7.11,8.47L.29,15.29A1.05,1.05,0,0,0,0,16a1,1,0,0,0,.3.71Z' />
                    <path d='M31.71,15.29c-.1-.09-6.82-6.82-6.82-6.82L23.48,9.89c3.38,3.38,5.15,5.16,6.13,6.09l-6.13,6.13a1,1,0,0,0,.7,1.71,1,1,0,0,0,.71-.3l6.82-6.81A1,1,0,0,0,32,16,1,1,0,0,0,31.71,15.29Z' />
                    <path d='M13.27,27.91a1,1,0,0,0,1-.76L19.7,5.33a1,1,0,0,0-1.94-.48L12.3,26.67A1,1,0,0,0,13,27.88,1,1,0,0,0,13.27,27.91Z' />
                </svg>
                <p className='text-white'>
                    Copyright &copy; {footerYear} All rights reserved
                </p>
            </div>
        </footer>
    );
}

export default Footer;