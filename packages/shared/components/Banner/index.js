import React, { useState, useRef, useCallback } from "react";
import {
  View,
  Dimensions,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

const BannerWidth = Dimensions.get("window").width;

const Banner = ({
  dataBanners,
  paginationInactiveDotColor,
  paginationDotColor,
}) => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const getImageUri = useCallback((image) => {
    if (image && image.urls && image.urls[3]) {
      return image.urls[4].url;
    }
    return image.file;
  }, []);

  const _renderItem = (slide, index) => {
    let image = null;
    if (slide.item) image = getImageUri(slide.item.image);
    else image = getImageUri(slide.image);

    return (
      <View key={index}>
        <TouchableWithoutFeedback onPress={() => {}}>
          <View>
            <Image
              style={{
                backgroundColor: "#FFFFFF",
                width: BannerWidth,
                height: "100%",
              }}
              source={{ uri: image }}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  };

  return (
    <>
      <Carousel
        ref={carouselRef}
        data={dataBanners}
        loop
        layout={"default"}
        autoplay
        renderItem={_renderItem}
        sliderWidth={BannerWidth}
        itemWidth={BannerWidth}
        firstItem={0}
        onSnapToItem={(index) => setActiveIndex(index)}
      />

      <View style={{ marginTop: -40, marginBottom: 40 }}>
        <Pagination
          dotsLength={dataBanners.length}
          activeDotIndex={activeIndex}
          containerStyle={{ paddingVertical: 8 }}
          dotColor={paginationDotColor}
          dotStyle={{
            width: 8,
            height: 8,
            borderRadius: 4,
            marginHorizontal: 8,
          }}
          inactiveDotColor={paginationInactiveDotColor}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          carouselRef={carouselRef}
          tappableDots={!!carouselRef}
        />
      </View>
    </>
  );
};

export default Banner;
