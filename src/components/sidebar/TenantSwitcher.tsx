import * as React from "react"
import { ChevronsUpDown, Plus } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTenant } from "@/contexts/TenantContext"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TenantSwitcher() {
  const { currentTenant, tenants, setTenant } = useTenant();

  if (!currentTenant) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="w-full flex items-center gap-2 p-2 hover:bg-sidebar-accent rounded-md transition-colors outline-none">
          <Avatar className="h-8 w-8 rounded-lg border">
            <AvatarImage src={currentTenant.avatarUrl} alt={currentTenant.name} />
            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">{currentTenant.name}</span>
            <span className="truncate text-xs text-muted-foreground">Plano Pro</span>
          </div>
          <ChevronsUpDown className="ml-auto size-4 text-muted-foreground" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
        align="start"
        sideOffset={4}
      >
        <DropdownMenuLabel className="text-xs text-muted-foreground">
          Empresas Vinculadas
        </DropdownMenuLabel>
        {tenants.map((tenant) => (
          <DropdownMenuItem
            key={tenant.id}
            onClick={() => setTenant(tenant)}
            className="gap-2 p-2 cursor-pointer"
          >
            <Avatar className="size-6 rounded-sm border">
              <AvatarImage src={tenant.avatarUrl} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {tenant.name}
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2 p-2 cursor-pointer text-muted-foreground">
          <div className="flex size-6 items-center justify-center rounded-md border bg-background">
            <Plus className="size-4" />
          </div>
          <div className="font-medium text-muted-foreground">Adicionar empresa</div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
