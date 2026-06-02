import React, {useState} from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import ContactRight from './ContactRight';


const Contact = () => {
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    //=========Email Validation Start Here ==========
    const emailValidation = () => {
        return String(email)
            .toLocaleLowerCase()
            .match(/^\w+([-]?\w+)*@([-]?\w+)*(\.\w{2,3})+$/);
    };
    //=========Email Validation Ends Here ============

    const handleSend=(e)=>{
        e.preventDefault()
        if(username === "") {
            setErrMsg("username is required!")
        } else if (phoneNumber === "") {
            setErrMsg("Phone number is required!")
        } else if (email === "") {
            setErrMsg("Please provide your Email!")
        } else if (!emailValidation(email)) {
            setErrMsg("Provide a valid Email!");
        } else if (subject === "") {
            setErrMsg("Please provide your Subject!");
        } else if (message === "") {
            setErrMsg("Message is required!");
        }else {
            setSuccessMsg(`Thank you ${username}, your message has been sent successfully!`);
            setErrMsg("");
            setUsername("");
            setPhoneNumber("");
            setEmail("");
            setSubject("");
            setMessage("");
        }
    };
    return (
        <section 
            id="contact" 
            className="w-full py-20 border-b-[1px] border-[#FF7ACD]"
        >
            <div className="flex justify-center items-center text-center">
                <Title title="CONTACT" des="Connect With Me" />
            </div>
            <div className="w-full">
                <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                    <ContactLeft />
                    <ContactRight
                        username={username}
                        phoneNumber={phoneNumber}
                        email={email}
                        subject={subject}
                        message={message}
                        errMsg={errMsg}
                        successMsg={successMsg}
                        setUsername={setUsername}
                        setPhoneNumber={setPhoneNumber}
                        setEmail={setEmail}
                        setSubject={setSubject}
                        setMessage={setMessage}
                        handleSend={handleSend}
                    />
                </div>
            </div>
        </section>
    );
}

export default Contact;