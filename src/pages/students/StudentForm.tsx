import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// 1. Definir o Schema de Validação (Regras)
const formSchema = z.object({
  name: z
    .string()
    .min(2, "O nome deve ter pelo menos 2 caracteres"), // Validação de tamanho
  email: z
    .string()
    .min(1, "O e-mail é obrigatório") // Garante que não está vazio
    .email("Formato de e-mail inválido"),
  phone: z
    .string()
    .min(10, "Informe um telefone válido"), // Exemplo simples
  plan: z
    .string()
    .min(1, "Selecione um plano"), // Garante que foi selecionado
  status: z
    .enum(["active", "inactive", "pending"], {
       // Em enum, required_error funciona melhor, mas se der erro, use o padrão abaixo
    }), 
});

type FormValues = z.infer<typeof formSchema>;

export function StudentForm() {
  const navigate = useNavigate();

  // 2. Configurar o formulário
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      status: "active",
    },
  });

  // 3. Função de envio (Simulação)
  function onSubmit(data: FormValues) {
    console.log("Dados enviados:", data);
    // Aqui entraria a chamada para a API (backend)
    
    // Simula um delay e volta para a lista
    setTimeout(() => {
      navigate("/alunos");
    }, 1000);
  }

  return (
    <div className="space-y-6">
      {/* Cabeçalho com botão de voltar */}
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => navigate("/alunos")}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-2xl font-bold tracking-tight">Novo Aluno</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Dados Pessoais</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nome */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome Completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: João da Silva" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input placeholder="joao@exemplo.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Telefone */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefone / WhatsApp</FormLabel>
                      <FormControl>
                        <Input placeholder="(11) 99999-9999" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Plano */}
                <FormField
                  control={form.control}
                  name="plan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Plano</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione um plano" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="mensal">Mensal (R$ 150)</SelectItem>
                          <SelectItem value="trimestral">Trimestral (R$ 400)</SelectItem>
                          <SelectItem value="anual">Anual (R$ 1400)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Botão de Salvar */}
              <div className="flex justify-end">
                <Button type="submit" size="lg">
                  <Save className="mr-2 h-4 w-4" />
                  Salvar Aluno
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
