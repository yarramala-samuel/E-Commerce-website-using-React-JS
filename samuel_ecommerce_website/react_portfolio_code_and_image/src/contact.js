import React, { useState } from 'react'
import './contact.css'
import { BiSolidMap } from 'react-icons/bi';
import { BsFillTelephoneFill,BsGlobe} from 'react-icons/bs';
import { AiTwotoneMail } from 'react-icons/ai';
import {db} from './firebaseConfig'
import {collection, addDoc} from 'firebase/firestore';
const Contact = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();
    const sendmessage = async () =>
    {
        const dbref = collection(db, "Message");
        try 
        {
            await addDoc(dbref, {Name: name, Email: email, Subject:subject, Message:message})
            alert("Your Message Sent Successfully")
        } 
        catch (error) 
        {
            alert("error occured while sending the message");
        }
    }
  return (
    <>
    <div className='contact'>
        <div className='contact_banner'>
            <p>Home.Contact</p>
            <h3>Contact Us</h3>
        </div>
        <div className='container'>
            <h2>Let's Talk</h2>
            <div className='form-container'>
                <div className='left_box'>
                    <h4>Write Us</h4>
                    <div className='form'>
                        <div className='input_box'>
                            <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}></input>
                        </div>
                        <div className='input_box'>
                            <input type="email" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div className='input_box'>
                            <input type="text" placeholder='subject' value={subject} onChange={(e) => setSubject(e.target.value)}></input>
                        </div>
                        <div className='input_box'>
                           <textarea placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        </div>
                        <button onClick={sendmessage}>Send</button>
                    </div>
                </div>
                <div className='right'>
                    <div className='info'>
                        <h4>Contact Detail</h4>
                        <p>We're open for any suggestion or just to have a chat</p>
                        <div className='info_box'>
                            <div className='icon'>
                                <BiSolidMap />
                            </div>
                            <div className='deatil'>
                                <h4>Address:</h4>
                                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                            </div>
                        </div>
                        <div className='info_box'>
                            <div className='icon'>
                                <BsFillTelephoneFill />
                            </div>
                            <div className='deatil'>
                                <h4>Phone:</h4>
                                <p>+11 235685</p>
                            </div>
                        </div>
                        <div className='info_box'>
                            <div className='icon'>
                                <AiTwotoneMail />
                            </div>
                            <div className='deatil'>
                                <h4>E-mail:</h4>
                                <p>your@email.com</p>
                            </div>
                        </div>
                        <div className='info_box'>
                            <div className='icon'>
                                <BsGlobe />
                            </div>
                            <div className='deatil'>
                                <h4>Website:</h4>
                                <p>yoursite.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact