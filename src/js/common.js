// Hiển thị ra ngoài màn hình
export function render(element, content) {
    // nếu tìm được element thì hiển thị
    const elementID=document.getElementById(element);
    if (!element) return;
        elementID.innerHTML = content;
}