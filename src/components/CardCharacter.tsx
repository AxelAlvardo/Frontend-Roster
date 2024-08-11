import { Button, Dialog, DialogPanel, DialogTitle, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { CharacterType } from "../types"
import styles from '../styles/CharacterCard.module.css'

type CardCharacterProps = {
    character: CharacterType
}

export const CardCharacter = ({ character }: CardCharacterProps) => {

    let [isOpen, setIsOpen] = useState(false)

    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
    }

    return (
        <>
            <Button onClick={() => {
                open()
            }} className={styles.card}>
                <figure>
                    <img className={styles.img} src={character.image} alt={character.firstName} />
                </figure>

                <div className={styles.char_text}>
                    <div className={styles.names_text}>
                        <p className={styles.name}>{character.firstName} {character.lastName}</p>
                    </div>

                    <p className={styles.gender}>Genero : <span className={styles.gen_dec}>{character.gender}</span></p>
                </div>
            </Button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10 focus:outline-none" onClose={() => { close() }}>

                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-75" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">

                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <DialogPanel
                                    transition
                                    className="md:flex gap-7 w-full max-w-2xl rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                                >

                                    <div>
                                        <img className={styles.dialog_img} src={character.image} alt={character.firstName} />
                                    </div>

                                    <div className='flex flex-col justify-between mt-5 md:mt-0'>
                                        <div className=''>
                                            <DialogTitle as="h3" className="text-3xl font-medium text-white">
                                                {character.firstName} {character.lastName}
                                            </DialogTitle>

                                            <div className='flex flex-col gap-2 mt-2'>
                                            <p className='text-white'>Categoría: <span className='text-white/50'>{character.mediaType}</span></p>
                                                <p className='text-white'>Titulo: <span className='text-white/50'>{character.mediaTitle}</span></p>
                                                <p className='text-white'>Edad: <span className='text-white/50'>{character.age}</span></p>
                                                <p className='text-white'>Sexo: <span className='text-white/50'>{character.sex}</span></p>
                                                <p className='text-white'>Genero: <span className='text-white/50'>{character.gender}</span></p>
                                            </div>

                                            <div className='flex gap-5 mt-2'>
                                                <p className='text-white'>Altura: <span className='text-white/50'>{character.height}m</span></p>
                                                <p className='text-white'>Peso: <span className='text-white/50'>{character.weight}kg</span></p>
                                            </div>


                                            <div className='space-y-2 md:flex gap-14 mt-2 md:items-center'>
                                                <p className='text-white'>Voz: <span className='text-white/50'>{character.actorOrVoice}</span></p>
                                                <p className='text-white'>Actor: <span className='text-white/50'>{character.movieActor}</span></p>
                                            </div>

                                            <p className="mt-2 text-sm/6 text-white">
                                                Descripción:{' '}
                                                <span className='text-white/50'>{character.description}</span>
                                            </p>

                                            <div className="mt-4">
                                                <Button
                                                    className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                                                    onClick={() => { close() }}
                                                >
                                                    Seguir Navegando
                                                </Button>
                                            </div>
                                        </div>

                                    </div>
                                </DialogPanel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
