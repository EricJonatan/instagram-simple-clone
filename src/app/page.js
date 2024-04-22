import AccountForm from "./_components/_ui/AccountForm";
import { Input, Button } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function SignIn() {
	return (
		<AccountForm>
			<form>
				<Input
					placeholder="Username or email"
					name="username"
					rounded={"2px"}
					mb={"8px"}
				/>
				<Input
					placeholder="Password"
					name="password"
					rounded={"2px"}
					mb={"8px"}
				/>
				<Button colorScheme={"twitter"} className="w-full">
					Submit
				</Button>
			</form>
		</AccountForm>
	);
}
