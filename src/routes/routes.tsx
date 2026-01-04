import { createBrowserRouter } from "react-router-dom";

// Layout
import { AppLayout } from "src/layouts/AppLayout";

// Dashboard
import { Dashboard } from "src/pages/Dashboard.tsx";

// Alunos
import { StudentsPage } from "src/pages/students/StudentsPage";
import { StudentForm } from "src/pages/students/StudentForm";

// Vagas
import { JobsPage } from "src/pages/jobs/JobsPage";
import { JobForm } from "src/pages/jobs/JobForm"; 

// Empresas (NOVOS IMPORTS)
import { CompaniesPage } from "src/pages/companies/CompaniesPage";
import { CompanyForm } from "src/pages/companies/CompanyForm";
//import { TesteConexao } from "src/pages/testeConexao/TesteConexao";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // Layout que contém a Sidebar/Header
    children: [
      { path: "/", element: <Dashboard /> },
      
      // Rotas de Alunos
      { path: "/students", element: <StudentsPage /> },
      { path: "/students/new", element: <StudentForm /> },
      
      // Rotas de Vagas
      { path: "/jobs", element: <JobsPage /> },
      { path: "/jobs/new", element: <JobForm /> },
      { path: "/jobs/:id", element: <JobForm /> },

       // Rotas de Empresas (NOVAS ROTAS)
       { path: "/companies", element: <CompaniesPage /> },
       { path: "/companies/new", element: <CompanyForm /> },
       { path: "/companies/:id", element: <CompanyForm /> },
       //{ path: "/testeConexao", element: <TesteConexao /> }
    ],
  },
]);
