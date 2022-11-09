
//!!это action!!!
//=========================
const addNewUser = (passport, name, age) => ({ // принимает три параметра из AddUser и возвращает обьект
    type: 'ADD_USER', //action.type тип действия указывает, что я буду делать 
    passport,  //что я бду посылать 
    name, //что я бду посылать 
    age //что я бду посылать 
});
export default addNewUser;