const formData = {
    email: "",
    message: ""
};

const form = document.querySelector(".feedback-form");
const localStorageKey = "form-state";

const savedData = localStorage.getItem(localStorageKey);
if (savedData) { 
  Object.assign(formData, JSON.parse(savedData));
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener("input", (evt) => {
  formData[evt.target.name] = evt.target.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));

});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  if (!formData.email || !formData.message) { 
    alert("Please fill in all fileds!");
    return;
  }
  
  localStorage.removeItem(localStorageKey);
  formData.email = "";
  formData.message = "";
  form.reset();
});

