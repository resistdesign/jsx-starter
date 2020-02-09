const domContainer = document.querySelector('#app-root');

const getRect = h => (<rect key={`Rect:${h}`} x="0" y={h} width="150" height="1" style={{
      fill: `hsl(${h},100%,50%)`
    }} />);
const rectList = [...new Array(360)].map((v, i) => getRect(i));
const segDist = 360 / 15;
const segmentList = [...new Array(15)].map((v, i) => (
  <rect
    x="0"
    y={i * segDist}
    width="150"
    height={segDist}
    style={{
      stroke: 'black',
      strokeWidth: 1,
        fill: 'none'
    }}
  />
));

ReactDOM.render(
  <svg viewBox="0 0 150 360" width="150" height="360">
    {rectList}
    {segmentList}
  </svg>, 
  domContainer
);
