import o from 'ojs-core';
import { oInput, oTextarea, oButton } from 'ojs-inline-components';
import oAPI from 'ojs-api';
import oRouter from 'ojs-router';
import './NoteForm.css';
import { NOTES_URL } from '../../url';


function NoteForm() {
  const store = {
    title: '',
    content: '',
  }

  const addNote = async () => {
    if (!store.title || !store.content) {
      alert('Uzupełnij wszystkie pola');
      return;
    }
    const response = await oAPI.post(
      NOTES_URL,
      { body: store }
    );

    if (response.ok) {
      oRouter.redirect('/')
    }
  }

  return (
    o('main').class('column').add(
      o('div').class('form').add(
        o('h2').text('Dodaj nową notatkę'),
        o('label').classList('form__label').text('Tytuł:').attr({ for: 'titleInput' }).add(
          oInput('text').id('titleInput').classList('form__input').db(store, 'title'),
        ),
        o('label').classList('form__label').text('Treść notatki:').attr({ for: 'contentTextarea' }).add(
          oTextarea().id('contentTextarea').classList('form__textarea').db(store, 'content'),
        ),
        o('div').classList('form__button-wrapper').add(
          oButton().text('Zapisz').onClick(addNote).classList('form__button')
        )
      )
    )
  )
}

export default NoteForm;