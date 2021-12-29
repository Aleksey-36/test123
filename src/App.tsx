import { Routes, Route, Navigate } from "react-router-dom"

import { CatalogContainer } from "./containers"
import { TextComponent } from "./containers/TextComponent"
import { Info } from "./containers/Info"

const App = () => {
    return (
        <>
            <Routes>
                <Route path="series" element={<CatalogContainer />} />
                <Route path="series/:id" element={<TextComponent />} />
                <Route path="series/:id/:genId" element={<Info />} />
                <Route path="*" element={<Navigate to="/series" />} />
            </Routes>
        </>
    )
}

export default App
