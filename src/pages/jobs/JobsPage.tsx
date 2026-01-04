import { Plus, Search, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

export function JobsPage() {
  const navigate = useNavigate();

  // Dados fictícios para visualização
  const jobs = [
    {
      id: 1,
      title: "Desenvolvedor React Senior",
      company: "Tech Solutions",
      location: "Remoto",
      type: "CLT",
      status: "open",
    },
    {
      id: 2,
      title: "Product Designer",
      company: "Design Studio",
      location: "São Paulo, SP",
      type: "PJ",
      status: "closed",
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Vagas</h1>
        <Button onClick={() => navigate("/jobs/new")}>
          <Plus className="w-4 h-4 mr-2" />
          Nova Vaga
        </Button>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Input placeholder="Filtrar vagas..." className="w-64" />
          <Button variant="secondary">
            <Search className="w-4 h-4 mr-2" />
            Filtrar
          </Button>
        </div>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Título</TableHead>
              <TableHead>Empresa</TableHead>
              <TableHead>Localização</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[100px]">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobs.map((job) => (
              <TableRow key={job.id}>
                <TableCell className="font-medium">{job.title}</TableCell>
                <TableCell>{job.company}</TableCell>
                <TableCell>{job.location}</TableCell>
                <TableCell>{job.type}</TableCell>
                <TableCell>
                  <Badge variant={job.status === "open" ? "default" : "secondary"}>
                    {job.status === "open" ? "Aberta" : "Fechada"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-red-500">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
