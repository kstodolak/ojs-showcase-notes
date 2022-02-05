import o from 'ojs-core';
import { oButton } from 'ojs-inline-components';
import './Note.css';

function Note({ title, content }, deleteNote) {
  return (
    o('div').class('note').add(
      o('h3').text(title).class('note__title'),
      oButton().onClick(() => deleteNote(title)).classList('note__delete-icon').text('+'),
      o('div').text(content).class('note__text')
    )
  )
}

export default Note;