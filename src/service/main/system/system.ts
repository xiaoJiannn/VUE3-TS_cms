import wjRequest from "@/service";
export function getPageList(url: string, queryInfo: any) {
  return wjRequest.post({
    url: url,
    data: queryInfo,
  });
}

export function deletPageList(url: string) {
  wjRequest.delete({
    url: url,
  });
}

export function creatPageList(url: string, newData: any) {
  return wjRequest.post({
    url: url,
    data: newData,
  });
}
export function editPageList(url: string, editData: any) {
  return wjRequest.patch({
    url: url,
    data: editData,
  });
}
