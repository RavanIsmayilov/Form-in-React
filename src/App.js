import './App.css';
import {useState} from "react"
import image from "./assets/Auto Layout Horizontal.png"

function App() {

  const [email,setEmail] = useState("example@mail.com")

  const [password,setPassword] = useState("")
  
  const [emailError,setemailError] = useState("")

  const [PasswordError,setPasswordError] = useState("")

  const [ageRange,setAgeRange] = useState("")

  const [birthday,setBirthday] = useState("")

  const [birthdayError,setBirthdayError] = useState("")

  const [terms,setTerms] = useState(false)

  const [termsError,setTermsError] = useState("")

  const [gender,setGender] = useState("")

  const [genderError,setGenderError] = useState("")


  const [formDatas,setFormDatas] = useState({
    email: "",
    passsword: ""
  })


  const handlePasswordChange = (e) =>{
    const newPassword = e.target.value
    setPassword(newPassword)
    changePasswordStrength(newPassword)

  }

  const changePasswordStrength = (e) =>{

    const minLength = 8;
    const minSpecialChars = 1;

    const hasMinLength = password.length >= minLength;
    const hasMinSpecialChars = (password.match(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/g) || []).length >= minSpecialChars

    if(hasMinLength && hasMinSpecialChars){
      setPasswordError("Password Strength : Strong")
    } else{
      setPasswordError("Password Strength : Weak")
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setemailError("")
    setPasswordError("")
    setTermsError("")
    setGenderError("")
    setBirthdayError("")

    const allowedDomains = ["@gmail.com", "@yandex.ru", "@mail.com"]

    const isValidEmail = allowedDomains.some(domain => email.includes(domain))
    
    if(email.trim() === ""){
      setemailError("PLeae fill the email field")
    }
      else if(isValidEmail){
        setemailError("Email address is correctly")
      }else{
        setemailError("Email address is not correctly")

      }
    
    
    if(password.trim() === ""){
      setPasswordError("PLeae fill the password field")
    }

    if(!terms){
      setTermsError("Please agree with the terms")
    }

    if(!gender){
      setGenderError("Please choose a gender")
    }

    if(!birthday){
      setBirthdayError("Please note your birthdate")
    }

    }
    

  return (

    <form className="form" onSubmit={handleSubmit}>

    <div>
      <img className='images' src={image} alt='' />
    </div>

    <div className='section_email'>
      <label htmlFor="email">Email</label>  
      <input className="email" 
      name = "email" type = "text" 
      onChange={(e) => setEmail(e.target.value)} 
      defaultValue={email} /> 
      <span className='error_email'>{emailError}</span> 
    </div>

    <div className='section_password'> 
      <label htmlFor="password">Password</label> 
      <input className="password" 
      name = "password" type = "password"
      onChange={handlePasswordChange} 
      defaultValue={password} /> 
      <span className='error_password'>{PasswordError}</span> 
    </div>

      {/* <label htmlFor='ageRange'>Age:</label>
      <select name='ageRange' onChange={(e) => setAgeRange(e.target.value)}>

        <option value="10-20">10-20</option>
        <option value="30-40">30-40</option>
        <option value="40-50">40-50</option>
        <option value="60-70">60-70</option>

      </select> */}

    <div className='section_birthday'>
      <label htmlFor="birthday">Birthday</label> 
      <input type="date" className="birthday" name="birthday" onInput={(e) => setBirthday(e.target.value)} />
      <span className='error_birthday'>{birthdayError}</span> 

    </div>

    <div className='section_terms'>
      <input type="checkbox" className="terms" name="terms" onChange={(e) => setTerms(e.target.checked)} />
      <label htmlFor="terms">I agree to Terms</label> 
      <span className='error_terms'>{termsError}</span> 

    <div className='section_gender'>
      <input type="radio" name="gender" value="male" onChange={(e) => setGender(e.target.checked)}/> Male
      <input type="radio" name="gender" value="female" onChange={(e) => setGender(e.target.checked)}/> Female <br/>
      <span className='error_gender'>{genderError}</span> 


    </div>  
    </div>

      <button className="btn" type='submit'>Create account</button>
  
    </form>

  );
}

export default App;
