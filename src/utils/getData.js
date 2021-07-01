export async function getData(numero) {
    const response = await fetch (`https://api.mercadolibre.com/sites/MLA/search?q=zapatillas&limit=${numero}`);
    const data = await response.json();
    return data.results;
  }