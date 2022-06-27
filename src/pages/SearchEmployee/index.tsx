import React, { useEffect, useState } from 'react';
import { FlatList, ImageBackground, View } from 'react-native';
import { CardEmployer } from '../../components/CardEmployer';
import { Input } from '../../components/Input';
import { api } from '../../service/api';
import { Container } from './SearchEmployee';

const mockData = [

        {
            id: 1,
            name: 'wictor'
        },
        {
            id: 2,
            name: 'Ezek'
        }

    ]
type Employees = {
    id: number;
    name: string;
}

type SearchEmployeeProps = {
    employees: Employees[]
}
export function SearchEmployee(){
    const TOKEN_REMOTE = '1|1ktTUwbSkCgQAl55TKbkng87iZC3p3XxduSLiCt5'
    const [employees, setEmployees] = useState<Employees[]>(mockData) 
    const fetchData = async () => {
        try {
            const {data} = await api.get('/user/employees/', {
                "headers": {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${TOKEN_REMOTE}`
                }
            }) 
            console.log(data)
            setEmployees(data)
        } catch (e){
            console.log(e)
        }
    }

    useEffect(() => {fetchData()},[])
    return (
        <ImageBackground source={require('../../assets/images/backgroundStreet.png')} resizeMode='cover' style={{flex: 1}}>
            <Container>
                <Input placeholder='Pesquisar barbeiro' style={{ marginBottom: 60 }} />
                {employees?.map((el) => {
                    return (
                        <FlatList
                            data={mockData}
                            renderItem={({index, item}) => (
                                <CardEmployer key={item.id} name={item.name}/>
                            )}
                        />
                    )
                })}
                
                {/* <CardEmployer /> */}
            </Container>
        </ImageBackground>
    )
}