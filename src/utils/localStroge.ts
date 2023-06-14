class Stroge {
  setUserAccount(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  getUserAcount(key: string) {
    const userVaule = window.localStorage.getItem(key);
    if (userVaule) {
      return JSON.parse(userVaule);
    }
  }
  deleteUserAcount(key: string) {
    window.localStorage.removeItem(key);
  }
}

export default new Stroge();
