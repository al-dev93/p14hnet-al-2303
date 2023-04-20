export default function getId(label) {
  const labelLowerCase = label.toLowerCase();
  return label.includes(" ")
    ? labelLowerCase.replaceAll(" ", "-")
    : labelLowerCase;
}
