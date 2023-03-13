import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Dimensions, Platform, Animated, Vibration, Alert, PanResponder } from 'react-native';
import { PinchGestureHandler, PanGestureHandler, TapGestureHandler, State, GestureHandlerRootView } from 'react-native-gesture-handler';


const { width, height } = Dimensions.get('window');

interface inputProps {
    ImageUrl: string,
}

const IosZoomImage = ({ImageUrl}: inputProps)=>{
    const pan = useRef(new Animated.ValueXY()).current;
    const scale = useRef(new Animated.Value(1)).current;
    const lastScale = useRef(1);
    const onPinchGestureEvent = Animated.event(
        [{ nativeEvent: { scale: scale } }],
        { useNativeDriver: true }
    );
    const onPanResponderRelease = () => {
        lastScale.current *= scale._value;
        scale.setValue(1);
    };

    const panResponder = useRef(
        PanResponder.create({

            onMoveShouldSetPanResponder: (event, gesture) => {
                return gesture.dx !== 0 && gesture.dy !== 0;
            },
            onPanResponderMove: (event, gesture) => {
                const touches = event.nativeEvent.touches;
                if (touches.length === 2) {
                const dx = touches[1].pageX - touches[0].pageX;
                const dy = touches[1].pageY - touches[0].pageY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                scale.setValue(distance / 200);
                pan.setValue({
                    x: gesture.dx,
                    y: gesture.dy,
                });
                }
            },
            onPanResponderRelease: onPanResponderRelease,
            onPanResponderTerminate: onPanResponderRelease,
        })
      ).current;

      const panResponder2 = PanResponder.create({
        onMoveShouldSetPanResponder: (event, gesture) => {
            return gesture.dx !== 0 && gesture.dy !== 0;
        },
        onPanResponderMove: Animated.event(
          [
            null,
            { dx: pan.x, dy: pan.y }
          ],
          { useNativeDriver: false }
        ),
        onPanResponderRelease: () => {
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false
          }).start();
        }
      });



    return (
        <View style={styles.container}>
            {/* <Animated.View
            {...panResponder2.panHandlers}
            style={{
                transform: [
                  { translateX: pan.x },
                  { translateY: pan.y },
                ]
            }}
            > */}
                <Animated.Image
                    resizeMode="contain"
                    source={{uri:ImageUrl}}
                    style={[styles.image,
                        {transform: [
                            { scale: scale },
                            { translateX: pan.x },
                            { translateY: pan.y },
                        ]},
                    // {width: width, height: width},
                        //{transform: [{translateX: -focalPoint.x}, {translateY: -focalPoint.y}, { scale: scale }, {translateX: focalPoint.x}, {translateY: focalPoint.y}]},
                    ]}
                    {...panResponder.panHandlers}
                    {...panResponder2.panHandlers}
                    // onLayout={({ nativeEvent }) =>
                    // setFocalPoint({
                    // x: nativeEvent.layout.width / 2,
                    // y: nativeEvent.layout.height / 2,
                    // })}
                    // onLoad={(e) => {
                    //     setSizeImage({x:e.nativeEvent.source.width, y: e.nativeEvent.source.height });
                    // }}
                    // onLoadEnd={()=>{setLoading(false);}}
                />
            {/* </Animated.View> */}
        </View>
    );
};

export default IosZoomImage;

const styles = StyleSheet.create({
    image:{
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        flexBasis: '100%',
        backgroundColor: '#0000',
        // backgroundColor:'blue',

    },
    progressCircle:{
        position:'absolute',
        top: '50%',
        left: '50%',
        transform: [{translateX: -25}, {translateY:-25}],
    },
    imageZo0m:{
        position:'absolute',
        left:Platform.OS === 'android' ? 20 : 0,
        backgroundColor: '#000',
    },
    container:{
        //backgroundColor:'#000',
        width: width,
        height: height,
        overflow: 'hidden',
    },
});
