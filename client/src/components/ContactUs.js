import React from 'react';
import Map from './GoogleMap';

function ContactUs() {
  return (
    <div>
      <h1>Contact Us</h1>
      <br />
      <div className="flex">
        <div>
          <h4>with love (KL Branch)</h4>
          <h5>
            9, Jalan Stesen Sentral 5, Kuala Lumpur Sentral, 50470 Kuala Lumpur{" "}
          </h5>
          <h5>+6011-33306789</h5>
          <h5>Operating hours: 9am to 7pm </h5>
          <br />
          <h4> ✦ </h4>
          <br/>
          <h4>with love (Subang Branch)</h4>
          <h5>No 3, Jalan Usj 3A/2 47600 Subang Jaya Selangor </h5>
          <h5>+6011-33303341</h5>
          <h5>Operating hours: 9am to 7pm </h5>
          <br />
          <h4> ✦ </h4>
          <br/>
          <h4>with love (Bangsar Branch)</h4>
          <h5>
            Lot 2 . 70 . 00, 168, Bukit Bintang St, Bukit Bintang, 55100 Kuala
            Lumpur, Federal Territory of Kuala Lumpur
          </h5>
          <h5>+6016-299 2263</h5>
          <h5>Operating hours: 9am to 7pm </h5>
          <br />
          <h4> ✦ </h4>
          <br/>
          <h4>with love (Damansara Branch)</h4>
          <h5>
            145, Jalan Kasah, Medan Damansara, 50490 Kuala Lumpur, Wilayah
            Persekutuan Kuala Lumpur
          </h5>
          <h5>+6011-3142 1022</h5>
          <h5>Operating hours: 9am to 7pm </h5>
        </div>
        <br />
        <a href="mailto: withlove@gmail.com?subject=I have an enquiry">
          <button className="btn btn-light">Send us an e-mail</button>
        </a>
        <br />
        <br />
        <div className="social-buttons">
          {/* <a href="#" className="fa"></a>
      <a href="#" className="fa"></a>
      <a href="#" className="fa"></a> */}
        </div>
        <div>
          <h2>Come meet us !</h2>
          <Map />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
