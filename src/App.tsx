import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { TenantProvider } from './contexts/TenantContext';
import { DashboardLayout } from './layouts/DashboardLayout';
import { Dashboard } from './pages/Dashboard';
import { StudentsPage } from "./pages/students/StudentsPage";
import { StudentForm } from "./pages/students/StudentForm"; // Importe a página
import { CompaniesPage } from './pages/companies/CompaniesPage';
import { TesteConexao } from './pages/testeConexao/TesteConexao';

function App() {
  return (
    <BrowserRouter>
      {/* 
        O TenantProvider fica DENTRO do Router, mas FORA das Rotas.
        Assim, ele pode acessar a URL se precisarmos no futuro, 
        e todos os componentes dentro dele (Layouts e Páginas) têm acesso aos dados da empresa.
      */}
      <TenantProvider>
        <Routes>
          
          {/* Rota Pai: Aplica o Layout com Sidebar em todas as rotas filhas */}
          <Route path="/" element={<DashboardLayout />}>
            
            {/* Rota Index: É a página inicial (Dashboard) */}
            <Route index element={<Dashboard />} />
            <Route path="alunos" element={<StudentsPage />} />
            <Route path="empresas" element={<CompaniesPage/>} />
            <Route path="/alunos/novo" element={<StudentForm />} /> {/* Nova Rota */}
            {/* Rotas futuras (placeholders) */}
            <Route path="agenda" element={<div>Agenda (Em breve)</div>} />
            <Route path="configuracoes" element={<div>Configurações (Em breve)</div>} />
            <Route path="conexao" element={<TesteConexao/>} />

          </Route>

          {/* Rota de "Catch-all": Se o usuário digitar uma rota que não existe, volta pro início */}
          <Route path="*" element={<Navigate to="/" replace />} />
          
        </Routes>
      </TenantProvider>
    </BrowserRouter>
  )
}

export default App;
