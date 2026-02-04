/**
 * @description Copy text to clipboard
 */

export const clipboard = (text: string) => navigator.clipboard.writeText(text)
