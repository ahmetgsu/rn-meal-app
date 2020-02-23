import { MEALS } from '../../data/dummy-data';

const initialState = {
	meals: MEALS,
	felteredMeals: MEALS,
	favoriteMeals: []
};

const mealsReducers = (state = initialState, action) => {
	return state;
};

export default mealsReducers;
