
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Question from '../components/QuestionPage';
import * as actionCreators from '../redux/actions/questions';

import withVote from './withVote';

const mapStateToProps = (state) =>{
    return {
        state: state.test
    }
}

const mapDispatchToProps =  (dispatch) => {
    return bindActionCreators({...actionCreators}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withVote(Question));