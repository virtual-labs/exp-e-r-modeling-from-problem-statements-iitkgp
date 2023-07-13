/*Redeveloped
Lab: Software Engineering
Exp:E-R Modeling from the Problem Statements
File Name: simulation.js
Author: Prakriti Dhang */

function playsimulation(){
   
    document.getElementById("playbtn").disabled=true;
    document.getElementById("stp1").style.display="block";
    document.getElementById("p11").style.display="block";

    setTimeout(s11, 1000);}

    function s11(){
    document.getElementById("s1").style.display="block";
    document.getElementById("nextbtn").style.display="block";
    document.getElementById("nextbtn").disabled=true;
    //document.getElementById("prebtn").disabled=true;
    document.getElementById("stp1").disabled=false;

    setTimeout(s12, 1000);
    }

    function s12(){
        document.getElementById("s2").style.display="block";   
        setTimeout(s13, 1000);
    }

 function s13(){
    document.getElementById("s3").style.display="block";
    setTimeout(s14, 1000);
 }
 function s14(){
    document.getElementById("s4").style.display="block";
    setTimeout(s15, 1000);
 }
function s15(){
    document.getElementById("s5").style.display="block";
    document.getElementById("nextbtn").disabled=false;
}



//var count=0;
//var countnxtbtn;
function gonext(){ // Para 2 
   // count++;
    //countnxtbtn=count;
     //if(countnxtbtn == 1){
        document.getElementById("nextbtn1").disabled=true;
        document.getElementById("p11").style.display="none";
        document.getElementById("p2").style.display="block";
        document.getElementById("s1a").style.display="block";
        document.getElementById("head1").innerText="Identify Entity sets and Attributes";
          setTimeout(stp1b, 1000);

    function stp1b(){
        document.getElementById("s1b").style.display="block";
         setTimeout(stp1c, 1000);
    }

 function stp1c(){
    document.getElementById("s1c").style.display="block";
    document.getElementById("nextbtn1").disabled=false;
    //document.getElementById("prebtn1").disabled=false;
    
 }
}
    
//}

//if(countnxtbtn == 2)
function gonext1(){ //para 3
    document.getElementById("nextbtn2").disabled=true;
    document.getElementById("p2").style.display="none";
    document.getElementById("p3").style.display="block";
    document.getElementById("s1d").style.display="block";
    document.getElementById("head1").innerText="Identify Entity sets and Attributes";
    setTimeout(stp1e, 1000);

function stp1e(){
    document.getElementById("s1e").style.display="block";
     setTimeout(stp1f, 1000);
}

function stp1f(){
document.getElementById("s1f").style.display="block";
document.getElementById("nextbtn2").disabled=false;
//document.getElementById("prebtn2").disabled=false;


}


}

/*if(countnxtbtn == 3) */
function gonext2(){ //para4
    document.getElementById("nextbtn3").disabled=true;
    document.getElementById("p3").style.display="none";
    document.getElementById("p4").style.display="block";
    document.getElementById("s1g").style.display="block";
    document.getElementById("head1").innerText="Identify Entity sets and Attributes";
    setTimeout(stp1h, 1000);

function stp1h(){
    document.getElementById("s1h").style.display="block";
    setTimeout(stp1i, 1000);
}

function stp1i(){
document.getElementById("s1i").style.display="block";
document.getElementById("nextbtn3").disabled=false;
//document.getElementById("prebtn3").disabled=false;


}


}


//if(countnxtbtn == 4)
function gonext3(){ //para 5
    document.getElementById("nextbtn4").disabled=true;
    document.getElementById("p4").style.display="none";
    document.getElementById("p5").style.display="block";
    document.getElementById("s1j").style.display="block";
    document.getElementById("head1").innerText="Identify Entity sets and Attributes";
    setTimeout(stp1k, 1000);

function stp1k(){
    document.getElementById("s1k").style.display="block";
    setTimeout(stp1l, 1000);
}

function stp1l(){
document.getElementById("s1l").style.display="block";
setTimeout(stp1m, 1000);


}

function stp1m(){
    document.getElementById("s1m").style.display="block";
    document.getElementById("nextbtn4").disabled=false;
    //document.getElementById("prebtn4").disabled=false;

    

    }




}
/// if(countnxtbtn == 5)
function gonextstep2(){ //para 6
    document.getElementById("nextbtn5").disabled=true;
    document.getElementById("p5").style.display="none";
    document.getElementById("stp1").disabled=false;
    document.getElementById("stp2").style.display="block";
    document.getElementById("stp2").disabled=false;
    document.getElementById("head1").innerText="Draw Entity";
    document.getElementById("p6").style.display="block";
    
    
     setTimeout(shwprimarykey, 1500);
   

    

    function shwprimarykey(){
      
       
        document.getElementById("primarykey1").style.display="block";
        
        setTimeout(nexter2, 1500);
    }

    

    function nexter2(){
       
        
        document.getElementById("nextbtn5").disabled=false;
        //document.getElementById("prebtn5").disabled=false;
    }
     
}


//}

function gonext2a(){
    document.getElementById("nextbtn6").disabled=true;
    document.getElementById("p6").style.display="none";
    document.getElementById("stp1").disabled=false;
    document.getElementById("stp2").style.display="block";
    document.getElementById("stp2").disabled=false;
    document.getElementById("head1").innerText="Draw Entity";
    document.getElementById("p7").style.display="block"; 

    setTimeout(shwprimarykey2, 1500);
   

    

    function shwprimarykey2(){
      
       
        document.getElementById("primarykey2").style.display="block";
        
        setTimeout(nexter2, 1500);
    }

    

    function nexter2(){
       
        
        document.getElementById("nextbtn6").disabled=false;
        //document.getElementById("prebtn6").disabled=false;
}

}

function gonext2b(){
    document.getElementById("nextbtn7").disabled=true;
    document.getElementById("p7").style.display="none";
    document.getElementById("stp1").disabled=false;
    document.getElementById("stp2").style.display="block";
    document.getElementById("stp2").disabled=false;
    document.getElementById("head1").innerText="Draw Entity";
    document.getElementById("p8").style.display="block"; 

    setTimeout(shwprimarykey3, 1500);
   

    

    function shwprimarykey3(){
      
       
        document.getElementById("primarykey3").style.display="block";
        
        setTimeout(nexter3, 1500);
    }

    

    function nexter3(){
       
        
        document.getElementById("nextbtn7").disabled=false;
        //document.getElementById("prebtn7").disabled=false;
}

}


function gonext2c(){
    document.getElementById("nextbtn8").disabled=true;
    document.getElementById("p8").style.display="none";
    document.getElementById("stp1").disabled=false;
    document.getElementById("stp2").style.display="block";
    document.getElementById("stp2").disabled=false;
    document.getElementById("head1").innerText="Draw Entity";
    document.getElementById("p9").style.display="block"; 

    setTimeout(shwprimarykey4, 1500);
   

    

    function shwprimarykey4(){
      
       
        document.getElementById("primarykey4").style.display="block";
        
        setTimeout(nexter4, 1500);
    }

    

    function nexter4(){
       
        
        document.getElementById("nextbtn8").disabled=false;
       // document.getElementById("prebtn8").disabled=false;
}

}


function gonextstep3(){
    document.getElementById("nextbtn9").disabled=true;
    document.getElementById("p9").style.display="none";
    document.getElementById("stp1").disabled=false;
    document.getElementById("stp2").style.display="block";
    document.getElementById("stp2").disabled=false;
    document.getElementById("stp3").style.display="block";
    document.getElementById("stp3").disabled=false;
  
    document.getElementById("head1").innerText="Identify Relationaship";
    document.getElementById("p10").style.display="block"; 
   

    setTimeout(nextir1, 1500);
   
    function nextir1(){
      
       
        document.getElementById("ir1").style.display="block";
        
        setTimeout(nextir2, 2000);
    }


    function nextir2(){
      
       
        document.getElementById("ir2").style.display="block";
        
        setTimeout(nextir3, 2000);
    }



    function nextir3(){
      
       
        document.getElementById("ir3").style.display="block";
        
        setTimeout(nextir4, 2000);
    }


    function nextir4(){
      
       
        document.getElementById("ir4").style.display="block";
        
        setTimeout(shwentityrel, 2000);
    }


    
   
    function shwentityrel(){
      
       
        document.getElementById("entityrel").style.display="block";
        
        setTimeout(nexter5, 1500);
    }

    

    function nexter5(){
       
        
        document.getElementById("nextbtn9").disabled=false;
       // document.getElementById("prebtn9").disabled=false;
}

}


function gonextstep4(){
    document.getElementById("nextbtn10").disabled=true;
    document.getElementById("p10").style.display="none";
    document.getElementById("stp1").disabled=false;
    document.getElementById("stp2").style.display="block";
    document.getElementById("stp2").disabled=false;
    document.getElementById("stp3").style.display="block";
    document.getElementById("stp3").disabled=false;
    document.getElementById("stp4").style.display="block";
    document.getElementById("stp4").disabled=false;
    document.getElementById("head1").innerText="Draw Relationships";
    document.getElementById("p111").style.display="block"; 

    setTimeout(shwmappingrel, 1500);
   

    

    function shwmappingrel(){
      
       
        document.getElementById("mappingrel").style.display="block";
        
        setTimeout(nexter6, 1500);
    }

    

    function nexter6(){
       
        
        document.getElementById("nextbtn10").disabled=false;
       // document.getElementById("prebtn10").disabled=false;
}

}


function gonextstep5(){
    document.getElementById("nextbtn11").disabled=true;
    document.getElementById("p111").style.display="none";
    document.getElementById("stp1").disabled=false;
    document.getElementById("stp2").style.display="block";
    document.getElementById("stp2").disabled=false;
    document.getElementById("stp3").style.display="block";
    document.getElementById("stp3").disabled=false;
    document.getElementById("stp4").style.display="block";
    document.getElementById("stp4").disabled=false;
    document.getElementById("stp5").style.display="block";
    document.getElementById("stp5").disabled=false;
    document.getElementById("head1").innerText="Identify Mapping Cardinalities and Represent them";
    document.getElementById("p12").style.display="block"; 

    setTimeout(shwstdschool, 1500);
   

    

    function shwstdschool(){
      
       
        document.getElementById("stdschool").style.display="block";
        
        setTimeout(nexter7, 1500);
    }

    

    function nexter7(){
       
        
        document.getElementById("nextbtn11").disabled=false;
      //  document.getElementById("prebtn11").disabled=false;
}

}


function gonext5a(){
    document.getElementById("nextbtn12").disabled=true;
    document.getElementById("p12").style.display="none";
    document.getElementById("stp1").disabled=false;
    document.getElementById("stp2").style.display="block";
    document.getElementById("stp2").disabled=false;
    document.getElementById("stp3").style.display="block";
    document.getElementById("stp3").disabled=false;
    document.getElementById("stp4").style.display="block";
    document.getElementById("stp4").disabled=false;
    document.getElementById("stp5").style.display="block";
    document.getElementById("stp5").disabled=false;
    document.getElementById("head1").innerText="Identify Mapping Cardinalities and Represent them";
    document.getElementById("p13").style.display="block"; 

    setTimeout(shwfactschool, 1500);
   

    

    function shwfactschool(){
      
       
        document.getElementById("factschool").style.display="block";
        
        setTimeout(nexter8, 1500);
    }

    

    function nexter8(){
       
        
        document.getElementById("nextbtn12").disabled=false;
       // document.getElementById("prebtn12").disabled=false;
}

}


function gonext5b(){
    document.getElementById("nextbtn13").disabled=true;
    document.getElementById("p13").style.display="none";
    document.getElementById("stp1").disabled=false;
    document.getElementById("stp2").style.display="block";
    document.getElementById("stp2").disabled=false;
    document.getElementById("stp3").style.display="block";
    document.getElementById("stp3").disabled=false;
    document.getElementById("stp4").style.display="block";
    document.getElementById("stp4").disabled=false;
    document.getElementById("stp5").style.display="block";
    document.getElementById("stp5").disabled=false;
    document.getElementById("head1").innerText="Identify Mapping Cardinalities and Represent them";
    document.getElementById("p14").style.display="block"; 

    setTimeout(shwcoursfact, 1500);
   

    

    function shwcoursfact(){
      
       
        document.getElementById("coursfact").style.display="block";
        
        setTimeout(nexter9, 1500);
    }

    

    function nexter9(){
       
        
        document.getElementById("nextbtn13").disabled=false;
       // document.getElementById("prebtn13").disabled=false;
}

}

function gonext5c(){
    
    document.getElementById("p14").style.display="none";
    document.getElementById("stp1").disabled=false;
    document.getElementById("stp2").style.display="block";
    document.getElementById("stp2").disabled=false;
    document.getElementById("stp3").style.display="block";
    document.getElementById("stp3").disabled=false;
    document.getElementById("stp4").style.display="block";
    document.getElementById("stp4").disabled=false;
    document.getElementById("stp5").style.display="block";
    document.getElementById("stp5").disabled=false;
    document.getElementById("head1").innerText="Identify Mapping Cardinalities and Represent them";
    document.getElementById("p15").style.display="block"; 

    setTimeout(shwcousrstd, 1500);
   

    

    function shwcousrstd(){
      
       
        document.getElementById("cousrstd").style.display="block";
        
        setTimeout(nexter10, 1500);
    }

    

    function nexter10(){
       
      //  document.getElementById("prebtn14").disabled=false;
        document.getElementById("replaybtn").style.display="block";
        document.getElementById("replaybtn").disabled=false;
}

}


/*

function goback1(){
   
    document.getElementById("p11").style.display="block";
    document.getElementById("p2").style.display="none";
    document.getElementById("p3").style.display="none";
    document.getElementById("p5").style.display="none";
    document.getElementById("p6").style.display="none";
    document.getElementById("p4").style.display="none";
    document.getElementById("p7").style.display="none";
    document.getElementById("p8").style.display="none";
    document.getElementById("p9").style.display="none";
    document.getElementById("p10").style.display="none";
    document.getElementById("p111").style.display="none";
    document.getElementById("p12").style.display="none";
    document.getElementById("p13").style.display="none";
    document.getElementById("p14").style.display="none";
    document.getElementById("p15").style.display="none";

    setTimeout(s11, 1000);}

    function s11(){
    document.getElementById("s1").style.display="block";
    document.getElementById("nextbtn").style.display="block";
    document.getElementById("nextbtn").disabled=true;
    document.getElementById("prebtn").disabled=true;
    document.getElementById("stp1").disabled=false;

    setTimeout(s12, 1000);
    }

    function s12(){
        document.getElementById("s2").style.display="block";
        setTimeout(s13, 1000);
    }

 function s13(){
    document.getElementById("s3").style.display="block";
    setTimeout(s14, 1000);
 }
 function s14(){
    document.getElementById("s4").style.display="block";
    setTimeout(s15, 1000);
 }
function s15(){
    document.getElementById("s5").style.display="block";
    document.getElementById("nextbtn").disabled=false;

}

function goback2(){
   
    document.getElementById("nextbtn1").disabled=true;
    document.getElementById("p11").style.display="none";
    document.getElementById("p4").style.display="none";
    document.getElementById("p2").style.display="none";
    document.getElementById("p3").style.display="none";
    document.getElementById("p5").style.display="none";
    document.getElementById("p6").style.display="none";
    document.getElementById("p2").style.display="block";
    document.getElementById("s1a").style.display="block";
    document.getElementById("p7").style.display="none";
    document.getElementById("p8").style.display="none";
    document.getElementById("p9").style.display="none";
    document.getElementById("p10").style.display="none";
    document.getElementById("p111").style.display="none";
    document.getElementById("p12").style.display="none";
    document.getElementById("p13").style.display="none";
    document.getElementById("p14").style.display="none";
    document.getElementById("p15").style.display="none";
    document.getElementById("head1").innerText="Identify Entity sets and Attributes";
    setTimeout(stp1b, 1000);

function stp1b(){
    document.getElementById("s1b").style.display="block";
    setTimeout(stp1c, 1000);
}

function stp1c(){
document.getElementById("s1c").style.display="block";
document.getElementById("nextbtn1").disabled=false;
document.getElementById("prebtn1").disabled=false;

}

}

function goback3(){
   
    document.getElementById("nextbtn2").disabled=true;
    document.getElementById("p2").style.display="none";
    document.getElementById("p11").style.display="none";
    document.getElementById("p4").style.display="none";
    document.getElementById("p5").style.display="none";
    document.getElementById("p6").style.display="none";
    document.getElementById("p3").style.display="block";
    document.getElementById("s1d").style.display="block";
    document.getElementById("p7").style.display="none";
    document.getElementById("p8").style.display="none";
    document.getElementById("p9").style.display="none";
    document.getElementById("p10").style.display="none";
    document.getElementById("p111").style.display="none";
    document.getElementById("p12").style.display="none";
    document.getElementById("p13").style.display="none";
    document.getElementById("p14").style.display="none";
    document.getElementById("p15").style.display="none";
    document.getElementById("head1").innerText="Identify Entity sets and Attributes";
   setTimeout(stp1e, 1000);

function stp1e(){
    document.getElementById("s1e").style.display="block";
   setTimeout(stp1f, 1000);
}

function stp1f(){
document.getElementById("s1f").style.display="block";
document.getElementById("nextbtn2").disabled=false;
document.getElementById("prebtn2").disabled=false;


}

}

function goback4(){
    document.getElementById("nextbtn3").disabled=true;
    document.getElementById("p11").style.display="none";
    document.getElementById("p2").style.display="none";
    document.getElementById("p3").style.display="none";
    document.getElementById("p5").style.display="none";
    document.getElementById("p6").style.display="none";
    document.getElementById("p4").style.display="block";
    document.getElementById("p7").style.display="none";
    document.getElementById("p8").style.display="none";
    document.getElementById("p9").style.display="none";
    document.getElementById("p10").style.display="none";
    document.getElementById("p111").style.display="none";
    document.getElementById("p12").style.display="none";
    document.getElementById("p13").style.display="none";
    document.getElementById("p14").style.display="none";
    document.getElementById("p15").style.display="none";
    document.getElementById("s1g").style.display="block";
    document.getElementById("head1").innerText="Identify Entity sets and Attributes";
    setTimeout(stp1h, 1000);

function stp1h(){
    document.getElementById("s1h").style.display="block";
     setTimeout(stp1i, 1000);
}

function stp1i(){
document.getElementById("s1i").style.display="block";
document.getElementById("nextbtn3").disabled=false;
document.getElementById("prebtn3").disabled=false;


}

}
function goback5(){
    document.getElementById("nextbtn4").disabled=true;
    document.getElementById("p11").style.display="none";
    document.getElementById("p2").style.display="none";
    document.getElementById("p3").style.display="none";
    document.getElementById("p6").style.display="none";
    document.getElementById("p4").style.display="none";
    document.getElementById("p5").style.display="block";
    document.getElementById("p7").style.display="none";
    document.getElementById("p8").style.display="none";
    document.getElementById("p9").style.display="none";
    document.getElementById("p10").style.display="none";
    document.getElementById("p111").style.display="none";
    document.getElementById("p12").style.display="none";
    document.getElementById("p13").style.display="none";
    document.getElementById("p14").style.display="none";
    document.getElementById("p15").style.display="none";
    document.getElementById("s1j").style.display="block";
    document.getElementById("head1").innerText="Identify Entity sets and Attributes";
    setTimeout(stp1k, 1000);

function stp1k(){
    document.getElementById("s1k").style.display="block";
     setTimeout(stp1l, 1000);
}

function stp1l(){
document.getElementById("s1l").style.display="block";
 setTimeout(stp1m, 1000);


}

function stp1m(){
    document.getElementById("s1m").style.display="block";
    document.getElementById("nextbtn4").disabled=false;
    document.getElementById("prebtn4").disabled=false;

    

    }

}



function goback6(){
    document.getElementById("p11").style.display="none";
    document.getElementById("p2").style.display="none";
    document.getElementById("p3").style.display="none";
    document.getElementById("p6").style.display="none";
    document.getElementById("p4").style.display="none";
    document.getElementById("p5").style.display="none";
    document.getElementById("p6").style.display="block";
    document.getElementById("p7").style.display="none";
    document.getElementById("p8").style.display="none";
    document.getElementById("p9").style.display="none";
    document.getElementById("p10").style.display="none";
    document.getElementById("p111").style.display="none";
    document.getElementById("p12").style.display="none";
    document.getElementById("p13").style.display="none";
    document.getElementById("p14").style.display="none";
    document.getElementById("p15").style.display="none";
}

function goback7(){
    document.getElementById("p11").style.display="none";
    document.getElementById("p2").style.display="none";
    document.getElementById("p3").style.display="none";
    document.getElementById("p6").style.display="none";
    document.getElementById("p4").style.display="none";
    document.getElementById("p5").style.display="none";
    document.getElementById("p6").style.display="none";
    document.getElementById("p7").style.display="block";
    document.getElementById("p8").style.display="none";
    document.getElementById("p9").style.display="none";
    document.getElementById("p10").style.display="none";
    document.getElementById("p111").style.display="none";
    document.getElementById("p12").style.display="none";
    document.getElementById("p13").style.display="none";
    document.getElementById("p14").style.display="none";
    document.getElementById("p15").style.display="none";
}

function goback8(){
    document.getElementById("p11").style.display="none";
    document.getElementById("p2").style.display="none";
    document.getElementById("p3").style.display="none";
    document.getElementById("p6").style.display="none";
    document.getElementById("p4").style.display="none";
    document.getElementById("p5").style.display="none";
    document.getElementById("p6").style.display="none";
    document.getElementById("p7").style.display="none";
    document.getElementById("p8").style.display="block";
    document.getElementById("p9").style.display="none";
    document.getElementById("p10").style.display="none";
    document.getElementById("p111").style.display="none";
    document.getElementById("p12").style.display="none";
    document.getElementById("p13").style.display="none";
    document.getElementById("p14").style.display="none";
    document.getElementById("p15").style.display="none";
}

function goback9(){
    document.getElementById("p11").style.display="none";
    document.getElementById("p2").style.display="none";
    document.getElementById("p3").style.display="none";
    document.getElementById("p6").style.display="none";
    document.getElementById("p4").style.display="none";
    document.getElementById("p5").style.display="none";
    document.getElementById("p6").style.display="none";
    document.getElementById("p7").style.display="none";
    document.getElementById("p8").style.display="none";
    document.getElementById("p9").style.display="block";
    document.getElementById("p10").style.display="none";
    document.getElementById("p111").style.display="none";
    document.getElementById("p12").style.display="none";
    document.getElementById("p13").style.display="none";
    document.getElementById("p14").style.display="none";
    document.getElementById("p15").style.display="none";
}

function goback10(){
    document.getElementById("p11").style.display="none";
    document.getElementById("p2").style.display="none";
    document.getElementById("p3").style.display="none";
    document.getElementById("p6").style.display="none";
    document.getElementById("p4").style.display="none";
    document.getElementById("p5").style.display="none";
    document.getElementById("p6").style.display="none";
    document.getElementById("p7").style.display="none";
    document.getElementById("p8").style.display="none";
    document.getElementById("p9").style.display="none";
    document.getElementById("p10").style.display="block";
    document.getElementById("p111").style.display="none";
    document.getElementById("p12").style.display="none";
    document.getElementById("p13").style.display="none";
    document.getElementById("p14").style.display="none";
    document.getElementById("p15").style.display="none";
}


function goback11(){
    document.getElementById("p11").style.display="none";
    document.getElementById("p2").style.display="none";
    document.getElementById("p3").style.display="none";
    document.getElementById("p6").style.display="none";
    document.getElementById("p4").style.display="none";
    document.getElementById("p5").style.display="none";
    document.getElementById("p6").style.display="none";
    document.getElementById("p7").style.display="none";
    document.getElementById("p8").style.display="none";
    document.getElementById("p9").style.display="none";
    document.getElementById("p10").style.display="none";
    document.getElementById("p111").style.display="block";
    document.getElementById("p12").style.display="none";
    document.getElementById("p13").style.display="none";
    document.getElementById("p14").style.display="none";
    document.getElementById("p15").style.display="none";
}

function goback12(){
    document.getElementById("p11").style.display="none";
    document.getElementById("p2").style.display="none";
    document.getElementById("p3").style.display="none";
    document.getElementById("p6").style.display="none";
    document.getElementById("p4").style.display="none";
    document.getElementById("p5").style.display="none";
    document.getElementById("p6").style.display="none";
    document.getElementById("p7").style.display="none";
    document.getElementById("p8").style.display="none";
    document.getElementById("p9").style.display="none";
    document.getElementById("p10").style.display="none";
    document.getElementById("p111").style.display="none";
    document.getElementById("p12").style.display="block";
    document.getElementById("p13").style.display="none";
    document.getElementById("p14").style.display="none";
    document.getElementById("p15").style.display="none";
}

function goback13(){
    document.getElementById("p11").style.display="none";
    document.getElementById("p2").style.display="none";
    document.getElementById("p3").style.display="none";
    document.getElementById("p6").style.display="none";
    document.getElementById("p4").style.display="none";
    document.getElementById("p5").style.display="none";
    document.getElementById("p6").style.display="none";
    document.getElementById("p7").style.display="none";
    document.getElementById("p8").style.display="none";
    document.getElementById("p9").style.display="none";
    document.getElementById("p10").style.display="none";
    document.getElementById("p111").style.display="none";
    document.getElementById("p12").style.display="none";
    document.getElementById("p13").style.display="block";
    document.getElementById("p14").style.display="none";
    document.getElementById("p15").style.display="none";

}

function goback14(){
    document.getElementById("p11").style.display="none";
    document.getElementById("p2").style.display="none";
    document.getElementById("p3").style.display="none";
    document.getElementById("p6").style.display="none";
    document.getElementById("p4").style.display="none";
    document.getElementById("p5").style.display="none";
    document.getElementById("p6").style.display="none";
    document.getElementById("p7").style.display="none";
    document.getElementById("p8").style.display="none";
    document.getElementById("p9").style.display="none";
    document.getElementById("p10").style.display="none";
    document.getElementById("p111").style.display="none";
    document.getElementById("p12").style.display="none";
    document.getElementById("p13").style.display="none";
    document.getElementById("p14").style.display="block";
    document.getElementById("p15").style.display="none";
}*/

/* start from step 1 */

function gostep1(){
   
    
    document.getElementById("p2").style.display="none";
    document.getElementById("p3").style.display="none";
    document.getElementById("p6").style.display="none";
    document.getElementById("p4").style.display="none";
    document.getElementById("p5").style.display="none";
    document.getElementById("p7").style.display="none";
    document.getElementById("p8").style.display="none";
    document.getElementById("p9").style.display="none";
    document.getElementById("p10").style.display="none";
    document.getElementById("p111").style.display="none";
    document.getElementById("p12").style.display="none";
    document.getElementById("p13").style.display="none";
    document.getElementById("p14").style.display="none";
    document.getElementById("p15").style.display="none";
    playsimulation();
}
/* start  from step2 */
function gostep2(){
    
    document.getElementById("p11").style.display="none";
    document.getElementById("p2").style.display="none";
    document.getElementById("p3").style.display="none";
    document.getElementById("p4").style.display="none";
    document.getElementById("p5").style.display="none";
    document.getElementById("p7").style.display="none";
    document.getElementById("p8").style.display="none";
    document.getElementById("p9").style.display="none";
    document.getElementById("p10").style.display="none";
    document.getElementById("p111").style.display="none";
    document.getElementById("p12").style.display="none";
    document.getElementById("p13").style.display="none";
    document.getElementById("p14").style.display="none";
    document.getElementById("p15").style.display="none";
    gonextstep2();
}

/* start  from step3 */
function gostep3(){
   
    document.getElementById("p11").style.display="none";
    document.getElementById("p2").style.display="none";
    document.getElementById("p3").style.display="none";
    document.getElementById("p4").style.display="none";
    document.getElementById("p5").style.display="none";
    document.getElementById("p6").style.display="none";
    document.getElementById("p7").style.display="none";
    document.getElementById("p8").style.display="none";
    document.getElementById("p9").style.display="none";
    document.getElementById("p111").style.display="none";
    document.getElementById("p12").style.display="none";
    document.getElementById("p13").style.display="none";
    document.getElementById("p14").style.display="none";
    document.getElementById("p15").style.display="none";
    gonextstep3();
}

/* start  from step4 */
function gostep4(){
    document.getElementById("p11").style.display="none";
    document.getElementById("p2").style.display="none";
    document.getElementById("p3").style.display="none";
    document.getElementById("p4").style.display="none";
    document.getElementById("p5").style.display="none";
    document.getElementById("p6").style.display="none";
    document.getElementById("p7").style.display="none";
    document.getElementById("p8").style.display="none";
    document.getElementById("p9").style.display="none";
    document.getElementById("p10").style.display="none";
    document.getElementById("p12").style.display="none";
    document.getElementById("p13").style.display="none";
    document.getElementById("p14").style.display="none";
    document.getElementById("p15").style.display="none";
    gonextstep4();
}
/* start  from step5 */
function gostep5(){
    document.getElementById("p11").style.display="none";
    document.getElementById("p2").style.display="none";
    document.getElementById("p3").style.display="none";
    document.getElementById("p4").style.display="none";
    document.getElementById("p5").style.display="none";
    document.getElementById("p6").style.display="none";
    document.getElementById("p7").style.display="none";
    document.getElementById("p8").style.display="none";
    document.getElementById("p9").style.display="none";
    document.getElementById("p10").style.display="none";
    document.getElementById("p111").style.display="none";
    document.getElementById("p13").style.display="none";
    document.getElementById("p14").style.display="none";
    document.getElementById("p15").style.display="none";
    gonextstep5();
}


function replaybtn(){
    //location.reload();
    playsimulation();
    document.getElementById("replaybtn").disabled=true;
    document.getElementById("p2").style.display="none";
    document.getElementById("p3").style.display="none";
    document.getElementById("p6").style.display="none";
    document.getElementById("p4").style.display="none";
    document.getElementById("p5").style.display="none";
    document.getElementById("p6").style.display="none";
    document.getElementById("p7").style.display="none";
    document.getElementById("p8").style.display="none";
    document.getElementById("p9").style.display="none";
    document.getElementById("p10").style.display="none";
    document.getElementById("p111").style.display="none";
    document.getElementById("p12").style.display="none";
    document.getElementById("p13").style.display="none";
    document.getElementById("p14").style.display="none";
    document.getElementById("p15").style.display="none";

}