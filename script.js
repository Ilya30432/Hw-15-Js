const bth = document.querySelector('.bth');
const form = document.querySelector('.form')
const productForm = document.querySelector('.form-product')
const spanName = document.querySelector('.names')
const spanNumber = document.querySelector('.number')
const spanEmail = document.querySelector('.emails')
const checkName =/^[A-Z][a-z]{1,} [A-Z][a-z]{1,} [A-Z][a-z]{1,}$/
const checkNumber = /^(?:\+\(380\)|0)\d{2}\-?\d{2}\-?\d{3}\-?\d{2}$/;
const checkEmail = /^[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]{2,}$/;



bth.addEventListener('click', function(){
    form.style.display = "block"
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  productForm.textContent = "";
  const formData = new FormData(this);
  const formObject = {};
  formData.forEach(function (value, key) {
    formObject[key] = value;
  });
  const name = formObject["name"];
  const num = formObject["number_phone"];
  const email = formObject["email"];
  function validateField(value, regex, errorClass) {
    const isValid = regex.test(value);
    if (!isValid) {
      errorClass.textContent = "invalid";
    }else{
        errorClass.textContent =""
    }
    return isValid;
  }

  if (
    validateField(name, checkName, spanName) &&
    validateField(num, checkNumber, spanNumber) &&
    validateField(email, checkEmail, spanEmail)
  ) {
    for (const key in formObject) {
      const newDiv = document.createElement("div");
      newDiv.textContent = `${key}: ${formObject[key]}`;
      productForm.appendChild(newDiv);
    }
  }
});
