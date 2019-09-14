import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import moment from 'moment';


interface Props {
    data: any,
    onClick: () => any
}

const SidebarItem = ({ data, onClick }: Props) => {

    const { starttime, stoptime, tripduration, start_station_name: startPlace, end_station_name: endPlace } = data;

    return (
        <ListItem onClick={onClick} onMouseOver={onClick}  button component="nav" >
            <ListItemText
                primary={`${startPlace} -> ${endPlace}`}
                secondary={
                    <>
                        {
                            moment(starttime).format('YYYY.MM.DD, hh:mm')
                        } -> {
                            moment(stoptime).format('YYYY.MM.DD, hh:mm')
                        } (total time: {tripduration})
                    </>
                }
            />
        </ListItem>
    )
}
export default SidebarItem
