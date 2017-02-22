const MENU_CHANGE = "MENU_CHANGE";

export function changeMenu(name)
{
  return { type: MENU_CHANGE, name}
}
