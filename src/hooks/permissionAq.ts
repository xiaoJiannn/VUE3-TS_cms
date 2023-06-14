import { useStore } from "@/store";

export function mapPermissions(pageName: string, actions: string) {
  const store = useStore();
  const allPermission = store.state.Login.permission;
  const verfiyPermission = `system:${pageName}:${actions}`;
  return !!allPermission.find((item) => item === verfiyPermission);
}
