import { useRegisterUser } from "@/api/AuthApi/register.api";
import { Formik } from "formik";
import { Pressable, Text, View } from "react-native";
import * as Yup from "yup";
import { ThemedAuthInput } from "../ThemedAuthInput/ThemedAuthInput";
import { styles } from "./style";

interface IHandleSubmitProps {
  username: string;
  email: string;
  password: string;
}

const registerSchema = Yup.object({
  username: Yup.string().required().min(5),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
});

export function Register() {
  const registerUser = useRegisterUser();

  const handleSubmit = async (values: IHandleSubmitProps) => {
    console.log(values);
    (await registerUser).mutate(values, {
      onSuccess: (data) => {
        console.log("User registered: ", data);
      },
      onError: (err) => {
        console.error("Registration failed: ", err);
      },
    });
  };

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={registerSchema}
      onSubmit={(values) => handleSubmit(values)}
    >
      {({ handleChange, handleSubmit, values, errors }) => (
        <View style={styles.registerWrapper}>
          <ThemedAuthInput
            value={values.username}
            onValueChange={handleChange("username")}
            inputLabel="Username"
            inputPlaceholder="Enter username"
            inputType={"ascii-capable"}
          />
          {errors.username && <Text>{errors.username}</Text>}
          <ThemedAuthInput
            value={values.email}
            onValueChange={handleChange("email")}
            inputLabel="Email"
            inputPlaceholder="Enter email"
            inputType={"email-address"}
          />
          {errors.username && <Text>{errors.username}</Text>}
          <ThemedAuthInput
            value={values.password}
            onValueChange={handleChange("password")}
            inputLabel="Password"
            inputPlaceholder="Enter password"
            inputType={"ascii-capable"}
            isMasked={true}
          />
          {errors.password && <Text>{errors.password}</Text>}

          {/* <ImagePicker /> */}

          <Pressable style={styles.authBtn} onPress={() => handleSubmit()}>
            <Text>Register</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
}
