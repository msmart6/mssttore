import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const productList = document.getElementById("productList");

async function loadProducts() {
  const querySnapshot = await getDocs(collection(db, "products"));

  querySnapshot.forEach((doc) => {
    const p = doc.data();

    productList.innerHTML += `
      <div class="product-card">
        <img src="${p.image}" />

        <h4>${p.name}</h4>
        <p>₹${p.price}</p>

        <div class="add-btn">Add to Cart</div>
      </div>
    `;
  });
}

loadProducts();
n