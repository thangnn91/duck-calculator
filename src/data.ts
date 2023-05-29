import { KeyProps } from './components/Keypad'

export const keys: KeyProps[] = [
  { label: 7, action: 'number', color: 'standard', keycode: 55 },
  { label: 8, action: 'number', color: 'standard', keycode: 56 },
  { label: 9, action: 'number', color: 'standard', keycode: 57 },
  { label: 'DEL', action: 'delete', color: 'mark', keycode: 46 },

  { label: 4, action: 'number', color: 'standard', keycode: 52 },
  { label: 5, action: 'number', color: 'standard', keycode: 53 },
  { label: 6, action: 'number', color: 'standard', keycode: 54 },
  { label: '+', action: 'add', color: 'standard', keycode: 187 },

  { label: 1, action: 'number', color: 'standard', keycode: 49 },
  { label: 2, action: 'number', color: 'standard', keycode: 50 },
  { label: 3, action: 'number', color: 'standard', keycode: 51 },
  { label: '-', action: 'subtract', color: 'standard', keycode: 189 },

  { label: '.', action: 'decimal', color: 'standard', keycode: 190 },
  { label: 0, action: 'number', color: 'standard', keycode: 48 },
  { label: '/', action: 'divide', color: 'standard', keycode: 191 },
  { label: 'x', action: 'multiply', color: 'standard', keycode: 56 },

  { label: 'RESET', action: 'reset', color: 'mark', span: true, keycode: 0 },
  { label: '=', action: 'calculate', color: 'red', span: true, keycode: 187 },
]

export const keyAliases = {
  BackspaceKD: "Backspace",
  DeleteKD: "Delete",
  Delete: "DEL",
  EqualKD: "=",
  EightKD: "8",
  Add: "+",
  Mul: "x"
}
