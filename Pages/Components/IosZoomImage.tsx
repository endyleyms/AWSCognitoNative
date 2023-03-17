import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Dimensions, Platform, Animated, PanResponder } from 'react-native';


const { width, height } = Dimensions.get('window');

interface inputProps {
    ImageUrl: string,
}

const IosZoomImage = ({ ImageUrl }: inputProps) => {
    const pan = useRef(new Animated.ValueXY()).current;
    const [translate, setTranlate] = useState({ x: pan.x, y: pan.y });
    const focalPoint = useRef(new Animated.ValueXY()).current;
    const scale = useRef(new Animated.Value(1)).current;
    const [sizeImage, setSizeImage ] = useState({x: 0, y: height});

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gesture) => {
                const touches = event.nativeEvent.touches;
                if (touches.length === 2) { //pinch gesture
                    const scaleMovement = 200;
                    const dx = touches[1].pageX - touches[0].pageX;
                    const dy = touches[1].pageY - touches[0].pageY;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const initalScale = Math.abs(distance / scaleMovement);
                    const currentScale = scale._value;
                    const newScale = Math.abs(currentScale + initalScale - 1);
                    if (scale._value < 1){
                        scale.setValue(1)
                        console.log('scaleOne', scale)
                        // pan.setValue({x: 0, y:0});
                        // focalPoint.setValue({x:0, y:0})
                        console.log('pan scale 1', pan, 'focalpoint scale 1', focalPoint)
                    }else if(scale._value > 20 && newScale > 20){
                        scale.setValue(20)
                        console.log('scaletwenty', scale)
                    }else if (newScale > 1 && newScale < 20){
                        scale.setValue(newScale)
                        console.log('new scale', scale)
                    }
                    const centerPoint = { // different focal point to pinch to zoom
                        x: -((event.nativeEvent.touches[0].pageX + event.nativeEvent.touches[1].pageX - (width)) / 2),
                        y: -((event.nativeEvent.touches[0].pageY + event.nativeEvent.touches[1].pageY - (height)) / 2),
                    };
                    const newFocalPoint = {
                        x: centerPoint.x,
                        y: centerPoint.y
                    };
                    focalPoint.setValue(newFocalPoint)
                } else if (scale._value >= 2 && touches.length === 1) { //Pan gesture
                    Animated.event([null, { dx: pan.x, dy: pan.y }], { useNativeDriver: false })(event, { ...gesture, dx: gesture.dx / scale._value, dy: gesture.dy / scale._value });
                }
            },
            onPanResponderRelease: () => {
                pan.extractOffset();
                //scale.extractOffset();
            },
        }),
    ).current;



    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    {
                        transform: [
                            {
                                translateX: translate.x.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 3],
                                })
                            },
                            {
                                translateY: translate.y.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 3],
                                })
                            },
                        ]
                    },
                ]}
            >
                <Animated.Image
                    resizeMode="contain"
                    source={{ uri: ImageUrl }}
                    style={[styles.image,
                    {
                        transform: [
                            { translateX: focalPoint.x },
                            { translateY: focalPoint.y },
                            { scale: scale },
                            // { translateX: focalPoint.x },
                            // { translateY: focalPoint.y },
                        ]
                    },
                    ]}
                    {...panResponder.panHandlers}
                onLoad={(e) => {
                    setSizeImage({x:e.nativeEvent.source.width, y: e.nativeEvent.source.height });
                }}
                // onLayout={({ nativeEvent }) =>
                // focalPoint.setValue({
                // x: nativeEvent.layout.width / 2,
                // y: nativeEvent.layout.height / 2,
                // })}
                // onLoadEnd={()=>{setLoading(false);}}
                />
            </Animated.View>
        </View>
    );
};

export default IosZoomImage;

const styles = StyleSheet.create({
    image: {
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        flexBasis: '100%',
        backgroundColor: '#0000',
        // backgroundColor:'blue',

    },
    progressCircle: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -25 }, { translateY: -25 }],
    },
    imageZo0m: {
        position: 'absolute',
        left: Platform.OS === 'android' ? 20 : 0,
        backgroundColor: '#000',
    },
    container: {
        //backgroundColor:'#000',
        width: width,
        height: height,
        overflow: 'hidden',
    },
});
