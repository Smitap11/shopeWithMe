import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta' 

const TermsConditions = () => {
  return (
    <>
        <Meta title={"Terms & Conditions"} />
        <BreadCrumb title="Terms & Conditions" />
        <section className="policy-wrapper home-wrapper-2 py-4">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                      <div className="policy"></div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default TermsConditions