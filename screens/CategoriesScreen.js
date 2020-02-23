import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { CATEGORIES } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = props => {
	// console.log(props);
	const renderGridItem = ({ item }) => {
		return (
			<CategoryGridTile
				title={item.title}
				color={item.color}
				onSelect={() => {
					props.navigation.navigate({
						routeName: 'CategoryMeals',
						params: {
							categoryId: item.id //we can use that data in routed screen
						}
					});
				}}
			/>
		);
	};

	return (
		<FlatList
			keyExtractor={(item, index) => item.id}
			data={CATEGORIES}
			numColumns={2}
			renderItem={renderGridItem}
		/>
	);
};

// Can be moved to the MealsNavigator.js file
CategoriesScreen.navigationOptions = navData => {
	const { navigation } = navData;
	return {
		headerTitle: 'Meal Categories',
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

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default CategoriesScreen;
