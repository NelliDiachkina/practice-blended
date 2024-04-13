async function fetchRecipes() {
  try {
    const response = await fetch('https://dummyjson.com/recipes');
    if (!response.ok) {
      throw new Error('response is not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function getData() {
  try {
    const recipes = await fetchRecipes();
  } catch (error) {}
}

getData();
