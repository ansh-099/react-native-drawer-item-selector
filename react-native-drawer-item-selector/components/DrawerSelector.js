import React, { useState, useEffect } from 'react';
import { View, Dimensions, TouchableOpacity, FlatList, Text, Modal } from 'react-native';

export default ({ index, setIndex, setDrawerSelector = () => { }, backgroundColor = '#2c2c2e', selector = 'dot', selectorColor = 'red', itemTextStyle = { color: '#ffffff' }, itemHeight = 60, itemContainerStyle = {}, seperatingLineColor = '#000000', title = 'Title', titleTextStyle = {}, titleContainerStyle = {}, data = [['1', 'Item 1', () => { }], ['2', 'Item 2', () => { }]], animationType = 'slide' }) => {

    const [modalVisible, setmodalVisible] = useState(false);
    setDrawerSelector(() => {
        setmodalVisible(true)
    });

    return (
        <View>
            <Modal animationType={animationType} transparent={true} visible={modalVisible} >
                <View style={{ width: Dimensions.get("window").width, position: 'absolute', bottom: 0, backgroundColor: backgroundColor }}>
                    <TouchableOpacity onPress={() => setmodalVisible(false)} style={{ flex: 1, backgroundColor: 'white', height: itemHeight, justifyContent: 'center', borderBottomWidth: 0.5, borderBottomColor: seperatingLineColor, ...titleContainerStyle }}>

                        <Text style={{ fontSize: 18, alignSelf: 'center', color: 'red', fontWeight: 'bold', alignContent: 'center', ...titleTextStyle }}>
                            {title}
                        </Text>
                    </TouchableOpacity>
                    <FlatList
                        data={data}
                        keyExtractor={item => item[0]}
                        renderItem={({ item, index: list_index }) => {
                            return (
                                <TouchableOpacity onPress={() => {
                                    setIndex(list_index);
                                    item[2]();
                                }} style={{ height: itemHeight, flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, borderBottomWidth: 0.5, borderBottomColor: seperatingLineColor, ...itemContainerStyle }}>
                                    <Text style={{ fontSize: 16, ...itemTextStyle }}>
                                        {item[1]}
                                    </Text>
                                    {index == list_index && selector == 'square' ? <View style={{ backgroundColor: selectorColor, height: 10, width: 10 }} /> : null}
                                    {index == list_index && selector != 'square' ? <View style={{ backgroundColor: selectorColor, height: 10, width: 10, borderRadius: 10 }} /> : null}

                                </TouchableOpacity>
                            );
                        }}
                    />

                </View>
            </Modal>
        </View>
    );
};