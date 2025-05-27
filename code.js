//registering service worksrs
let deferredPrompt;
const installBtn = document.createElement('button');
installBtn.textContent = "Install SHELD";
installBtn.style.position = 'fixed';
installBtn.style.bottom = '20px';
installBtn.style.right = '20px';
installBtn.style.padding = '10px';
installBtn.style.zIndex = '1000';
installBtn.style.display = 'none';
document.body.appendChild(installBtn);

// Listen for the install event
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.style.display = 'block';

  installBtn.addEventListener('click', () => {
    installBtn.style.display = 'none';
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(choice => {
      if (choice.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
  });
});




let textbox1=document.getElementById("textbox1");
let textbox2=document.getElementById("textbox2");
let paste_but=document.getElementById("paste_button");
let copy_but=document.getElementById("copy_button");
let web_but=document.getElementById("web_button");
let key=document.getElementById("myrange");
paste_but.onclick=()=>{ //paste button
    paste_clip( );
                      };
copy_but.onclick=()=>{  //copy button
    copy_clip( );
                      };
copy_clip=async( )=>{   //copy function
    try {
     await navigator.clipboard.writeText(textbox2.value)
     alert("copied")
        }   
     catch (error)
     {console.log(error)};
     };
paste_clip=async( )=>{   //paste function
    try {
     textbox1.value=await navigator.clipboard.readText()
     alert("pasted")
        }   
     catch (error)
     {console.log(error)};
     };
// generate
let generate_but=document.getElementById("generate_button");
generate_but.onclick=()=>{ // Generate function
    //checking the msg enscripted or descripted
    if(key.value!=0){
        alert("Select the correct key from bottom of page")}
    else{               
    if(textbox1.value[textbox1.value.length-1]=="*")
    {De_scription();}  //code msg
    else
    {Enscription();}; //Normal msg
                         }};
                        
Enscription=()=>{ 
    str=textbox1.value;
    str1="";
    str2="";
    if(str.length%2!=0){str=str+"*"} //making even length
    for(i=0;i<(str.length)/2;i++){
        str1=str1+`${str[2*i]}`     //evens
        str2=str2+`${str[2*i+1]}`   //odds
};
    Enscript=str1+str2
    if(Enscript[str.length-1]!="*"){Enscript=Enscript+"*"} // adding star for even strings to know they are encoded one
    console.log(str1);  
    console.log(str2);
    console.log(Enscript);
    // sending encoded msg to output box
    textbox2.value=Enscript;
}
De_scription=()=>{
    str=textbox1.value;
    half=(str.length/2);
    str1=str.slice(0,half);
    str2=str.slice(half,str.length);
    str3="";
    console.log(str);
    if(str.length%2!=0){half=half-1};
    for(i=0;i<half;i++){
        char=str1[i]+str2[i];
        str3=str3+`${char}`;       
}; 
    if(str3[str3.length-1]=="*"){str3=str3.slice(0,str3.length-1)}; //removing star
    De_scripted=str3;
    console.log(De_scripted);
    // sending encoded msg to output box
    textbox2.value=De_scripted;
}
//web link
web_but.onclick=()=>{
    location.href =textbox2.value;
}


