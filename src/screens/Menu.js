import React, { useEffect, useState } from "react";
import { View, FlatList, Image } from "react-native";
import {
	Layout,
	Button,
	Text,
	useTheme
} from "react-native-rapi-ui";

const MenuItem = ({ item, onQuantityChange, index }) => {
	const { quantity: initialQuantity, brand, description, price, image } = item;
	const [quantity, setQuantity] = useState(initialQuantity || 0);

	const handleQuantityChange = (newQuantity) => {
		setQuantity(newQuantity);
		onQuantityChange(newQuantity, index);
	};

	useEffect(() => {
		setQuantity(initialQuantity || 0);
	}, [initialQuantity]);

	return (
		<View
			style={{
				flexDirection: "row",
				padding: 25,
				borderBottomWidth: 1,
			}}
		>
			<Image
				source={image}
				style={{ width: 150, height: 100, borderRadius: 10 }}
			/>
			<View
				style={{
					flex: 1,
					marginLeft: 10,
					flexDirection: "row",
					alignItems: "center",
				}}
			>
				<View style={{ flex: 1, marginLeft: 10 }}>
					<Text style={{ fontSize: 18 }}>{brand}</Text>
					<Text style={{ fontSize: 14 }}>{description}</Text>
					<Text style={{ fontSize: 14, fontWeight: "bold" }}>{price}kr</Text>

					<View style={{ flexDirection: "row", alignItems: "center" }}>
						<Button
							text="-"
							width={30}
							color={"orange"}
							onPress={() => handleQuantityChange(Math.max(quantity - 1, 0))}
							style={{ paddingHorizontal: 5 }}
						/>
						<Text style={{ paddingHorizontal: 5 }}>{quantity}</Text>
						<Button
							text="+"
							width={30}
							color={"orange"}
							onPress={() => handleQuantityChange(Math.max(quantity + 1, 0))}
							style={{ paddingHorizontal: 5 }}
						/>
					</View>
				</View>
			</View>
		</View>
	);
};

export default function ({ navigation }) {
	const { isDarkmode } = useTheme();
	const [historyData, setHistoryData] = useState([
		{
			image: require("./image1.jpg"),
			brand: "Spaghetti Bolognese",
			description: "Hearty pasta, rich meat sauce, savory herbs, Parmesan perfection",
			price: 110,
			quantity: 0,
		},
		{
			image: require("./image2.jpg"),
			brand: "Caesar Salad",
			description: "Crisp romaine, tangy Caesar, Parmesan, croutons - timeless salad delight",
			price: 90,
			quantity: 0,
		},
		{
			image: require("./image3.jpg"),
			brand: "Beef Bourguignon",
			description: "Luxurious beef stew, red wine, mushrooms, onions - French comfort",
			price: 260,
			quantity: 0,
		},
	]);

	const [totalPrice, setTotalPrice] = useState(0);

	const handleQuantityChange = (newQuantity, index) => {
		setHistoryData((prevData) => {
			const updatedData = prevData.map((item, i) => {
				if (i === index) {
					return {
						...item,
						quantity: newQuantity,
					};
				}
				return item;
			});

			const newTotalPrice = updatedData.reduce((acc, item) => {
				return acc + item.quantity * item.price;
			}, 0);

			setTotalPrice(newTotalPrice);
			return updatedData;
		});
	};

	const handleOrderPress = () => {
		navigation.navigate("Order", {
			selectedItems: historyData.filter((item) => item.quantity > 0),
		});
	};

	return (
		<Layout>
			<View style={{ flex: 1 }}>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						padding: 20,
					}}
				>
					<Text style={{ fontSize: 20 }}>Menu</Text>
				</View>
				<FlatList
					data={historyData}
					renderItem={({ item, index }) => (
						<MenuItem
							item={item}
							onQuantityChange={(newQuantity) => handleQuantityChange(newQuantity, index)}
							index={index}
						/>
					)}
					keyExtractor={(item) => item.brand}
				/>
				<View
					style={{
						position: "absolute",
						bottom: 70,
						right: 20,
						backgroundColor: isDarkmode ? "#333" : "white",
						padding: 10,
						borderRadius: 10,
						flexDirection: "row",
						alignItems: "center",
					}}
				>
					<Text style={{ color: isDarkmode ? "white" : "black" }}>
						Total Price: {totalPrice.toFixed(2)}kr
					</Text>
				</View>
				<Button
					style={{
						position: "absolute",
						bottom: 20,
						right: 20,
						padding: 10,
						borderRadius: 10,
						flexDirection: "row",
						alignItems: "center",
					}}
					text="Order"
					width={100}
					color={"orange"}
					onPress={handleOrderPress}
				/>
			</View>
		</Layout>
	);
}
