// Створи функцію joinArgs(), яка приймає будь-які значення
// і повертає рядок, де вони з’єднані через пробіл (' ').

function joinArgs() {
  return Array.from(arguments).join(" ");
}

console.log(joinArgs("I", "love", "JS")); // "I love JS"
