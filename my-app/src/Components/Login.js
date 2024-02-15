import React from "react";
import img from "../images/logo.png";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";

export function Login() {
  return (
    <div className="absolute top-[20%] left-[35%]">
      <Card className="w-96">
        {/* <CardHeader variant="gradient" color="orange" className="r">
          <Typography variant="h3" color="white">
            Persistent
          </Typography>
        </CardHeader> */}
        <CardBody className="flex flex-col gap-4">
          <div>
            <img src={img} alt="logo" className="h-9 inline" />
            <span className="px-2 font-bold text-lg">Persistent</span>
          </div>
          <Input label="Email" size="lg" />
          <Input label="Password" size="lg" />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth color="orange">
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Typography
              as="a"
              href="#signup"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
            >
              Sign up
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
}
