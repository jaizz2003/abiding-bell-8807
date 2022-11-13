// import React, { useState } from "react";
// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   Button,
//   useDisclosure,
//   Input,
//   Heading,
//   Link,
//   Select,
//   Box,
//   Flex,
//   Spacer,
//   InputGroup,
//   Checkbox,
//   Stack,
//   InputRightElement,
// } from "@chakra-ui/react";

// const Signup = () => {

//   const [email,setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [country, setCountry] = useState("");

//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [size, setSize] = React.useState("md");
//   const [show, setShow] = React.useState(false);

//   const handleSubmit = (e) => {
//     console.log(email,password, country)
//   }

//   const handleSizeClick = (newSize) => {
//     setSize(newSize);
//     onOpen();
//   };
//   const handleClick = () => setShow(!show);

//   const sizes = ["sm"];

//   return (
//     <>
//       {sizes.map((size) => (
//         <Button
//           onClick={() => handleSizeClick(size)}
//           key={size}
//           m={4}
//         >{`Sign Up`}</Button>
//       ))}

//       <Modal onClose={onClose} size={size} isOpen={isOpen}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader style={{ textAlign: "center" }}>Sign Up</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <Stack spacing={3}>
//               <Input
//                 focusBorderColor="black"
//                 borderRadius="0px" value = {email} onChange = {(e) => setEmail(e.target.value)}
//                 placeholder="Email Address*"
//               />{" "}
//               <InputGroup size="md">
//                 <Input
//                   pr="4.5rem"
//                   borderRadius="0px" value = {password} onChange = {(e) => setPassword(e.target.value)}
//                   focusBorderColor="black"
//                   type={show ? "text" : "password"}
//                   placeholder="Password*"
//                 />

//                 <InputRightElement width="4.5rem">
//                   <Button h="1.75rem" size="sm" onClick={handleClick}>
//                     {show ? "Hide" : "Show"}
//                   </Button>
//                 </InputRightElement>
//               </InputGroup>
//               <Select placeholder="Country*" borderRadius="0px"  value = {country} onChange = {(e) => setCountry(e.target.value)}>
//                 <option value="option1">Afghanistan</option>
//                 <option value="option2">Australia</option>
//                 <option value="option3">Austria</option>
//                 <option value="option4">Bangladesh</option>
//                 <option value="option5">Brazil</option>
//                 <option value="option6">Canada</option>
//                 <option value="option7">China</option>
//                 <option value="option8">Denmark</option>
//                 <option value="option9">Egypt</option>
//                 <option value="option10">Finland</option>
//                 <option value="option11">Germany</option>
//                 <option value="option12">India</option>
//                 <option value="option13">Indonesia</option>
//                 <option value="option14">Italy</option>
//                 <option value="option15">Japan</option>
//                 <option value="option16">Jordan</option>
//                 <option value="option17">Libya</option>
//                 <option value="option18">Malaysia</option>
//                 <option value="option19">Mexico</option>
//                 <option value="option20">Nepal</option>
//                 <option value="option21">New Zealand </option>
//                 <option value="option22">North Korea</option>
//                 <option value="option23">Pakistan</option>
//                 <option value="option24">Philippines</option>
//                 <option value="option25">Portugal</option>
//                 <option value="option26">Saudi Arabia</option>
//                 <option value="option27">Singapore</option>
//                 <option value="option28">South Africa</option>
//                 <option value="option29">South Korea</option>
//                 <option value="option30">United Arab Emirates</option>
//                 <option value="option31">United Kingdom</option>
//                 <option value="option32">United Kingdom</option>
//                 <option value="option33">Zimbabwe</option>
//                 <option value="option34">Other</option>
//               </Select>
//               <Spacer />
//               <Spacer />
//               <Flex>
//                 <Checkbox defaultChecked>Remember me</Checkbox>
//               </Flex>
//               <Button
//                 color="white"
//                 size="md"
//                 height="40px"
//                 width="338px"
//                 bgColor="black"
//                 borderRadius="0px"
//                 onClick = {handleSubmit}
//               >
//                 CREATE AN ACCOUNT
//               </Button>
//               <Box color="#767676" noOfLines={6} fontSize="sm">
//                 By clicking "Create an Account", you agree to our{" "}
//                 <Link textDecoration="underline">Terms of Use</Link>
//                 and <Link textDecoration="underline">Privacy Policy</Link>,
//                 including the Use of Cookies and the transfer of your personal
//                 information to the United States, a jurisdiction that may not
//                 provide an equivalent level of data protection to the laws in
//                 your home country.
//               </Box>
//             </Stack>
//             <Stack mt="3rem">
//               {/* <hr/'> */}
//               <hr />
//             </Stack>
//             <Stack style={{ textAlign: "center" }} mt="1.5rem">
//               <Heading as="h5" size="sm">
//                 Already have an account?
//                 <Link
//                   href="/signup"
//                   onClick={() => handleSizeClick(size)}
//                   key={size}
//                   m={2}
//                   color="blue"
//                 >
//                   Sign In
//                 </Link>
//               </Heading>
//             </Stack>
//           </ModalBody>
//           <ModalFooter>
//             {/* <Button onClick={onClose}>Close</Button> */}
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// };

// export default Signup;



import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Input,
  Heading,
  Link,
  Select,
  Box,
  Flex,
  Spacer,
  InputGroup,
  Checkbox,
  Stack,
  InputRightElement,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { signUp } from "../Redux/AuthReducer/action";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    if (email && password && country) {
      dispatch(signUp({ email, password, country }))
      alert("Sign Up successfull")
    }
    else if(email === ""){
      alert("Please enter Email")
    }
    else if(password === ""){
      alert("Please enter Password")
    }
    // else if(country === "Country*"){
    //   alert("Please select Country")
    // }
    else{
      alert("Please select Country")
    }
    setEmail("");
    setPassword("");
    setCountry("");
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");
  const [show, setShow] = React.useState(false);

  const handleSizeClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };
  const handleClick = () => setShow(!show);

  const sizes = ["sm"];

  return (
    <>
      {sizes.map((size) => (
        <Button
          onClick={() => handleSizeClick(size)}
          key={size}
          m={4}
        >{`Sign Up`}</Button>
      ))}

      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader style={{ textAlign: "center" }}>Sign Up</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={3}>
              <Input
                focusBorderColor="black"
                borderRadius="0px"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address*"
              />{" "}
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  borderRadius="0px"
                  focusBorderColor="black"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={show ? "text" : "password"}
                  placeholder="Password*"
                />

                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Select
                placeholder="Country*"
                borderRadius="0px"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="Afghanistan">Afghanistan</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Brazil">Brazil</option>
                <option value="Canada">Canada</option>
                <option value="China">China</option>
                <option value="Denmark">Denmark</option>
                <option value="Egypt">Egypt</option>
                <option value="Finland">Finland</option>
                <option value="Germany">Germany</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Italy">Italy</option>
                <option value="Japan">Japan</option>
                <option value="Jordan">Jordan</option>
                <option value="Libya">Libya</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Mexico">Mexico</option>
                <option value="Nepal">Nepal</option>
                <option value="New Zealand">New Zealand</option>
                <option value="North Korea">North Korea</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Philippines">Philippines</option>
                <option value="Portugal">Portugal</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Singapore">Singapore</option>
                <option value="South Africa">South Africa</option>
                <option value="South Korea">South Korea</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United State of America">United State of America</option>
                <option value="Zimbabwe">Zimbabwe</option>
                <option value="Other">Other</option>
              </Select>
              <Spacer />
              <Spacer />
              <Flex>
                <Checkbox defaultChecked>Remember me</Checkbox>
              </Flex>
              <Button
                color="white"
                size="md"
                height="40px"
                width="338px"
                bgColor="black"
                borderRadius="0px"
                onClick={handleSubmit}
              >
                CREATE AN ACCOUNT
              </Button>
              <Box color="#767676" noOfLines={6} fontSize="sm">
                By clicking "Create an Account", you agree to our{" "}
                <Link textDecoration="underline">Terms of Use</Link>
                and <Link textDecoration="underline">Privacy Policy</Link>,
                including the Use of Cookies and the transfer of your personal
                information to the United States, a jurisdiction that may not
                provide an equivalent level of data protection to the laws in
                your home country.
              </Box>
            </Stack>
            <Stack mt="3rem">
              {/* <hr/'> */}
              <hr />
            </Stack>
            <Stack style={{ textAlign: "center" }} mt="1.5rem">
              <Heading as="h5" size="sm">
                Already have an account?
                <Link
                  href="/signup"
                  onClick={() => handleSizeClick(size)}
                  key={size}
                  m={2}
                  color="blue"
                >
                  Sign In
                </Link>
              </Heading>
            </Stack>
          </ModalBody>
          <ModalFooter>
            {/* <Button onClick={onClose}>Close</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Signup;
