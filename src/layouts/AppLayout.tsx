import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { 
  Menu, 
  LayoutDashboard, 
  CalendarDays, 
  Users, 
  Settings, 
  LogOut, 
  Dumbbell 
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AppLayout() {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Itens do menu (Futuramente virão do backend baseado na permissão)
  const navItems = [
    { href: "/", label: "Dashboard", icon: LayoutDashboard },
    { href: "/agenda", label: "Agenda", icon: CalendarDays },
    { href: "/alunos", label: "Alunos", icon: Users },
    { href: "/empresas", label: "Empresas", icon: Users },
    { href: "/aulas", label: "Aulas", icon: Dumbbell },
    { href: "/configuracoes", label: "Configurações", icon: Settings },
    { href: "/conexao", label: "Conexao", icon: Settings },
  ];

  const NavContent = () => (
    <div className="flex flex-col h-full gap-4">
      <div className="flex items-center h-14 border-b px-4">
        <span className="font-bold text-xl flex items-center gap-2">
          <Dumbbell className="h-6 w-6 text-primary" />
          Troca Vaga
        </span>
      </div>
      <nav className="flex-1 px-2 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setIsMobileOpen(false)}
              className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t">
        <p className="text-xs text-muted-foreground">Logado como:</p>
        <p className="text-sm font-medium truncate">Pilates Studio A</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex w-64 flex-col border-r fixed h-full bg-card z-10">
        <NavContent />
      </aside>

      {/* Conteúdo Principal */}
      <div className="flex-1 flex flex-col md:ml-64 transition-all duration-300">
        {/* Header */}
        <header className="h-14 border-b bg-card flex items-center justify-between px-4 sticky top-0 z-20">
          
          {/* Menu Mobile Trigger */}
          <div className="md:hidden">
            <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-64">
                <NavContent />
              </SheetContent>
            </Sheet>
          </div>

          <div className="ml-auto flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>US</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Perfil</DropdownMenuItem>
                <DropdownMenuItem>Faturamento</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600 cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" /> Sair
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Área de Conteúdo das Páginas */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
