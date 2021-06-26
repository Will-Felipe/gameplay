import React from "react";
import { Text, View } from 'react-native';

import { styles } from './styles';

type Props =  {
    title: string;
    subtittle: string;
}

export function ListHeader({title, subtittle} : Props) {
    return (
        <View style={styles.container} >
            <Text style={styles.tittle}>{ title }</Text>
            <Text style={styles.subtittle}>{subtittle}</Text>
        </View>
    )
}