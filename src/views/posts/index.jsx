import { useState, useEffect } from "react"
import api from '../../api'
import { Link } from 'react-router-dom'

export default function PostIndex() {

    // init state
    const [posts, setPosts] = useState([]);

    // define method
    const fetchDataPosts = async () => {

        // fetch data from api with axios
        await api.get('/api/posts')
        .then(response => {

            // Asign response data to state "posts"
            setPosts(response.data.data)
        })
    }

    // run hook useEffect
    useEffect(() => {

        // call method fecthDataPosts
        fetchDataPosts()
    }, [])

    return (
        <div className="container mx-auto my-16">
            <div className="mb-5">
                <Link to={"/posts/create/"} className="px-2 py-3 rounded-lg shadow bg-green-500 text-white hover:bg-green-600 hover:text-green-100"> ADD NEW POST</Link>
            </div>
            <div className="px-2 py-3 rounded-lg shadow bg-white">
                <table className="table border border-solid w-full">
                    <thead className="table-header-group bg-gray-800">
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Title</th>
                            <th scope="col">Content</th>
                            <th scope="col" className="w-1/9">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-800">
                        {
                            posts.length > 0
                            ? posts.map((post, index) => (
                                <tr key={index}>
                                    <td className="text-center">
                                        <img src={post.image} alt={post.title} width="200" className="rounded" />
                                    </td>
                                    <td>{post.title}</td>
                                    <td>{post.content}</td>
                                    <td className="text-center">
                                        <Link to={`/post/edit/${post.id}`} className="px-2 py-3 rounded shadow bg-blue-500 text-white hover:bg-blue-600 hover:text-blue-100" >EDIT</Link>
                                        <button className="px-2 py-3 rounded shadow bg-red-500 text-white hover:bg-red-600 hover:text-red-100">DELETE</button>
                                    </td>
                                </tr>
                            ))
                            :   <tr>
                                    <td colSpan="4" className="text-center">
                                        <div className="p-5 m-3 rounded-lg border-red-500 bg-red-200 text-red-800">
                                            Data belum tersedia!
                                        </div>
                                    </td>
                                </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}