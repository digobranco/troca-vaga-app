import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 bg-zinc-950 text-white">
      <h1 className="text-2xl font-bold">Troca Vaga App</h1>
      <p>Teste do botão shadcn/ui:</p>
      
      {/* Aqui está o botão que você instalou */}
      <div className="flex gap-2">
        <Button>Padrão</Button>
        <Button variant="secondary">Secundário</Button>
        <Button variant="destructive">Perigo</Button>
        <Button variant="outline">Contorno</Button>
      </div>
    </div>
  )
}

export default App
