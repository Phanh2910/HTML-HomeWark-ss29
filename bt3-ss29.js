let dishes = { main: [], drinks: [], desserts: [] };

const menu = `
1. Add a dish
2. Remove a dish
3. Update dish details
4. Display menu
5. Search for a dish
6. Exit
Enter your choice:`;

function addDish() {
  const categories = ["main", "drinks", "desserts"];
  let category = categories[+prompt("Choose category: 1. Main 2. Drinks 3. Desserts") - 1];
  if (category) {
    let name = prompt("Dish name:");
    let price = +prompt("Price:");
    let description = prompt("Description:");
    dishes[category].push({ name, price, description });
  } else {
    alert("Invalid category!");
  }
}

function removeDish() {
  const categories = ["main", "drinks", "desserts"];
  let category = categories[+prompt("Choose category: 1. Main 2. Drinks 3. Desserts") - 1];
  let name = prompt("Dish name to remove:");
  if (category) {
    let index = dishes[category].findIndex(dish => dish.name === name);
    if (index >= 0) {
      dishes[category].splice(index, 1);
      alert(`${name} removed successfully!`);
    } else {
      alert(`${name} not found!`);
    }
  } else {
    alert("Invalid category!");
  }
}

function updateDish() {
  const categories = ["main", "drinks", "desserts"];
  let category = categories[+prompt("Choose category: 1. Main 2. Drinks 3. Desserts") - 1];
  let name = prompt("Dish name to update:");
  if (category) {
    let dish = dishes[category].find(dish => dish.name === name);
    if (dish) {
      dish.name = prompt("New name:", dish.name);
      dish.price = +prompt("New price:", dish.price);
      dish.description = prompt("New description:", dish.description);
      alert(`${name} updated successfully!`);
    } else {
      alert(`${name} not found!`);
    }
  } else {
    alert("Invalid category!");
  }
}

function displayMenu() {
  Object.keys(dishes).forEach(category => {
    console.log(`Category: ${category}`);
    dishes[category].forEach((dish, i) => console.log(`${i + 1}. ${dish.name} - $${dish.price} (${dish.description})`));
  });
}

function searchDish() {
  let name = prompt("Dish name to search:");
  let results = [];
  Object.keys(dishes).forEach(category => {
    results = [...results, ...dishes[category].filter(dish => dish.name === name)];
  });
  results.length
    ? console.log("Search Results:", results)
    : alert(`${name} not found!`);
}

(function main() {
  let choice;
  while (choice !== 6) {
    choice = +prompt(menu);
    switch (choice) {
      case 1: addDish(); break;
      case 2: removeDish(); break;
      case 3: updateDish(); break;
      case 4: displayMenu(); break;
      case 5: searchDish(); break;
      case 6: alert("Goodbye!"); break;
      default: alert("Invalid choice!");
    }
  }
})();
