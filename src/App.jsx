import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { SiCssdesignawards } from "react-icons/si";
import * as yup from "yup";

const schema = yup.object({
	userName: yup.string().required("Username is required"),
	email: yup
		.string()
		.email("Invalid Email Format")
		.required("Email is requred"),
	password: yup.string().min(6).max(12).required("password is required"),
	confirmPass: yup
		.string()
		.oneOf([yup.ref("password"), null], "Password does not match")
		.required("Please confirm password"),
});

function App() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	const onSubmit = (data) => {
		console.log(data);
		reset();
	};
	return (
		<>
			<div className="h-[100vh] flex justify-center items-center px-[20px]">
				<div className="w-[100%] md:w-[80%] lg:w-[40%] shadow-lg rounded-md">
					<div className="px-[20px] lg:px-[50px] py-[40px]">
						<div className="flex justify-center mb-[20px]">
							<div className="flex items-center gap-2">
								<SiCssdesignawards className="text-3xl lg:text-4xl fill-[#406AE8]" />
								<p className="text-xl lg:text-2xl font-semibold">Sign Up</p>
							</div>
						</div>
						{/* input fields */}
						<div>
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="mb-2">
									<label className="font-semibold" htmlFor="fname">
										Username
									</label>
									<input
										{...register("userName")}
										className="form-input"
										placeholder="Enter Username"
										type="text"
										name="userName"
										autoCapitalize="on"
									/>
									<p className="text-sm text-red-500">
										{errors.userName?.message}
									</p>
								</div>
								<div className="mb-2">
									<label className="font-semibold" htmlFor="email">
										Email
									</label>
									<input
										{...register("email")}
										className="form-input"
										placeholder="example@gmail.com"
										type="email"
										name="email"
										autoCapitalize="on"
									/>
									<p className="text-sm text-red-500">
										{errors.email?.message}
									</p>
								</div>
								<div className="mb-2">
									<label className="font-semibold" htmlFor="password">
										Password
									</label>
									<input
										{...register("password")}
										className="form-input"
										placeholder="Enter Password"
										type="password"
										name="password"
									/>
									<p className="text-sm text-red-500">
										{errors.password?.message}
									</p>
								</div>
								<div className="mb-2">
									<label className="font-semibold" htmlFor="confirm pass">
										Confirm Password
									</label>
									<input
										{...register("confirmPass")}
										className="form-input"
										placeholder="Confirm password"
										type="password"
										name="confirmPass"
									/>
									<p className="text-sm text-red-500">
										{errors.confirmPass?.message}
									</p>
								</div>
								<div className="mt-5">
									<button
										type="submit"
										className="py-3 bg-[#406AE8] hover:bg-[#406AE8]/[.9] text-white rounded-md w-full"
									>
										Sign Up
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
