import type { Meta, StoryObj } from '@storybook/react'
import { Card } from '../Card/Card'
import { CardHeader } from './CardHeader'
import { CardTitle } from './CardTitle'
import { CardDescription } from './CardDescription'
import { CardContent } from './CardContent'
import { CardFooter } from './CardFooter'

const meta: Meta<typeof Card> = {
    component: Card
}

export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {
    args: {
        children: (
            <>
                <CardHeader>
                    <CardTitle>Esto es una card de prueba</CardTitle>
                    <CardDescription>Esta es la descripcion de una carta</CardDescription>
                </CardHeader>
                <CardContent>
                    <div>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil voluptatem
                        dicta consequuntur quibusdam est odit sed, atque alias neque deleniti veniam quia.
                        Repellendus, eius. Ut molestiae earum omnis quis voluptatum!
                    </div>
                </CardContent>
                <CardFooter>
                    Este es el footer de la card
                </CardFooter>
            </>
        )
    }
}