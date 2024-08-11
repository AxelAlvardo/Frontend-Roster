import { useState } from "react";
import { createCharacter } from "../service/CharactersService";
import { DataType, MediaType } from "../types";
import { useRoster } from "../hooks/useRosterHook";

type AddFormProps = {
    mediaArray: MediaType[]
}

export const AddForm = ({mediaArray} : AddFormProps) => {

    const{dispatch} = useRoster()

    const initialState = {
        image: '',
        firstName: '',
        lastName: '',
        age: 1,
        sex: '',
        gender: '',
        height: 0,
        weight: 0,
        description: '',
        actorOrVoice: '',
        mediaTitle: '',
        mediaType: '',
        movieActor: '',
        bookAuthor: '',
    }

    const [formData, setFormData] = useState<DataType>(initialState);


    const handleChange = (e:
        React.ChangeEvent<HTMLInputElement> |
        React.ChangeEvent<HTMLSelectElement> |
        React.ChangeEvent<HTMLTextAreaElement>
    ) => {

        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);

        await createCharacter(formData)
        setFormData(initialState)
        dispatch({type: 'close-modal'})
    };

    return (
        <form className="space-y-5 text-white" onSubmit={handleSubmit}>

            <div className="flex flex-col gap-2">
                <label htmlFor="image" className="text-xl">Imagen:</label>
                <input
                    type="file"
                    id="image"
                    accept="image/*"
                    className="bg-gray-900  rounded-lg p-2"
                    name="image"
                    required

                    value={formData.image}
                    onChange={handleChange}

                />
            </div>

            <div className="md:flex gap-5 w-full">
                <div className="flex flex-col gap-2 md:w-1/2">
                    <label htmlFor="firstName" className="text-xl">Nombre:</label>
                    <input
                        type="text"
                        id="firstName"
                        placeholder="Añade el nombre del personaje"
                        className="bg-gray-900  rounded-lg p-2"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}

                    />
                </div>

                <div className="flex flex-col gap-2 md:w-1/2">
                    <label htmlFor="lastName" className="text-xl">Apellido:</label>
                    <input
                        type="text"
                        id="lastName"
                        placeholder="Añade el apellido del personaje"
                        className="bg-gray-900  rounded-lg p-2"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="md:flex gap-10">
                <div className="flex flex-col gap-2 md:w-1/2">
                    <label htmlFor="age" className="text-xl">Edad:</label>
                    <input
                        type="number"
                        id="age"
                        placeholder="Añade la edad del personaje"
                        className="bg-gray-900  rounded-lg p-2"
                        name="age"
                        required
                        min={1}
                        value={formData.age}
                        onChange={handleChange}

                    />
                </div>

                <div className="flex flex-col gap-2 md:w-1/2">
                    <label htmlFor="sex" className="text-xl">Sexo:</label>
                    <select id="sex" className="bg-gray-900  rounded-lg p-2" name="sex" required
                        value={formData.sex}
                        onChange={handleChange}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="Hombre">Hombre</option>
                        <option value="Mujer">Mujer</option>
                        <option value="Otro">Otro</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2 md:w-1/2">
                    <label htmlFor="gender" className="text-xl">Género:</label>
                    <select id="gender" className="bg-gray-900  rounded-lg p-2" name="gender" required
                        value={formData.gender}
                        onChange={handleChange}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="Hombre">Masculino</option>
                        <option value="Mujer">Femenino</option>
                        <option value="Otro">Otro</option>
                    </select>
                </div>
            </div>

            <div className="md:flex gap-10">
                <div className="flex flex-col gap-2 md:w-1/2">
                    <label htmlFor="height" className="text-xl">Altura (cm):</label>
                    <input
                        type="number"
                        id="height"
                        placeholder="Añade la altura del personaje"
                        className="bg-gray-900  rounded-lg p-2"
                        name="height"
                        required
                        min={0}
                        value={formData.height}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col gap-2 md:w-1/2">
                    <label htmlFor="weight" className="text-xl">Peso (kg):</label>
                    <input
                        type="number"
                        id="weight"
                        placeholder="Añade el peso del personaje"
                        className="bg-gray-900  rounded-lg p-2"
                        name="weight"
                        min={0}
                        required
                        value={formData.weight}
                        onChange={handleChange}
                    />
                </div>
            </div>
            
            <div className="flex flex-col gap-2">
                <label htmlFor="description" className="text-xl">Descripción:</label>
                <textarea
                    id="description"
                    placeholder="Añade una descripción del personaje"
                    className="bg-gray-900  rounded-lg p-2 resize-none"
                    name="description"
                    required
                    value={formData.description}
                    onChange={handleChange}
                />
            </div>

            <div className="md:flex gap-10">
                <div className="flex flex-col gap-2 md:w-1/2">
                    <label htmlFor="actorOrVoice" className="text-xl">Actor o Voz:</label>
                    <input
                        type="text"
                        id="actorOrVoice"
                        placeholder="Añade el actor"
                        className="bg-gray-900  rounded-lg p-2"
                        name="actorOrVoice"
                        value={formData.actorOrVoice}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col gap-2 md:w-1/2">
                    <label htmlFor="mediaTitle" className="text-xl">Título de la Obra:</label>
                    <select id="mediaTitle" className="bg-gray-900  rounded-lg p-2" name="mediaTitle" required
                        value={formData.mediaTitle}
                        onChange={handleChange}
                    >
                        <option value="">-- Seleccione --</option>
                        {
                            mediaArray.map((media)=> (
                                <option key={media._id} id={media.title} value={media.title}>{media.title}</option>
                            ))
                        }

                    </select>
                </div>

                <div className="flex flex-col gap-2 md:w-1/2">
                    <label htmlFor="mediaType" className="text-xl">Tipo de Medio:</label>
                    <select id="mediaType" className="bg-gray-900  rounded-lg p-2" name="mediaType" required
                        value={formData.mediaType}
                        onChange={handleChange}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="Libro">Libro</option>
                        <option value="Película">Película</option>
                        <option value="Serie">Serie</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="movieActor" className="text-xl">Actor en la Película:</label>
                <input
                    type="text"
                    id="movieActor"
                    placeholder="Añade el actor en la película (si aplica)"
                    className="bg-gray-900  rounded-lg p-2"
                    name="movieActor"
                    value={formData.movieActor}
                    onChange={handleChange}
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="bookAuthor" className="text-xl">Autor del Libro:</label>
                <input
                    type="text"
                    id="bookAuthor"
                    placeholder="Añade el autor del libro (si aplica)"
                    className="bg-gray-900  rounded-lg p-2"
                    name="bookAuthor"
                    value={formData.bookAuthor}
                    onChange={handleChange}
                />
            </div>

            <input
                type="submit"
                className="bg-red-700 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
            />
        </form>
    )
}
