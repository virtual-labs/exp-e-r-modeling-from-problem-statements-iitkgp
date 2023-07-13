/*Redeveloped
Lab: Software Engineering
Exp:E-R Modeling from the Problem Statements
File Name: main.js
Author: Prakriti Dhang*/

/* Exercise number choice */
var ex = document.getElementById("selectex");
function subex() {
  if (ex.options[ex.selectedIndex].value == 1) {
    document.getElementById("exercise1").style.display = "block";
    document.getElementById("ex1").style.display = "block";
    document.getElementById("exercise2").style.display = "none";
    document.getElementById("ex2").style.display = "none";
    document.getElementById("para1").style.display = "block";
    document.getElementById("dispres").style.display = "none";
    document.getElementById("show_result1").style.display = "none";
    document.getElementById("show_result2").style.display = "none";
    document.getElementById('dispuml2').style.display = "none";
    document.getElementById("dispviewbtn").disabled = false;
    document.getElementById("viewsol").disabled = true;
    document.getElementById("ftbl21").reset();
    document.getElementById("ftbl22").reset();
    document.getElementById("ftbl23").reset();
    document.getElementById("ftbl24").reset();
    document.getElementById("ftbl25").reset();

  }
  if (ex.options[ex.selectedIndex].value == 2) {
    document.getElementById("exercise2").style.display = "block";
    document.getElementById("ex1").style.display = "none";
    document.getElementById("exercise1").style.display = "none";
    document.getElementById("ex2").style.display = "block";
    document.getElementById("dispres").style.display = "none";
    document.getElementById("para1").style.display = "block";
    document.getElementById("show_result1").style.display = "none";
    document.getElementById("show_result2").style.display = "none";
    document.getElementById('dispuml1').style.display = "none";
    document.getElementById("dispviewbtn").disabled = false;
    document.getElementById("viewsol").disabled = true;
    document.getElementById("ftbl1").reset();
    document.getElementById("ftbl2").reset();
    document.getElementById("ftbl3").reset();
    document.getElementById("ftbl4").reset();
    document.getElementById("ftbl5").reset();

  }

  if (ex.options[ex.selectedIndex].value == 0) {
    document.getElementById("exercise1").style.display = "none";
    document.getElementById("ex1").style.display = "none";
    document.getElementById("exercise2").style.display = "none";
    document.getElementById("dispres").style.display = "none";
    document.getElementById("para1").style.display = "none";
    document.getElementById("show_result1").style.display = "none";
    document.getElementById("show_result2").style.display = "none";
    document.getElementById("dispviewbtn").disabled = true;
    document.getElementById("viewsol").disabled = true;
    document.getElementById("ftbl1").reset();
    document.getElementById("ftbl2").reset();
    document.getElementById("ftbl3").reset();
    document.getElementById("ftbl4").reset();
    document.getElementById("ftbl5").reset();
    document.getElementById("ftbl21").reset();
    document.getElementById("ftbl22").reset();
    document.getElementById("ftbl23").reset();
    document.getElementById("ftbl24").reset();
    document.getElementById("ftbl25").reset();

  }
}
/* Submit button to directly view the solution*/

function viewsolutionb() {
  document.getElementById("dispres").style.display = "block";
  document.getElementById("viewsol").disabled = false;
  document.getElementById("dispviewbtn").disabled = true;
  window.scrollBy(0, 1800);
}

function solview() {
  if (ex.options[ex.selectedIndex].value == 1) {
    document.getElementById("dispres").style.display = "block";
    document.getElementById("show_result1").style.display = "block";
    document.getElementById("show_result2").style.display = "none";
    document.getElementById("viewsol").disabled = true;
  }
  if (ex.options[ex.selectedIndex].value == 2) {
    document.getElementById("dispres").style.display = "block";
    document.getElementById("show_result2").style.display = "block";
    document.getElementById("show_result1").style.display = "none";
    document.getElementById("viewsol").disabled = true;
  }

}

/*********************************************Function for Table 1 ****************************************/


let inpt1;
let newtrID, newtdID;
let newtd, newtdw, newtdwn, newtda, newtda2, newula, newulID;
var newtr;
var checkedvalue;
var myarray = [];
var arrentity = [];
var arrrel = [];
var arrconstrt = [];
function addbtnt1() {

  inpt1 = document.getElementById("inp1").value;
  
  checkedvalue = document.getElementById("chkinp1");




  var newIconbtn = document.createElement("img");
  newIconbtn.setAttribute("src", "./images/remove.png");
  newIconbtn.setAttribute("onclick", "removerow(this)");
  newIconbtn.setAttribute("style", "cursor:pointer;");


  newtrID = inpt1;
  //rbtn.appendChild(newIconbtn);   
  newtr = document.createElement("tr");
  newtr.setAttribute("id", newtrID);
  newtd = document.createElement("td");
  newtd.setAttribute("class", "ent");
  //newdiv = document.createElement("div");
  //newdiv.setAttribute("class", "form-check");
  newtr.appendChild(newtd);
  //newtd.appendChild(newdiv);

  let liTextNodeact = document.createTextNode(inpt1);
  newtd.appendChild(liTextNodeact);
  //newtd.appendChild(newIconbtn);

  /**** Attribute *****/
  newulID = "attri_" + inpt1;
  newtda = document.createElement("td");
  newula = document.createElement("ul");
  newula.setAttribute("id", newulID);

  newtda.appendChild(newula);
  newtr.appendChild(newtda);
  let liTextNodeacta = document.createTextNode("");
  newula.appendChild(liTextNodeacta);

  //myarray.push(inpt1);

  if (inpt1 == "") {
    alert("Please Enter Entity Before Clicking Add Button");

  }

  const tblt4 = document.getElementById('tbodyt4');
  const tableRows = tblt4.getElementsByTagName("tr");
  let areInserted = false;

  for (let i = 0; i < tableRows.length; i++) {
    const cells = tableRows[i].getElementsByTagName("td");
    const value1 = cells[0].textContent;
    if ((cells[0].innerHTML == inpt1)) {
      areInserted = true;
      break;
    }

  }

  if (areInserted) {
    alert("Value is already inserted in the table.");
  } else {
    arrentity.push(inpt1);
    if ((inpt1 !== "") && (checkedvalue.checked)) {



      /**** Weak entity ****/

      newtdw = document.createElement("td");
      newtdw.setAttribute("class", "wentity");
      newtr.appendChild(newtdw);


      let liTextNodeactw = document.createTextNode("Yes");
      newtdw.appendChild(liTextNodeactw);


      document.getElementById('tbodyt4').appendChild(newtr);
      document.getElementById('tbodyt4').appendChild(newtr);
      document.getElementById('tbodyt4').appendChild(newtr);




      /*Entity = Select option from the dropdown  in table 2*/
      let newOptionID;
      newOptionID = 'newOption_' + inpt1;

      let newOption = document.createElement('option');
      let optionText = document.createTextNode(inpt1);
      // set option text
      newOption.appendChild(optionText);
      // and option value

      newOption.setAttribute("id", newOptionID);
      newOption.setAttribute('value', inpt1);
      let select1 = document.getElementById('selectentity');
      select1.appendChild(newOption);

      /*Entity = Select option from the dropdown  in table 3*/
      let newOptionID2;
      newOptionID2 = 'newOption_' + inpt1;

      let newOption2 = document.createElement('option');
      let optionText2 = document.createTextNode(inpt1);
      // set option text
      newOption2.appendChild(optionText2);
      // and option value

      newOption2.setAttribute("id", newOptionID2);
      newOption2.setAttribute('value', inpt1);
      let select2 = document.getElementById('selectent31');
      select2.appendChild(newOption2);


      let newOptionID3;
      newOptionID3 = 'newOption_' + inpt1;

      let newOption3 = document.createElement('option');
      let optionText3 = document.createTextNode(inpt1);
      // set option text
      newOption3.appendChild(optionText3);
      // and option value

      newOption3.setAttribute("id", newOptionID3);
      newOption3.setAttribute('value', inpt1);
      let select3 = document.getElementById('selectent32');
      select3.appendChild(newOption3);


    }




    else if ((inpt1 !== "") && (checkedvalue.checked == false)) {


      /**** Not a Weak entity ****/
      newtdwn = document.createElement("td");
      newtdwn.setAttribute("class", "nwentity");
      //newdivwn = document.createElement("div");

      newtr.appendChild(newtdwn);

      let liTextNodeactwn = document.createTextNode("No");
      newtdwn.appendChild(liTextNodeactwn);

      document.getElementById('tbodyt4').appendChild(newtr);
      document.getElementById('tbodyt4').appendChild(newtr);
      document.getElementById('tbodyt4').appendChild(newtr);



      /*Entity = Select option from the dropdown  in table 2*/
      let newOptionID;
      newOptionID = 'newOption_' + inpt1;

      let newOption = document.createElement('option');
      let optionText = document.createTextNode(inpt1);
      // set option text
      newOption.appendChild(optionText);
      // and option value

      newOption.setAttribute("id", newOptionID);
      newOption.setAttribute('value', inpt1);
      let select1 = document.getElementById('selectentity');
      select1.appendChild(newOption);

      /*Entity = Select option from the dropdown  in table 3*/
      let newOptionID2;
      newOptionID2 = 'newOption_' + inpt1;

      let newOption2 = document.createElement('option');
      let optionText2 = document.createTextNode(inpt1);
      // set option text
      newOption2.appendChild(optionText2);
      // and option value

      newOption2.setAttribute("id", newOptionID2);
      newOption2.setAttribute('value', inpt1);
      let select2 = document.getElementById('selectent31');
      select2.appendChild(newOption2);


      let newOptionID3;
      newOptionID3 = 'newOption_' + inpt1;

      let newOption3 = document.createElement('option');
      let optionText3 = document.createTextNode(inpt1);
      // set option text
      newOption3.appendChild(optionText3);
      // and option value

      newOption3.setAttribute("id", newOptionID3);
      newOption3.setAttribute('value', inpt1);
      let select3 = document.getElementById('selectent32');
      select3.appendChild(newOption3);





    }

  }


  //else if((inpt1 !== inpt1 ) && (checkedvalue.checked == false)){
  /**** Attribute *****/

  /*newtda2 = document.createElement("td");
  newtda2.setAttribute("id",newtdID);
  newtr.appendChild(newtda2);
  let liTextNodeacta = document.createTextNode("");
  newtda2.appendChild(liTextNodeacta);
    document.getElementById('row2').appendChild(newtd);
    document.getElementById('row2').appendChild(newtda2);
    document.getElementById('row2').appendChild(newtdwn);
  }*/

  document.getElementById("ftbl1").reset();




}





/*************************************Function for Table 2***********************************************/
var inpt2;
var arrattri1 = [];
var arrattri2 = [];
var arrattri = [];
var arrattrii = [];
var entval;
var length1,length2;

function addbtnt2() {


  let newLi;
  inpt2 = document.getElementById("inp2").value;
  var selent = document.getElementById("selectentity");
  entval = selent.options[selent.selectedIndex].value;
  var checkedvalueprkey = document.getElementById("chkinp2");
  /* var rbtn=document.createElement("button");
  rbtn.setAttribute("id", "removebtnuc");
  rbtn.setAttribute("type", "button");
  rbtn.setAttribute("class", "btn btn-danger");
  rbtn.setAttribute("onclick", "removerowuc(this)"); */






  /*let Cell= document.getElementById("tbl4").rows[1].cells;
  var cellval= Cell[0].innerHTML;
 
  let Cell20= document.getElementById("tbl4").rows[2].cells;
  var cellval20= Cell20[0].innerHTML;*/

  if (checkedvalueprkey.checked) {
    var primary_key = "*";
    var para = document.createElement("i");
    let add_prkey = document.createTextNode(primary_key);
    para.appendChild(add_prkey);
  }
  else {
    var primary_key = " ";
    var para = document.createElement("i");
    let add_prkey = document.createTextNode(primary_key);
    para.appendChild(add_prkey);
  }
  //document.body.appendChild(para);

  var newIconbtn = document.createElement("img");
  newIconbtn.setAttribute("src", "./images/remove.png");
  newIconbtn.setAttribute("onclick", "removerowa(this)");
  newIconbtn.setAttribute("style", "cursor:pointer;");

  newLi = document.createElement("li");
  newLi.setAttribute("data-value", inpt2);
  let liTextNodeuc = document.createTextNode(inpt2);
  newLi.appendChild(liTextNodeuc);
  newLi.appendChild(para);
  newLi.appendChild(newIconbtn);
  // alert(cellval2);

  if (inpt2 == "") {
    alert("Please Enter Attribute Before Clicking Add Button");
  }
  else {
    let isInserted = false;
    const myLista = document.getElementById("attri_" + entval);
    const listItemsa = myLista.getElementsByTagName("li");
    for (let i = 0; i < listItemsa.length; i++) {
      if (listItemsa[i].textContent == inpt2) {
        isInserted = true;
        break;
      }
    }
    if (isInserted) {
      alert("You have already enter a attribute by the same name.");
      document.getElementById("inp2").value = "";
    }
    else {
      document.getElementById("attri_" + entval).appendChild(newLi);
      //arrattri = arrattri1.push(inpt2);
      //console.log(arrattri);
      document.getElementById("inp2").value = "";
    }


  }
 

  var myTable = document.getElementById('tbodyt4');
  var cellIndex = 1; // Index of the desired cell (1-based)

  // Iterate over each row
  for (var i = 0; i < myTable.rows.length; i++) {
    if (i == 0 || i == 1) {
      var row = myTable.rows[i];
      var cell = row.cells[cellIndex];
      var listItems = cell.getElementsByTagName('li');


      // Read and store the values from list items in the array
      var rowValues = [];
      for (var j = 0; j < listItems.length; j++) {
        var listItem = listItems[j];
        var listItemValue = listItem.textContent.trim();
        rowValues.push(listItemValue);

      }

      if (i == 0) {
        arrattri.push(rowValues);
        
        if (listItems.length != 6) {
          //document.getElementById('drawbtn').disabled = true;
        }
        else {
          //document.getElementById('drawbtn').disabled = false;
        }

        

      } if (i == 1) {

        arrattrii.push(rowValues);

        if (listItems.length != 2) {
        //  document.getElementById('drawbtn').disabled = true;
        }
        else {
         // document.getElementById('drawbtn').disabled = false;
        }
      }

    }
  }

  var mergedArray = [].concat.apply([], arrattri);
  arrattri1 = [...new Set(mergedArray)]; //removes duplicates
  console.log(arrattri1);
  length1 = arrattri1.length;
  console.log(length1);


  var mergedArray2 = [].concat.apply([], arrattrii);
  arrattri2 = [...new Set(mergedArray2)]; //removes duplicates
  console.log(arrattri2);
  length2 = arrattri2.length;
  console.log(length2);

 
}







/*************************************Function for Table 3***********************************************/

function addbtnt3() {
  var objsel1 = document.getElementById("selectent31");
  var dobj1 = objsel1.options[objsel1.selectedIndex].value;
  //alert(dobj1);
  var inpt3 = document.getElementById("inp3").value;
  arrrel.push(inpt3);
  //alert(inpt3);
  var objsel2 = document.getElementById("selectent32");
  var dobj2 = objsel2.options[objsel2.selectedIndex].value;
  // alert(dobj2);
  var objselcont = document.getElementById("selectconst");
  var dobjconst = objselcont.options[objselcont.selectedIndex].text;
  var dobjconstraint = objselcont.options[objselcont.selectedIndex].value;
  //alert(dobjconst);
  arrconstrt = dobjconstraint.split(' ');
  //console.log(arrconstrt);
  var rbtn = document.createElement("button");
  rbtn.setAttribute("id", "removebtn");
  rbtn.setAttribute("type", "button");
  rbtn.setAttribute("class", "btn btn-danger");
  rbtn.setAttribute("onclick", "removerow(this)");

  var newIconbtn = document.createElement("i");
  newIconbtn.setAttribute("class", "bi bi-dash-circle");
  rbtn.appendChild(newIconbtn);

  if (dobj1 == dobj2) {
    alert(dobj1 + "  is not related to  " + dobj2);
  }
  else if (inpt3 == "") {
    alert("Relation cannot be blank");
  }
  else if ((dobj1 !== dobj2)) {

    var tr = document.createElement('tr');
    tr.setAttribute("id", "t5uc");
    document.getElementById('tbodytbl5').appendChild(tr);
    var td1 = document.createElement('td');
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var tdval1 = document.createTextNode(dobj1);
    var tdval2 = document.createTextNode(inpt3);
    var tdval3 = document.createTextNode(dobj2);
    var tdval4 = document.createTextNode(dobjconst);

    //var tdval5=document.appendChild(newIconbtn);
    // tbody.appendChild(tr);




    td1.appendChild(tdval1);
    td2.appendChild(tdval2);
    td3.appendChild(tdval3);
    td4.appendChild(tdval4);
    td5.appendChild(rbtn);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    document.getElementById('tbodytbl5').appendChild(tr);

  }


  

}



function removerow(btndel) {
  if (typeof (btndel) == "object") {
    $(btndel).closest("tr").remove();

  }


  else {
    return false;
  }
}


function removerowa(btndel) {

  if (typeof (btndel) == "object") {

    var listItemValue = $(btndel).closest("li").data("value");
    console.log(listItemValue);
    $(btndel).closest("li").remove();
    //$("#selectactuc1").find('option[value="' + listItemValue + '"]').remove();
    //$("#selectactuc2").find('option[value="' + listItemValue + '"]').remove();

  /* Remove item from array */
  var index = arrattri1.indexOf(listItemValue);
  var index2 = arrattri2.indexOf(listItemValue);
         if (index !== -1) {
          arrattri1.splice(index, 1);
       
         }
         if (index2 !== -1) {
         
          arrattri2.splice(index2, 1);
         }
         console.log(arrattri1);
         console.log(arrattri2);
  }

  
  else {
    return false;
  }


}



function drawbtnex21() {

  if((length1 == 6)&& (length2 == 2) ){

    document.getElementById('dispuml1').style.display = "block";
  }
  
  else{
    alert("Enter all attributes for each entities");
   //
   document.getElementById('dispuml1').style.display = "none";
  }
  

  var namespace = joint.shapes;

  var graph = new joint.dia.Graph({}, { cellNamespace: namespace });

  paper = new joint.dia.Paper({
    el: document.getElementById('er_diag_ex1'),
    model: graph,
    //x: 0,
    //y: 0,
    //width: $('#ucdiagram1').width(),
    //height:  $('#ucdiagram1').height(), // height had to be increased

    background: {
      color: '#ffffff', //'rgba(0, 255, 0, 0.3)'
    },

    cellViewNamespace: namespace
  });


  /********************************* Entity 1 **************************************8*/
  var entity1 = new joint.shapes.standard.Rectangle();

  entity1.position(169, 271);
  entity1.resize(100, 40);
  entity1.attr({
    body: {
      fill: '#FFFC8C',
      strokeWidth: 2
    },
    label: {
      text: arrentity[0],
      fill: 'black',
      fontSize: 16
    }
  });
  entity1.addTo(graph);

  /********************************* Entity 2 **************************************8*/
  var entity2 = new joint.shapes.standard.Rectangle();
  entity2.position(499, 271);
  entity2.resize(100, 40);
  entity2.attr({
    body: {
      fill: '#FFFC8C',

      strokeWidth: 2
    },
    label: {
      text: arrentity[1],
      fill: 'black',
      fontSize: 16
    }
  });
  entity2.addTo(graph);

  /******************************************* Relation **********************************************/

  var diamondrel = new joint.shapes.standard.Rectangle();

  diamondrel.position(355, 261);
  diamondrel.resize(50, 50);

  diamondrel.attr({
    body: {
      fill: '#AEFFEB',
      strokeWidth: 2,


    },
    label: {
      text: arrrel[0],
      fill: 'black',
      fontSize: 11
    }

  });
  diamondrel.rotate(40);
  diamondrel.addTo(graph);
  /*************************** Attributes of first entity *************************************/


  var attri11 = new joint.shapes.standard.Ellipse();
  attri11.position(215, 163);

  attri11.resize(120, 40);
  attri11.attr({
    body: {
      fill: '#D4FFA6',
      rx: 20,
      ry: 20,
      strokeWidth: 2
    },
    label: {
      text: arrattri1[0],
      fill: 'black',
      fontSize: 16
    }
  });
  attri11.addTo(graph);

  var attri12 = new joint.shapes.standard.Ellipse();
  attri12.position(55, 183);

  attri12.resize(100, 40);
  attri12.attr({
    body: {
      fill: '#D4FFA6',
      rx: 20,
      ry: 20,
      strokeWidth: 2
    },
    label: {
      text: arrattri1[1],
      fill: 'black',
      fontSize: 16
    }
  });
  attri12.addTo(graph);

  var attri13 = new joint.shapes.standard.Ellipse();
  attri13.position(8, 271);

  attri13.resize(100, 40);
  attri13.attr({
    body: {
      fill: '#D4FFA6',
      rx: 20,
      ry: 20,
      strokeWidth: 2
    },
    label: {
      text: arrattri1[2],
      fill: 'black',
      fontSize: 16
    }
  });
  attri13.addTo(graph);

  var attri14 = new joint.shapes.standard.Ellipse();
  attri14.position(13, 336);

  attri14.resize(100, 40);
  attri14.attr({
    body: {
      fill: '#D4FFA6',
      rx: 20,
      ry: 20,
      strokeWidth: 2
    },
    label: {
      text: arrattri1[3],
      fill: 'black',
      fontSize: 16
    }
  });
  attri14.addTo(graph);

  var attri15 = new joint.shapes.standard.Ellipse();
  attri15.position(63, 394);

  attri15.resize(100, 40);
  attri15.attr({
    body: {
      fill: '#D4FFA6',
      rx: 20,
      ry: 20,
      strokeWidth: 2
    },
    label: {
      text: arrattri1[4],
      fill: 'black',
      fontSize: 16
    }
  });
  attri15.addTo(graph);

  var attri16 = new joint.shapes.standard.Ellipse();
  attri16.position(179, 398);

  attri16.resize(100, 40);
  attri16.attr({
    body: {
      fill: '#D4FFA6',
      rx: 20,
      ry: 20,
      strokeWidth: 2
    },
    label: {
      text: arrattri1[5],
      fill: 'black',
      fontSize: 16
    }
  });
  attri16.addTo(graph);








  /******************************* Attributes of second entity ***************************************/
  var attri21 = new joint.shapes.standard.Ellipse();
  attri21.position(578, 173);

  attri21.resize(125, 40);
  attri21.attr({
    body: {
      fill: '#D4FFA6',
      rx: 20,
      ry: 20,
      strokeWidth: 2
    },
    label: {
      text: arrattri2[0],
      fill: 'black',
      fontSize: 16
    }
  });
  attri21.addTo(graph);



  var attri22 = new joint.shapes.standard.Ellipse();
  attri22.position(574, 371);

  attri22.resize(130, 40);
  attri22.attr({
    body: {
      fill: '#D4FFA6',
      rx: 20,
      ry: 20,
      strokeWidth: 2
    },
    label: {
      text: arrattri2[1],
      fill: 'black',
      fontSize: 16
    }
  });
  attri22.addTo(graph);



  joint.shapes.standard.Link.define('examples.CustomLink', {
    attrs: {
      line: {
        stroke: 'black',
        strokeWidth: 2,
        targetMarker: {
          'type': 'rect',
          'stroke': 'none'
        }
      }
    },

  });

  var link1 = new joint.shapes.examples.CustomLink();

  link1.source(entity1);
  link1.target(attri11);
  link1.addTo(graph);



  var link2 = new joint.shapes.examples.CustomLink();

  link2.source(entity1);
  link2.target(attri12);
  link2.addTo(graph);

  var link3 = new joint.shapes.examples.CustomLink();

  link3.source(entity1);
  link3.target(attri13);
  link3.addTo(graph);

  var link4 = new joint.shapes.examples.CustomLink();

  link4.source(entity1);
  link4.target(attri14);
  link4.addTo(graph);

  var link5 = new joint.shapes.examples.CustomLink();

  link5.source(entity1);
  link5.target(attri15);
  link5.addTo(graph);

  var link6 = new joint.shapes.examples.CustomLink();

  link6.source(entity1);
  link6.target(attri16);
  link6.addTo(graph);


  var link7 = new joint.shapes.examples.CustomLink();

  link7.source(entity2);
  link7.target(attri21);
  link7.addTo(graph);

  var link8 = new joint.shapes.examples.CustomLink();

  link8.source(entity2);
  link8.target(attri22);
  link8.addTo(graph);







  var link7 = new joint.shapes.examples.CustomLink();
  link7.source(entity1);
  link7.target(diamondrel);
  link7.addTo(graph);
  link7.appendLabel({
    attrs: {
      text: {
        text: arrconstrt[0],
        fontSize: 16
      }

    }
  });
  link7.addTo(graph);




  var link8 = new joint.shapes.examples.CustomLink();

  link8.source(entity2);
  link8.target(diamondrel);
  link8.addTo(graph);
  link8.appendLabel({
    attrs: {
      text: {
        text: arrconstrt[2],
        fontSize: 16
      }

    }
  });
  link8.addTo(graph);

}












