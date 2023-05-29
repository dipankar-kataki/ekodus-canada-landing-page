import React,{useState,useEffect} from 'react'
import "./CareerDetails.css"
import {BsArrowRight} from "react-icons/bs"
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import htmlReactParser from 'html-react-parser';



const CareerDetails = () => {
  
    const [openings, setOpenings] = useState([]);
    const [formDetails,setFormDetails]  = useState({
        first_name: '',
        last_name: '',
        email: '',
        gender: '',
        country_code: '',
        phone: '',
        resume: null
      })

    let {id} = useParams();
   
    useEffect(() => {
        fetch(`https://admin.ekodus.ca/api/career/details?career_id=${id}`)
        .then(response => response.json())
        .then(data=>{
            setOpenings(data.career_details)
           
        })
       
      },[])

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormDetails((prevState) => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleFileChange = (event) => {
        setFormDetails((prevState) => ({
          ...prevState,
          resume: event.target.files[0]
        }));
      };
    
      const formSubmitHandler = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('first_name', formDetails.first_name);
        formData.append('last_name', formDetails.last_name);
        formData.append('email', formDetails.email);
        formData.append('gender', formDetails.gender);
        formData.append('country_code', formDetails.country_code);
        formData.append('phone', formDetails.phone);
        formData.append('resume', formDetails.resume);
    
        fetch("https://admin.ekodus.ca/api/candidate/register", {
          method: "POST",
          body: formData
        })
          .then(response => response.json())
          .then(json => {
            Swal.fire({
              title: 'Success!',
              text: 'You application was submitted',
              icon: 'success',
              confirmButtonText: 'Okay'
            })
            // Additional logic...
          })
          .catch(error => {
            console.error('Error uploading form:', error);
            Swal.fire({
              title: 'Error!',
              text: 'Some fields may be empty or wrong! Please check and try again',
              icon: 'error',
              confirmButtonText: 'Okay'
            })
            // Additional error handling...
          });
      };

     
  return (
    <div>
        <div className='career_details_header'>
        <h1>Career</h1>
        <div className='career_details_header_loc'>
          <p>Career</p>
          <BsArrowRight/>
          <p style={{color: "#fa6220"}}>Career Details</p>

        </div>
      </div>
      <div className='career_details_body'>
        <div className='career_details_body_head'>
            <h2>{openings.job_title}</h2>
            <div><p>{openings.job_shift}</p><p>{openings.job_location}</p><p>{openings.job_experience} years</p></div>
        </div>
        <div className='career_details_body_content'>
            <div className='career_body_details'>
                <div>{htmlReactParser(String(openings.job_description))}</div>
            </div>
            <div className='career_form'>
                <form id="careerForm" encType='multipart/form-data'>
                    <div className='career_form_content'>
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" id='firstname' name='first_name' onChange={handleInputChange} placeholder='Enter your first name' />
                      
                    </div>
                    <div className='career_form_content'>
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" id='lastname' name='last_name' onChange={handleInputChange} placeholder='Enter your last name' />
                      
                    </div>
                    <div className='career_form_content'>
                        <label htmlFor="email">Email</label>
                        <input type="email"  id='email' name='email' onChange={handleInputChange} placeholder='Enter your email' />
                    </div>
                    <div className='career_form_content'>
                        <label htmlFor="gender">Gender</label>
                        <select id="gender" onChange={handleInputChange}  name='gender' >
                             <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className='career_form_content'>
                        <label htmlFor="ph_number">Phone Number</label>
                        <div className='contact_no'>
                        <select id="countrycode" onChange={handleInputChange}  name='country_code' >
                            <option value="">+</option>
                            <option value={"+1"}>+1</option>
                            <option value={"+91"}>+91</option>
                        </select>
                        <input type="text" id='phnumber' name='phone' onChange={handleInputChange} placeholder='phone number' />
                        </div>
                    </div>
                    <div className='career_form_content'>
                    <label htmlFor="filename">Upload resume</label>
                    <input type="file" id="resume" name="resume" onChange={handleFileChange}  accept=".pdf,.docx" />
                    </div>
                    <div className='career_form_content form-submit-btn'>
                        <button type="submit" className='btn-primary' onClick={formSubmitHandler}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CareerDetails