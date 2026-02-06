import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TableItem from "./components/TableItem.jsx";

function App() {
    const [count, setCount] = useState(0)

    const [tasks, setTasks] = useState([{
        id: 1,
        title: 'React1',
        state: 0,
        time: new Date(Date.now()).toLocaleString()
    },
        {
            id: 2,
            title: 'React2',
            state: 0,
            time: new Date(Date.now()).toLocaleString()
        }
        ,
        {
            id: 3,
            title: 'React3',
            state: 0,
            time: '02.06.2026'
        }])

    return <>
        <header className='header'>
            <div className='menu-element'>Все задачи</div>
            <div className='menu-element'>Активные задачи</div>
            <div className='menu-element'>Выполненные задачи</div>
        </header>
        <main className='container'>
            <table className='table'>
                <thead>
                <tr>
                    <th style={{width: '60%'}}>Описание</th>
                    <th style={{width: '20%'}}>Статус</th>
                    <th style={{width: '20%'}}>Дедлайны</th>
                </tr>
                </thead>
                <tbody>
                {tasks.map(task => (
                    <TableItem key={task.id} item={task} />
                ))}
                </tbody>
                <tfoot>
                <tr style={{height: '70px'}}>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                </tfoot>
            </table>
        </main>
    </>
}

export default App
