function firstvaccine(percentage, size, color) { 
    var svgns = "http://www.w3.org/2000/svg";
    var chart = document.createElementNS(svgns, "svg:svg");
    chart.setAttribute("width", size);
    chart.setAttribute("height", size);
    chart.setAttribute("viewBox", "0 0 " + size + " " + size);
    // Background circle
    var back = document.createElementNS(svgns, "circle");
    back.setAttributeNS(null, "cx", size / 2);
    back.setAttributeNS(null, "cy", size / 2);
    back.setAttributeNS(null, "r",  size / 2);
    color = "#d0d0d0";
    if (size > 50) { 
        color = "#ebebeb";
    }
    back.setAttributeNS(null, "fill", color);
    chart.appendChild(back);
    
    // primary wedge
    var path = document.createElementNS(svgns, "path");
    var unit = (Math.PI *2) / 100;    
    var startangle = 0;
    var endangle = percentage * unit - 0.001;
    var x1 = (size / 2) + (size / 2) * Math.sin(startangle);
    var y1 = (size / 2) - (size / 2) * Math.cos(startangle);
    var x2 = (size / 2) + (size / 2) * Math.sin(endangle);
    var y2 = (size / 2) - (size / 2) * Math.cos(endangle);
    var big = 0;
    if (endangle - startangle > Math.PI) {
        big = 1;
    }
    var d = "M " + (size / 2) + "," + (size / 2) +  // Start at circle center
        " L " + x1 + "," + y1 +     // Draw line to (x1,y1)
        " A " + (size / 2) + "," + (size / 2) +       // Draw an arc of radius r
        " 0 " + big + " 1 " +       // Arc details...
        x2 + "," + y2 +             // Arc goes to to (x2,y2)
        " Z";                       // Close path back to (cx,cy)
    //console.log(d);
    path.setAttribute("d", d); // Set this path 
    path.setAttribute("fill", '#98792d');
    chart.appendChild(path); // Add wedge to chart
    
    
    // foreground circle
    var front = document.createElementNS(svgns, "circle");
    front.setAttributeNS(null, "cx", (size / 2));
    front.setAttributeNS(null, "cy", (size / 2));
    front.setAttributeNS(null, "r",  (size * 0.40)); //about 34% as big as back circle 
    front.setAttributeNS(null, "fill", "#fff");
    chart.appendChild(front);
    return chart;
}


function secondvaccine(percentage, size, color) { 
    var svgns = "http://www.w3.org/2000/svg";
    var chart = document.createElementNS(svgns, "svg:svg");
    chart.setAttribute("width", size);
    chart.setAttribute("height", size);
    chart.setAttribute("viewBox", "0 0 " + size + " " + size);
    // Background circle
    var back = document.createElementNS(svgns, "circle");
    back.setAttributeNS(null, "cx", size / 2);
    back.setAttributeNS(null, "cy", size / 2);
    back.setAttributeNS(null, "r",  size / 2);
    color = "#d0d0d0";
    if (size > 50) { 
        color = "#ebebeb";
    }
    back.setAttributeNS(null, "fill", color);
    chart.appendChild(back);
    
    // primary wedge
    var path = document.createElementNS(svgns, "path");
    var unit = (Math.PI *2) / 100;    
    var startangle = 0;
    var endangle = percentage * unit - 0.001;
    var x1 = (size / 2) + (size / 2) * Math.sin(startangle);
    var y1 = (size / 2) - (size / 2) * Math.cos(startangle);
    var x2 = (size / 2) + (size / 2) * Math.sin(endangle);
    var y2 = (size / 2) - (size / 2) * Math.cos(endangle);
    var big = 0;
    if (endangle - startangle > Math.PI) {
        big = 1;
    }
    var d = "M " + (size / 2) + "," + (size / 2) +  // Start at circle center
        " L " + x1 + "," + y1 +     // Draw line to (x1,y1)
        " A " + (size / 2) + "," + (size / 2) +       // Draw an arc of radius r
        " 0 " + big + " 1 " +       // Arc details...
        x2 + "," + y2 +             // Arc goes to to (x2,y2)
        " Z";                       // Close path back to (cx,cy)
   // console.log(d);
    path.setAttribute("d", d); // Set this path 
    path.setAttribute("fill", '#ec5d5d');
    chart.appendChild(path); // Add wedge to chart
    
    
    // foreground circle
    var front = document.createElementNS(svgns, "circle");
    front.setAttributeNS(null, "cx", (size / 2));
    front.setAttributeNS(null, "cy", (size / 2));
    front.setAttributeNS(null, "r",  (size * 0.40)); //about 34% as big as back circle 
    front.setAttributeNS(null, "fill", "#fff");
    chart.appendChild(front);
    return chart;
}


function thridvaccine(percentage, size, color) { 
    var svgns = "http://www.w3.org/2000/svg";
    var chart = document.createElementNS(svgns, "svg:svg");
    chart.setAttribute("width", size);
    chart.setAttribute("height", size);
    chart.setAttribute("viewBox", "0 0 " + size + " " + size);
    // Background circle
    var back = document.createElementNS(svgns, "circle");
    back.setAttributeNS(null, "cx", size / 2);
    back.setAttributeNS(null, "cy", size / 2);
    back.setAttributeNS(null, "r",  size / 2);
    color = "#d0d0d0";
    if (size > 50) { 
        color = "#ebebeb";
    }
    back.setAttributeNS(null, "fill", color);
    chart.appendChild(back);
    
    // primary wedge
    var path = document.createElementNS(svgns, "path");
    var unit = (Math.PI *2) / 100;    
    var startangle = 0;
    var endangle = percentage * unit - 0.001;
    var x1 = (size / 2) + (size / 2) * Math.sin(startangle);
    var y1 = (size / 2) - (size / 2) * Math.cos(startangle);
    var x2 = (size / 2) + (size / 2) * Math.sin(endangle);
    var y2 = (size / 2) - (size / 2) * Math.cos(endangle);
    var big = 0;
    if (endangle - startangle > Math.PI) {
        big = 1;
    }
    var d = "M " + (size / 2) + "," + (size / 2) +  // Start at circle center
        " L " + x1 + "," + y1 +     // Draw line to (x1,y1)
        " A " + (size / 2) + "," + (size / 2) +       // Draw an arc of radius r
        " 0 " + big + " 1 " +       // Arc details...
        x2 + "," + y2 +             // Arc goes to to (x2,y2)
        " Z";                       // Close path back to (cx,cy)
    //console.log(d);
    path.setAttribute("d", d); // Set this path 
    path.setAttribute("fill", '#7abe96');
    chart.appendChild(path); // Add wedge to chart
    
    
    // foreground circle
    var front = document.createElementNS(svgns, "circle");
    front.setAttributeNS(null, "cx", (size / 2));
    front.setAttributeNS(null, "cy", (size / 2));
    front.setAttributeNS(null, "r",  (size * 0.40)); //about 34% as big as back circle 
    front.setAttributeNS(null, "fill", "#fff");
    chart.appendChild(front);
    return chart;
}

function fourthvaccine(percentage, size, color) { 
    var svgns = "http://www.w3.org/2000/svg";
    var chart = document.createElementNS(svgns, "svg:svg");
    chart.setAttribute("width", size);
    chart.setAttribute("height", size);
    chart.setAttribute("viewBox", "0 0 " + size + " " + size);
    // Background circle
    var back = document.createElementNS(svgns, "circle");
    back.setAttributeNS(null, "cx", size / 2);
    back.setAttributeNS(null, "cy", size / 2);
    back.setAttributeNS(null, "r",  size / 2);
    color = "#d0d0d0";
    if (size > 50) { 
        color = "#ebebeb";
    }
    back.setAttributeNS(null, "fill", color);
    chart.appendChild(back);
    
    // primary wedge
    var path = document.createElementNS(svgns, "path");
    var unit = (Math.PI *2) / 100;    
    var startangle = 0;
    var endangle = percentage * unit - 0.001;
    var x1 = (size / 2) + (size / 2) * Math.sin(startangle);
    var y1 = (size / 2) - (size / 2) * Math.cos(startangle);
    var x2 = (size / 2) + (size / 2) * Math.sin(endangle);
    var y2 = (size / 2) - (size / 2) * Math.cos(endangle);
    var big = 0;
    if (endangle - startangle > Math.PI) {
        big = 1;
    }
    var d = "M " + (size / 2) + "," + (size / 2) +  // Start at circle center
        " L " + x1 + "," + y1 +     // Draw line to (x1,y1)
        " A " + (size / 2) + "," + (size / 2) +       // Draw an arc of radius r
        " 0 " + big + " 1 " +       // Arc details...
        x2 + "," + y2 +             // Arc goes to to (x2,y2)
        " Z";                       // Close path back to (cx,cy)
    //console.log(d);
    path.setAttribute("d", d); // Set this path 
    path.setAttribute("fill", '#aecf49');
    chart.appendChild(path); // Add wedge to chart
    
    
    // foreground circle
    var front = document.createElementNS(svgns, "circle");
    front.setAttributeNS(null, "cx", (size / 2));
    front.setAttributeNS(null, "cy", (size / 2));
    front.setAttributeNS(null, "r",  (size * 0.40)); //about 34% as big as back circle 
    front.setAttributeNS(null, "fill", "#fff");
    chart.appendChild(front);
    return chart;
}

function fifthvaccine(percentage, size, color) { 
    var svgns = "http://www.w3.org/2000/svg";
    var chart = document.createElementNS(svgns, "svg:svg");
    chart.setAttribute("width", size);
    chart.setAttribute("height", size);
    chart.setAttribute("viewBox", "0 0 " + size + " " + size);
    // Background circle
    var back = document.createElementNS(svgns, "circle");
    back.setAttributeNS(null, "cx", size / 2);
    back.setAttributeNS(null, "cy", size / 2);
    back.setAttributeNS(null, "r",  size / 2);
    color = "#d0d0d0";
    if (size > 50) { 
        color = "#ebebeb";
    }
    back.setAttributeNS(null, "fill", color);
    chart.appendChild(back);
    
    // primary wedge
    var path = document.createElementNS(svgns, "path");
    var unit = (Math.PI *2) / 100;    
    var startangle = 0;
    var endangle = percentage * unit - 0.001;
    var x1 = (size / 2) + (size / 2) * Math.sin(startangle);
    var y1 = (size / 2) - (size / 2) * Math.cos(startangle);
    var x2 = (size / 2) + (size / 2) * Math.sin(endangle);
    var y2 = (size / 2) - (size / 2) * Math.cos(endangle);
    var big = 0;
    if (endangle - startangle > Math.PI) {
        big = 1;
    }
    var d = "M " + (size / 2) + "," + (size / 2) +  // Start at circle center
        " L " + x1 + "," + y1 +     // Draw line to (x1,y1)
        " A " + (size / 2) + "," + (size / 2) +       // Draw an arc of radius r
        " 0 " + big + " 1 " +       // Arc details...
        x2 + "," + y2 +             // Arc goes to to (x2,y2)
        " Z";                       // Close path back to (cx,cy)
   // console.log(d);
    path.setAttribute("d", d); // Set this path 
    path.setAttribute("fill", '#4f93cf');
    chart.appendChild(path); // Add wedge to chart
    
    
    // foreground circle
    var front = document.createElementNS(svgns, "circle");
    front.setAttributeNS(null, "cx", (size / 2));
    front.setAttributeNS(null, "cy", (size / 2));
    front.setAttributeNS(null, "r",  (size * 0.40)); //about 34% as big as back circle 
    front.setAttributeNS(null, "fill", "#fff");
    chart.appendChild(front);
    return chart;
}

function sixthvaccine(percentage, size, color) { 
    var svgns = "http://www.w3.org/2000/svg";
    var chart = document.createElementNS(svgns, "svg:svg");
    chart.setAttribute("width", size);
    chart.setAttribute("height", size);
    chart.setAttribute("viewBox", "0 0 " + size + " " + size);
    // Background circle
    var back = document.createElementNS(svgns, "circle");
    back.setAttributeNS(null, "cx", size / 2);
    back.setAttributeNS(null, "cy", size / 2);
    back.setAttributeNS(null, "r",  size / 2);
    color = "#d0d0d0";
    if (size > 50) { 
        color = "#ebebeb";
    }
    back.setAttributeNS(null, "fill", color);
    chart.appendChild(back);
    
    // primary wedge
    var path = document.createElementNS(svgns, "path");
    var unit = (Math.PI *2) / 100;    
    var startangle = 0;
    var endangle = percentage * unit - 0.001;
    var x1 = (size / 2) + (size / 2) * Math.sin(startangle);
    var y1 = (size / 2) - (size / 2) * Math.cos(startangle);
    var x2 = (size / 2) + (size / 2) * Math.sin(endangle);
    var y2 = (size / 2) - (size / 2) * Math.cos(endangle);
    var big = 0;
    if (endangle - startangle > Math.PI) {
        big = 1;
    }
    var d = "M " + (size / 2) + "," + (size / 2) +  // Start at circle center
        " L " + x1 + "," + y1 +     // Draw line to (x1,y1)
        " A " + (size / 2) + "," + (size / 2) +       // Draw an arc of radius r
        " 0 " + big + " 1 " +       // Arc details...
        x2 + "," + y2 +             // Arc goes to to (x2,y2)
        " Z";                       // Close path back to (cx,cy)
   // console.log(d);
    path.setAttribute("d", d); // Set this path 
    path.setAttribute("fill", '#8f3b97');
    chart.appendChild(path); // Add wedge to chart
    
    
    // foreground circle
    var front = document.createElementNS(svgns, "circle");
    front.setAttributeNS(null, "cx", (size / 2));
    front.setAttributeNS(null, "cy", (size / 2));
    front.setAttributeNS(null, "r",  (size * 0.40)); //about 34% as big as back circle 
    front.setAttributeNS(null, "fill", "#fff");
    chart.appendChild(front);
    return chart;
}

$(function()
{
	var a = document.getElementById('VectorSmartObject');
	var b = document.getElementById('VectorSmartObject_0');
	var c = document.getElementById('VectorSmartObject_1');
	var d = document.getElementById('VectorSmartObject_2');
	var e = document.getElementById('VectorSmartObject_3');
	var f = document.getElementById('VectorSmartObject_4');
	
	//alert(a);
	//if(!c) return;
	a.appendChild( firstvaccine(40, 110 ) );
	b.appendChild( secondvaccine(70, 110 ) );
	c.appendChild( thridvaccine(70, 110 ) );
	d.appendChild( fourthvaccine(70, 110 ) );
	e.appendChild( fifthvaccine(70, 110 ) );
	f.appendChild( sixthvaccine(70, 110 ) );
	
});