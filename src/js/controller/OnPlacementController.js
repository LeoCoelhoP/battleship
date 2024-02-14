class OnPlacementController {
  addOnLoadEventListener(handler) {
    window.addEventListener('load', handler);
    return this;
  }
}

export default new OnPlacementController();
