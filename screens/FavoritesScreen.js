import React from 'react';
import { useSelector } from 'react-redux';
import MealList from '../components/MealList';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const FavoritesScreen = props => {
	const favMeals = useSelector(state => state.meals.favoriteMeals);

	return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = navData => {
	const { navigation } = navData;
	return {
		headerTitle: 'Your Favorites',
		headerLeft: () => (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title='Menu'
					iconName='md-menu'
					onPress={() => {
						navigation.toggleDrawer();
					}}
				/>
			</HeaderButtons>
		)
	};
};

export default FavoritesScreen;
