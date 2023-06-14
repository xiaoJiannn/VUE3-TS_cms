export function mapPermission(userInfo: any[]) {
  const permisson: string[] = [];

  const _recursion = (userMenu: any[]) => {
    for (const item of userMenu) {
      if (item.type === 1 || item.type === 2) {
        _recursion(item.children ?? []);
      } else if (item.type === 3) {
        permisson.push(item.permission);
      }
    }
  };
  _recursion(userInfo);
  return permisson;
}
