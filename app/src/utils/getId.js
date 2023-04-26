/**
 * @description convert strings used for table column names to camelcase format strings
 * @param {string} label
 * @returns formatted string in camelcase
 */
export default function getId(label) {
  const labelLowerCase = label.toLowerCase();
  return label.includes(" ")
    ? labelLowerCase.replaceAll(" ", "-")
    : labelLowerCase;
}
