export async function getData(category) {
    category = (typeof category !== 'undefined') ?  category : 'zapatillas'
    const response = await fetch (`https://api.mercadolibre.com/sites/MLA/search?q=${category}`);
    const data = await response.json();
    return data.results;
  }