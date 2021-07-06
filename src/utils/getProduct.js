
export async function getProduct(id) {
    const response = await fetch (`https://api.mercadolibre.com/items/${id}`);
    const data = await response.json();
    return data;
  }