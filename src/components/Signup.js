import React from 'react';

function Signup() {
  return (
    <div>
      <h1>Sign Up</h1>
      <p>Are you interested in joining the TWAAN Book Club? <br/> To participate please complete and submit the form below.</p>
      <form 
        className='twaan-signup-form'
        action="https://formsubmit.co/jafert23@gmail.com"
        method="POST"
      >
        <div>
            <label htmlFor="name">First Name:</label>
            <input type="text" id="name" name="name" required />
        </div>
        <div>
            <label htmlFor="lastname">Last Name:</label>
            <input type="text" id="lastname" name="lastname" required />
        </div>
        <div>
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" name="age" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
            <label htmlFor="Preferred method of contact">Preferred method of contact:</label>
            <select id="Preferred method of contact" name="Preferred method of contact" required>
                <option value="">Select an option</option>
                <option value="Email">Email</option>
                <option value="Phone">Phone</option>
                <option value="Text">Text</option>
            </select>
        </div>
        <div>
            <label htmlFor="How did you hear about us?">How did you hear about us?</label>
            <select id="How did you hear about us?" name="How did you hear about us?" required>
                <option value="">Select an option</option>
                <option value="Friend">Friend</option>
                <option value="Social Media">Social Media</option>
                <option value="Other">Other</option>
            </select>
        </div>
        <div>
            <label htmlFor="Parent/Guardian name">Parent/Guardian name:</label>
            <input type="text" id="Parent/Guardian name" name="Parent/Guardian name" required />
        </div>
        <div>
            <label htmlFor="Parent/Guardian Contact">Parent/Guardian Contact:</label>
            <input type="number" id="Parent/Guardian Contact" name="Parent/Guardian Contact" required />
        </div>
        <div>
            <label htmlFor="Parent/Guardian Email">Parent/Guardian Email:</label>
            <input type="email" id="Parent/Guardian Email" name="Parent/Guardian Email" required />
        </div>
        <input type="hidden" name="_subject" value="TWAAN Book Club Signup" />
        <input type="hidden" name="_template" value="modern" />
        <input type="hidden" name="_next" value="https://creativeelliot.com" />
        <input type="hidden" name="_autoresponse" value="Thank you for signing up for the TWAAN Book Club! We will contact you soon." />
        <input type="hidden" name="_format" value="plaintext" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Signup; 