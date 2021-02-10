import React from "react";

const Question = ({ eword, sword, alts }) => {

  console.log('alts', alts[0]);
  // var altsArr = alts.map((item) => (
  //   <div>
  //     item
  //   </div>
  // ));

  return (
    <div>
      <h4>
        This is my question componenet
      </h4>
      <div>
        eword: {eword}
      </div>
      <div>
        sword: {sword}
      </div>
      <div>
        {alts[0]}
      </div>
      <div>
        {alts[1]}
      </div>
    </div>
  )
}

export default Question;