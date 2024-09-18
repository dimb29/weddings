// Import React Route Dom
import { Routes, Route } from 'react-router-dom';

// Import View HomePage
import Home from '../views/home.jsx';

// Import view posts Index
import PostIndex from '../views/posts/index.jsx';

// Import view posts Create
import PostCreate from '../views/posts/create.jsx';

// Import view posts Edit
import PostEdit from '../views/posts/edit.jsx';

// import view Wedding Index
import WeddingIndex from '../views/weddings/index.jsx';

function RoutesIndex() {
    return (
        <Routes>
            {/* route home */}
            {/* <Route path="/" element={<Home />} /> */}

            {/* route post index */}
            {/* <Route path="/posts" element={<PostIndex />} /> */}

            {/* route post create */}
            {/* <Route path="/posts/create" element={<PostCreate />} /> */}

            {/* route post edit */}
            {/* <Route path="/posts/edit" element={<PostEdit />} /> */}

            {/* route wedding */}
            <Route path='/weddings' element={<WeddingIndex />} />

        </Routes>
    )
}

export default RoutesIndex
