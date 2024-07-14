import React from 'react';
import { View } from 'react-native';
import { tsPropertySignature } from "@babel/types"

const ItemSection = () => {
    return <View style={Styles.viewStyle}>{props.children}</View>
};

const style = {
    viewStyle:{
        borderBottomWidth: 1,
        borderColor: "gainsbro",
        flexDirection: "row",
        justifyContent: "flex-start",
        padding: 5
    }
};

export default ItemSection; 