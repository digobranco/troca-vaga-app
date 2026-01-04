import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Tenant } from '../types';

interface TenantContextType {
  currentTenant: Tenant | null;
  setTenant: (tenant: Tenant) => void;
  tenants: Tenant[]; // Lista de empresas que o usuário tem acesso
}

const TenantContext = createContext<TenantContextType | undefined>(undefined);

// DADOS MOCKADOS (Para simular o backend por enquanto)
const MOCK_TENANTS: Tenant[] = [
  { id: '1', name: 'Studio Pilates Vida', slug: 'studio-vida', avatarUrl: 'https://github.com/shadcn.png' },
  { id: '2', name: 'Crossfit Iron', slug: 'crossfit-iron', avatarUrl: 'https://github.com/vercel.png' },
];

export function TenantProvider({ children }: { children: React.ReactNode }) {
  const [currentTenant, setCurrentTenant] = useState<Tenant | null>(null);
  const [tenants] = useState<Tenant[]>(MOCK_TENANTS);

  // Carregar do LocalStorage ao iniciar (persistência)
  useEffect(() => {
    const storedTenantId = localStorage.getItem('active_tenant_id');
    if (storedTenantId) {
      const found = tenants.find(t => t.id === storedTenantId);
      if (found) setCurrentTenant(found);
    } else if (tenants.length > 0) {
      // Se não tiver nenhum selecionado, seleciona o primeiro
      handleSetTenant(tenants[0]);
    }
  }, [tenants]);

  const handleSetTenant = (tenant: Tenant) => {
    setCurrentTenant(tenant);
    localStorage.setItem('active_tenant_id', tenant.id);
  };

  return (
    <TenantContext.Provider value={{ currentTenant, setTenant: handleSetTenant, tenants }}>
      {children}
    </TenantContext.Provider>
  );
}

export const useTenant = () => {
  const context = useContext(TenantContext);
  if (!context) throw new Error('useTenant deve ser usado dentro de um TenantProvider');
  return context;
};
