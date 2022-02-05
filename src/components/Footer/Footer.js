import o from 'ojs-core';
import './Footer.css';

function Footer() {
  return (
    o('footer').class('footer').add(
      o('p').class('footer__part').html(`&copy; ${new Date().getFullYear()} OrangutanJS - aplikacja pokazowa.`),
      o('p').text('Stworzone przez: ').class('footer__part--no-wrap').add(
        o('a').class('footer__link').attr({ href: 'https://github.com/kstodolak' }).html('Kacper&nbsp;Stodolak&nbsp;(kstodolak)')
      )
    )
  );
}

export default Footer;