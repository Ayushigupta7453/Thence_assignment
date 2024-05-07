import React from 'react';
import './footer.css'; // Import your CSS file

function footer() {

  return (
    <div className='App'>
      <div className='App-header'>
        <div className='container'>
            <div className='head1'>
                What's on your mind?
            </div>
            <div className='head2'>
                Ask Questions
            </div>
        </div>
      <div className='questions-container'>
             <div className='question1'>
             <p>Do you offer freelancers?</p><span>+</span>
             </div>
             <hr/>
             <div className='question2'>
             <p>What’s the guarantee that I will be satisfied with the hired talent?</p><span>+</span>
             </div>
             <hr/>
             <div className='question3'>
             <p>Can I hire multiple talents at once</p><span>+</span>
             </div>
             <hr/>
      </div>
      </div>
      <div className='links'>
          
             <p>&#169; Talup 2023. All rights reserved.</p><span>Terms & conditions</span><span>Privacy policy</span>
      </div>
    </div>
  );
}

export default footer;
