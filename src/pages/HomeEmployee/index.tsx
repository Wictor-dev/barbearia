import React, { useEffect, useMemo, useRef, useState } from "react";
import { ImageBackground, Image, Text, View } from "react-native";
import { Button } from "../../components/Button";
import { BottomSheetServicesList } from "../../components/ServicesList";
import { useAuth } from "../../context/authContext";
import { theme } from "../../globals/style/theme";
import { api } from "../../service/api";
import { Container, Title } from "./style";
import BottomSheet from '@gorhom/bottom-sheet';
import { Select } from "../../components/Select";

type Service = {
    id: number,
    created_at: string;
    updated_at: string;
    name: string;
    description: string;
    price: number;
}

type Schedule = {

}
export default function HomeEmployee() {
    const bottomSheetRefServices = useRef<BottomSheet>(null);
    const snapPointsServices = useMemo(() => ['60%'], []);
    const [services, setServices] = useState<Service[]>([])
    const [servicesEmployee, setServicesEmployee] = useState<Service[]>([])
    const [serviceChoiced, setServiceChoiced] = useState<Service>({} as Service)
    const [schedules, setSchedules] = useState()
    const { user } = useAuth()

    function handlleChoiceService(index: number) {
        setServiceChoiced(services[index])
        console.log(services[index])
    }
    function getServices() {
        const idUser = user?.id
        const TOKEN_REMOTE = '1|1ktTUwbSkCgQAl55TKbkng87iZC3p3XxduSLiCt5'

        async function fetchData() {
            const { data } = await api.get(`/service`, {
                "headers": {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${TOKEN_REMOTE}`
                }
            })

            setServices(data)
        }

        fetchData()
    }

    function getServicesToEmployee() {
        const idUser = user?.id
        const TOKEN_REMOTE = '1|1ktTUwbSkCgQAl55TKbkng87iZC3p3XxduSLiCt5'

        async function fetchData() {
            try {
                const { data } = await api.get(`/user/employees/${idUser}/services`, {
                    "headers": {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${TOKEN_REMOTE}`
                    }
                })

                setServicesEmployee(data)

            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }

    async function assignService(){
        if(serviceChoiced){
            try {
                const idUser = user?.id
                const TOKEN_REMOTE = '1|1ktTUwbSkCgQAl55TKbkng87iZC3p3XxduSLiCt5'
                const params = {serviceIds: [serviceChoiced?.id]}
                const { data } = await api.post(`/user/employees/${idUser}/add-services`, params, {
                    "headers": {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${TOKEN_REMOTE}`
                    }
                })
            } catch(error) {
                console.log(error)
            }
        }
    }

    useEffect(() => {
        getServicesToEmployee()

        if (servicesEmployee.length === 0){
            getServices()
        }
    }, [servicesEmployee])

    return (
        <Container>
            <Image source={require('../../assets/images/barber-logo2.png')} resizeMode='contain' style={{ width: '100%', height: 300 }} />
            {servicesEmployee.length === 0 &&
                <View style={{ alignItems: 'center' }}>
                    <Title>Você não possui nenhum serviço, gostaria de adicionar um agora?</Title>
                    <Select data={services} onChangeValue={handlleChoiceService} defaultMessage="Escolha um serviço" />
                    <View style={{ width: '90%', marginTop: 60 }}>
                        <Button title="ADICIONAR SERVIÇO" color={theme.colors.orange} textColor="#000" fill onPress={assignService} />

                    </View>
                </View>
            }

        </Container>
    )
}