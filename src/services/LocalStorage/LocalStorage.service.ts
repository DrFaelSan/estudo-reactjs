export const LocalStorage = {
  get(key:string) {
    console.log("Key : ",key);
  },

  set(key: string, value: any) {
    console.log("Key : ",key);
    console.log("Value : ",value);
  },
  remove(key: string) {
    console.log("Key : ",key);
  },
  clear() {}
}