// !!!!! это сама функция редьюсер!!!!! она обращается к хранилищу и заменяет его данные своими


const user = (state = [], action) => { //получает action из user

    switch (action.type) { //'ADD_USER' из  action из user
        case 'ADD_USER' :
            console.log('we add new user'); 
            console.log(state);
            return [
                ...state,
                {
                    passport: action.passport,
                    name: action.name,
                    age : action.age,
                }
            ]
            default: // если нет данных то вернется просто  старый state 
                return state;
    }
}

export default user;