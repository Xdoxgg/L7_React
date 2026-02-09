import '../App.css';
import { RxCross1 } from "react-icons/rx";
function AddFrom({ addItemHandler }) {
    
    return (
       <div className={'add-form'}>
           <RxCross1 className={'cross'} />
           <div className={'add-form-title'}>Добавить новую задачу</div>
       </div>
    );
}

export default AddFrom;
