function makeGrid(id, fadeIn) {
   var gridWidth = $(id).width();
   var gridHeight = $(id).height();
   var opa = 0.75;
   if(fadeIn)
     opa = 0;

   var elements = document.createDocumentFragment(), newDiv;
   
   var cellSize = 16;
   var border = 1;
   var nRows = Math.ceil((gridHeight - 2) / (cellSize - border));
   var nCols = Math.ceil((gridWidth - 2) / (cellSize - border));
   
   var hOverlap = nCols * (cellSize - border);
   var vOverlap = nRows * (cellSize - border);
   var startX = Math.floor((gridWidth - hOverlap) / 2);
   var startY = Math.floor((gridHeight - vOverlap) / 2);
   var xpos = startX;
   var ypos = startY;
   var newColor = "#FFF";
   
   // scheme that matches logo
   // var borderColor = "#023858";
   // var borderColor = "#2B74A7"; // matches header
   // var colors = ["#023858", "#02818A", "#0470B0", "#005A8D","#3590C0"];
  
   // scheme based around header color
   // var borderColor = "#023858";
   // var borderColor = "#2B74A7"; // matches header
   // var colors = ["#72AAD1", "#498BB9", "#0D5F9A", "#074875"];
  
   // another scheme based around header color
   // var borderColor = "#023858";
   var borderColor = "#2B74A7"; // matches header
   var colors = ["#1b4a6a", "#21587e", "#266693", "#2b74a7","#3082bb", "#3990cc", "#4d9bd1"];

   // orange
   // var borderColor = "#ff960e";
   // var colors =["#ff960e","#ff9e21","#ffa735","#ffb049","#ffb85c"];
   
   // orange-ish
   // var colors = ["#FFCA84", "#FFB75A", "#F08A05", "#B76700"];

   for (var index_a = 0; index_a < nRows; index_a++) {
      for (var index_b = 0; index_b < nCols; index_b++) {
         newColor = colors[Math.floor(Math.random() * colors.length)];
         
         newDiv = document.createElement("div");
         newDiv.className = "header-grid-cell";
         newDiv.style.left = xpos + "px";
         newDiv.style.top = ypos + "px";
         newDiv.style.height = cellSize + "px";
         newDiv.style.width = cellSize + "px";
         newDiv.style.position = "absolute";
         newDiv.style.opacity = opa;
         newDiv.style.background = newColor;
         newDiv.style.border = "1px solid " + borderColor;
         elements.appendChild(newDiv);
         xpos += cellSize - border;
      }
      xpos = startX;
      ypos += cellSize - border;
   }

   $(id).append(elements);
   
   if(fadeIn) {
     $(".header-grid-cell").each(function() {
       $( this ).velocity({ opacity: 0.75 }, { duration: 3000, delay: Math.random() * 2000 });
     });
   }
}

