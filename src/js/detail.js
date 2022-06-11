// import { render } from "./common";
// import { productList } from "./data";

// // lấy được id trên url
// const id = new URLSearchParams(window.location.search).get("id");

// // Tim trong mang, neu co id nao trung voi id trong mang thi tra ve ket qua
// console.log("id", id);
// const product = productList.find((item) => item.id == id);
// console.log("product", product);
// const result = `
// <div class="hover:shadow-lg mb-3">
// <a href=""><img src="${product.img}" class="w-full" alt=""></a>
// <p class=" font-bold py-5">${product.name}</p>
// <span class="text-[#F54748] leading-[24px] font-bold">$30</span>
// <button
//         class=" w-full p-2 rounded-md bg-black px-6 text-white cursor-pointer mt-3">Add To Cart</button>
// </div>
// `;
// render("product-detail", result);

import { render } from "./common";
import { productList } from "./data";

// lấy được id trên url
const id = new URLSearchParams(window.location.search).get("id");

// Tim trong mang, neu co id nao trung voi id trong mang thi tra ve ket qua
console.log("id", id);
const product = productList.find((item) => item.id == id);
console.log("product", product);
const result = `
    <div>
        <h2>${product.name}</h2>
        <p>Mo ta san pham</p>
        <form action=""></form>
        </div>
        <div>img</div>
`;
render("product-detail", result);