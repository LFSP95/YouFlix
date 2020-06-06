import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';

import subjects from '../Data/Subjects.json';
import Styles from './style';
import Logo from '../../assets/logo.png';

export default function Home({ navigation }) {

    return (
        <View style={Styles.body}>
            <Image source={Logo} style={Styles.logo} />
            <Text style={Styles.title}>DISCIPLINAS</Text>
            <FlatList style={Styles.list} data={subjects} keyExtractor={subject => subject.id} renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => { navigation.navigate('Subjects', { id: item.id }); }} style={Styles.categoryButton}>
                        <Text style={Styles.titleButtonCategory}>{ item.nameSubjects }</Text>
                    </TouchableOpacity>
                );
            }} />
        </View>
    );
}