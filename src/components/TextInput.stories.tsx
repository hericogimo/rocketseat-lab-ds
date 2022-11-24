import { Meta, StoryObj } from '@storybook/react';
import { TextInput, TextInputInputProps, TextInputRootProps } from "./TextInput";
import { Envelope } from 'phosphor-react'

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: [
            <TextInput.Icon>
                <Envelope />
            </TextInput.Icon>,
            <TextInput.Input placeholder='Informe o seu email...'/>
        ]
    },
    argTypes: {}
} as Meta<TextInputRootProps>

export const Default: StoryObj = {
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
}

export const WithoutIcon: StoryObj = {
    args: {
        children: <TextInput.Input placeholder='Informe o seu email...'/>
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
}