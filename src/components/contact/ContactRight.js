import React from 'react';

const ContactRight = ({
    username,
    phoneNumber,
    email,
    subject,
    message,
    errMsg,
    successMsg,
    setUsername,
    setPhoneNumber,
    setEmail,
    setSubject,
    setMessage,
    handleSend,
}) => {
    return (
        <div className="w-[60%] h-full py-10 px-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 rounded-lg shadow-shadowOne">
            <form className="w-full flex flex-col gap-6 py-5">
                {errMsg && (
                    <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                        {errMsg}
                    </p>
                )}
                {
                successMsg && (
                    <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                        {successMsg}
                    </p>
                )}
                <div className="w-full flex gap-10">
                    <div className="w-1/2 flex flex-col gap-4">
                        <p className="text-sm text-gray-400 uppercase tracking-wide">
                            Your Name
                        </p>
                        <input 
                            onChange={(e) => setUsername(e.target.value)} 
                            value={username}
                            className={`${
                                errMsg === "Username is required!" && "outline-designColor"
                            } contactInput`}
                            type="text" />
                    </div>
                    <div className="w-1/2 flex flex-col gap-4">
                        <p className="text-sm text-gray-400 uppercase tracking-wide">
                            Phone Number
                        </p>
                        <input 
                            onChange={(e) => setPhoneNumber(e.target.value)} 
                            value={phoneNumber} 
                            className={`${
                                errMsg === "Phone number is required!" && "outline-designColor"
                            } contactInput`}
                            type="text" />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                        Email
                    </p>
                    <input 
                        onChange={(e) => setEmail(e.target.value)} 
                        value={email} 
                        className={`${
                                errMsg === "Email is required!" && "outline-designColor"
                            } contactInput`} 
                        type="email" />
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                        Subject
                    </p>
                    <input 
                        onChange={(e) => setSubject(e.target.value)}
                        value={subject}
                        className={`${
                                errMsg === "Subject is required!" && "outline-designColor"
                            } contactInput`}
                        type="text" />
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                        Message
                    </p>
                    <textarea
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        className={`${
                                errMsg === "Message is required!" && "outline-designColor"
                            } contactInput`}
                        cols="30" 
                        rows="8"
                    ></textarea>
                </div>
                <div className="w-full">
                    <button onClick={handleSend} className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wide uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent">
                        Send Message</button>
                </div>
                {errMsg && (
                    <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                        {errMsg}
                    </p>
                )}
                {
                successMsg && (
                    <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                        {successMsg}
                    </p>
                )}
            </form>
        </div>
    )
};

export default ContactRight