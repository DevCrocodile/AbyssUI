import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'

const meta: Meta<typeof Avatar> = {
    component: Avatar
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Default: Story = {
    args: {

    }
}

export const Small: Story = {
    args: {
        size: 'sm',
        userName: 'pepe avila',
    }
}

export const Medium: Story = {
    args: {
        size: 'md',
        userName: 'pepe avila',
    }
}

export const Large: Story = {
    args: {
        size: 'lg',
        userName: 'pepe avila',
    }
}

export const WithImage: Story = {
    args: {
        size: 'lg',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxVmcF2QdfnGq52IL0Bafe2sGtn98QvzdJHg&s',
        userName: 'pepe avila',
    }
}