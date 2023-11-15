import { EffectCallback, useEffect } from "react";

/**
 * Executa a função `callback` durante a montagem do componente.
 * Opcionalmente, a função `callback` pode retornar uma função 
 * que será executada quando o componente for desmontado.
 * @param callback função que será executada
 */
export function useMount(callback: EffectCallback) {
 useEffect(callback, [callback]);
}