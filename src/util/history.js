import { createBrowserHistory } from 'history';
import qs from 'qs';

const history = createBrowserHistory();

function addLocationQuery(_history) {
  if (!_history.location.search) return;
  _history.location = Object.assign(_history.location, {
    query: qs.parse(_history.location.search.substring(1))
  });
}

addLocationQuery(history);

history.listen(() => {
  addLocationQuery(history);
});

export default history;
