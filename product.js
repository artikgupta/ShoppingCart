products = [
  {
    id: 1,
    productName:
      "OnePlus Bullets wirelessZ in-Ear Bluetooth Earphones with Mic ",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/616bhfyXimL._SL1500_.jpg",
    price: 1999,
    category: "electronics",
  },
  {
    id: 2,
    productName: "Redmi Note Pro(Intersteller Black,4GB RAM,64GB Storage) ",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81RfhJpIjAL._SL1500_.jpg",
    price: 12999,
    category: "electronics",
  },
  {
    id: 3,
    productName:
      "ANNI DESIGNER Women's White Cotton Straight Calf Length Block Printed Kurti",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/815Fh00eWDL._UX679_.jpg",
    price: 1999,
    category: "Kurti",
  },
  {
    id: 4,
    productName:
      "Titan Analog Silver Dial Men's Watch NM1584SL03 / NL1584SL03 ",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/61KSI-N-AoL._UL1000_.jpg",
    price: 2500,
    category: "Watch",
  },
  {
    id: 5,
    productName:
      "Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV UA32T4340AKXXL",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71fEd9glTIL._SL1500_.jpg",
    price: 15999,
    category: "Television",
  },
  {
    id: 6,
    productName:
      "Samsung 253L 3 Star Inverter Frost Free Double Door Refrigerator (RT28T3483S8/HL, Elegant Inox)",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71WdrLib1GL._SL1500_.jpg",
    price: 24490,
    category: "Refigerator",
  },
  {
    id: 7,
    productName:
      "Samsung 6.5 kg Fully-Automatic Top Loading Washing Machine (WA65A4002VS/TL, Imperial Silver, Center Jet Technology)",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51QmQjHQASL._SL1500_.jpg",
    price: 13990,
    category: "Washing Machine",
  },
  {
    id: 8,
    productName:
      "American Tourister Jamaica Polyester 80 cms Wine Red Softsided Suitcase (27O (0) 70 003) ",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71qQrajUDeL._SL1500_.jpg",
    price: 4699,
    category: "Suitcase",
  },
  {
    id: 9,
    productName:
      "Ikigai: The Japanese secret to a long and happy life Hardcover – 27",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51T8OXMiB5L._SX356_BO1,204,203,200_.jpg",
    price: 306,
    category: "books",
  },
  {
    id: 10,
    productName: "Sparx Mens Sd0323g Sneakers",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51g6S2XoAcL._UL1110_.jpg",
    price: 999,
    category: "Shoes",
  },
];

function getProduct() {
  const id = window.location.search
    .split("")
    .filter((v) => Number(v))
    .join(""); //returns a  string
  console.log(id);
  const product = products.find((val) => val.id == id); // returns an object
  return product;
}

(function createUI() {
  const product = getProduct();
  document.getElementById("name").innerHTML = product.productName;
  document.getElementById("productImg").setAttribute("src", product.img);
  document.getElementById("price").innerHTML = `Price:${product.price}`;
})();

let cartIcon = document.querySelector(".icon");

cartIcon.addEventListener("click", () => {
  const product = getProduct();
  alert("Your product has been added to the cart");
  console.log(product);
});
