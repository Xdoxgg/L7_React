import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    const [tasks, setTasks] = useState([])
    tasks.push({
        title: 'React',
        state:0,
        time: Date.now(),
    })
    
    return (<>
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
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
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
        </>)
}

export default App
