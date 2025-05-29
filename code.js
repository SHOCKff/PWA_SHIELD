// Registering Service Worker
document.addEventListener('DOMContentLoaded', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/PWA_SHEILD/sw.js', { scope: '/PWA_SHEILD/' })
      .then(() => {
        console.log('✅ Service Worker registered');
        alert("✅ SHELD is ready! You can install it from the browser menu (3 dots → Add to Home screen).");
      })
      .catch(error => console.error('❌ Service Worker registration failed:', error));
  } else {
    console.log('❌ Service Worker not supported in this browser');
  }
});

// Clipboard and UI logic
let textbox1 = document.getElementById("textbox1");
let textbox2 = document.getElementById("textbox2");
let paste_but = document.getElementById("paste_button");
let copy_but = document.getElementById("copy_button");
let web_but = document.getElementById("web_button");
let key = document.getElementById("myrange");

paste_but.onclick = () => {
  paste_clip();
};

copy_but.onclick = () => {
  copy_clip();
};

const copy_clip = async () => {
  try {
    await navigator.clipboard.writeText(textbox2.value);
    alert("Copied");
  } catch (error) {
    console.log(error);
  }
};

const paste_clip = async () => {
  try {
    textbox1.value = await navigator.clipboard.readText();
    alert("Pasted");
  } catch (error) {
    console.log(error);
  }
};

// Generate
let generate_but = document.getElementById("generate_button");
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

const Enscription = () => {
  let str = textbox1.value;
  let str1 = "";
  let str2 = "";
  if (str.length % 2 != 0) str += "*";
  for (let i = 0; i < str.length / 2; i++) {
    str1 += str[2 * i];
    str2 += str[2 * i + 1];
  }
  let Enscript = str1 + str2;
  if (Enscript[str.length - 1] != "*") Enscript += "*";
  textbox2.value = Enscript;
};

const De_scription = () => {
  let str = textbox1.value;
  let half = str.length / 2;
  let str1 = str.slice(0, half);
  let str2 = str.slice(half);
  let str3 = "";
  if (str.length % 2 != 0) half -= 1;
  for (let i = 0; i < half; i++) {
    str3 += str1[i] + str2[i];
  }
  if (str3[str3.length - 1] == "*") str3 = str3.slice(0, -1);
  textbox2.value = str3;
};

web_but.onclick = () => {
  location.href = textbox2.value;
};
