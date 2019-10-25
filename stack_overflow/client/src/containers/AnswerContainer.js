
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Answer from '../components/Answer';
import actionCreators from '../redux/actions/answers';


const mapStateToProps = (state) =>{
    return {
        state: state.test
    }
}

// const mapDispatchToProps =  (dispatch) => {
//     return bindActionCreators({...actionCreators}, dispatch)
// }
const mapDispatchToProps = {
    ...actionCreators
}

export default connect(mapStateToProps, mapDispatchToProps)(Answer);