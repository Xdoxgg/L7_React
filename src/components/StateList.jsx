import {useState} from 'react'
import '../App.css'


function StateList({item}) {
    const [selectedOption, setSelectedOption] = useState('notReady');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <select id="switch-select" value={selectedOption} onChange={handleChange}
                    className={(selectedOption === 'ready' ? 'select-complete' : 'select-no-complete')}>
                <option value="notReady" className='select-no-complete'>Активная задача</option>
                <option value="ready" className='select-complete'>Задача выполнена</option>
            </select>

        </div>
    );
}


export default StateList;
