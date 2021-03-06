import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from './MealItem';

const MealList = props => {
	const renderMealItem = itemData => {
		// console.log('itemData.item: ', itemData.item);
		return (
			<MealItem
				title={itemData.item.title}
				image={itemData.item.imageUrl}
				duration={itemData.item.duration}
				complexity={itemData.item.complexity}
				affordability={itemData.item.affordability}
				onSelectMeal={() => {
					props.navigation.navigate({
						routeName: 'MealDetail',
						params: {
							mealId: itemData.item.id,
							mealTitle: itemData.item.title
						}
					});
				}}
			/>
		);
	};

	return (
		<View style={styles.list}>
			<FlatList
				data={props.listData}
				keyExtractor={(item, index) => item.id}
				renderItem={renderMealItem}
				style={{ width: '95%' }}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	list: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 10
	}
});

export default MealList;
