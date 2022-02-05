import oRouter from 'ojs-router';
import './main.css';
import mainViewRenderer from './renderers/mainViewRenderer';
import noteFormViewRenderer from './renderers/noteFormViewRenderer';

// oRouter.defaultView = Main;

oRouter.routingTable = {
    ['/']: mainViewRenderer,
    ['/form']: noteFormViewRenderer,
}

oRouter.route();