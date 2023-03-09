import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Dimensions, Platform, Animated, Vibration, Alert } from 'react-native';
import { PinchGestureHandler, PanGestureHandler, TapGestureHandler, State, GestureHandlerRootView } from 'react-native-gesture-handler';


const { width, height } = Dimensions.get('window');

interface inputProps {
    ImageUrl: string,
}

const IosZoomImage = ({ImageUrl}: inputProps)=>{
    const [focalPoint, setFocalPoint] = useState({ x: 0, y: 0 });
    const [scale, setScale] = useState(1);
    const [sizeImage, setSizeImage ] = useState({x: 0, y: height});
    const [loading, setLoading] = useState(true);

    let _lastOffset = { x: 0, y: 0 };
    let _translateX = useRef(new Animated.Value(0));
    let _translateY = useRef(new Animated.Value(0));

    const _onPanGestureEvent = Animated.event(
        [
          {
            nativeEvent: {
              translationX:  _translateX.current,
              translationY: _translateY.current,
            },
          },
        ],
        { useNativeDriver: false }
    );

    const _onPanHandlerStateChange = (event: { nativeEvent: { state: number; translationX: any; translationY: any; }; }) => {

        if (scale === 1 ){
            _translateX.current.setValue(0);
            _translateY.current.setValue(0);
        }
        if (event.nativeEvent.state === State.END ) {
            const { translationX, translationY} = event.nativeEvent;
            _lastOffset.x = translationX - (width / 2) / scale;
            _lastOffset.y = translationY - (height / 2) * scale;
            _lastOffset.x > -50 * Math.abs(scale) / width && _lastOffset.y < 50 * Math.abs(scale) && _translateX.current.setValue(_lastOffset.x);
            _lastOffset.y > -20 * Math.abs(scale) / width && _lastOffset.y < 20 * Math.abs(scale) && _translateY.current.setValue(_lastOffset.y);
        }
    };


    const onDoubleTap = ({ nativeEvent }:any) => {
        if (scale === 1){
            _translateX.current.setValue(0);
            _translateY.current.setValue(0);
        }
        setFocalPoint({
        x: -( (nativeEvent.absoluteX - (sizeImage.x / 2)) / scale),
        y: -( (nativeEvent.absoluteY - (height / 2)) * scale),
        });
        setScale(scale === 2 ? 1 : 2);
    };

    const onGesturePinch = ({ nativeEvent }:any)=>{
        if (scale){
            _translateX.current.setValue(0);
            _translateY.current.setValue(0);
        }
        setScale( nativeEvent.scale > 10 ? 10 : nativeEvent.scale && nativeEvent.scale < 1 ? 1 : nativeEvent.scale );
        if (nativeEvent.scale < 1 || nativeEvent.scale > 5){
            Vibration.vibrate();
        }
    };

    // useEffect(()=>{
    //     setFocalPoint({x: 0, y: 0});
    //     //setScale(1);
    //     _translateX.current.setValue(0);
    //     _translateY.current.setValue(0);
    // },[interval]);


    return (
        <View style={styles.container}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <TapGestureHandler
                numberOfTaps={2}
                onActivated={onDoubleTap}>
                    <PinchGestureHandler
                    onGestureEvent={onGesturePinch}
                    onHandlerStateChange={({ nativeEvent }) => {
                        setFocalPoint({
                        x: -(nativeEvent.focalX - (sizeImage.x / 2)) / scale,
                        y: -(nativeEvent.focalY - (height / 2)) * scale,
                        });
                    }}
                    >
                        {/* <PanGestureHandler
                        onGestureEvent={_onPanGestureEvent}
                        onHandlerStateChange={_onPanHandlerStateChange}
                        enabled={scale === 1 ? false : true}
                        minDist={10}
                        > */}
                            <Animated.View
                            style={
                                {transform: [
                                    {translateX: _translateX.current.interpolate({
                                        inputRange: [0.5, 2],
                                        outputRange: [0, 3],
                                    })},
                                    {translateY: _translateY.current.interpolate({
                                        inputRange: [0.5, 2],
                                        outputRange: [0, 3],
                                    })},
                            ]}}>
                                <Animated.Image
                                    resizeMode="contain"
                                    source={{uri:ImageUrl}}
                                    style={[styles.image,
                                    // {width: width, height: width},
                                        {transform: [{translateX: -focalPoint.x}, {translateY: -focalPoint.y}, { scale: scale }, {translateX: focalPoint.x}, {translateY: focalPoint.y}]},
                                    ]}
                                    onLayout={({ nativeEvent }) =>
                                    setFocalPoint({
                                    x: nativeEvent.layout.width / 2,
                                    y: nativeEvent.layout.height / 2,
                                    })}
                                    onLoad={(e) => {
                                        setSizeImage({x:e.nativeEvent.source.width, y: e.nativeEvent.source.height });
                                    }}
                                    onLoadEnd={()=>{setLoading(false);}}
                                />
                            </Animated.View>
                        {/* </PanGestureHandler> */}
                    </PinchGestureHandler>
                </TapGestureHandler>
            </GestureHandlerRootView>
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
