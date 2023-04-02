const { Input } = require("@rneui/themed")
const { default: Sliders } = require("components/Slider")
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types'; // ES6
import { Button, Header as HeaderRNE, Icon } from '@rneui/themed';
import tw from 'twrnc';



const EmiCalculator = (props) => {
    // render() {

    console.log('Rendering...')
    const [loanAmount, setLoanAmount] = useState(100000);
    const [roi, setRoi] = useState(7);
    const [tenure, setTenure] = useState(6);

    const handleChange = (event) => {
        if (!isNaN(event.target.value)) {
            setLoanAmount(event.target.value);
        }
    }

    const handleRoiChange = (changedRoi) => {
        setRoi(changedRoi);
    }


    return (<>
        <View>
            <Input
                placeholder={props.amountPlaceholder}
                onChange={handleChange}
                value={loanAmount.toString()}
                leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
            />
        </View>
        <View>
            <Text style={styles.label}>Rate of interest</Text>
            <Sliders
                initialValue={roi}
                handleChange={handleRoiChange}
                maxValue={100} />
        </View>
        <View>
            <Text style={styles.label}>Tenure (in months)</Text>
            <Sliders
                initialValue={tenure}
                handleChange={setTenure}
                maxValue={600} />
        </View>

        <View style={tw`items-center`}>
            <Button
                title="Calculate"
                buttonStyle={{
                    backgroundColor: 'rgba(78, 116, 289, 1)',
                    borderRadius: 3,
                }}
                style={tw`my-10 mx-50 w-200`}
            />
        </View>
    </>)
    //}
}

EmiCalculator.propTypes = {
    amountPlaceholder: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    label: {
        fontWeight: 'bold',
        paddingLeft: 20
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
        borderColor: 'grey',
        borderWidth: 5
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#397af8',
        marginBottom: 20,
        width: '100%',
        paddingVertical: 15,
    },
    heading: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
    },
    subheaderText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default EmiCalculator;