import o from 'ojs-core';
import { oLink } from 'ojs-router';
import './Navigation.css';


function Navigation() {
  return (
    o('nav').classList('nav').add(
      o('div').classList('nav__element').add(
        oLink().to('/').text('notatki').classList('nav__link')
      ),
      o('div').classList('nav__element').add(
        oLink().to('/form').text('dodaj notatkę').classList('nav__link')
      ),
    )
  );
}

export default Navigation;