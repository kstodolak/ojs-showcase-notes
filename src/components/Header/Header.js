import o from 'ojs-core';
import './Header.css';
import Search from '../Search/Search';
import Navigation from '../Navigation/Navigation';

function Header(withSearch, rerender) {
  return (
    o('header').class('header').add(
      o('h1').class('header__logo-text').text('Notatki'),
      withSearch && Search(rerender),
      Navigation(),
    )
  );
}

export default Header;