var e=document.querySelector("table"),t=e.querySelector("thead").querySelector("tr").querySelectorAll("th"),n=[],r=[],a=e.querySelector("tbody");a.querySelectorAll("tr").forEach(function(e){e.querySelectorAll("td").forEach(function(e){n.push(e.textContent)})});for(var o=0;o<n.length;o+=4){var c={name:n[o],position:n[o+1],age:+n[o+2],salary:parseInt(n[o+3].replace(/[$,]/g,""))};r.push(c)}function l(){a.innerHTML="",r.forEach(function(e){var t=document.createElement("tr");t.innerHTML="\n      <td>".concat(e.name,"</td>\n      <td>").concat(e.position,"</td>\n      <td>").concat(e.age,"</td>\n      <td>$").concat(e.salary.toLocaleString("en-US"),"</td>\n    "),a.appendChild(t)})}t.forEach(function(e){e.addEventListener("click",function(e){switch(e.currentTarget.textContent.trim()){case"Name":r.sort(function(e,t){return e.name.localeCompare(t.name)});break;case"Position":r.sort(function(e,t){return e.position.localeCompare(t.position)});break;case"Age":r.sort(function(e,t){return e.age-t.age});break;case"Salary":r.sort(function(e,t){return e.salary-t.salary})}l()})}),l();
//# sourceMappingURL=index.0a232483.js.map