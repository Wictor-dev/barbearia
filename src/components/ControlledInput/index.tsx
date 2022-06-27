import React from "react";
import { Input, InputProps } from "../Input";
import { Controller, Control, FieldError} from 'react-hook-form';
import { Error } from "./style";

type Props = InputProps & {
    name: string,
    control: Control<any>;
    error?: FieldError;
}
export function ControlledInput({name, control,error, ...rest} : Props){
    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Input
                        onChangeText={onChange}
                        value={value}
                        {...rest}
                    />
                )}
            />
            {error && <Error>{error.message}</Error>}
        </>
    )
}