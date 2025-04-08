import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home';
import RecipeHome from './RecipeHome';
import MyRecipes from './MyRecipes';
import AddRecipes from './AddRecipes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipeHome />} />
        <Route path="/my-recipes" element={<MyRecipes />} />
        <Route path="/add" element={<AddRecipes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;