import * as React from "react";
import { Button } from "@rneui/base";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default () => {
    return (
        <Button
            buttonStyle={{ width: 150 }}
            containerStyle={{ margin: 5 }}
            disabledStyle={{
                borderWidth: 2,
                borderColor: "#00F"
            }}
            disabledTitleStyle={{ color: "#00F" }}
            icon={<MaterialCommunityIcons name="react" size={15} color="#0FF" />}
            // iconContainerStyle={{ background: "#000" }}
            loadingProps={{ animating: true }}
            loadingStyle={{}}
            onPress={() => alert("click")}
            title="Hello"
            titleProps={{}}
            titleStyle={{ marginHorizontal: 5 }}
        />
    );
}