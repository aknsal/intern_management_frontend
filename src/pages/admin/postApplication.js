import { Paper, TextField, Typography, Button } from "@mui/material";
import React from "react";
import avatar from "../../assets/avatar.webp";
import "../Profile/Profile.student.css";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

// const PostApplication = () => {

//     return (
//         <h1> Hello </h1>
//     )
// }

const validationSchema = yup.object({
	// title: yup.string("Enter your title").required("Title is required"),
	// email: yup
	// 	.string("Enter your email")
	// 	.email("Enter a valid email")
	// 	.required("Email is required"),
	// cgpa: yup
	// 	.number("Enter you CGPA")
	// 	.max(9, "Enter a valid CGPA")
	// 	.required("CGPA is required"),
	// stipend: yup
	// 	.number("Enter stipend provided")
	// 	.min(1000, "Enter a valid stipend ")
	// 	.required("stipend provided is required"),
	// description: yup
	// 	.string("Enter the description of intership")
	// 	.required("Description is required"),
});

export default function PostProfile() {
	const registerIntern = async (values) => {
		console.log(values);

		const config = {
			withCredentials: false,
			headers: {
				"Content-Type": "application/json",
			},
			data: 1,
			body: { values },
		};

		await axios
			.post("http://localhost:3001/intern/internship", { values })
			.then((res) => console.log(res));
	};

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			stipend: "",
			minCGPA: "",
			description: "",
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			// console.log(values);
			registerIntern(values);
		},
	});

	return (
		<div className="profile-container">
			<Typography variant="h3">Add New Internship</Typography>
			<Paper className="student-profile-paper">
				<form onSubmit={formik.handleSubmit}>
					<TextField
						style={{ marginBottom: 20 }}
						id="outlined-basic"
						name="name"
						fullWidth
						onChange={formik.handleChange}
						value={formik.values.name}
						label="Title"
						variant="outlined"
					/>
					<TextField
						style={{ marginBottom: 20 }}
						id="outlined-basic"
						name="email"
						fullWidth
						onChange={formik.handleChange}
						value={formik.values.email}
						label="Faculty Email"
						variant="outlined"
					// value={formik.values.email}
					/>

					<TextField
						style={{ marginBottom: 20, marginRight: 7 }}
						id="outlined-basic"
						name="minCGPA"
						onChange={formik.handleChange}
						value={formik.values.minCGPA}
						label="min CGPA"
						variant="outlined"
					/>
					<TextField
						style={{ marginBottom: 20 }}
						id="outlined-basic"
						name="stipend"
						onChange={formik.handleChange}
						value={formik.values.stipend}
						label="Stipend"
						variant="outlined"
					/>
					<TextField
						style={{ marginBottom: 20 }}
						id="outlined-basic"
						name="description"
						fullWidth
						onChange={formik.handleChange}
						value={formik.values.description}
						label="Description"
						variant="outlined"
					/>
					<Button
						color="primary"
						variant="contained"
						fullWidth
						type="submit"
					>
						Submit
					</Button>
				</form>
			</Paper>
		</div>
	);
}
