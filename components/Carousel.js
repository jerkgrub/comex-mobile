 
 import {
	FlatList,
	Image,
	StyleSheet,
	Text,
	View,
	Dimensions,
	LogBox,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

const Carousel = () => {
	const flatlistRef = useRef();
	// Get Dimesnions
	const screenWidth = Dimensions.get("window").width;
	const [activeIndex, setActiveIndex] = useState(0);

	// Auto Scroll

	useEffect(() => {
		let interval = setInterval(() => {
			if (flatlistRef.current) {
				let nextIndex = activeIndex === carouselData.length - 1 ? 0 : activeIndex + 1;
				flatlistRef.current.scrollToIndex({
					index: nextIndex,
					animated: true,
				});
				setActiveIndex(nextIndex);
			}
		}, 2000);
	
		return () => clearInterval(interval);
	}, [activeIndex]);
	

	const getItemLayout = (data, index) => ({
		length: screenWidth,
		offset: screenWidth * index,
		index: index,
	});
	// put pics here
	const carouselData = [
		{
			id: "01",
			image: require("../assets/images/Carousel/slider_1.jpg"),
		},
		{
			id: "02",
			image: require("../assets/images/Carousel/slider_2.jpg"),
		},
		{
			id: "03",
			image: require("../assets/images/Carousel/sslider_3.jpg"),
		},
		{
			id: "04",
			image: require("../assets/images/Carousel/slider_4.jpg"),
		},
		{
			id: "05",
			image: require("../assets/images/Carousel/slider_5.jpg"),
		},
		{
			id: "06",
			image: require("../assets/images/Carousel/sslider_6.jpg"),
		},
	];

	//  Display Images // UI
	const renderItem = ({ item, index }) => {
		return (
			<View>
				<Image
					source={item.image}
					style={{ height: 270, width: screenWidth }}
				/>
			</View>
		);
	};

	// Handle Scroll
	const handleScroll = (event) => {
		const scrollPosition = event.nativeEvent.contentOffset.x;
		const index = Math.round(scrollPosition / screenWidth);
		setActiveIndex(index);
	  };

	// Render Dot Indicators
	const renderDotIndicators = () => {
		return carouselData.map((dot, index) => {
			// if the active index === index

			if (activeIndex === index) {
				return (
					<View
						style={{
							backgroundColor: "#2a2aa5",
							height: 7,
							width: 7,
							borderRadius: 5,
							marginHorizontal: 6,
						}}
					></View>
				);
			} else {
				return (
					<View
						key={index}
						style={{
							backgroundColor: "gray",
							height: 7,
							width: 7,
							borderRadius: 5,
							marginHorizontal: 6,
						}}
					></View>
				);
			}
		});
	};

	return (
		<View>
			<FlatList
				data={carouselData}
				ref={flatlistRef}
				getItemLayout={getItemLayout}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				horizontal={true}
				pagingEnabled={true}
				onScroll={handleScroll}
			/>

			<View
				style={{
					flexDirection: "row",
					justifyContent: "center",
					marginTop: 10,
				}}
			>
				{renderDotIndicators()}
			</View>
		</View>
	);
};

export default Carousel;

const styles = StyleSheet.create({});