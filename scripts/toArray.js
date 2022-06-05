export default function toArray(obj) {
  return Object.entries(obj).map((entry) => entry[1]);
}
