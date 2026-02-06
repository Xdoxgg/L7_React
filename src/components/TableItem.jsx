import {useState} from 'react'
import '../App.css'
import StateList from "./StateList.jsx";


function TableItem({item}) {
    return (
        <tr key={item.id}>
            <td>{item.title}</td>
            <td>
                <StateList item={item} />
            </td>
            <td>{new Date(item.time).toLocaleDateString()}</td>
        </tr>)
}


export default TableItem;
