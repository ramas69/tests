
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
    title:"Atoms/Button",
    component:Button,
    tags:["autodocs"],
    parameters:{
        docs:{
            description:{
                component:"Button is a component that allows you to create a button"
            }
        }
    },
    argTypes: {
        text: {
            description: 'Le texte affiché dans le bouton',
            control: 'text',
            defaultValue: 'Valider'
        },
        variant: {
            description: 'Le style visuel du bouton',
            control: 'select',
            options: ['primary', 'secondary', 'danger'],
            defaultValue: 'primary'
        },
        handleClick: {
            description: 'Fonction appelée lors du clic sur le bouton',
            action: 'clicked'
        }
    }
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary:Story = {
    args:{
        text:"Valider",
        handleClick:()=>{},
        variant: "primary"
    }
}

export const Secondary:Story = {
    args:{
        text:"Valider",
        handleClick:()=>{},
        variant:"secondary"
    }
}

export const Danger:Story = {
    args:{
        text:"Valider",
        handleClick:()=>{},
        variant:"danger"
    }
}