import React from "react";

import { av } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
      <img src={av} alt='sumz_logo' className='w-23 h-20 object-contain' />
      
        <button
          type='button'
          onClick={() =>
            window.open("https://www.google.com")
          }
          className='black_btn'
        >
          Google
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize URL with <br className='max-md:hidden' />
        <span className='orange_gradient '>NIBSS-AI</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with this webapp, an open-source URL summarizer
        that transforms lengthy URL into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
