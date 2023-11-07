import { Button, Loader } from "@mantine/core";
import { IconBrandGoogle } from "@tabler/icons-react";
import { auth } from "../../../firebase";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Navigate } from "react-router";

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(props: LoginProps) {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (loading) {
        return (
            <div className="w-full h-full flex justify-center items-center">
                <Loader></Loader>
            </div>
        );
    }

    if (!error && user) {
        return <Navigate to="/home"></Navigate>;
    }

    return (
        <div className="w-full h-full flex justify-center items-center bg-slate-200">
            <div className="bg-white rounded-xl shadow-md px-4 py-8">
                <Button
                    leftSection={<IconBrandGoogle size={16}></IconBrandGoogle>}
                    size="xs"
                    color="black"
                    onClick={() => {
                        signInWithGoogle();
                    }}
                >
                    Continue with Google
                </Button>
            </div>
        </div>
    );
}

export default Login;
