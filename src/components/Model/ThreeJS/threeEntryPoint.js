import SceneManager from './SceneManager';

export default container => {
  const canvas = createCanvas(document, container);
  const sceneManager = SceneManager(canvas);

  render();

  function createCanvas(document, container) {
    const canvas = document.createElement('canvas');
    container.appendChild(canvas);
    return canvas;
  }

  function render() {
    requestAnimationFrame(render);
    sceneManager.update();
  }
};
