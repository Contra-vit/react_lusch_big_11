
//получает данные из хранилища и отправлять в презентационый кампонент 

import { connect } from "react-redux";
import List from '../components/List';

function mapStateToProps(state) { //получает данные для вывода 
    const { user } = state;
    return { user : user };
}

 export default connect(
    mapStateToProps, // перый параметр трасформирует стэйт в пропс 
    null // второй параметр оставим пока  
) (List) ;