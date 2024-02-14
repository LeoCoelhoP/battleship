import OnLoadView from '../view/onLoadView';

const addOnLoadListener = () => {
  OnLoadView.addOnLoadEventListener(OnLoadView.render(OnLoadView.getMarkup()));
};

const addStartGameListener = () => {
  OnLoadView.addStartGameEventListener(OnLoadView.clear.bind(OnLoadView));
};

function init() {
  addOnLoadListener();
  addStartGameListener();
}

init();
