import { useDispatch } from "react-redux";
import addNewUser from '../action'

const AddUser = () => {

    const dispatch = useDispatch();
    const formHandler =(event) => {
        event.preventDefault(); 
        console.log(event.target.elements);
        let data = event.target.elements;
        dispatch(addNewUser(data.passport.value, data.name.value, data.age.value)) //с помощью dispatch отпарвляю данные на addNewUser
    }
    return (
        <div>
            <form onSubmit={formHandler} >
                <div>
                    <span>passport</span>
                    <input type="text" name='passport' defaultValue={131212} /> 
                </div>
                <div>
                <span>name</span>

                    <input type="text" name='name' defaultValue={'Alis'} />
                </div>
                <div> 
                <span>age</span>
                    <input type="text" name='age' defaultValue={102} />
                </div>
                <div>
                <button type="submit">Submit</button>

                </div>

            </form>
        </div>
    )

} 
export default AddUser;