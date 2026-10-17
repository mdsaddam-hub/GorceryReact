import React from 'react'
import Heading from '../Heading/Heading'
import fruiteVigg from '../../assets/Grocery_image.png'
import Button from '../Button/Button'

const Category = () => {

    const renderCards = category.map((card) => {
        return (
            <div className='flex-1 bg-zinc-100 rounded-3xl'key={card.id}>
                <div>
                    <img src={card.image} />
                </div>
                <div className='pb-4 pl-3'>
                    <h1 className='text-3xl font-bold text-zinc-800 mb-4 text-center'>{card.title}</h1>
                    <p className='p-4'>{card.description}</p>
                    <Button content='See All' />
                </div>
            </div>
        )
    })

    return (
        <section>
            <div className='max-w-350 mx-auto py-20'>
                <Heading Hilihgt='Shop' content='by Category' />


                <div className='md:flex gap-10 py-5 grid'>
                    {renderCards}
                </div>

                
            </div>
        </section>
    )
}

export default Category

const category = [
    {
        id: 1,
        title: 'Fruite & Vigatable.',
        description: 'Our Comitment fresh fruite and Vigetable fresh fruite and Vigetable fresh fruite and Vigetable',
        image: fruiteVigg
    },
    {
        id: 2,
        title: 'Fruite & Vigatable.',
        description: 'Our Comitment fresh fruite and Vigetable fresh fruite and Vigetable fresh fruite and Vigetable',
        image: fruiteVigg
    },
    {
        id: 3,
        title: 'Fruite & Vigatable.',
        description: 'Our Comitment fresh fruite and Vigetable fresh fruite and Vigetable fresh fruite and Vigetable',
        image: fruiteVigg
    }
]
