export async function getData(category = 'zapatillas') {
    const response = await fetch (`https://api.mercadolibre.com/sites/MLA/search?q=${category}`);
    const data = await response.json();
    return data.results;
  }