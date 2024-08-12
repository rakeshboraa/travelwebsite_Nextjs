"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LoginUser } from "@/lib/actions/auth.actions";

const LoginFormSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});

const LoginForm = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const form = useForm({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (values) => {
        setIsLoading(true);
        setError("");
        try {
            const { token, user } = await LoginUser({ email: values.email, password: values.password });
            if (token) {
                document.cookie = `token=${token}; path=/; `; 
                router.push('/dashboard');
            }
        } catch (error) {
            setError("Login failed. Please check your credentials and try again.");
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card className="mx-auto max-w-sm p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-800">Login</CardTitle>
                <CardDescription className="text-gray-600">
                    Enter your email and password below to login to your account.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel htmlFor="email" className="block text-gray-700 font-medium">Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="Enter your email"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div>
                            <div>
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor="password" className="block text-gray-700 font-medium">Password</FormLabel>
                                            <FormControl>
                                                <Input
                                                    id="password"
                                                    type="password"
                                                    placeholder="Enter your password"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <Link href="#" className="text-sm text-black hover:underline">
                                Forgot your password?
                            </Link>
                        </div>
                        {error && <p className="text-red-600 text-sm">{error}</p>}
                        <Button type="submit" className="w-full py-2 bg-black text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" disabled={isLoading}>
                            {isLoading ? <h1>Logging</h1> : "Login"}
                        </Button>
                    </form>
                    <div className="mt-4 text-center text-sm text-gray-600">
                        Don&apos;t have an account?{" "}
                        <Link href="/register" className="text-blue-600 hover:underline">
                            Sign up
                        </Link>
                    </div>
                </Form>
            </CardContent>
        </Card>
    );
};

export default LoginForm;
