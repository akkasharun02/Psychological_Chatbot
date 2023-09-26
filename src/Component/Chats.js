
import {  Form } from 'react-bootstrap';
import '../Style/home.css'
function qSet2(item,e){
    localStorage.setItem(item,e.target.id)
  }
function Chats(props){
    const questionsItem= {
        "q6": "If you make a mistake on this team, it is often held against you",
        "q7": "Members of this team are able to bring up problems and tough issues.",
        "q8": "People on this team sometimes reject others for being different",
        "q9": "It is safe to take a risk on this team",
        "q10": "It is difficult to ask other members of this team for help.",
        "q11": "No one on this team would deliberately act in a way that underestimate my efforts.",
        "q12": "Working with members of this team my unique skills and talents are valued and utilized."
      }
    
    if (props.question== "q6" || props.question== "q8" || props.question== "q10"){
        return (
            <div>                
                <Form>
                {
                <div key={`default-radio`} className="mb-3">
                <Form.Label htmlFor="inputPassword5">{questionsItem[props.question]}</Form.Label>
                        <Form.Check 
                        type="radio"  name= {props.question} id="1"  label="Strongly agree"  onChange={e => qSet2(props.question,e)}
                        />
                        <Form.Check            
                        type="radio" name={props.question} id="2" label="Agree" onChange={e => qSet2(props.question,e)}
                        />
                        <Form.Check                        
                        type="radio"   name={props.question}  id="3"  label="Neutral" onChange={e => qSet2(props.question,e)}
                        />
                        <Form.Check   
                        type="radio"  name={props.question}   id="4"  label="Disagree"  onChange={e => qSet2(props.question,e)}
                        />
                        <Form.Check                        
                        type="radio"  name={props.question} id="5"  label="Strongly Disagree" onChange={e => qSet2(props.question,e)}
                        />
                </div>
                }
                </Form>
            </div>            
        )
    }
    else{
        return (
            <div>                
                <Form>
                {
                <div key={`default-radio`} className="mb-3">
                <Form.Label htmlFor="inputPassword5">{questionsItem[props.question]}</Form.Label>
                        <Form.Check 
                        type="radio"  name= {props.question} id="5"  label="Strongly agree"  onChange={e => qSet2(props.question,e)}
                        />
                        <Form.Check            
                        type="radio" name={props.question} id="4" label="Agree" onChange={e => qSet2(props.question,e)}
                        />
                        <Form.Check                        
                        type="radio"   name={props.question}  id="3"  label="Neutral" onChange={e => qSet2(props.question,e)}
                        />
                        <Form.Check   
                        type="radio"  name={props.question}   id="2"  label="Disagree"  onChange={e => qSet2(props.question,e)}
                        />
                        <Form.Check                        
                        type="radio"  name={props.question} id="1"  label="Strongly Disagree" onChange={e => qSet2(props.question,e)}
                        />
                </div>
                }
                </Form>
            </div>            
        )
    }
}
export default Chats;