import React from 'react';
import { ElectricityBox, TitleElectricity, WrapperElectricity, NumberElectricity, UnitElectricity } from './Electricity.styled';

export const Electricity = () => {
    return (
        <ElectricityBox>
            <TitleElectricity>Electricity we produced for all time</TitleElectricity>
            <WrapperElectricity>
                <NumberElectricity>1.134.147.814</NumberElectricity>
                <UnitElectricity>kWh</UnitElectricity>
            </WrapperElectricity>
        </ElectricityBox>
    )
}