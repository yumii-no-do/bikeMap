import { Icon } from 'leaflet';
import { Markers } from './types/data';


export async function fetchData() {
  const res = await fetch('data.json');
  const json = await res.json()
  return json
}


export const arrToMapById = (arr: Markers[]): Map<string, object> => {
  let map = new Map();

  for (let index = 0; index < arr.length; index++) {
    const element: Markers = arr[index];
    if (element.hasOwnProperty('id')) {
      map.set(element.id, element);
    }
  }

  return map
}


export const simpleIcon = new Icon({
  iconUrl: require('./assets/simple-marker.svg'),
  iconSize: [36, 35],
  iconAnchor: [36 / 2, 35],
  popupAnchor: [-15, -36],
  className: 'marker simple-marker',
});


export const activeIcon = (len: number) => {
  let scale = getScaleByLen(len)
  let size: [number, number] = [36 * scale, 35 * scale];

  return new Icon({
    iconUrl: require('./assets/active-marker.svg'),
    iconSize: size, // size of the icon
    iconAnchor: [size[0] / 2, size[1]],
    popupAnchor: [-15, -36],
    className: 'marker active-marker',
  });
}


const getScaleByLen = (len: number): number => {
  switch (true) {
    case len > 0 && len <= 150: return 1.1
    case len > 150 && len <= 250: return 1.2
    case len > 250 && len <= 400: return 1.3
    case len > 400 && len <= 600: return 1.4
    case len > 600: return 1.60
    default: return 1;
  }
}
