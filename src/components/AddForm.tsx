import { useState } from "react";
import { createCharacter } from "../service/CharactersService";
import { DataType, MediaType } from "../types";
import { useRoster } from "../hooks/useRosterHook";

type AddFormProps = {
    mediaArray: MediaType[]
    notify: ()=> void
}

export const AddForm = ({ mediaArray, notify }: AddFormProps) => {

    const { dispatch } = useRoster()

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

        if (e.target.type === 'file') {
            setFormData({
                ...formData,
                [e.target.id]: (e.target as HTMLInputElement).files?.[0] || ''
            });
        } else {
            setFormData({
                ...formData,
                [e.target.id]: e.target.value
            });
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        notify()

        const data = new FormData();
        for (const key in formData) {
            data.append(key, (formData as any)[key]);
        }

        await createCharacter(data);
        setFormData(initialState);
        dispatch({ type: 'close-modal' })

    };

    return (
        <form className="space-y-5 text-white" onSubmit={handleSubmit}>

            <div className="flex flex-col gap-2">
                <label htmlFor="image" className="text-xl">Imagen:</label>
                <input
                    type="file"
                    id="image"
                    accept="image/*"
                    className="bg-white/5 rounded-lg p-2 w-full"
                    name="image"
                    required
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
                        className="bg-white/5  rounded-lg p-2"
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
                        className="bg-white/5  rounded-lg p-2"
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
                        className="bg-white/5  rounded-lg p-2"
                        name="age"
                        required
                        min={1}
                        value={formData.age}
                        onChange={handleChange}

                    />
                </div>

                <div className="flex flex-col gap-2 md:w-1/2">
                    <label htmlFor="sex" className="text-xl">Sexo:</label>
                    <select id="sex" className="bg-white/5  rounded-lg p-2" name="sex" required
                        value={formData.sex}
                        onChange={handleChange}
                    >
                        <option value="" className="text-gray-800">-- Seleccione --</option>
                        <option value="Hombre" className="text-gray-800">Hombre</option>
                        <option value="Mujer" className="text-gray-800">Mujer</option>
                        <option value="Otro" className="text-gray-800">Otro</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2 md:w-1/2">
                    <label htmlFor="gender" className="text-xl">Género:</label>
                    <select id="gender" className="bg-white/5  rounded-lg p-2" name="gender" required
                        value={formData.gender}
                        onChange={handleChange}
                    >
                        <option value="" className="text-gray-800">-- Seleccione --</option>
                        <option value="Hombre" className="text-gray-800">Masculino</option>
                        <option value="Mujer" className="text-gray-800">Femenino</option>
                        <option value="Otro" className="text-gray-800">Otro</option>
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
                        className="bg-white/5  rounded-lg p-2"
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
                        className="bg-white/5  rounded-lg p-2"
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
                    className="bg-white/5  rounded-lg p-2 resize-none"
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
                        className="bg-white/5  rounded-lg p-2"
                        name="actorOrVoice"
                        value={formData.actorOrVoice}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col gap-2 md:w-1/2">
                    <label htmlFor="mediaTitle" className="text-xl">Título de la Obra:</label>
                    <select id="mediaTitle" className="bg-white/5  rounded-lg p-2" name="mediaTitle" required
                        value={formData.mediaTitle}
                        onChange={handleChange}
                    >
                        <option value="" className="text-gray-800">-- Seleccione --</option>
                        {
                            mediaArray.map((media) => (
                                <option className="text-gray-800" key={media._id} id={media.title} value={media.title}>{media.title}</option>
                            ))
                        }

                    </select>
                </div>

                <div className="flex flex-col gap-2 md:w-1/2">
                    <label htmlFor="mediaType" className="text-xl">Tipo de Medio:</label>
                    <select id="mediaType" className="bg-white/5  rounded-lg p-2" name="mediaType" required
                        value={formData.mediaType}
                        onChange={handleChange}
                    >
                        <option value="" className="text-gray-800">-- Seleccione --</option>
                        <option value="Libro" className="text-gray-800">Libro</option>
                        <option value="Película" className="text-gray-800">Película</option>
                        <option value="Serie" className="text-gray-800">Serie</option>
                    </select>
                </div>
            </div>

            <div className="md:flex gap-10">
                <div className="flex flex-col gap-2 md:w-1/2">
                    <label htmlFor="movieActor" className="text-xl">Actor en la Película:</label>
                    <input
                        type="text"
                        id="movieActor"
                        placeholder="Añade el actor en la película (si aplica)"
                        className="bg-white/5  rounded-lg p-2"
                        name="movieActor"
                        value={formData.movieActor}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col gap-2 md:w-1/2">
                    <label htmlFor="bookAuthor" className="text-xl">Autor del Libro:</label>
                    <input
                        type="text"
                        id="bookAuthor"
                        placeholder="Añade el autor del libro (si aplica)"
                        className="bg-white/5  rounded-lg p-2"
                        name="bookAuthor"
                        value={formData.bookAuthor}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <input
                type="submit"
                className="bg-red-700 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
            />
        </form>
    )
}
