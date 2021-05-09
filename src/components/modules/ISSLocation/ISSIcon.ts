import L from 'leaflet';

const issIcon = new L.Icon({
  iconUrl:
    'https://upload.wikimedia.org/wikipedia/commons/d/d0/International_Space_Station.svg',
  iconSize: new L.Point(60, 75),
  shadowSize: [50, 64],
});

export { issIcon };
