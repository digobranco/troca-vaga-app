import { Button } from "@/components/ui/button";

export function Dashboard() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
      <p className="text-muted-foreground">Bem-vindo ao painel de controle.</p>
      
      <div className="grid gap-4 md:grid-cols-3">
        {/* Cards de Exemplo */}
        <div className="p-6 border rounded-xl bg-card text-card-foreground shadow-sm">
          <h3 className="font-semibold">Próximas Aulas</h3>
          <p className="text-2xl font-bold mt-2">12</p>
        </div>
        <div className="p-6 border rounded-xl bg-card text-card-foreground shadow-sm">
          <h3 className="font-semibold">Alunos Ativos</h3>
          <p className="text-2xl font-bold mt-2">48</p>
        </div>
        <div className="p-6 border rounded-xl bg-card text-card-foreground shadow-sm">
          <h3 className="font-semibold">Cancelamentos Hoje</h3>
          <p className="text-2xl font-bold mt-2 text-red-500">2</p>
        </div>
      </div>
      
      <Button>Nova Aula</Button>
    </div>
  );
}
