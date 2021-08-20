import React from 'react'
import info from "../../images/search/error.svg";

const BookingPageFooter = () => {
    return (
        <div className="mt-5 mb-5">
        <div className="pt-2 pb-2 d-flex align-items-start">
          <img src={info} alt="" srcset="" className="mt-2 me-2"/>
          <p>
            Prices are per person and are for e–tickets and include all taxes &
            fees in We attempt to get accurate prices and fees; however, prices
            and fees are not guaranteed, and may be subject to last minute
            changes over which we have no control. Finally, some train and bus
            prices may not include a service fee added by the provider at
            checkout.
          </p>
        </div>
        <div className="pt-2 pb-2 d-flex align-items-start">
          <img src={info} alt="" srcset="" className="mt-2 me-2" />
          <p>
            Prices are per person and are for e–tickets and include all taxes &
            fees in We attempt to get accurate prices and fees; however, prices
            and fees are not guaranteed, and may be subject to last minute
            changes over which we have no control. Finally, some train and bus
            prices may not include a service fee added by the provider at
            checkout.
          </p>
        </div>
      </div>
    )
}

export default BookingPageFooter
