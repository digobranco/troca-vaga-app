import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  title: z.string().min(3, { message: "O título deve ter pelo menos 3 caracteres." }),
  company: z.string().min(2, { message: "O nome da empresa é obrigatório." }),
  location: z.string().min(2, { message: "A localização é obrigatória." }),
  description: z.string().min(10, { message: "A descrição deve ter pelo menos 10 caracteres." }),
});

export function JobForm() {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      company: "",
      location: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Aqui viria a lógica para salvar no backend/contexto
    navigate("/jobs");
  }

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Nova Vaga</h1>
        <Button variant="outline" onClick={() => navigate("/jobs")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Título da Vaga */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título da Vaga</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Desenvolvedor Front-end" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Empresa */}
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Empresa</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Tech Solutions" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Localização */}
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Localização</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Remoto, São Paulo - SP" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Descrição */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descrição da Vaga</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Descreva os requisitos e responsabilidades..." 
                    className="resize-none h-32"
                    {...field} 
                  />
                </FormControl>
                <FormDescription>
                  Breve descrição das atividades e requisitos.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">
            <Save className="mr-2 h-4 w-4" />
            Salvar Vaga
          </Button>
        </form>
      </Form>
    </div>
  );
}
