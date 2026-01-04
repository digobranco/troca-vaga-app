import { Plus, Search, Pencil, Trash2, Building2 } from "lucide-react";
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
import { useNavigate } from "react-router-dom";

export function CompaniesPage() {
  const navigate = useNavigate();

  // Dados mockados
  const companies = [
    { id: 1, name: "Tech Solutions", location: "São Paulo, SP", openJobs: 3 },
    { id: 2, name: "Agência Criativa", location: "Rio de Janeiro, RJ", openJobs: 1 },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Empresas</h1>
        <Button onClick={() => navigate("/companies/new")}>
          <Plus className="w-4 h-4 mr-2" />
          Nova Empresa
        </Button>
      </div>

      <div className="flex items-center justify-between">
        <form className="flex items-center gap-2">
          <Input placeholder="Buscar empresa..." className="w-[320px]" />
          <Button variant="secondary" type="submit">
            <Search className="w-4 h-4 mr-2" />
            Filtrar
          </Button>
        </form>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Localização</TableHead>
              <TableHead>Vagas Abertas</TableHead>
              <TableHead className="w-[100px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {companies.map((company) => (
              <TableRow key={company.id}>
                <TableCell className="font-medium flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-muted-foreground" />
                  {company.name}
                </TableCell>
                <TableCell>{company.location}</TableCell>
                <TableCell>{company.openJobs}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon">
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Trash2 className="w-4 h-4 text-red-500" />
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
