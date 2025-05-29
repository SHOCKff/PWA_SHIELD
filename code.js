// Registering service workers
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/PWA_SHEILD/sw.js', { scope: '/PWA_SHEILD/' })
    .then(() => console.log('✅ Service Worker registered'))
    .catch(error => console.error('❌ Service Worker registration failed:', error));
}

// Element references
let textbox1 = document.getElementById("textbox1");
let textbox2 = document.getElementById("textbox2");
let paste_but = document.getElementById("paste_button");
let copy_but = document.getElementById("copy_button");
let web_but = document.getElementById("web_button");
let key = document.getElementById("myrange");
let generate_but = document.getElementById("generate_button");

// Paste button
paste_but.onclick = () => {
  paste_clip();
};

// Copy button
copy_but.onclick = () => {
  copy_clip();
};

// Copy function
async function copy_clip() {
  try {
    await navigator.clipboard.writeText(textbox2.value);
    alert("copied");
  } catch (error) {
    console.log(error);
  }
}

// Paste function
async function paste_clip() {
  try {
    textbox1.value = await navigator.clipboard.readText();
    alert("pasted");
  } catch (error) {
    console.log(error);
  }
}

// Generate button
generate_but.onclick = () => {
  if (key.value != 0) {
    alert("Select the correct key from bottom of page");
  } else {
    if (textbox1.value[textbox1.value.length - 1] == "*") {
      De_scription();
    } else {
      Enscription();
    }
  }
};

// Encryption function
function Enscription() {
  let str = textbox1.value;
  let str1 = "";
  let str2 = "";

  if (str.length % 2 != 0) {
    str += "*";
  }

  for (let i = 0; i < str.length / 2; i++) {
    str1 += str[2 * i];
    str2 += str[2 * i + 1];
  }

  let Enscript = str1 + str2;

  if (Enscript[str.length - 1] != "*") {
    Enscript += "*";
  }

  console.log(str1);
  console.log(str2);
  console.log(Enscript);

  textbox2.value = Enscript;
}

// Decryption function
function De_scription() {
  let str = textbox1.value;
  let half = str.length / 2;
  let str1 = str.slice(0, half);
  let str2 = str.slice(half);
  let str3 = "";

  if (str.length % 2 != 0) {
    half--;
  }

  for (let i = 0; i < half; i++) {
    str3 += str1[i] + str2[i];
  }

  if (str3[str3.length - 1] == "*") {
    str3 = str3.slice(0, -1);
  }

  let De_scripted = str3;
  console.log(De_scripted);

  textbox2.value = De_scripted;
}

// Web search / link navigation
web_but.onclick = () => {
  location.href = textbox2.value;
};
