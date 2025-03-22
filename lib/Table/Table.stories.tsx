import type { Meta, StoryObj } from '@storybook/react'
import { Table } from './Table'

const meta: Meta<typeof Table> = {
    component: Table
}

export default meta

type Story = StoryObj<typeof Table>

export const Default: Story = {
    args: {
        columns: [
            {
                key: "Nombre",
                element: <span>Nombre</span>
            },
            {
                key: "Email",
                element: <span>Email</span>
            },
            {
                key: "Role",
                element: <span>Role</span>
            },
        ],
        data: [
            {
                Nombre: <span>Alicia</span>,
                Email: <span>alicia@whaletail.com</span>,
                Role: <span>Admin</span>
            },
            {
                Nombre: <span>Carlos</span>,
                Email: <span>carlos@whaletail.com</span>,
                Role: <span>Developer</span>
            },
            {
                Nombre: <span>María</span>,
                Email: <span>maria@whaletail.com</span>,
                Role: <span>Designer</span>
            },
            {
                Nombre: <span>Juan</span>,
                Email: <span>juan@whaletail.com</span>,
                Role: <span>Manager</span>
            },
            {
                Nombre: <span>Elena</span>,
                Email: <span>elena@whaletail.com</span>,
                Role: <span>Developer</span>
            },
            {
                Nombre: <span>Roberto</span>,
                Email: <span>roberto@whaletail.com</span>,
                Role: <span>Admin</span>
            },
            {
                Nombre: <span>Laura</span>,
                Email: <span>laura@whaletail.com</span>,
                Role: <span>Designer</span>
            },
            {
                Nombre: <span>Pedro</span>,
                Email: <span>pedro@whaletail.com</span>,
                Role: <span>Developer</span>
            },
            {
                Nombre: <span>Sofia</span>,
                Email: <span>sofia@whaletail.com</span>,
                Role: <span>Manager</span>
            },
            {
                Nombre: <span>Miguel</span>,
                Email: <span>miguel@whaletail.com</span>,
                Role: <span>Admin</span>
            }

        ]
    }
}