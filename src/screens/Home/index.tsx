import React, { useState } from 'react';
import { Text, View, FlatList } from 'react-native';

import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { Profile } from '../../components/Profile';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';

import { styles } from './styles';

export function Home() {
    const [category, setCategory] = useState('');

    const appointments = [
        {
            id: '1',
            guild: {
                id: 1,
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
        }
    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    return (
        <View>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>

            <View>
                <CategorySelect
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />

                <View style={styles.content}>
                    <ListHeader
                        title="Partidas agendadas"
                        subtittle='Total 6'
                    />

                    <FlatList 
                    data={appointments}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <Appointment data={item} />
                    )}
                    />
                </View>
            </View>
        </View>
    )
}