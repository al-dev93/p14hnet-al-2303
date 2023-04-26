/**
 * @description tests if the passed value is an object
 * @param {*} val
 * @returns boolean
 */
export default function isObject(val) {
  if (val === null) return false;
  return typeof val === "function" || typeof val === "object";
}
