import React from 'react'

export default function ContactUs() {

    return (
        <div className="m-5">
            <form>
                <div className='m-2'>
                    <input type="text" placeholder="Your name" name="name" required />
                </div>
                <div className='m-2'>
                    <input type="email" placeholder="Email" name="email" required />
                </div>
                <div className='m-2'>
                    <textarea placeholder="Your message" name="message" required />
                </div>
                <div className='m-2'>
                    <button type="submit"> Send a message </button>
                </div>
            </form>
        </div>
    );
}
