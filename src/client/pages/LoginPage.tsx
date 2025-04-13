
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/client/components/layout/Layout";
import LoginForm from "@/client/components/auth/LoginForm";
import RegisterForm from "@/client/components/auth/RegisterForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/client/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/client/components/ui/card";

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="w-full max-w-md">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-center">
                Welcome to HomeHunt India
              </CardTitle>
              <CardDescription>
                Access your account to manage properties and inquiries
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue={activeTab} onValueChange={(value) => setActiveTab(value as "login" | "register")}>
                <TabsList className="grid grid-cols-2 w-full">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="register">Register</TabsTrigger>
                </TabsList>
                <TabsContent value="login" className="mt-6">
                  <LoginForm />
                </TabsContent>
                <TabsContent value="register" className="mt-6">
                  <RegisterForm />
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2 text-center text-sm text-muted-foreground">
              <p>By continuing, you agree to HomeHunt India's Terms of Service and Privacy Policy.</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
