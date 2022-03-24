let data = JSON.parse(localStorage.getItem("properties"));

let sum = data.reduce(
  (accumulator, data) => accumulator + parseInt(data.price),
  0
);

export default function Print() {
  return <main> {(window.onload = sum)} </main>;
}
