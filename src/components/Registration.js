import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Registration() {
    const [emailaddress, setEmailAddress] = useState("alien");
    const [passwordd, setPasswordd] = useState("user");
    const [username, setusername] = useState("user");
    // console.log(emailaddress, passwordd);

    function clearInput() {
        setusername("");
        setEmailAddress("");
        setPasswordd("");
    }

    async function UserPost() {
        // console.log(username, emailaddress, passwordd);
        const userDetails = {
            "userName": username,
            "email": emailaddress,
            "password": passwordd
        }
        userDetails.username = 'nik';
        console.log(userDetails);


        await axios.post("http://localhost:5000/user-register", userDetails)
        .then((data) => {
          Swal.fire({
            title: `<strong>${data.data.message}</strong>`,
            icon: "success",
            showCloseButton: true,
          });
          clearInput();
        })
        .catch((err) =>
          Swal.fire({
            title: `<strong>${err.message}</strong>`,
            icon: "error",
            showCloseButton: true,
          })
        );
      // const response = await axios.post('https://book-my-show-backend-1.herokuapp.com/user-register', userDetails);
      // console.log(response);
    }
//         await axios.post('http://localhost:5000/user-register', userDetails).then(()=>  { Swal.fire({
//             title: '<strong>Done</strong>',
//             icon: 'success',
           
//             showCloseButton: true,
           
           
//           });
        

//         clearInput();
        
//     })
// .catch((err)=>  Swal.fire({
//             title: `<strong>${err.message}</strong>`,
//             icon: 'error',
           
//             showCloseButton: true,
           
           
//           })
// );
//         const response = await axios.post('http://localhost:5000/user-register', userDetails);
//         // console.log(response);

    
  return (
    <div>
        <Container style={{padding:"9%"}}>
            <Form>

            <Form.Group className="mb-3" >
                <Form.Label>Username</Form.Label>
                <Form.Control value={username} onChange={(e) => setusername(e.target.value)} type="text" placeholder="Enter username" />
                <Form.Text className="text-muted">
                {/* We'll never share your email with anyone else. */}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control value={emailaddress} onChange={(e) => setEmailAddress(e.target.value)} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control value={passwordd} onChange={(e) => setPasswordd(e.target.value)} type="password" placeholder="Password" />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <Button variant="primary" onClick={UserPost}>
                Submit
            </Button>
            </Form>
        </Container>
    </div>
  );
}

export default Registration;
