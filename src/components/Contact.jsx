import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
        <main>
            <h1>
                Contact Us
            </h1>
            <form>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Abc'/>
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Abc@gmail.com'/>
                </div>
                <div>
                    <label htmlFor="">Message</label>
                    <input type="text" placeholder='Tell Us About Your Query...'/>
                </div>

                <button type='submit'>Submit</button>
            </form>
        </main>

    </div>
  )
}

export default Contact