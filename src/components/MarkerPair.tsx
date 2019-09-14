import React from 'react';
import { Marker, Tooltip } from 'react-leaflet';
import { Markers } from '../types/data';
import { activeIcon, simpleIcon } from '../utils';

interface Props {
    data: Markers,
    active: boolean
}

const MarkerPair = ({ data, active = false }: Props) => {

    const {
        starttime,
        tripduration,
        id,
        start_station_latitude,
        start_station_longitude,
        end_station_latitude,
        end_station_longitude,
        start_station_name,
        end_station_name
    } = data;

    return (
        <>
            <Marker
                icon={active ? activeIcon(tripduration) : simpleIcon}
                key={id}
                position={[start_station_latitude, start_station_longitude]}>
                {
                    active && <Tooltip permanent={active}>
                        Start place: {start_station_name}
                    </Tooltip>
                }
            </Marker>
            <Marker
                icon={active ? activeIcon(tripduration) : simpleIcon}
                key={starttime}
                position={[end_station_latitude, end_station_longitude]}>
                {
                    active && <Tooltip permanent>
                        End place: {end_station_name}
                    </Tooltip>
                }
            </Marker>
        </>
    )
}
export default MarkerPair
