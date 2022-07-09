export const cartReducer = (state = [], action)=>{
    switch (action.type) {
		case 'BOOKS_IN_ARRAY':
			return {
				...state,
				books : action.payLoad,
			};
		default:
			return state;
	}
};




