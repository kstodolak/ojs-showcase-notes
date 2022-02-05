import { oFragment } from 'ojs-core';
import { oRender } from 'ojs-core/npm/o.production.min';
import Header from '../components/Header/Header';
import Notes from '../components/Notes/Notes';
import Footer from '../components/Footer/Footer';

function Main() {
  const build = () => {
    return (
      oFragment(
        Header(true, rerender),
        Notes(),
        Footer(),
      )
    );
  }
  const rerender = () => {
    oRender(
      document.body,
      build(),
      true
    );
  }

  return build();
}

export default Main;