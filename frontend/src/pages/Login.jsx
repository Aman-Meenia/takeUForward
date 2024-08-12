import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { LockIcon, UserIcon } from "lucide-react";
import { useLogin } from "@/hooks/useLogin";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { login } = useLogin();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (login({ name, password })) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-blue-900">
      <Card className="w-full max-w-md p-8 space-y-8 bg-white/10 backdrop-blur-md shadow-xl dark:bg-gray-800/30 rounded-xl border border-gray-200 dark:border-gray-700">
        <CardHeader>
          <h2 className="text-3xl font-bold text-center text-white">
            Welcome to Logic Lab
          </h2>
          <p className="text-center text-gray-300">Login to your account</p>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label
                htmlFor="Name"
                className="text-sm font-medium text-gray-200"
              >
                Name
              </Label>
              <div className="relative">
                <UserIcon
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <Input
                  type="text"
                  name="Name"
                  id="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your Name"
                  className="rounded-[0.3rem] pl-10 bg-gray-700 text-white border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="Password"
                className="text-sm font-medium text-gray-200"
              >
                Password
              </Label>
              <div className="relative">
                <LockIcon
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <Input
                  type="password"
                  name="Password"
                  id="Password"
                  className="pl-10 rounded-[0.3rem] bg-gray-700 text-white border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center text-gray-300">
            <p>Demo Credentials:</p>
            <p>Name: admin</p>
            <p>Password: 123123</p>
          </div>
          <Button
            onClick={handleSubmit}
            type="submit"
            className=" rounded-[0.3rem] w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
