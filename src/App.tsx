import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Career } from "./pages/Career";
import { Now } from "./pages/Now";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      {/* Background base mais neutro para o efeito glass aparecer melhor */}
      <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-slate-200">
        <Header />
        
        <main className="max-w-4xl mx-auto px-5 py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Aqui nós apontamos o caminho /projetos para o componente Projects */}
            <Route path="/projetos" element={<Projects />} />
            
            {/* As outras páginas continuam como texto por enquanto */}
            <Route path="/carreira" element={<Career />} />
            <Route path="/now" element={<Now />} />
            <Route path="/galeria" element={<h1>Página Galeria</h1>} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;