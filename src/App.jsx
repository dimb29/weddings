import { Link } from "react-router-dom";

// import routes
import Routes from "./routes";

export default function App() {
  return (
      <div className="h-full bg-white">
        {/* <nav className="bg-gray-900 text-white w-full">
            <div className="w-screen px-4 py-2 flex items-center justify-between">
                <Link to="/" className="text-white mx-8">HOME</Link>
                <button 
                  className="lg:hidden text-white" 
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  >
                </button>
                <div className="hidden lg:flex lg:items-center lg:justify-between w-full" id="navbarSupportedContent">
                    <ul className="flex space-x-4">
                        <li>
                            <a href="/posts" className="text-white hover:text-gray-400" aria-current="page">POSTS</a>
                        </li>
                    </ul>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="/weddings" className="text-white hover:text-gray-400" aria-current="page">Weddings</a>
                        </li>
                    </ul>
                    <ul className="flex space-x-4 ml-auto">
                        <li>
                            <a href="https://masgasso.com" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">masgasso.com</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> */}

        <Routes />
      </div>
      
  )
}