const domContainer = document.querySelector('#app-root');

const {Fragment} = React;
const getRect = h => (<rect key={`Rect:${h}`} x="0" y={h} width="150" height="1" style={{
      fill: `hsl(${h},100%,50%)`
    }} />);
const rectList = [...new Array(360)].map((v, i) => getRect(i));
const nameList = [
  'red',
  'orange',
  'yellow',
  'yellow green',
  'green',
  'green aqua',
  'aqua green',
  'aqua',
  'aqua blue',
  'blue',
  'blue purple',
  'purple',
  'pink',
  'pink red',
  'red pink'
];
const segDist = 360 / nameList.length;
const segmentList = nameList.map((v, i) => (
  <Fragment>
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
    <text x="10" y={(i * segDist) + 16.5} style={{fill: 'white'}}>{v}</text>
  </Fragment>
));

ReactDOM.render(
  <Fragment>
    Number Of Colors: {nameList.length}<br/>
    <svg viewBox="0 0 150 360" width="150" height="360" style={{fontFamily: 'sans-serif'}}>
      {rectList}
      {segmentList}
    </svg>
  </Fragment>, 
  domContainer
);
