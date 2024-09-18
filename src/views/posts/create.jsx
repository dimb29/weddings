import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from '../../api'

export default function PostCreate() {

    // define state
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('')

    // set validation
    const [errors, setErrors] = useState([])

    // use navigate
    const navigate = useNavigate()

    // method handle file change
    const handleFileChange = (e) => {
        setImage(e.target.files[0])
    }

    // method store post
    const storePost = async (e) => {
        e.preventDefault()

        // init form data
        const formData = new FormData();

        // append data
        formData.append('image', image)
        formData.append('title', title)
        formData.append('content', content)

        // send data with API
        await api.post(('/api/post'), formData)
            .then((e) => {
                navigate('/posts')
                // console.log(e)
            })
            .catch(error => {
                // send error response to state "errors"
                setErrors(error.response.data.errors)
            })
    }

    return (
        <div className="container mx-auto my-5">
            <div className="p-5 rounded shadow bg-white">
                <form onSubmit={storePost}>
                <div className="w-full mb-3">
                    <label className="block mb-2 font-medium text-gray-900">Image</label>
                    <input onChange={handleFileChange} className="px-2 py-3 block w-full text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white focus:outline-none" type="file" />
                    {
                        errors.image && (
                            <div className="px-2 py-3 mt-2 rounded-lg shadow border border-red-500 bg-red-300 text-red-600">
                                {errors.image[0]}
                            </div>
                        )
                    }
                </div>
                <div className="w-full mb-3">
                    <label className="block mb-2 font-medium text-gray-900">Title</label>
                    <input type="text" onChange={ (e) => setTitle(e.target.value) } className="px-2 py-3 w-full rounded-lg shadow text-gray-900 border border-gray-300 bg-white focus:outline-offset-0" placeholder="Title Post" />
                    {
                        errors.title && (
                            <div className="px-2 py-3 mt-2 rounded-lg shadow border border-red-500 bg-red-300 text-red-600">
                                {errors.title[0]}
                            </div>
                        )
                    }
                </div>
                <div className="w-full mb-3">
                    <label className="block mb-2 font-medium text-gray-900">Content</label>
                    <textarea onChange={(e) => setContent(e.target.value)} rows="5" className="px-2 py-3 rounded-lg shadow w-full text-gray-900 bg-white border border-gray-300" placeholder="Content Text"></textarea>
                    {
                        errors.content && (
                            <div className="px-2 py-3 mt-2 rounded-lg shadow border border-red-500 bg-red-300 text-red-600">
                                {errors.content[0]}
                            </div>
                        )
                    }
                </div>
                <button type="submit" className="px-3 py-2 rounded shadow cursor-pointer bg-blue-500 hover:bg-blue-600">Save</button>
                </form>
            </div>
        </div>
    )
}