/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'


function Student(props){
    const { name, age, isStudent = false } = props; // Destructure and set a default value for isStudent
  
    return(
      <div className="student">
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Student: {isStudent ? "Yes" : "No"}</p>
      </div>
    )
  }

  Student.propTypes ={

    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
  };

  Student.defaultProps = {
    name: "Guest" ,
    age: 0,
    isStudent:false,
  }
  
  export default Student;