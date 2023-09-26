import { Button, Card, Container, Row, Col, Dropdown, Form, Spinner } from 'react-bootstrap';
import '../Style/home.css'
import React, { useState } from 'react'
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import Chats from './Chats';
window.onload = (event) => {
  localStorage.clear()
 localStorage.setItem("key",0)
};

function q1(e) {
  let isChecked = e.target.checked;
  

  console.log(e.target.id);
  if(e.target.id==2){
    localStorage.setItem("key",404)

  }else{
    localStorage.setItem("q1",e.target.id)
        localStorage.setItem("key",1)
  }
}
function qSet(item,e){
  localStorage.setItem(item,e.target.value)
}
function qSet2(item,e){
  localStorage.setItem(item,e.target.id)
}

export const disable=()=>{
  console.log(localStorage.getItem("key"));
if (localStorage.getItem("key")==2 || localStorage.getItem("key")==5 || localStorage.getItem("key")==7 || localStorage.getItem("key")==8 || localStorage.getItem("key")==9 || localStorage.getItem("key")==10 || localStorage.getItem("key")==11 || localStorage.getItem("key")==12 || localStorage.getItem("key")==13 || localStorage.getItem("key")==14) {
  
  const radioButtons = document.getElementsByName(`q${Number(localStorage.getItem("key"))-1}`);

  // Loop through the radio buttons and disable them
  for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].disabled = true;
  }

}
else if (localStorage.getItem("key")==3 || localStorage.getItem("key")==4 || localStorage.getItem("key")==6 || localStorage.getItem("key")==14 || localStorage.getItem("key")==15 || localStorage.getItem("key")==16 || localStorage.getItem("key")==17) {
  const textinput = document.getElementsByName(`q${Number(localStorage.getItem("key"))-1}`);
console.log(textinput);
 
  textinput[0].disabled = true;


}
 

    }

export const processing=(val)=>{
    
    console.log(localStorage.getItem("key")) 
    console.log(val);
        if((val.toLowerCase().includes("yes") && localStorage.getItem("key")==1) || (val.toLowerCase().includes("") && localStorage.getItem("key")==1)){
        localStorage.setItem("key",1)
        console.log("hello");
        return(<>
         <Form>
      {
        <div key={`default-radio`} className="mb-3">
        <Form.Label htmlFor="inputPassword5">Are you an International Master Student ?</Form.Label>
          <Form.Check // prettier-ignore
            type="radio"
            id="1"
            label="Yes"
            name='q1'
            disabled={false}
            onChange={e => q1(e)}
          />

          <Form.Check
            name='q1'
            type="radio"
            id="2"
            label="No"
            disabled={false}
            onChange={e => q1(e)}

          />
        </div>
    }
    </Form>
        </>)
    }
   else if(( localStorage.getItem("key")==556)){
      return(<>
       <p>Thankyou!</p>
      </>)
  }
  else if(localStorage.getItem("key")==405){
    return(<>
<p>You are not eligible for this test. Thankyou!</p>
    </>)
}
    else if(localStorage.getItem("key")==2){
        return(<>
         <Form>
      {
        <div  className="mb-3">
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>University Name</Form.Label>
        <Form.Control name='q2' type="text" placeholder="Enter your answer" style={{width:'250px'}}  onChange={e => qSet("q2",e)}/>
      </Form.Group>
          </Form>
      
        </div>
    }
    </Form>
        </>)
    }
    else if(localStorage.getItem("key")==3){
      return(<>
       <Form>
    {
      <div  className="mb-3">
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Course Name</Form.Label>
      <Form.Control  name="q3" type="text" placeholder="Enter your answer" style={{width:'250px'}} onChange={e => qSet("q3",e)}/>
    </Form.Group>
        </Form>
    
      </div>
  }
  </Form>
      </>)
  }
  else if(localStorage.getItem("key")==4){
    return(<>
     <Form id='q44'>
  {
    <div key={`default-radio`} className="mb-3">
    <Form.Label htmlFor="inputPassword5">Gender ?</Form.Label>
      <Form.Check // prettier-ignore
        type="radio"
        id="1"
        label="Male"
        name='q4'
        onChange={e => qSet2("q4",e)}
      />

      <Form.Check
        
        type="radio"
        id="2"
        label="Female"
        name='q4'
        onChange={e => qSet2("q4",e)}
      />
       <Form.Check
        
        type="radio"
        id="3"
        label="Others"
        name='q4'
        onChange={e => qSet2("q4",e)}
      />
       <Form.Check
        
        type="radio"
        id="4"
        label="Prefer not to say"
        name='q4'
        onChange={e => qSet2("q4",e)}
      />
    </div>
}
</Form>
    </>)
}
else if(localStorage.getItem("key")==5){
  return(<>
   <Form>
{
  <div  className="mb-3">
    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Label>Nationality</Form.Label>
  <Form.Control name="q5" type="text" placeholder="Enter your answer" onChange={e => qSet("q5",e)}  style={{width:'250px'}} />
</Form.Group>
    </Form>

  </div>
}
</Form>
  </>)
}
else if(localStorage.getItem("key")==6){
  return(
    <Chats question="q6"></Chats>
   
   )
}
else if(localStorage.getItem("key")==7){
  return(
    <Chats question="q7"></Chats>
   
   )
}
else if(localStorage.getItem("key")==8){
  
   return(
    <Chats question="q8"></Chats>
   
   )
  
}
else if(localStorage.getItem("key")==9){
  return(
    <Chats question="q9"></Chats>   
   )
}
else if(localStorage.getItem("key")==10){
  return(
    <Chats question="q10"></Chats>   
   )
}
else if(localStorage.getItem("key")==11){
  return(
    <Chats question="q11"></Chats>
   
   )
}
else if(localStorage.getItem("key")==12){
  return(
    <Chats question="q12"></Chats>
   
   )
}
else if(localStorage.getItem("key")==13){
  return(<>
   <Form>
{
  <div  className="mb-3">
    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Label>13.Areas of strength of your team</Form.Label>
  <Form.Control name="q13" type="text" placeholder="Enter your answer" as="textarea" rows={3}       onChange={e => qSet('q13',e)}
 style={{width:'250px'}} />
</Form.Group>
    </Form>

  </div>
}
</Form>
  </>)
}
else if(localStorage.getItem("key")==14){
  return(<>
   <Form>
{
  <div  className="mb-3">
    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Label>14.Areas of improvement on your team</Form.Label>
  <Form.Control  name="q14" type="text" placeholder="Enter your answer" as="textarea" rows={3}       onChange={e => qSet('q14',e)}
 style={{width:'250px'}} />
</Form.Group>
    </Form>

  </div>
}
</Form>
  </>)
}
else if(localStorage.getItem("key")==15){
  return(<>
   <Form>
{
  <div  className="mb-3">
    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Label>15.What is one important step you can take to improve psychological safety of your team?</Form.Label>
  <Form.Control name="q15" type="text" placeholder="Enter your answer" as="textarea" rows={3}       onChange={e => qSet('q15',e)}
 style={{width:'250px'}} />
</Form.Group>
    </Form>

  </div>
}
</Form>
  </>)
}

else if(localStorage.getItem("key")==16){
  return(<>
   <Form>
{
  <div  className="mb-3">
    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Label>16. Is there any additional feedback or comments 
you would like to share regarding your experience as
 an international student and the topic of psychological safety in your educational environment?</Form.Label>
  <Form.Control name="q16" type="text" placeholder="Enter your answer" as="textarea"      onChange={e => qSet('q20',e)}
 rows={3} style={{width:'250px'}} />
</Form.Group>
    </Form>

  </div>
 
}
</Form>
  </>)
}
else if(localStorage.getItem("key")==17){
  return(<>

  <div  className="mb-3">

  <p>Your score is {localStorage.getItem("disp")} in comparison to the global PSI benchmark of 87</p>
<ul>
  <li>Willingness to help and teaming {localStorage.getItem("Willingness")}%</li>
  <li>Inclusion & diversity {localStorage.getItem("Inclusion")}%</li>
  <li>Attitude to risk and failure {localStorage.getItem("Attitude")}%</li>
  <li>Open conversation {localStorage.getItem("Open")}%</li>
</ul>


  </div>



  </>)
}
    return "empty"
}






















