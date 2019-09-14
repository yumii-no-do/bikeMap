import 'leaflet/dist/leaflet.css';
import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import MarkerPair from '../../components/MarkerPair';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import { CENTER, ZOOM, TILE_URL } from '../../constants/map';
import { Markers } from '../../types/data';
import { arrToMapById } from '../../utils';


interface Props {
    data?: Markers[],
    selected?: string
}

const MapView = ({ data = [], selected = "" }: Props) => {

    const [markers, setMarkers] = useState(new Map())

    useEffect(() => setMarkers(arrToMapById(data)), [data])

    return (
        <div className={styles.container}>
            <LeafletMap className={styles.map} center={CENTER} zoom={ZOOM}>
                <TileLayer url={TILE_URL} />
                {markerRenderer(markers, selected)}
            </LeafletMap>
        </div>
    )

}
export default MapView


const markerRenderer = (markers: Map<any, any>, selectedMarkerPair: string) => {

    let _markers: object[] = [];

    markers.forEach(el => {
        _markers.push(<MarkerPair active={el.id === selectedMarkerPair} key={el.id} data={el} />)
    })

    return _markers

}