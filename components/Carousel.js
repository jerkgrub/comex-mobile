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
	const screenWidth = Dimensions.get("window").width;
	const [activeIndex, setActiveIndex] = useState(0);
  
	useEffect(() => {
	  let interval = setInterval(() => {
		if (flatlistRef.current) {
		  let nextIndex =
			activeIndex === carouselData.length - 1 ? 0 : activeIndex + 1;
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
  
	const renderItem = ({ item }) => {
	  return (
		<View>
		  <Image source={item.image} style={{ height: 270, width: screenWidth }} />
		</View>
	  );
	};
  
	const handleScroll = (event) => {
	  const scrollPosition = event.nativeEvent.contentOffset.x;
	  const index = Math.round(scrollPosition / screenWidth);
	  setActiveIndex(index);
	};
  
	const renderDotIndicators = () => {
	  return carouselData.map((dot, index) => (
		<View
		  key={index}
		  style={{
			backgroundColor: activeIndex === index ? "#2a2aa5" : "gray",
			height: 7,
			width: 7,
			borderRadius: 5,
			marginHorizontal: 6,
		  }}
		/>
	  ));
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
  