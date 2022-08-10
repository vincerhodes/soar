import React from "react";

const About = () => {
  return (
    <>
      <div className='flex place-content-center m-5'>
        SOAR is a cycling app developed by James Rhodes as a React project using
        some cool technologies
      </div>
      <hr />
      <div className='flex place-content-center m-5'>
        <div className='flex gap-1'>
          <a
            href='https://developer.mozilla.org/en-US/docs/Web/javascript/'
            rel='nofollow'
          >
            <img
              src='https://camo.githubusercontent.com/2559664ade90356ebe1bf0ed7b822b5cb09b4fb08b9a66feffc7c304ca2493cd/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176617363726970742d4646443433423f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d626c61636b'
              alt='JavaScript'
              data-canonical-src='https://img.shields.io/badge/Javascript-FFD43B?style=for-the-badge&amp;logo=javascript&amp;logoColor=black'
            />
          </a>
          <a
            href='https://www.typescriptlang.org/'
            rel='nofollow'
          >
            <img
              src='https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white'
              alt='TypeScript'
            />
          </a>
          <a href='https://reactjs.org/' rel='nofollow'>
            <img
              src='https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'
              alt='React.js'
            />
          </a>
          <a href='https://nextjs.org/' rel='nofollow'>
            <img
              src='https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white'
              alt='NEXT.js'
            />
          </a>
          <a href='https://tailwindcss.com/' rel='nofollow'>
            <img
              src='https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white'
              alt='tailwindcss'
            />
          </a>
          <a href='https://www.postgresql.org/' rel='nofollow'>
            <img
              src='https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white'
              alt='Postgres'
            />
          </a>
          <a href='https://www.prisma.io/' rel='nofollow'>
            <img
              src='https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white'
              alt='Prisma'
            />
          </a>
          <a href='' rel='nofollow'>
            <img src='' alt='' />
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
