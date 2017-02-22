export const LOAD_MENU = "LOAD_MENU"

export function loadSettingsMenu()
{
  return { type: LOAD_MENU, name: "Settings", path: "/settings" }
}

export function loadHomeMenu()
{
  return { type: LOAD_MENU, name: "Home", path: "/home" }
}
