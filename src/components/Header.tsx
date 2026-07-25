import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="font-bold text-xl tracking-tighter text-slate-800">
          Flávio Lins
        </Link>
        
        <nav className="flex gap-6 text-sm font-medium text-slate-600">
          <Link to="/" className="hover:text-slate-900 transition-colors">Início</Link>
          <Link to="/projetos" className="hover:text-slate-900 transition-colors">Projetos</Link>
          <Link to="/carreira" className="hover:text-slate-900 transition-colors">Carreira</Link>
          <Link to="/now" className="hover:text-slate-900 transition-colors">Now</Link>
          <Link to="/galeria" className="hover:text-slate-900 transition-colors">Galeria</Link>
          <Link to="/contato" className="hover:text-slate-900 transition-colors">Contato</Link>
        </nav>
      </div>
    </header>
  );
}