import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Slider, Text, Icon } from '@rneui/themed';
import PropTypes from 'prop-types'; // ES6

const Sliders = (props) => {
    const [value, setValue] = useState(props.initialValue);

    const interpolate = (start, end) => {
        let k = (value - 0) / 10; // 0 =>min  && 10 => MAX
        return Math.ceil((1 - k) * start + k * end) % 256;
    };

    const color = () => {
        let r = interpolate(255, 0);
        let g = interpolate(0, 255);
        let b = interpolate(0, 0);
        return `rgb(${r},${g},${b})`;
    };

    const handleValueChange = (changedValue) => {
        props.handleChange(changedValue);
        setValue(changedValue);
    }

    return (
        <>
            <View style={[styles.contentView]}>
                <Slider
                    value={value}
                    onValueChange={handleValueChange}
                    maximumValue={props.maxValue ?? 100}
                    minimumValue={0}
                    step={1}
                    allowTouchTrack
                    trackStyle={{ height: 5, backgroundColor: 'transparent' }}
                    thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
                    thumbProps={{
                        children: (
                            <View style={{
                                backgroundColor: 'bisque',
                                alignContent: 'center',
                                alignItems: 'center',
                                borderRadius: 5
                            }}>
                                {/* <Icon
                                    name="heartbeat"
                                    type="font-awesome"
                                    size={20}
                                    reverse
                                    containerStyle={{ bottom: 20, right: 20 }}
                                    color={color()}
                                /> */}
                                <Text style={{ fontWeight: 'bold', color: 'teal', fontSize: 20, bottom: 20, right: 20 }}>
                                    {value}
                                </Text>
                            </View>
                        ),
                    }}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    contentView: {
        padding: 20,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    verticalContent: {
        padding: 20,
        flex: 1,
        flexDirection: 'row',
        height: 500,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    subHeader: {
        backgroundColor: "#2089dc",
        color: "white",
        textAlign: "center",
        paddingVertical: 5,
        marginBottom: 10
    }
});

Sliders.propTypes = {
    initialValue: PropTypes.number.isRequired,
    handleChange: PropTypes.func,
    maxValue: PropTypes.number
}

export default Sliders;