
import { render } from "./common";
import { productList} from "./data";
import { postProductList } from "./data";
import { workProductList } from "./data";
import { blogProductList } from "./data";
function showProducts(products) {
    if (!Array.isArray(productList) || productList.length == 0) return [];
    let result = "";
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        result += `      
                    <div class="grid md:grid-cols-3">
                        <div class="order-2 md:col-span-2  md:order-1">
                            <h2 class=" text-6xl font-bold mb-14 text-center md:text-left">Hi, ${product.name},<br>
                                ${product.address}</h2>
                            <p class="mb-14 mt-4 text-center md:text-left">${product.description}</p>
                            <a href="#" class=" inline-block text-white bg-[#FF6464] border rounded-md px-5 py-3 ">Download Resume</a>
                        </div>
                        <div class=" order-1 md:col-span-1  md:order-2">
                        <a href="" class=""><img src="${product.img}" class="rounded-full md:ml-auto mx-auto" alt=""></a>
                    </div>
                    </div>
        `;
    }
    return result;
}
function showPost(postProducts){
    if(!Array.isArray(postProductList) || postProductList.length==0) return [];
    let result="";
    for (let i=0;i<postProducts.length;i++){
    const postProduct=postProducts[i];
    result+=`
    <div class="bg-white p-5 mt-4">
                        <h3 class="font-bold text-[38.19px] mb-5">
                           ${postProduct.title}
                        </h3>
                        <div>
                            <span class="text-[30px]">${postProduct.date} | ${postProduct.shortDescription}</span>
                        </div>
                        <p class="text-[30px]">${postProduct.description}</p>
                    </div>
                
    `
    }
    return result;
}
function showWork(workProducts){
    if(!Array.isArray(workProductList) || workProductList.length==0) return [];
    let result="";
    for (let i=0;i<workProducts.length;i++){
    const workProduct=workProducts[i];
    result+=`
     <div class=""><a href="#"><img src="${workProduct.img}" class="w-full" alt=""></a>
                </div>
                <div class="">
                    <h3 class="font-bold text-[30px]">${workProduct.title}</h3>
                    <div class="flex space-x-4 items-center">
                        <span class="inline-block bg-[#142850] py-1 px-2 font-bold text-white rounded-full">${workProduct.date}</span>
                        <span class="text-[#8695A4]">${workProduct.shortDescription}</span>
                    </div>
                    <p>${workProduct.description}</p>
                </div>
    `
    }
    return result;
}

function showBlog(blogProducts){
    if(!Array.isArray(blogProductList) || blogProductList.length==0) return [];
    let result="";
    for (let i=0;i<blogProducts.length;i++){
    const blogProduct=blogProducts[i];
    result+=`
    <a href=""> <span class="text-[30px] font-bold">${blogProduct.title}</span></a>
    <div class="">
        <div class="flex space-x-4 items-center">
            <span
                class="inline-block py-1 pr-1.5 ">${blogProduct.date}</span>|
            <span class="text-[#8695A4]">${blogProduct.shortDescription}</span>
        </div>
        <p>${blogProduct.description}</p>
    </div>
    `
    }
    return result;
}

render("product",showProducts(productList));
render("postProduct",showPost(postProductList));
render("workProduct",showWork(workProductList));
render("blogProduct",showBlog(blogProductList));
