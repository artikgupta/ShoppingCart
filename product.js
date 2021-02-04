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
    category: "clothing",
  },
  {
    id: 3,
    productName:
      "ANNI DESIGNER Women's White Cotton Straight Calf Length Block Printed Kurti",
    img:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10207333/2020/1/31/155b774d-7497-4c66-979e-b2e3a6eec2101580472936002-W-Women-Beige-Printed-Maxi-Dress-3051580472934066-1.jpg",
    price: 1999,
    category: "clothing",
  },
  {
    id: 3,
    productName:
      "ANNI DESIGNER Women's White Cotton Straight Calf Length Block Printed Kurti",
    img:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10207425/2019/7/15/b0fd98b8-f3d2-461b-acda-18857bf0689a1563182199657-W-Women-Cream-Coloured--Gold-Toned-Maxi-Dress-91915631821984-3.jpg",
    price: 1999,
    category: "clothing",
  },
  {
    id: 3,
    productName:
      "ANNI DESIGNER Women's White Cotton Straight Calf Length Block Printed Kurti",
    img:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10207271/2019/11/18/e1fdf957-6e89-4f3d-ad24-f04650955a851574074814752-W-Women-Dresses-7321574074811809-1.jpg",
    price: 1999,
    category: "clothing",
  },
  {
    id: 4,
    productName:
      "Titan Analog Silver Dial Men's Watch NM1584SL03 / NL1584SL03 ",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/61KSI-N-AoL._UL1000_.jpg",
    price: 2500,
    category: "electronics",
  },
  {
    id: 5,
    productName:
      "Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV UA32T4340AKXXL",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71fEd9glTIL._SL1500_.jpg",
    price: 15999,
    category: "electronics",
  },
  {
    id: 6,
    productName:
      "Samsung 253L 3 Star Inverter Frost Free Double Door Refrigerator (RT28T3483S8/HL, Elegant Inox)",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71WdrLib1GL._SL1500_.jpg",
    price: 24490,
    category: "electronics",
  },
  {
    id: 7,
    productName:
      "Samsung 6.5 kg Fully-Automatic Top Loading Washing Machine (WA65A4002VS/TL, Imperial Silver, Center Jet Technology)",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51QmQjHQASL._SL1500_.jpg",
    price: 13990,
    category: "electronics",
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
    productName: "Think and Grow Rich Kindle Edition",
    img: "https://m.media-amazon.com/images/I/41lqjMzrQ-L.jpg",
    price: 234,
    category: "books",
  },
  {
    id: 10,
    productName:
      "Ikigai: The Japanese secret to a long and happy life Hardcover – 27",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51T8OXMiB5L._SX356_BO1,204,203,200_.jpg",
    price: 306,
    category: "books",
  },
  {
    id: 11,
    productName:
      "The Theory of Everything: The Origin and Fate of the Universe",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51oHUvYzbsL._SX327_BO1,204,203,200_.jpg",
    price: 306,
    category: "books",
  },
  {
    id: 12,
    productName: "Sparx Mens Sd0323g Sneakers",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51g6S2XoAcL._UL1110_.jpg",
    price: 999,
    category: "footwears",
  },
  {
    id: 13,
    productName: "T-Rock Men's Running Shoes",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51OVgAIoKoL._UL1062_.jpg",
    price: 999,
    category: "footwears",
  },
  {
    id: 14,
    productName: "ASIAN Men's Running Shoes",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51xucW27TlL._UL1100_.jpg",
    price: 999,
    category: "footwears",
  },
];

function getProduct() {
  const id = window.location.search.split("=")[1];

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
