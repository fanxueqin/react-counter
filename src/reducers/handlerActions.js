import { ADD_NEW ,DEL_NEW} from '../actions/add'

const initialState = ['old','old',]

export default function handlerList(state = initialState,action){
	switch (action.type) {
		case ADD_NEW:
			return state.concat(action.payload)
		case DEL_NEW:
			return state.splice(-1,1,"")
			
		default:
		 return state	
	}
}