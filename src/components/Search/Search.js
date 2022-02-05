import { o } from 'ojs-core';
import { oInput, oButton } from 'ojs-inline-components';
import oRouter from 'ojs-router';
import './Search.css';

function Search(rerender) {
  const db = {
    queryString: oRouter.routingParameters.searchParameters.queryString || ''
  }
  const clickHandle = () => {
    if (db.queryString) {
      oRouter.setSearchParameter('queryString', db.queryString);
    } else {
      oRouter.unsetSearchParameter('queryString');
    }
    rerender && rerender();
  }

  return (
    o('div').class('search').add(
      oInput('text').db(db, 'queryString').classList('search__input').placeholder('Wyszukaj...'),
      oButton().onClick(clickHandle).classList('search__button').add(
        o('i').classList('search__button-icon')
      )
    )
  )
}

export default Search;