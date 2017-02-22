export const MENU_CHANGE = "MENU_CHANGE";

export function menuChange(name,path)
{
  console.log('MenuChange',name + path);
  return { type: MENU_CHANGE, name: name, path: path }
}
