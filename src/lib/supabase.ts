import { createClient } from '@supabase/supabase-js'

// Tipagem do Banco de Dados (Opcional por enquanto, mas recomendado para o futuro)
// Se você rodar o gerador de tipos do Supabase, importaria aqui:
// import { Database } from './database.types'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Faltam variáveis de ambiente do Supabase")
}

// export const supabase = createClient<Database>(supabaseUrl, supabaseKey)
export const supabase = createClient(supabaseUrl, supabaseKey)
