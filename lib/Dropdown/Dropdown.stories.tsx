import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from './Dropdown'
import { DropdownItem } from './DropdownItem'
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
                <DropdownItem>config</DropdownItem>
                <DropdownItem>config</DropdownItem>
                <DropdownItem>config</DropdownItem>
            </>
        )
    }
}