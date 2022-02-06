import { oRender } from 'ojs-core';
import oRouter from 'ojs-router';
import './main.css';
import Main from './pages/Main';
import NewNote from './pages/NewNote';

oRouter.routingTable = {
  ['/']: getRendererFunction(Main),
  ['/form']: getRendererFunction(NewNote),
}

function getRendererFunction(page) {
  return () => {
    oRender(
      document.body,
      page(),
      true
    );
  }
}

oRouter.route();