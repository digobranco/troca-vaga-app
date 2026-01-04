import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function CompanyForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = !!id;

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    // Aqui viria a lógica para salvar na API/Estado
    console.log("Empresa salva!");
    navigate("/companies");
  }

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">
        {isEditing ? "Editar Empresa" : "Nova Empresa"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6 border p-6 rounded-lg">
        <div className="space-y-2">
          <Label htmlFor="name">Nome da Empresa</Label>
          <Input id="name" placeholder="Ex: Tech Solutions Ltda" required />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="website">Site / LinkedIn</Label>
            <Input id="website" placeholder="https://..." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Localização (Cidade/Estado)</Label>
            <Input id="location" placeholder="Ex: São Paulo, SP" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Sobre a Empresa</Label>
          <Textarea 
            id="description" 
            placeholder="Breve descrição da cultura e área de atuação..." 
            className="min-h-[100px]"
          />
        </div>

        <div className="flex items-center gap-2 justify-end">
          <Button 
            type="button" 
            variant="ghost" 
            onClick={() => navigate("/companies")}
          >
            Cancelar
          </Button>
          <Button type="submit">Salvar</Button>
        </div>
      </form>
    </div>
  );
}
