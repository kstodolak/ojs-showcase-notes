import { oRender } from 'ojs-core';
import NewNote from '../pages/NewNote';

export default function noteFormViewRenderer() {
  oRender(
    document.body,
    NewNote(),
    true
  );
}