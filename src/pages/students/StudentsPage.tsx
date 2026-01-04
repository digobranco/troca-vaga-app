import { Plus, Search } from "lucide-react";
import { useNavigate } from "react-router-dom"; 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type Student } from "@/types/student";

// Dados fictícios para teste
const mockStudents: Student[] = [
  {
    id: "1",
    name: "Ana Silva",
    email: "ana.silva@email.com",
    phone: "(11) 99999-0001",
    status: "active",
    plan: "Pilates 2x Semana",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    name: "Carlos Oliveira",
    email: "carlos.o@email.com",
    phone: "(11) 98888-0002",
    status: "inactive",
    plan: "Yoga Ilimitado",
    createdAt: "2023-11-20",
  },
  {
    id: "3",
    name: "Beatriz Santos",
    email: "bia.santos@email.com",
    phone: "(21) 97777-0003",
    status: "pending",
    plan: "Pilates 1x Semana",
    createdAt: "2024-02-10",
  },
];

export function StudentsPage() {

  const navigate = useNavigate();
  return (
    <div className="space-y-6">
      {/* Cabeçalho da Página */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Alunos</h1>
          <p className="text-muted-foreground">
            Gerencie os alunos matriculados no estúdio.
          </p>
        </div>
        <Button onClick={() => navigate("/alunos/novo")}>
          <Plus className="mr-2 h-4 w-4" /> Novo Aluno
      </Button>
      </div>

      {/* Área de Filtros e Tabela */}
      <Card>
        <CardHeader>
          <CardTitle>Listagem</CardTitle>
          <CardDescription>
            Visualize e busque por alunos ativos ou inativos.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center mb-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar aluno..."
                className="pl-8"
              />
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Plano</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockStudents.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">{student.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {student.email}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>{student.plan}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          student.status === "active"
                            ? "default" // Preto (padrão shadcn)
                            : student.status === "inactive"
                            ? "destructive"
                            : "secondary"
                        }
                      >
                        {student.status === "active" && "Ativo"}
                        {student.status === "inactive" && "Inativo"}
                        {student.status === "pending" && "Pendente"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Editar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
