import { oRender } from 'ojs-core';
import Main from '../pages/Main';

export default function mainViewRenderer() {
  oRender(
    document.body,
    Main(),
    true
  );
}