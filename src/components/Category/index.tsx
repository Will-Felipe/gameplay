import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { SvgProps } from 'react-native-svg';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = RectButtonProps & {
    tittle: string;
    icon: React.FC<SvgProps>;
    checked?: boolean;
}

export function Category({ tittle, icon: Icon, checked = false, ...rest }: Props) {
    const { secondary80, secondary100 } = theme.colors;

    return (
        <RectButton {...rest} >
            <LinearGradient
                style={styles.container}
                colors={[secondary80, secondary100]}
            >
                <View style={[styles.content, { opacity: checked ? 1 : 0.4 }]}>
                    <View style={checked ? styles.checked : styles.check} />

                    <Icon
                        width={48}
                        height={48}
                    />

                    <Text style={styles.tittle}>{tittle}</Text>
                </View>
            </LinearGradient>
        </RectButton>
    )
}