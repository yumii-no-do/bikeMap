import React from 'react';
import { Paper, List } from '@material-ui/core';
import styles from './style.module.css';
import SidebarItem from '../../components/SidebarItem';


interface Props {
    data?: any[],
    handleSelect?: (id: string) => void
}

const Sidebar = ({ data = [], handleSelect = () => { } }: Props) => {

    const handle = (id: string) => () => handleSelect(id)

    const list = data.map((item) => <SidebarItem key={item.id} onClick={handle(item.id)} data={item} />)

    return (
        <Paper className={styles.container}>
            <List>
                {list}
            </List>
        </Paper>
    )

}
export default Sidebar