
import React, { useState,useRef,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Container, Row, Col, Dropdown, Form, Spinner } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import '../Style/home.css';
import img from '../images/cool-background.png'
import botLogo from '../images/icons8-bot-48.png'
import axios from "axios";
import { processing } from './reply';
import { disable } from './reply';
import '../Style/home.css'
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
window.onload = () => {
    localStorage.clear()
    localStorage.setItem("key",0)
};
function Home() {
    localStorage.setItem("display", false)
    const [message, setmessage] = useState([{ message: "Are you ready to begin the test? yes or no" }]);
    const [input, setinput] = useState("");
    const [display, setdisplay] = useState(false);
    const chatContainerRef = useRef(null);

    function scrollToBottom() {
        if (chatContainerRef.current) {
            const chatContainer = chatContainerRef.current;
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    }

    useEffect(() => {
        scrollToBottom();
    }, [message]); // Scroll whenever messages change

    function calculate() {
        let results= {
            q1: localStorage.getItem("q1")? localStorage.getItem("q1"): "",
            q2: localStorage.getItem("q2")? localStorage.getItem("q2"): "",
            q3: localStorage.getItem("q3")? localStorage.getItem("q3"): "",
            q4: localStorage.getItem("q4")? localStorage.getItem("q4"): "",
            q5: localStorage.getItem("q5")? localStorage.getItem("q5"): "",
            q6: localStorage.getItem("q6")? localStorage.getItem("q6"): "",
            q7: localStorage.getItem("q7")? localStorage.getItem("q7"): "",
            q8: localStorage.getItem("q8")? localStorage.getItem("q8"): "",
            q9: localStorage.getItem("q9")? localStorage.getItem("q9"): "",
            q10: localStorage.getItem("q10")? localStorage.getItem("q10"): "",
            q11: localStorage.getItem("q11")? localStorage.getItem("q11"): "",
            q12: localStorage.getItem("q12")? localStorage.getItem("q12"): "",
            q13: localStorage.getItem("q13")? localStorage.getItem("q13"): "",
            q14: localStorage.getItem("q14")? localStorage.getItem("q14"): "",
            q15: localStorage.getItem("q15")? localStorage.getItem("q15"): "",
            q16: localStorage.getItem("q16")? localStorage.getItem("q16"): "",
            q17: localStorage.getItem("q17")? localStorage.getItem("q17"): ""
        }
        let _1 = localStorage.getItem("q6")
        let _2 = localStorage.getItem("q7")
        let _3 = localStorage.getItem("q8")
        let _4 = localStorage.getItem("q9")
        let _5 = localStorage.getItem("q10")
        let _6 = localStorage.getItem("q11")
        let _7 = localStorage.getItem("q12")
        console.log("akkash",results)
        let Willingness = ((Number(_5) + Number(_7)) / 10) * 100
        let Inclusion = ((Number(_3) + Number(_6)) / 10) * 100
        let Attitude = ((Number(_2) + Number(_4)) / 10) * 100
        let Open = (Number(_1) / 5) * 100

        var percentage = ((Number(_1) + Number(_2) + Number(_3) + Number(_4) + Number(_5) + Number(_6) + Number(_7)) / 35) * 100
        localStorage.setItem("disp", percentage.toFixed(2))
        localStorage.setItem("Willingness", Willingness.toFixed(2))
        localStorage.setItem("Inclusion", Inclusion.toFixed(2))
        localStorage.setItem("Attitude", Attitude.toFixed(2))
        localStorage.setItem("Open", Open.toFixed(2))
        localStorage.setItem("key", 17)
        processing(input, percentage)
        disable()
        let new_list = [...message, { message: input }]
        let reply = processing(input)
        new_list = [...new_list, { message: reply }]
        setmessage(new_list)
        setinput("")
        //backend data onnection
        const options = {
            url: "http://localhost:5008/chatbot_data_creation",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                "q1": localStorage.getItem("q1")? localStorage.getItem("q1"): "na",
                "q2": localStorage.getItem("q2")? localStorage.getItem("q2"): "na",
                "q3": localStorage.getItem("q3")? localStorage.getItem("q3"): "na",
                "q4": localStorage.getItem("q4")? localStorage.getItem("q4"): "na",
                "q5": localStorage.getItem("q5")? localStorage.getItem("q5"): "na",
                "q6": localStorage.getItem("q6")? localStorage.getItem("q6"): "na",
                "q7": localStorage.getItem("q7")? localStorage.getItem("q7"): "na",
                "q8": localStorage.getItem("q8")? localStorage.getItem("q8"): "na",
                "q9": localStorage.getItem("q9")? localStorage.getItem("q9"): "na",
                "q10": localStorage.getItem("q10")? localStorage.getItem("q10"): "na",
                "q11": localStorage.getItem("q11")? localStorage.getItem("q11"): "na",
                "q12": localStorage.getItem("q12")? localStorage.getItem("q12"): "na",
                "q13": localStorage.getItem("q13")? localStorage.getItem("q13"): "na",
                "q14": localStorage.getItem("q14")? localStorage.getItem("q14"): "na",
                "q15": localStorage.getItem("q15")? localStorage.getItem("q15"): "na",
                "q16": localStorage.getItem("q16")? localStorage.getItem("q20"): "na",
                "q17": localStorage.getItem("q17")? localStorage.getItem("q17"): "na"
            }
        }
        axios(options)
            .then(response => {

            })
            .catch(e => {
                if (e.response.statusText == "Bad Request") {
                    alert("ENTERED DETAILS ARE INCORRECT OR LEFT EMPTY!!")
                }
                else {
                    alert("SOMETHING WENT WRONG TRY AGAIN LATER!!")
                }
            })

    }
    function send_message() {
        if (localStorage.getItem("key") == 111) {
            localStorage.setItem("key", 0)
        }
        if (localStorage.getItem("key") == 1 && localStorage.getItem("q1") == null) {
            localStorage.setItem("key", 0)
            message.pop()
            alert("answer this question to continue")
        }
        if ((localStorage.getItem("q6") == null && localStorage.getItem("key") == 6) || (localStorage.getItem("q7") == null && localStorage.getItem("key") == 7) ||
            (localStorage.getItem("q8") == null && localStorage.getItem("key") == 8) || (localStorage.getItem("q9") == null && localStorage.getItem("key") == 9) ||
            (localStorage.getItem("q10") == null && localStorage.getItem("key") == 10) || (localStorage.getItem("q11") == null && localStorage.getItem("key") == 11) || (localStorage.getItem("q12") == null && localStorage.getItem("key") == 12)) {
            alert("answer this question to continue")
            localStorage.setItem("key", Number(localStorage.getItem("key")) - 1)
            message.pop()
        }
        localStorage.setItem("key", Number(localStorage.getItem("key")) + 1)
        let new_list = [...message, { message: input }]
        let reply = processing(input)
        disable()
        new_list = [...new_list, { message: reply }]
        setmessage(new_list)
        setinput("")
    }
    return (
        <>
            <div className='home ' >
                <div className='pt-5 h2'>
                    <h2 className='text-center'>Psychological Safety Measurement of International Masters Students </h2>
                </div>
                {display == true ? (
                    <div className='outer'>
                    <div className='box'>
                        <Row >
                            <div className="scroll-container" ref={chatContainerRef} >
                                { message.length > 0 && message.map((ele) => (
                                    <div>
                                        <p className='ptag'>{ele.message}</p>
                                    </div>
                                ))
                                }
                            </div>
                            {localStorage.getItem('key') == 0 ? (
                                <div className='base'>
                                    <InputGroup className="">
                                        <Form.Control placeholder="Enter message" aria-label=""  value={input} onChange={(e) => {
                                                setinput(e.target.value)
                                        }}
                                        />
                                        <Button variant="success" id="button-addon2" onClick={() => {
                                                if (input.toLowerCase().includes("yes") || input.toLowerCase().includes("no")) {
                                                    if (input == "no") {
                                                        localStorage.setItem("key", 555)
                                                    }
                                                    send_message()
                                                }
                                                else {
                                                    alert("enter yes or no")
                                                }

                                            }}>
                                                Go
                                        </Button>
                                    </InputGroup>
                                </div>
                            ) :  localStorage.getItem("key") == 16 ? (
                                <Button variant="success" id="button-addon2" style={{ marginLeft: "70%", marginBottom: "10px", width: "70px" }}
                                    onClick={() => {
                                        calculate()
                                    }}>
                                    Submit
                                </Button>
                            ) : localStorage.getItem("key") == 17 ? (
                                null
                            ) :
                            (
                                <Button variant="success" id="button-addon2" style={{ marginLeft: "70%", marginBottom: "10px", width: "70px" }}
                                    disabled={localStorage.getItem("key") == 405 || localStorage.getItem("key") == 111 || localStorage.getItem("key") == 556}
                                    onClick={() => { send_message() }}>
                                    Next
                                </Button>
                            )
                            }
                        </Row>
                    </div>
                    </div>
                ) : 
                (
                    null
                )
                }
            </div>
            <a target="_blank" onClick={() => {
                setdisplay(!display)
            }}
                class="back-to-top-w">
                <div>
                    <img src={botLogo} alt="BigCo Inc. logo" style={{ height: "60px", width: "60px" }} />
                </div>
            </a>
        </>
    )
}
export default Home;

