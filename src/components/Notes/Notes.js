import o, { oRef, oRender, oFragment } from 'ojs-core';
import oAPI from 'ojs-api';
import oRouter from 'ojs-router';
import Note from '../Note/Note';
import './Notes.css';
import { NOTES_URL } from '../../url';

function Notes() {
  const contentWrapperRef = oRef();
  const queryString = oRouter.routingParameters.searchParameters.queryString || '';
  const apiURL = queryString
    ? `${NOTES_URL}?queryString=${queryString}`
    : NOTES_URL;

  const deleteNote = async (title) => {
    const requestURL = `${NOTES_URL}/${encodeURIComponent(title)}`;
    const resp = await oAPI.delete(requestURL);

    if (resp.ok) {
      renderNotes();
    }
  }

  const renderNotes = async () => {
    const resp = await oAPI.get(apiURL);
    const { data: notes } = resp;

    oRender(
      contentWrapperRef.target,
      (resp.ok && notes.length)
        ? oFragment(
          notes.map(note => Note(note, deleteNote))
        )
        : o('h2').class('content_empty-info').text('Brak wyników'),
      true
    );
  }

  renderNotes();

  return (
    o('main').class('column').add(
      o('div').class('content').ref(contentWrapperRef)
    )
  )
}

export default Notes;