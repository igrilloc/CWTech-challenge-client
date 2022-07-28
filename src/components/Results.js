import React from 'react';
import { useSelector } from 'react-redux';


const Results = () => {

  const stateInput = useSelector(state => state.input);

  return (

    <div className='container'>

      <h3 className='text-start px-3 py-3'>Results:</h3>

        {
          stateInput?.map(
            (i) => (
              <div key={i} className="card text-bg-dark mb-3">
                {i}
              </div>
            )
          )
        }

    </div>

  );

}


export default Results