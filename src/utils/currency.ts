import { type Ref, toValue } from 'vue'

export function formatBRL (value: number | Ref): string {
  return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(toValue(value))
}
