import { oFragment } from 'ojs-core';
import Header from '../components/Header/Header';
import NoteForm from '../components/NoteForm/NoteForm';
import Footer from '../components/Footer/Footer';
function NewNote() {
  return (
    oFragment(
      Header(false),
      NoteForm(),
      Footer(),
    )
  );
}

export default NewNote;