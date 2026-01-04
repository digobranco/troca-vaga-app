import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export function TesteConexao() {
  const [status, setStatus] = useState('Verificando conexão...')

  useEffect(() => {
    async function checkConnection() {
      // Tenta buscar a sessão atual (mesmo que nula, confirma que o client carregou)
      const { data, error } = await supabase.auth.getSession()
      
      if (error) {
        console.error(error)
        setStatus('Erro ao conectar com Supabase.')
      } else {
        setStatus('Supabase conectado com sucesso!')
        console.log('Sessão:', data)
      }
    }

    checkConnection()
  }, [])

  return (
    <div className="p-4 border rounded shadow bg-green-50 text-green-900">
      {status}
    </div>
  )
}
