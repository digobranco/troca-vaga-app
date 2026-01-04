import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Calendar, Users, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTenant } from "@/contexts/TenantContext";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/" },
  { label: "Agenda", icon: Calendar, href: "/agenda" },
  { label: "Alunos", icon: Users, href: "/alunos" },
  { label: "Empresas", icon: Users, href: "/empresas" },
  { label: "Configurações", icon: Settings, href: "/configuracoes" },
  { label: "conexao", icon: Settings, href: "/conexao" },
];

export function Sidebar() {
  const { pathname } = useLocation();
  const { tenant } = useTenant();

  return (
    <div className="flex h-full flex-col border-r bg-white">
      {/* Logo / Nome do Tenant */}
      <div className="flex h-16 items-center border-b px-6">
        <div className="font-bold text-lg tracking-tight">
          {tenant?.name || "Carregando..."}
        </div>
      </div>

      {/* Links de Navegação */}
      <nav className="flex-1 space-y-1 p-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-slate-900 text-white"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Rodapé da Sidebar (Opcional) */}
      <div className="border-t p-4 text-xs text-slate-400 text-center">
        Versão 1.0.0
      </div>
    </div>
  );
}
