console.log('Currentfile: Updated Meme Generator');
let img = document.getElementsByTagName('imageurl');
let form = document.querySelector('form');

form.addEventListener('submit', function(e) {
      e.preventDefault();
      let meme = document.createElement("div");
      let textAtTheTop = document.createElement("div");
      let textAtTheBottom = document.createElement("div");
      let img = document.createElement("img");
      
      let btn = document.createElement("button");
      btn.setAttribute("type","button");
      
      img.src = document.getElementById('imageurl').value;
      textAtTheTop.classList.add("toptext");
      textAtTheTop.innerHTML = document.getElementById('toptext').value;
      
      textAtTheBottom.classList.add("bottomtext");
      textAtTheBottom.innerHTML = document.getElementById('bottomtext').value;
      
      btn.innerHTML = "REMOVE";
      
      meme.classList.add("meme");
      meme.appendChild(textAtTheTop);
      meme.appendChild(textAtTheBottom);
      meme.appendChild(img);
      meme.appendChild(btn);
      
      let memeLocation = document.getElementById('location');
      memeLocation.appendChild(meme);

      document.getElementById('imageurl').value = "";
      document.getElementById('toptext').value = "";
      document.getElementById('bottomtext').value = "";

      btn.addEventListener('click', function(e) {
          meme.remove();
      })
});