import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Add from '../components/Add'
import * as AddActions from '../actions/add'

function mapStateToProps(state){
	console.log(state.handlerList);
	return {
		add: state.handlerList
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(AddActions, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Add)

