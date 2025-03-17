import React from 'react';

function Signup() {
  return (
    <div>
      <h1>Sign Up</h1>
      <p>Are you interested in joining the TWAAN Book Club? <br/> To participate please complete and submit the form below.</p>
      <form>
        <div>
            <label htmlFor="name">First Name:</label>
            <input type="text" id="name" name="name" />
        </div>
        <div>
            <label htmlFor="lastname">Last Name:</label>
            <input type="text" id="lastname" name="lastname" />
        </div>
        <div>
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" name="age" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
            <label htmlFor="Preferred method of contact">Preferred method of contact:</label>
            <select id="Preferred method of contact" name="Preferred method of contact" defaultValue="Select an option">
                <option value="Select an option">Select an option</option>
                <option value="Email">Email</option>
                <option value="Phone">Phone</option>
                <option value="Text">Text</option>
            </select>
        </div>
        <div>
            <label htmlFor="How did you hear about us?">How did you hear about us?</label>
            <select id="How did you hear about us?" name="How did you hear about us?" defaultValue="Select an option">
                <option value="Select an option">Select an option</option>
                <option value="Friend">Friend</option>
                <option value="Social Media">Social Media</option>
                <option value="Other">Other</option>
            </select>
        </div>
        <div>
            <label htmlFor="Parent/Guardian name">Parent/Guardian name:</label>
            <input type="text" id="Parent/Guardian name" name="Parent/Guardian name" />
        </div>
        <div>
            <label htmlFor="Parent/Guardian Contact">Parent/Guardian Contact:</label>
            <input type="number" id="Parent/Guardian Contact" name="Parent/Guardian Contact" />
        </div>
        <div>
            <label htmlFor="Parent/Guardian Email">Parent/Guardian Email:</label>
            <input type="email" id="Parent/Guardian Email" name="Parent/Guardian Email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Signup; 