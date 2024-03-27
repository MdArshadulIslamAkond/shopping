function updateProductNumber(product, price, isIncreasing) {
  const productInput = document.getElementById(product + "-number");
  let productNumber = parseInt(productInput.value);
  if (isIncreasing) {
    productNumber = productNumber + 1;
  } else if (productNumber > 0) {
    productNumber = productNumber - 1;
  }
  productInput.value = productNumber;
  // update total
  const productTotal = document.getElementById(product + "-total");
  productTotal.innerText = productNumber * price;
  // calculate total price for product nember
  calculateTotal();
}
function getInputValue(product) {
  const productInput = document.getElementById(product + "-number");
  const productNumber = productInput.value;
  return productNumber;
}
function calculateTotal() {
  const phoneTotal = getInputValue("phone") * 1229;
  const caseTotal = getInputValue("case") * 59;
  const subTotal = phoneTotal + caseTotal;
  const tax = (subTotal * 10) / 100;
  const totalPrice = subTotal + tax;

  // update on the html
  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax-amount").innerText = tax;
  document.getElementById("total-price").innerText = totalPrice;
}

// increase the number of phone by one
document.getElementById("phone-plus").addEventListener("click", () => {
  updateProductNumber("phone", 1229, true);
});
// decrease the number of phone by one
document.getElementById("phone-minus").addEventListener("click", () => {
  updateProductNumber("phone", 1229, false);
});

// increase the number of cases by one
document.getElementById("case-plus").addEventListener("click", () => {
  updateProductNumber("case", 59, true);
});
// decrease the number of cases by one
document.getElementById("case-minus").addEventListener("click", () => {
  updateProductNumber("case", 59, false);
});
