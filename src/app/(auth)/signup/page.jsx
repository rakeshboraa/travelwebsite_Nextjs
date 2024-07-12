"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { app } from '../../../../config';
import { useRouter } from 'next/navigation'

const page = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [countryCode, setCountryCode] = useState("+1")
    const [mobile, setMobile] = useState("")
    const [password, setPassword] = useState("")
    const [otp, setOtp] = useState("")
    const [otpSent, setOtpSent] = useState(false)
    const [confirmResult, setConfirmResult] = useState(null)

    const auth = getAuth(app)
    const router = useRouter()
    useEffect(() => {
        window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
            'size': 'normal',
            'callback': (response) => {
                console.log('Recaptcha verified');
            },
            'expired-callback': () => {
                console.log('Recaptcha expired');
            },
        });
    }, [auth]);

    const handlePhoneNumber = (e) => {
        setMobile(e.target.value)
    }
    const handleOTPChange = (e) => {
        setOtp(e.target.value)
    }

    const handleSendOTP = async (e) => {
        e.preventDefault()
        try {
            const formattedPhoneNumber = `${countryCode}${mobile.replace(/\D/g, '')}`;
            console.log(`Sending OTP to: ${formattedPhoneNumber}`);
            const confirmation = await signInWithPhoneNumber(auth, formattedPhoneNumber, window.recaptchaVerifier)
            setConfirmResult(confirmation)
            setOtpSent(true)
            console.log('OTP sent successfully');
        } catch (error) {
            console.error('Error sending OTP:', error)
        }
    }

    const handleOTPSubmit = async (e) => {
        e.preventDefault();
        
        try {
            await confirmResult.confirm(otp);
            console.log('OTP verified successfully');
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstname: firstName,
                    lastname: lastName,
                    mobile: `${countryCode}${mobile.replace(/\D/g, '')}`,
                    password,
                }),
            });

            if (response.ok) {
                console.log('User data saved successfully');
                setOtp('');
                router.push('/login');


            } else {
                console.error('Error saving user data');
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
        }
    };

    return (
        <div className="h-screen w-full flex justify-center items-center">
            <Card className="mx-auto max-w-sm">
                <CardHeader>
                    <CardTitle className="text-xl">Sign Up</CardTitle>
                    <CardDescription>
                        Enter your information to create an account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={otpSent ? handleOTPSubmit : handleSendOTP}>
                        <div className="grid gap-4">
                            {otpSent ? (
                                <div className="grid gap-2">
                                    <Label htmlFor="otp">OTP</Label>
                                    <Input
                                        id="otp"
                                        type="text"
                                        placeholder="Enter OTP"
                                        value={otp}
                                        onChange={handleOTPChange}
                                    />
                                </div>
                            ) :
                                <>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="first-name">First name</Label>
                                            <Input
                                                id="first-name"
                                                placeholder=""
                                                required
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="last-name">Last name</Label>
                                            <Input
                                                id="last-name"
                                                placeholder=""
                                                required
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="country-code">Country/Region</Label>
                                        <select
                                            id="country-code"
                                            value={countryCode}
                                            onChange={(e) => setCountryCode(e.target.value)}
                                            className="rounded-l-md text-[13px] border border-gray-300 bg-white p-2"
                                        >
                                            <option value="+1">+1 (US)</option>
                                            <option value="+44">+44 (UK)</option>
                                            <option value="+91">+91 (India)</option>
                                            <option value="+61">+61 (Australia)</option>
                                        </select>
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="mobile">Mobile Number</Label>
                                        <div className="flex">
                                            <Input
                                                id="mobile"
                                                type="tel"
                                                placeholder="Enter mobile number"
                                                className="rounded-r-md"
                                                value={mobile}
                                                onChange={handlePhoneNumber}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="password">Password</Label>
                                        <Input
                                            id="password"
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </>
                            }

                            <Button type="submit" className="w-full">
                                {otpSent ? 'Verify OTP' : 'Send OTP'}
                            </Button>
                        </div>
                    </form>
                    {!otpSent && (
                        <div id="recaptcha-container"></div>
                    )}
                    <div className="mt-4 text-center text-sm">
                        Already have an account?{" "}
                        <Link href="/login" className="underline">
                            Sign in
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default page
