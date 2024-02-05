export default function Item({ name, isPacked }) {
  return (
    <li>
      {name} {isPacked && "is Packed"}
    </li>
  );
}
