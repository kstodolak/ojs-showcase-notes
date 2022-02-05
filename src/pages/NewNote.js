import o, { oFragment } from 'ojs-core';
import Header from '../components/Header/Header';
import NoteForm from '../components/NoteForm/NoteForm';

function NewNote() {
  return (
    oFragment(
      Header(false),
      NoteForm(),
    )
  );
}

export default NewNote;