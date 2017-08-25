export const ADD_NEW = 'ADD_NEW'
export const DEL_NEW = 'DEL_NEW'

export function add_new(payload) {
	return {
		type: ADD_NEW,
	 	payload : ' new'
	}
}

export function del_new(){
	return {
		type: DEL_NEW
	}
}