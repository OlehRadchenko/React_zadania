function ProductList() {
  let products = [
    {name:  "Product A", price: "$10"},
    {name: "Product B", price: "$20"},
    {name: "Poduct C", price: "$30"}
  ];
  
  return (
    <div>
    <h1>ZADANIE 1</h1> 
    <p>Stwórz prosty komponent React o nazwie ProductList, który renderuje listę produktów. Każdy produkt powinien mieć nazwę i cenę.</p>
    <h2>Lista Produktów</h2>
    <ul>
      {products.map((product, index) => (
        <li key={index}>
          {product.name} - {product.price}
        </li>
      ))}
    </ul>
  </div>
  );
}

export default ProductList;