import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import DefaultText from '../components/DefaultText';

import HeaderButton from '../components/HeaderButton';

const ListItem = props => {
	return (
		<View style={styles.listItem}>
			<DefaultText>{props.children}</DefaultText>
		</View>
	);
};

const MealDetailScreen = props => {
	const mealId = props.navigation.getParam('mealId');

	const availableMeals = useSelector(state => state.meals.meals);

	const selectedMeal = availableMeals.find(item => item.id === mealId);

	// useEffect(() => {
	// 	props.navigation.setParams({ mealTitle: selectedMeal.title });
	// }, [selectedMeal]);

	return (
		<ScrollView>
			<Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
			<View style={styles.details}>
				<DefaultText>{selectedMeal.duration}minutes</DefaultText>
				<DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
				<DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
			</View>
			<Text style={styles.title}>Ingredients</Text>
			{selectedMeal.ingredients.map(item => (
				<ListItem key={item}>{item}</ListItem>
			))}
			<Text style={styles.title}>Steps</Text>
			{selectedMeal.steps.map((elem, index) => (
				<ListItem key={index}>
					{index + 1} - {elem}
				</ListItem>
			))}
		</ScrollView>
	);
};

MealDetailScreen.navigationOptions = navigationData => {
	const mealId = navigationData.navigation.getParam('mealId');
	const mealTitle = navigationData.navigation.getParam('mealTitle');
	// const selectedMeal = MEALS.find(item => item.id === mealId);
	return {
		headerTitle: mealTitle,
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title='Favorite'
					iconName='ios-star'
					onPress={() => {
						console.log('Marked as favorite');
					}}
				/>
			</HeaderButtons>
		)
	};
};

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 200
	},
	details: {
		flexDirection: 'row',
		padding: 15,
		justifyContent: 'space-around'
	},
	title: {
		fontFamily: 'roboto-slab',
		fontSize: 22,
		textAlign: 'center'
	},
	listItem: {
		marginVertical: 10,
		marginHorizontal: 20,
		borderColor: '#ccc',
		borderWidth: 1,
		padding: 10
	}
});

export default MealDetailScreen;
