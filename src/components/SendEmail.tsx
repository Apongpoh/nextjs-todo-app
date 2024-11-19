import { useForm, SubmitHandler } from "react-hook-form"
import emailjs from 'emailjs-com'
import { useContext, useState } from 'react'
import { NotificationContext } from '../contexts/NotificationContext'
import styles from '../styles/components/SendEmail.module.css'

interface EmailInputs{
    name: string;
    email: string;
    message: string;
}

export default function SendEmail(){

    const { 
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid } 
      } = useForm<EmailInputs>( {mode: 'all'} )
    
      const{ addNotificationAndWait } = useContext(NotificationContext)
    
      function sendRequest(datas: any){
        showSending(true)
        emailjs
            .send('service_0q6ft3b', 'template_xajx4ps', datas, 'user_gSIMqzfrjn9KOhHx57Aci')
            .then( (response) => {
                console.log(response)
                addNotificationAndWait("Thank you for contact me. I'll try to reply soon as possible.")
                reset()
                showSending(false)
            }, () => {
                addNotificationAndWait("Ops... something went wrong. Please try again.")
                showSending(false)
            }
        )
      }
    
    const sendEmail: SubmitHandler<EmailInputs> =  data => sendRequest(data)

    const [isSending, showSending] = useState(false)
    const Sending = () => <div className={styles.sending}>
        <img src="https://ik.imagekit.io/lrjseyuxi3m/todoapp/send_email_4gIljG1fFJX.svg?updatedAt=1637195453076" />    
    </div>
    

    return(
        <form className={styles.sendEmail} onSubmit={handleSubmit(sendEmail)}>
            <input 
                type="text"
                placeholder="Full name" {...register("name", {required:true})} 
                className={errors.name && styles.requiredField}
            />
            <input 
                type="email"
                placeholder="Email" {...register("email", {required:true})} 
                className={errors.email && styles.requiredField}
            />
            <textarea 
                {...register("message", {required: true})} 
                placeholder="Type your message"
                className={errors.message && styles.requiredField}
            />
            <button type="submit" disabled={!isValid}>
                SEND
            </button>
            {isSending && <Sending />}            
        </form>
    )

}