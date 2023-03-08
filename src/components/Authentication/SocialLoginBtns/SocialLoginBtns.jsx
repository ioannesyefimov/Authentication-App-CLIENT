import React, {useEffect} from 'react'
import './SocialLoginBtns.scss'
import { GoogleIco, facebookIco, TwitterIco, GithubIco } from '../../../Assets'
import useFetch from '../useFetch'
import { useAuthentication } from '../Authentication'
import { Link } from 'react-router-dom'
import useGoogle from '../useGoogle/useGoogle'
import useGithub from '../useGithub/useGithub'
import useFacebook from '../useFacebook/useFacebook'
import useTwitter from '../useTwitter/useTwitter'
import SocialBtn from './SocialBtn'

const SocialLoginBtns = ({type}) => {
  const {setUser, setRerender,setLoading, setError} = useAuthentication()
  const {handleTwitter} = useTwitter()
  const {handleFacebook} = useFacebook(  )
  const {handleGoogleRegister,handleGoogleSignin} = useGoogle()
  const {handleGitHub} = useGithub()
    
  useEffect(() => {

    if(window.google){
      google.accounts.id.initialize({
        client_id: import.meta.env.VITE_APP_GOOGLE_CLIENT_ID,
        callback: type==="register" ? handleGoogleRegister : handleGoogleSignin ,
      })
      google.accounts.id.renderButton(document.getElementById('googleBtn'), {
        shape: "circle",
        type: "icon",
      })
    }
    // google.accounts.id.prompt()
    
  }, [type==='register' ? handleGoogleRegister : handleGoogleSignin])
  
  return (
    <div className='social-wrapper'>
      <SocialBtn icon={GoogleIco} socialType={`Google`} type={type} id={`googleBtn`} />
      <SocialBtn icon={facebookIco} socialType={`Facebook`} type={type} id={`facebookBtn`}  execFunc={handleFacebook} />
      <SocialBtn icon={TwitterIco} socialType={`Twitter`} type={type} id={`twitterBtn`}  execFunc={handleTwitter}/>
      <SocialBtn icon={GithubIco} socialType={`Github`} type={type} id={`githubBtn`} execFunc={handleGitHub} />
    </div>
  )
//   return (
//     <div className="social-wrapper">
//       <div className="social-btn-container" id='GG-btn'>
//        <img src={GoogleIco} alt="google icon" />
//        <button className="social-btn" id="googleBtn">
//        </button>
//       </div>
//       <div className="social-btn-container">
//           <img     src={facebookIco} alt="facebook icon"  />
//         <button onClick={()=> handleFacebook(type)} className="social-btn" id="facebookBtn">
//         </button>
//       </div>
//       <div className="social-btn-container">
//         <img     src={TwitterIco} alt="twitter icon" />
//         <button onClick={()=> handleTwitter(type)} className="social-btn">
//         </button>
//       </div>
//       <div className="social-btn-container">
//         <img     src={GithubIco} alt="Github icon" />
//         <button onClick={()=> handleGitHub(type)} className="social-btn">
//         </button>
//       </div>
//       <div className='hint'>
//         {type === 'register' ? (
//           <p>Already a member? <Link to="/auth/signin" replace>Login</Link></p>

//         ) : (
//           <p>Don't have an account yet? <Link to="/auth/register" replace>Register</Link></p>
//         )}

//       </div>


//   </div>
//   )
}

export default SocialLoginBtns