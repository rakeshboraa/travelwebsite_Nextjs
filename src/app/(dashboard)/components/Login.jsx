import React, { useState, useEffect } from 'react';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { app } from '../../../../config';
import { useRouter } from 'next/navigation'

const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState("")
    const [otp, setOtp] = useState("")
    const [confirmResult, setConfirmResult] = useState(null)
    const [otpSent, setOtpSent] = useState(false)

    const auth = getAuth(app)
    const router = useRouter()
    useEffect(() => {
        window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
            'size': 'normal',
            'callback': (response) => {

            },
            'expired-callback': () => {

            },
        })
    }, [auth])

    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value)
    }
    const handleOTPChange = (e) => {
        setOtp(e.target.value)
    }

    const handleSentOTP = async (e) => {
        try {
            const formattedPhoneNumber = `+${phoneNumber.replace(/\D/g, '')} `;
            const confiramation = await signInWithPhoneNumber(auth, formattedPhoneNumber, window.recaptchaVerifier)
            setConfirmResult(confiramation)
            setOtpSent(true)
            setPhoneNumber('')
            alert("dfhghjk")

        } catch (error) {
            console.log(error)
        }
    }
    const handleOTPSubmit = async (e) => {
        try {
            await confirmResult.confirm(otp)
            setOtp('')
            router.push('/dashboard')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            {!otpSent ? (
                <div id="recaptcha-container">

                </div>
            ) : null}
            <input type='tel' value={phoneNumber} onChange={handlePhoneNumber} placeholder='enter mobile number' />
            <input type='text' value={otp} onChange={handlePhoneNumber} placeholder='enter mobile number' />
        </div>
    )
}

export default Login