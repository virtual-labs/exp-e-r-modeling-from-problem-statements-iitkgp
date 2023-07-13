/*Redeveloped
Lab: Software Engineering
Exp:E-R Modeling from the Problem Statements
File Name: ex2.js
Author: Prakriti Dhang*/



/*********************************************Function for Table 1 ****************************************/


let inpt21;
let newtrIDt2, newtdIDt2;
let newtdt2, newtdwt2, newtdwnt2, newtdat2, newtdta2, newulat2, newulIDt2;
var newtrt2;
var checkedvalue2;
var myarray = [];
var arrentity2 = [];
var arrrel2 = [];
var arrconstrt2 = [];
function addbtnt21() {

  inpt21 = document.getElementById("inp21").value;
  //arrentity2.push(inpt21);
  checkedvalue2 = document.getElementById("chkinp21");




  var newIconbtn = document.createElement("img");
  newIconbtn.setAttribute("src", "./images/remove.png");
  newIconbtn.setAttribute("onclick", "removerow(this)");
  newIconbtn.setAttribute("style", "cursor:pointer;");


  newtrIDt2 = inpt21;
  //rbtn.appendChild(newIconbtn);   
  newtrt2 = document.createElement("tr");
  newtrt2.setAttribute("id", newtrIDt2);
  newtdt2 = document.createElement("td");
  newtdt2.setAttribute("class", "ent");
  //newdiv = document.createElement("div");
  //newdiv.setAttribute("class", "form-check");
  newtrt2.appendChild(newtdt2);
  //newtd.appendChild(newdiv);

  let liTextNodeact = document.createTextNode(inpt21);
  newtdt2.appendChild(liTextNodeact);
  //newtd.appendChild(newIconbtn);

  /**** Attribute *****/
  newulIDt2 = "attri_" + inpt21;
  newtdat2 = document.createElement("td");
  newulat2 = document.createElement("ul");
  newulat2.setAttribute("id", newulIDt2);

  newtdat2.appendChild(newulat2);
  newtrt2.appendChild(newtdat2);
  let liTextNodeacta = document.createTextNode("");
  newulat2.appendChild(liTextNodeacta);

  //myarray.push(inpt21);

  if (inpt21 == "") {
    alert("Please Enter Entity Before Clicking Add Button");

  }


  const tblt4ex2 = document.getElementById('tbodyex2t4');
  const tableRows = tblt4ex2.getElementsByTagName("tr");
  let areInserted = false;

  for (let i = 0; i < tableRows.length; i++) {
    const cells = tableRows[i].getElementsByTagName("td");
    const value1 = cells[0].textContent;
    if ((cells[0].innerHTML == inpt21)) {
      areInserted = true;
      
      break;
    }

  }

  if (areInserted) {
    alert("Value is already inserted in the table.");
    //arrentity2.pop(inpt21);
  } else {
    arrentity2.push(inpt21);
    if ((inpt21 !== "") && (checkedvalue2.checked)) {

      

      /**** Weak entity ****/

      newtdwt2 = document.createElement("td");
      newtdwt2.setAttribute("class", "wentity");
      newtrt2.appendChild(newtdwt2);


      let liTextNodeactw = document.createTextNode("Yes");
      newtdwt2.appendChild(liTextNodeactw);


      document.getElementById('tbodyex2t4').appendChild(newtrt2);
      document.getElementById('tbodyex2t4').appendChild(newtrt2);
      document.getElementById('tbodyex2t4').appendChild(newtrt2);




      /*Entity = Select option from the dropdown  in table 2*/
      let newOptionID;
      newOptionID = 'newOption_' + inpt21;

      let newOption = document.createElement('option');
      let optionText = document.createTextNode(inpt21);
      // set option text
      newOption.appendChild(optionText);
      // and option value

      newOption.setAttribute("id", newOptionID);
      newOption.setAttribute('value', inpt21);
      let selectt2 = document.getElementById('selectentity2');
      selectt2.appendChild(newOption);

      /*Entity = Select option from the dropdown  in table 3*/
      let newOptionID2;
      newOptionID2 = 'newOption_' + inpt21;

      let newOption2 = document.createElement('option');
      let optionText2 = document.createTextNode(inpt21);
      // set option text
      newOption2.appendChild(optionText2);
      // and option value

      newOption2.setAttribute("id", newOptionID2);
      newOption2.setAttribute('value', inpt21);
      let select2 = document.getElementById('selectentt31b');
      select2.appendChild(newOption2);


      let newOptionID3;
      newOptionID3 = 'newOption_' + inpt21;

      let newOption3 = document.createElement('option');
      let optionText3 = document.createTextNode(inpt21);
      // set option text
      newOption3.appendChild(optionText3);
      // and option value

      newOption3.setAttribute("id", newOptionID3);
      newOption3.setAttribute('value', inpt21);
      let select3 = document.getElementById('selectentt32b');
      select3.appendChild(newOption3);


    }




    if ((inpt21 !== "") && (checkedvalue2.checked == false)) {
     

      /**** Not a Weak entity ****/
      newtdwnt2 = document.createElement("td");
      newtdwnt2.setAttribute("class", "nwentity");
      //newdivwn = document.createElement("div");

      newtrt2.appendChild(newtdwnt2);

      let liTextNodeactwn = document.createTextNode("No");
      newtdwnt2.appendChild(liTextNodeactwn);

      document.getElementById('tbodyex2t4').appendChild(newtrt2);
      document.getElementById('tbodyex2t4').appendChild(newtrt2);
      document.getElementById('tbodyex2t4').appendChild(newtrt2);



      /*Entity = Select option from the dropdown  in table 2*/
      let newOptionID;
      newOptionID = 'newOption_' + inpt21;

      let newOption = document.createElement('option');
      let optionText = document.createTextNode(inpt21);
      // set option text
      newOption.appendChild(optionText);
      // and option value

      newOption.setAttribute("id", newOptionID);
      newOption.setAttribute('value', inpt21);
      let select1 = document.getElementById('selectentity2');
      select1.appendChild(newOption);

      /*Entity = Select option from the dropdown  in table 3*/
      let newOptionID2;
      newOptionID2 = 'newOption_' + inpt21;

      let newOption2 = document.createElement('option');
      let optionText2 = document.createTextNode(inpt21);
      // set option text
      newOption2.appendChild(optionText2);
      // and option value

      newOption2.setAttribute("id", newOptionID2);
      newOption2.setAttribute('value', inpt21);
      let select2 = document.getElementById('selectentt31b');
      select2.appendChild(newOption2);


      let newOptionID3;
      newOptionID3 = 'newOption_' + inpt21;

      let newOption3 = document.createElement('option');
      let optionText3 = document.createTextNode(inpt21);
      // set option text
      newOption3.appendChild(optionText3);
      // and option value

      newOption3.setAttribute("id", newOptionID3);
      newOption3.setAttribute('value', inpt21);
      let select3 = document.getElementById('selectentt32b');
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

  document.getElementById("ftbl21").reset();
}





/*************************************Function for Table 2***********************************************/
let inpt22;
var arrattri21 = [];
var arrattri22 = [];
var arrattri23 = [];
var arrattri24 = [];
var arrattrii1 = [];
var arrattrii2 = [];
var arrattrii3 = [];
var arrattrii4 = [];
var length21,length22,length23,length24;
function addbtnt22() {


  let newLi;
  inpt22 = document.getElementById("inp22").value;
  var selent2 = document.getElementById("selectentity2");
  var entval2 = selent2.options[selent2.selectedIndex].value;
  var checkedvalueprkey2 = document.getElementById("chkinp22");
  /* var rbtn=document.createElement("button");
  rbtn.setAttribute("id", "removebtnuc");
  rbtn.setAttribute("type", "button");
  rbtn.setAttribute("class", "btn btn-danger");
  rbtn.setAttribute("onclick", "removerowuc(this)"); */






  /*let Cell= document.getElementById("tbl4").rows[1].cells;
  var cellval= Cell[0].innerHTML;
 
  let Cell20= document.getElementById("tbl4").rows[2].cells;
  var cellval20= Cell20[0].innerHTML;*/

  if (checkedvalueprkey2.checked) {
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
  newIconbtn.setAttribute("onclick", "removerowuc(this)");
  newIconbtn.setAttribute("style", "cursor:pointer;");

  newLi = document.createElement("li");
  newLi.setAttribute("data-value", inpt22);
  let liTextNodeuc = document.createTextNode(inpt22);
  newLi.appendChild(liTextNodeuc);
  newLi.appendChild(para);
  newLi.appendChild(newIconbtn);
  // alert(cellval2);

  if (inpt22 == "") {
    alert("Please Enter Attribute Before Clicking Add Button");
  }

  else {
    document.getElementById("attri_" + entval2).appendChild(newLi);
    // var arrattri2=arrattri21.push(inpt22);
    //console.log(arrattri2);
    document.getElementById("inp22").value = "";

  }


  var myTableex2 = document.getElementById('tbodyex2t4');
  var cellIndexex2 = 1; // Index of the desired cell (1-based)

  // Iterate over each row
  for (var i = 0; i < myTableex2.rows.length; i++) {
    if (i == 0 || i == 1 || i == 2 || i == 3) {
      var rowex2 = myTableex2.rows[i];
      var cellex2 = rowex2.cells[cellIndexex2];
      var listItemsex2 = cellex2.getElementsByTagName('li');


      // Read and store the values from list items in the array
      var rowValuesex2 = [];
      for (var j = 0; j < listItemsex2.length; j++) {
        var listItemex2 = listItemsex2[j];
        var listItemValueex2 = listItemex2.textContent.trim();
        rowValuesex2.push(listItemValueex2);

      }

      if (i == 0) {
        arrattrii1.push(rowValuesex2);

        if (listItemsex2.length != 3) {
          //document.getElementById('drawbtn').disabled = true;
        }
        else {
          //document.getElementById('drawbtn').disabled = false;
        }



      } if (i == 1) {

        arrattrii2.push(rowValuesex2);

        if (listItemsex2.length != 3) {
          //  document.getElementById('drawbtn').disabled = true;
        }
        else {
          // document.getElementById('drawbtn').disabled = false;
        }
      }

      if (i == 2) {

        arrattrii3.push(rowValuesex2);

        if (listItemsex2.length != 6) {
          //  document.getElementById('drawbtn').disabled = true;
        }
        else {
          // document.getElementById('drawbtn').disabled = false;
        }
      }

      if (i == 3) {

        arrattrii4.push(rowValuesex2);

        if (listItemsex2.length != 5) {
          //  document.getElementById('drawbtn').disabled = true;
        }
        else {
          // document.getElementById('drawbtn').disabled = false;
        }
      }

    }
  }

  var mergedArray2 = [].concat.apply([], arrattrii1);
  arrattri21 = [...new Set(mergedArray2)]; //removes duplicates
  console.log(arrattri21);
  length21 = arrattri21.length;
  console.log(length21);

  var mergedArray2b = [].concat.apply([], arrattrii2);
  arrattri22 = [...new Set(mergedArray2b)]; //removes duplicates
  console.log(arrattri22);
   length22 = arrattri22.length;
  console.log(length22);

  var mergedArray2c = [].concat.apply([], arrattrii3);
  arrattri23 = [...new Set(mergedArray2c)]; //removes duplicates
  console.log(arrattri23);
  length23 = arrattri23.length;
  console.log(length23);

  var mergedArray2d = [].concat.apply([], arrattrii4);
  arrattri24 = [...new Set(mergedArray2d)]; //removes duplicates
  console.log(arrattri24);
  length24 = arrattri24.length;
  console.log(length24);



}


/*************************************Function for Table 3***********************************************/
var constarr = [];
var consrting;
function addbtnt23() {
  var objsel21 = document.getElementById("selectentt31b");
  var dobj21 = objsel21.options[objsel21.selectedIndex].value;
  //alert(dobj1);
  //var inpt23 = document.getElementById("inp23").value;
  //arrrel2.push(inpt23);
  var objrel22 = document.getElementById("selectrel3");
  var relobj22 = objrel22.options[objrel22.selectedIndex].text;

  var objsel22 = document.getElementById("selectentt32b");
  var dobj22 = objsel22.options[objsel22.selectedIndex].value;
  // alert(dobj2);
  var objselcont2 = document.getElementById("selectconst3b");
  var dobjconst2 = objselcont2.options[objselcont2.selectedIndex].text;
  var dobjconstraint2 = objselcont2.options[objselcont2.selectedIndex].value;
  //console.log(dobjconstraint2);



  constarr.push(dobjconstraint2);
  //console.log(constarr);

  consrting = constarr.toString();

  var rbtn = document.createElement("button");
  rbtn.setAttribute("id", "removebtn");
  rbtn.setAttribute("type", "button");
  rbtn.setAttribute("class", "btn btn-danger");
  rbtn.setAttribute("onclick", "removerow(this)");

  var newIconbtn = document.createElement("i");
  newIconbtn.setAttribute("class", "bi bi-dash-circle");
  rbtn.appendChild(newIconbtn);

  if (dobj21 == dobj22) {
    alert(dobj21 + "  is not related to  " + dobj22);
  }
  else if ((objsel21.options.length === 0 ) || (objsel22.options.length === 0 )) {
    alert("Select entity from the dropdown");
  }

 else if (relobj22 == "Select Relation") {
    alert("Select relation from the dropdown");
  }

  else if ((dobj21 !== dobj22)) {

    var tr = document.createElement('tr');
    tr.setAttribute("id", "t5uc");
    document.getElementById('tbodytbl25').appendChild(tr);
    var td1 = document.createElement('td');
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var tdval1 = document.createTextNode(dobj21);
    var tdval2 = document.createTextNode(relobj22);
    var tdval3 = document.createTextNode(dobj22);
    var tdval4 = document.createTextNode(dobjconst2);

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
    document.getElementById('tbodytbl25').appendChild(tr);

  }

  //document.getElementById("ftbl23").reset();

  

}



function removerow(btndel) {
  if (typeof (btndel) == "object") {
    $(btndel).closest("tr").remove();

  }


  else {
    return false;
  }
}


function removerowuc(btndel) {

  if (typeof (btndel) == "object") {
    var listItemValue = $(btndel).closest("li").data("value");
    $(btndel).closest("li").remove();

    var index = arrattri21.indexOf(listItemValue);
    var index2 = arrattri22.indexOf(listItemValue);
    var index3 = arrattri23.indexOf(listItemValue);
    var index4 = arrattri24.indexOf(listItemValue);
    if (index !== -1) {
      arrattri21.splice(index, 1);

    }
    if (index2 !== -1) {

      arrattri22.splice(index2, 1);
    }
    if (index3 !== -1) {

      arrattri23.splice(index3, 1);
    }
    if (index4 !== -1) {

      arrattri24.splice(index4, 1);
    }
    console.log(arrattri21);
    console.log(arrattri22);
    console.log(arrattri23);
    console.log(arrattri24);

  } else {
    return false;
  }


}



function drawbtnex22() {

  
if((length21 == 3)&& (length22 == 3)&&(length23 == 6)&&(length24 == 5) ){
  arrconstrt2 = consrting.split(/[ ,]+/);
  // console.log(arrconstrt2);
  document.getElementById('dispuml2').style.display = "block";
}

else{
  alert("Enter all attributes for each entities");
 //
  document.getElementById('dispuml2').style.display = "none";
}
  var namespace = joint.shapes;

  var graph = new joint.dia.Graph({}, { cellNamespace: namespace });

  paper = new joint.dia.Paper({
    el: document.getElementById('er_diag_ex2'),
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


  /********************************* Entity 1  Agency**************************************8*/
  var entity1 = new joint.shapes.standard.Rectangle();

  entity1.position(176, 106);
  entity1.resize(100, 40);
  entity1.attr({
    body: {
      fill: '#FFFC8C',
      strokeWidth: 2
    },
    label: {
      text: arrentity2[0],
      fill: 'black',
      fontSize: 16
    }
  });
  entity1.addTo(graph);





  /********************************* Entity 3  Cab***************************************/
  var entity3 = new joint.shapes.standard.Rectangle();
  entity3.position(160, 314);
  entity3.resize(100, 40);
  entity3.attr({
    body: {
      fill: '#FFFC8C',

      strokeWidth: 2
    },
    label: {
      text: arrentity2[1],
      fill: 'black',
      fontSize: 16
    }
  });
  entity3.addTo(graph);



  /********************************* Entity 2  Driver ***************************************/
  var entity2 = new joint.shapes.standard.Rectangle();
  entity2.position(521, 95);
  entity2.resize(100, 40);
  entity2.attr({
    body: {
      fill: '#FFFC8C',

      strokeWidth: 2
    },
    label: {
      text: arrentity2[2],
      fill: 'black',
      fontSize: 16
    }
  });
  entity2.addTo(graph);
  /********************************* Entity 4  Passenger***************************************/
  var entity4 = new joint.shapes.standard.Rectangle();
  entity4.position(510, 382);
  entity4.resize(100, 40);
  entity4.attr({
    body: {
      fill: '#FFFC8C',

      strokeWidth: 2
    },
    label: {
      text: arrentity2[3],
      fill: 'black',
      fontSize: 16
    }
  });
  entity4.addTo(graph);

  /******************************************* Relation **********************************************/

  var diamondrel1 = new joint.shapes.standard.Rectangle(); //agency -driver

  diamondrel1.position(374, 106);
  diamondrel1.resize(50, 50);

  diamondrel1.attr({
    body: {
      fill: '#AEFFEB',
      strokeWidth: 2,


    },
    label: {
      text: "Submit", //submit arrrel2[0]
      fill: 'black',
      fontSize: 11
    }

  });
  diamondrel1.rotate(40);
  diamondrel1.addTo(graph);




  var diamondrel2 = new joint.shapes.standard.Rectangle(); //agency -driver

  diamondrel2.position(401, 22);
  diamondrel2.resize(50, 50);

  diamondrel2.attr({
    body: {
      fill: '#AEFFEB',
      strokeWidth: 2,


    },
    label: {
      text: "Hires", // hires arrrel2[1]
      fill: 'black',
      fontSize: 11
    }

  });
  diamondrel2.rotate(40);
  diamondrel2.addTo(graph);



  var diamondrel3 = new joint.shapes.standard.Rectangle();//agency -cab

  diamondrel3.position(198, 200);
  diamondrel3.resize(50, 50);

  diamondrel3.attr({
    body: {
      fill: '#AEFFEB',
      strokeWidth: 2,


    },
    label: {
      text: "Owns", //owns arrrel2[2]
      fill: 'black',
      fontSize: 11
    }

  });
  diamondrel3.rotate(40);
  diamondrel3.addTo(graph);



  var diamondrel4 = new joint.shapes.standard.Rectangle(); //cab -passenger

  diamondrel4.position(364, 334);
  diamondrel4.resize(50, 50);

  diamondrel4.attr({
    body: {
      fill: '#AEFFEB',
      strokeWidth: 2,


    },
    label: {
      text: "Books", //books arrrel2[3]
      fill: 'black',
      fontSize: 11
    }

  });
  diamondrel4.rotate(40);
  diamondrel4.addTo(graph);

  var diamondrel5 = new joint.shapes.standard.Rectangle(); //passenger -driver

  diamondrel5.position(557, 245);
  diamondrel5.resize(50, 50);

  diamondrel5.attr({
    body: {
      fill: '#AEFFEB',
      strokeWidth: 2,


    },
    label: {
      text: "Return", //return arrrel2[4]
      fill: 'black',
      fontSize: 11
    }

  });
  diamondrel5.rotate(40);
  diamondrel5.addTo(graph);

  var diamondrel6 = new joint.shapes.standard.Rectangle(); //cab -driver

  diamondrel6.position(396, 205);
  diamondrel6.resize(50, 50);

  diamondrel6.attr({
    body: {
      fill: '#AEFFEB',
      strokeWidth: 2,


    },
    label: {
      text: arrrel2[5], //drives
      fill: 'black',
      fontSize: 11
    }

  });
  diamondrel6.rotate(40);
  diamondrel6.addTo(graph);
  /*************************** Attributes of first entity agency *************************************/


  var attri11 = new joint.shapes.standard.Ellipse(); 
  attri11.position(100, 31);

  attri11.resize(100, 40);
  attri11.attr({
    body: {
      fill: '#D4FFA6',
      rx: 20,
      ry: 20,
      strokeWidth: 2
    },
    label: {
      text: arrattri21[0],
      fill: 'black',
      fontSize: 16
    }
  });
  attri11.addTo(graph);

  var attri12 = new joint.shapes.standard.Ellipse();
  attri12.position(33, 104);

  attri12.resize(100, 40);
  attri12.attr({
    body: {
      fill: '#D4FFA6',
      rx: 20,
      ry: 20,
      strokeWidth: 2
    },
    label: {
      text: arrattri21[1],
      fill: 'black',
      fontSize: 16
    }
  });
  attri12.addTo(graph);

  var attri13 = new joint.shapes.standard.Ellipse();
  attri13.position(71, 190);

  attri13.resize(100, 40);
  attri13.attr({
    body: {
      fill: '#D4FFA6',
      rx: 20,
      ry: 20,
      strokeWidth: 2
    },
    label: {
      text: arrattri21[2],
      fill: 'black',
      fontSize: 16
    }
  });
  attri13.addTo(graph);










  /******************************* Attributes of second entity  driver ***************************************/
  var attri21 = new joint.shapes.standard.Ellipse();
  attri21.position(494, 12);

  attri21.resize(130, 50);
  attri21.attr({
    body: {
      fill: '#D4FFA6',
      rx: 20,
      ry: 20,
      strokeWidth: 2
    },
    label: {
      text: arrattri22[0],
      fill: 'black',
      fontSize: 16
    }
  });
  attri21.addTo(graph);



  var attri22 = new joint.shapes.standard.Ellipse();
  attri22.position(628, 6);

  attri22.resize(130, 40);
  attri22.attr({
    body: {
      fill: '#D4FFA6',
      rx: 20,
      ry: 20,
      strokeWidth: 2
    },
    label: {
      text: arrattri22[1],
      fill: 'black',
      fontSize: 16
    }
  });
  attri22.addTo(graph);

  var attri23 = new joint.shapes.standard.Ellipse();
  attri23.position(663, 56);

  attri23.resize(130, 40);
  attri23.attr({
    body: {
      fill: '#D4FFA6',
      rx: 20,
      ry: 20,
      strokeWidth: 2
    },
    label: {
      text: arrattri22[2],
      fill: 'black',
      fontSize: 16
    }
  });
  attri23.addTo(graph);

  var attri24 = new joint.shapes.standard.Ellipse();
  attri24.position(66, 152);

  attri24.resize(130, 40);
  attri24.attr({
    body: {
      fill: '#D4FFA6',
      rx: 20,
      ry: 20,
      strokeWidth: 2
    },
    label: {
      text: arrattri22[3],
      fill: 'black',
      fontSize: 16
    }
  });
  attri24.addTo(graph);

  var attri25 = new joint.shapes.standard.Ellipse();
  attri25.position(608, 199);

  attri25.resize(130, 40);
  attri25.attr({
    body: {
      fill: '#D4FFA6',
      rx: 20,
      ry: 20,
      strokeWidth: 2
    },
    label: {
      text: arrattri22[4],
      fill: 'black',
      fontSize: 16
    }
  });
  attri25.addTo(graph);

  var attri26 = new joint.shapes.standard.Ellipse();
  attri26.position(697, 105);

  attri26.resize(130, 40);
  attri26.attr({
    body: {
      fill: '#D4FFA6',
      rx: 20,
      ry: 20,
      strokeWidth: 2
    },
    label: {
      text: arrattri22[5],
      fill: 'black',
      fontSize: 16
    }
  });
  attri26.addTo(graph);

  /************************************* Attribute for third entity cab ***************************************/

  var attri31 = new joint.shapes.standard.Ellipse();
  attri31.position(9, 318);

  attri31.resize(100, 40);
  attri31.attr({
    body: {
      fill: '#D4FFA6',
      rx: 20,
      ry: 20,
      strokeWidth: 2
    },
    label: {
      text: arrattri23[0],
      fill: 'black',
      fontSize: 16
    }
  });
  attri31.addTo(graph);

  var attri32 = new joint.shapes.standard.Ellipse();
  attri32.position(30, 393);

  attri32.resize(100, 40);
  attri32.attr({
    body: {
      fill: '#D4FFA6',
      rx: 20,
      ry: 20,
      strokeWidth: 2
    },
    label: {
      text: arrattri23[1],
      fill: 'black',
      fontSize: 16
    }
  });
  attri32.addTo(graph);

  var attri33 = new joint.shapes.standard.Ellipse();
  attri33.position(100, 435);

  attri33.resize(100, 40);
  attri33.attr({
    body: {
      fill: '#D4FFA6',
      rx: 20,
      ry: 20,
      strokeWidth: 2
    },
    label: {
      text: arrattri23[2],
      fill: 'black',
      fontSize: 16
    }
  });
  attri33.addTo(graph);


  /************************************* Attribute for fourth entity  passenger ***************************************/

  var attri41 = new joint.shapes.standard.Ellipse();
  attri41.position(644, 354);

  attri41.resize(100, 40);
  attri41.attr({
    body: {
      fill: '#D4FFA6',
      rx: 20,
      ry: 20,
      strokeWidth: 2
    },
    label: {
      text: arrattri24[0],
      fill: 'black',
      fontSize: 16
    }
  });
  attri41.addTo(graph);

  var attri42 = new joint.shapes.standard.Ellipse();
  attri42.position(642, 445);

  attri42.resize(100, 40);
  attri42.attr({
    body: {
      fill: '#D4FFA6',
      rx: 20,
      ry: 20,
      strokeWidth: 2
    },
    label: {
      text: arrattri24[1],
      fill: 'black',
      fontSize: 16
    }
  });
  attri42.addTo(graph);

  var attri43 = new joint.shapes.standard.Ellipse();
  attri43.position(549, 498);

  attri43.resize(100, 40);
  attri43.attr({
    body: {
      fill: '#D4FFA6',
      rx: 20,
      ry: 20,
      strokeWidth: 2
    },
    label: {
      text: arrattri24[2],
      fill: 'black',
      fontSize: 16
    }
  });
  attri43.addTo(graph);

  var attri44 = new joint.shapes.standard.Ellipse();
  attri44.position(434, 491);

  attri44.resize(100, 40);
  attri44.attr({
    body: {
      fill: '#D4FFA6',
      rx: 20,
      ry: 20,
      strokeWidth: 2
    },
    label: {
      text: arrattri24[3],
      fill: 'black',
      fontSize: 16
    }
  });
  attri44.addTo(graph);

  var attri45 = new joint.shapes.standard.Ellipse();
  attri45.position(386, 431);

  attri45.resize(100, 40);
  attri45.attr({
    body: {
      fill: '#D4FFA6',
      rx: 20,
      ry: 20,
      strokeWidth: 2
    },
    label: {
      text: arrattri24[4],
      fill: 'black',
      fontSize: 16
    }
  });
  attri45.addTo(graph);

  /***************** Link ********************/
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

  link4.source(entity2);
  link4.target(attri21);
  link4.addTo(graph);

  var link5 = new joint.shapes.examples.CustomLink();

  link5.source(entity2);
  link5.target(attri22);
  link5.addTo(graph);

  var link7 = new joint.shapes.examples.CustomLink();

  link7.source(entity2);
  link7.target(attri23);
  link7.addTo(graph);


  var link8 = new joint.shapes.examples.CustomLink();

  link8.source(entity3);
  link8.target(attri31);
  link8.addTo(graph);

  var link9 = new joint.shapes.examples.CustomLink();

  link9.source(entity3);
  link9.target(attri32);
  link9.addTo(graph);

  var link10 = new joint.shapes.examples.CustomLink();

  link10.source(entity3);
  link10.target(attri33);
  link10.addTo(graph);

  var link11 = new joint.shapes.examples.CustomLink();

  link11.source(entity4);
  link11.target(attri41);
  link11.addTo(graph);

  var link12 = new joint.shapes.examples.CustomLink();

  link12.source(entity4);
  link12.target(attri42);
  link12.addTo(graph);

  var link13 = new joint.shapes.examples.CustomLink();

  link13.source(entity4);
  link13.target(attri43);
  link13.addTo(graph);


  var link14 = new joint.shapes.examples.CustomLink();

  link14.source(entity4);
  link14.target(attri44);
  link14.addTo(graph);


  var link15 = new joint.shapes.examples.CustomLink();

  link15.source(entity4);
  link15.target(attri45);
  link15.addTo(graph);


  var link16 = new joint.shapes.examples.CustomLink();

  link16.source(entity2);
  link16.target(attri24);
  link16.addTo(graph);

  var link17 = new joint.shapes.examples.CustomLink();

  link17.source(entity2);
  link17.target(attri25);
  link17.addTo(graph);

  var link18 = new joint.shapes.examples.CustomLink();

  link18.source(entity2);
  link18.target(attri26);
  link18.addTo(graph);




  /**************************************************  Relation link *******************************************/
  var linkr1 = new joint.shapes.examples.CustomLink();
  linkr1.source(entity1);
  linkr1.target(diamondrel1);
  linkr1.addTo(graph);
  linkr1.appendLabel({
    attrs: {
      text: {
        text: arrconstrt2[0], 
        fontSize: 16
      }

    }
  });
  linkr1.addTo(graph);




  var linkr2 = new joint.shapes.examples.CustomLink();

  linkr2.source(entity2);
  linkr2.target(diamondrel1);
  linkr2.addTo(graph);
  linkr2.appendLabel({
    attrs: {
      text: {
        text: arrconstrt2[2],
        fontSize: 16
      }

    }
  });
  linkr2.addTo(graph);



  var linkr3 = new joint.shapes.examples.CustomLink();

  linkr3.source(entity1);
  linkr3.target(diamondrel2);
  linkr3.addTo(graph);
  linkr3.appendLabel({
    attrs: {
      text: {
        text: arrconstrt2[3],
        fontSize: 16
      }

    }
  });
  linkr3.addTo(graph);

  var linkr4 = new joint.shapes.examples.CustomLink();

  linkr4.source(entity2);
  linkr4.target(diamondrel2);
  linkr4.addTo(graph);
  linkr4.appendLabel({
    attrs: {
      text: {
        text: arrconstrt2[5],
        fontSize: 16
      }

    }
  });
  linkr4.addTo(graph);



  var linkr5 = new joint.shapes.examples.CustomLink();

  linkr5.source(entity1);
  linkr5.target(diamondrel3);
  linkr5.addTo(graph);
  linkr5.appendLabel({
    attrs: {
      text: {
        text: arrconstrt2[6],
        fontSize: 16
      }

    }
  });
  linkr5.addTo(graph);


  var linkr6 = new joint.shapes.examples.CustomLink();

  linkr6.source(entity3);
  linkr6.target(diamondrel3);
  linkr6.addTo(graph);
  linkr6.appendLabel({
    attrs: {
      text: {
        text: arrconstrt2[8],
        fontSize: 16
      }

    }
  });
  linkr6.addTo(graph);


  var linkr7 = new joint.shapes.examples.CustomLink();

  linkr7.source(entity3);
  linkr7.target(diamondrel4);
  linkr7.addTo(graph);
  linkr7.appendLabel({
    attrs: {
      text: {
        text: arrconstrt2[9],
        fontSize: 16
      }

    }
  });
  linkr7.addTo(graph);


  var linkr8 = new joint.shapes.examples.CustomLink();

  linkr8.source(entity4);
  linkr8.target(diamondrel4);
  linkr8.addTo(graph);
  linkr8.appendLabel({
    attrs: {
      text: {
        text: arrconstrt2[11],
        fontSize: 16
      }

    }
  });
  linkr8.addTo(graph);

  var linkr9 = new joint.shapes.examples.CustomLink();

  linkr9.source(entity2);
  linkr9.target(diamondrel5);
  linkr9.addTo(graph);
  linkr9.appendLabel({
    attrs: {
      text: {
        text: arrconstrt2[12],
        fontSize: 16
      }

    }
  });
  linkr9.addTo(graph);


  var linkr10 = new joint.shapes.examples.CustomLink();

  linkr10.source(entity4);
  linkr10.target(diamondrel5);
  linkr10.addTo(graph);
  linkr10.appendLabel({
    attrs: {
      text: {
        text: arrconstrt2[14],
        fontSize: 16
      }

    }
  });
  linkr10.addTo(graph);


  var linkr11 = new joint.shapes.examples.CustomLink();

  linkr11.source(entity2);
  linkr11.target(diamondrel6);
  linkr11.addTo(graph);
  linkr11.appendLabel({
    attrs: {
      text: {
        text: arrconstrt2[15],
        fontSize: 16
      }

    }
  });
  linkr11.addTo(graph);


  var linkr12 = new joint.shapes.examples.CustomLink();

  linkr12.source(entity3);
  linkr12.target(diamondrel6);
  linkr12.addTo(graph);
  linkr12.appendLabel({
    attrs: {
      text: {
        text: arrconstrt2[17],
        fontSize: 16
      }

    }
  });
  linkr12.addTo(graph);



  


}












