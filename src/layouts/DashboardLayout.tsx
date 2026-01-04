import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";

export function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-slate-50/50">
      {/* Sidebar Desktop (Escondida no mobile, fixa no desktop) */}
      <aside className="hidden w-64 flex-col border-r bg-white md:flex inset-y-0 fixed z-20">
        <Sidebar />
      </aside>

      {/* Área Principal */}
      <div className="flex flex-1 flex-col md:pl-64 transition-all duration-300">
        <Header />
        
        {/* Conteúdo das Páginas (Outlet) */}
        <main className="flex-1 p-4 md:p-6 overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
