import previewView from './previewView';
import View from './View';

import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again';
  _message;

  _generateMarkUp() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
