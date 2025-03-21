import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from './Dropdown'
import { DropdownItem } from './DropdownItem'
import { DropdownLabel } from './DropdownLabel'
import { Button } from '../Button/Button'

const meta: Meta<typeof Dropdown> = {
    component: Dropdown
}

export default meta

type Story = StoryObj<typeof Dropdown>

export const Default: Story = {
    args: {
        trigger: <Button size='md'>Admin</Button>,
        children: (
            <>
                <DropdownLabel>Account</DropdownLabel>
                <DropdownItem>Profile</DropdownItem>
                <DropdownItem>config</DropdownItem>
                <DropdownItem>Logout</DropdownItem>
            </>
        )
    }
}