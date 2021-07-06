export default function createButton(name) {
  const button = document.createElement('button');
  button.className = 'button';
  button.innerHTML = name;

  document.body.append(button);
  console.log(button)
}
