
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertCircle, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";
import RegisterFormFields from "./components/RegisterFormFields";
import { validateForm } from "./utils/registerValidation";

const RegisterForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState("buyer");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const validation = validateForm(name, email, phone, password, confirmPassword);
    
    if (!validation.isValid) {
      setError(validation.error);
      setLoading(false);
      return;
    }

    try {
      // Simulate registration process
      setTimeout(() => {
        toast({
          title: "Registration successful!",
          description: "Welcome to HomeHunt India",
        });
        
        navigate("/");
        setLoading(false);
      }, 1000);
    } catch (error) {
      setError("Registration failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <RegisterFormFields
        name={name}
        email={email}
        phone={phone}
        password={password}
        confirmPassword={confirmPassword}
        showPassword={showPassword}
        userType={userType}
        loading={loading}
        setName={setName}
        setEmail={setEmail}
        setPhone={setPhone}
        setPassword={setPassword}
        setConfirmPassword={setConfirmPassword}
        setShowPassword={setShowPassword}
        setUserType={setUserType}
      />

      <Button 
        type="submit" 
        className="w-full" 
        disabled={loading}
      >
        {loading ? "Creating account..." : "Create Account"}
        {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
      </Button>
    </form>
  );
};

export default RegisterForm;
