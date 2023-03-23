import React, { useEffect, useRef, } from 'react';
import { View, StyleSheet, Dimensions, Platform, Animated, PanResponder } from 'react-native';


const { width, height } = Dimensions.get('window');

interface inputProps {
    ImageUrl: string,
    setBorderImage: CallableFunction,
    //setPanBorder: any
}

const IosZoomImage = ({ ImageUrl, setBorderImage }: inputProps) => {
    const pan = useRef(new Animated.ValueXY()).current;
    const focalPoint = useRef(new Animated.ValueXY()).current;
    const scale = useRef(new Animated.Value(1)).current;

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gesture) => {
                const touches = event.nativeEvent.touches;
                if (touches.length === 2) { //pinch gesture
                    const scaleMovement = 200;
                    const distance = Math.sqrt(
                        Math.pow(event.nativeEvent.touches[0].pageX - event.nativeEvent.touches[1].pageX, 2)
                        + Math.pow(event.nativeEvent.touches[0].pageY - event.nativeEvent.touches[1].pageY, 2)
                    );
                    const initalScale = Math.abs(distance / scaleMovement);
                    const currentScale = scale._value;
                    const newScale = Math.abs(currentScale + initalScale - 1);

                    if (scale._value < 1 || newScale < 1) {
                        scale.setValue(1)
                    } else if (scale._value > 20 && newScale > 20) {
                        scale.setValue(20)
                    } else if (newScale >= 1 && newScale < 20) {
                        scale.setValue(newScale)
                        const centerPoint = { // different focal point to pinch to zoom
                            x: -(((event.nativeEvent.touches[0].pageX + event.nativeEvent.touches[1].pageX) / 2) - width / 2),
                            y: -((event.nativeEvent.touches[0].pageY - event.nativeEvent.touches[1].pageY) / 2)
                        }
                        const newFocalPoint = {
                            x: (((centerPoint.x) * newScale) / scale._value),
                            y: centerPoint.y / newScale
                        };
                        focalPoint.setValue(newFocalPoint)
                    }else if( pan.x._value !==0 && pan.y._value !== 0 && newScale === 1){
                        pan.setValue({ x: 0, y: 0 });
                    }
                } else if (scale._value >= 2 && touches.length === 1) { //Pan gesture
                    Animated.event([null, { dx: pan.x, dy: pan.y }], { useNativeDriver: false })(event, { ...gesture, dx: gesture.dx / scale._value, dy: gesture.dy / scale._value });
                }
            },
            onPanResponderRelease: () => {
                pan.extractOffset();
            },
        }),
    ).current;

    Animated.parallel([
        Animated.timing(focalPoint, {
            toValue: focalPoint.y,
            duration: 100,
            useNativeDriver: false,
        }),
        Animated.timing(focalPoint, {
            toValue: focalPoint.y,
            duration: 100,
            useNativeDriver: false,
        }),
      ]).start();

    // pan.addListener((pan) => {
    //     console.log('pan listener', pan.x);
    //     // setPanBorder(pan.x)
    // })
    // scale.addListener((scale)=>{
    //     console.log('scale listener', scale.value)
    //     // setScaleBorder(scale.value)
    // })

    // useEffect(()=>{
    //     console.log('useEffect')
    //     if(translate.x._value <= -(((width * scale._value) - (width))/ 6) || translate.x._value >= ((width * scale._value) - (width)) / 6 || scale._value === 1){
    //         setBorderImage(true);
    //     }else{
    //         setBorderImage(false);
    //     }

    // },[translate, scale])

    useEffect(() => {
        let newScale = scale._value
        let newPan = {x:0, y:0}
        const listenerScale = scale.addListener((scale) => {
            newScale = scale.value
        });

        const listenerPan = pan.addListener((pan) => {
            newPan = pan
        });
        //newPan.x === -((width *  newScale) - (width) / 6 ) || newPan.x === ((width * newScale) - (width) / 6 ) ||
        if( newScale !== 1 && newPan.x < 0 && newPan.x > 0){
          setBorderImage(false);
        }else {
          setBorderImage(true);
        }
        return () => {
            //pan.removeListener(listenerPan);
            scale.removeListener(listenerScale)
            pan.removeListener(listenerPan)
        };
      }, [])


    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    {
                        transform: [
                            {
                                translateX: pan.x.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 3],
                                })
                            },
                            {
                                translateY: pan.y.interpolate({
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
                            { scale: scale },
                            { translateX: focalPoint.x },
                            { translateY: focalPoint.y },
                        ]
                    },
                    ]}
                    {...panResponder.panHandlers}
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
