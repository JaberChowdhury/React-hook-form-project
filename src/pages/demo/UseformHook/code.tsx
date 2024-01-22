import Highlighter from "@/components/Highlighter";

export default () => {
  return (
    <Highlighter
      code={`import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";

const ErrorBox = ({ message }: { message: string | undefined }) => {
  return (
    <div className="w-full p-1 border text-red-700 border-red-700 rounded text-center">
      {message}
    </div>
  );
};

type Input = {
  name: string;
  email: string;
  password: string;
  repassword: string;
  phone: number;
  location: string;
  date: string;
  color: string;
  age: number;
  fromtime: string;
  totime: string;
  married: boolean;
  gender: "male" | "female";
  /*
  social: {
    facebook: string;
    twitter: string;
    github: string;
  };
  */
};

const UseformHook = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<Input>({
    defaultValues: {
      name: "JohnD",
      email: "john.doe@example.com",
      password: "ijp_?IUbUv46YS4brF3P2PQpG4l%r7H706ay",
      repassword: "ijp_?IUbUv46YS4brF3P2PQpG4l%r7H706ay",
      phone: 1234567890,
      location: "Chittagong",
      date: "2022-01-01",
      color: "#336699",
      age: 25,
      fromtime: "10:18",
      totime: "13:18",
      married: false,
      gender: "male",
      /*
      social: {
        facebook: "coming...",
        twitter: "coming...",
        github: "",
      },
      */
    },
  });
  const [json, setJson] = useState("");
  const onSubmit: SubmitHandler<Input> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // throw new Error()
      setJson(JSON.stringify(data, null, 2));
    } catch (e) {
      setError("root", {
        message: "The email you provided is already been taken",
      });
    }
  };

  console.log(errors);
  return (
    <div>
      <h1 className="text-center my-2 underline">React hook form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          Name
          <input
            {...register("name", {
              required: "Name is required",
              pattern: {
                value: /^[a-zA-Z]+$/i,
                message: "Invalid name(hints: don't use number)",
              },
              maxLength: {
                value: 20,
                message: "Length should be less than 20",
              },
              minLength: {
                value: 5,
                message: "Length should be bigger than 5",
              },
            })}
            type="text"
            name="name"
            id="name"
            // aria-invalid={errors.name ? true : false}
            aria-invalid={!!errors.name} // same as previous
            placeholder="Type your name here.."
          />
        </label>
        {errors.name && <ErrorBox message={errors.name.message} />}
        <label htmlFor="email">
          Email
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Your email is Invalid",
              },
              validate: (value) => value.split(".").reverse()[0] === "com",
            })}
            type="email"
            name="email"
            id="email"
            aria-invalid={!!errors.email}
            placeholder="Type your email here.."
          />
        </label>
        {errors.email && <ErrorBox message={errors.email.message} />}
        <label htmlFor="password">
          Password
          <input
            {...register("password", {
              required: "password is required",
              pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/,
            })}
            type="password"
            name="password"
            id="password"
            aria-invalid={!!errors.password}
            placeholder="Type your password here.."
          />
        </label>
        {errors.password && <ErrorBox message={errors.password.message} />}
        <label htmlFor="repassword">
          Re-password
          <input
            {...register("repassword", {
              required: "This field is required",
              validate: (value) => {
                if (watch("password") !== value) {
                  return "Your password do not match";
                }
                return true;
              },
            })}
            type="password"
            name="repassword"
            id="repassword"
            aria-invalid={!!errors.repassword}
            placeholder="Type your password here again.."
          />
        </label>
        {errors.repassword && <ErrorBox message={errors.repassword.message} />}
        <label htmlFor="phone">
          Phone
          <input
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^(\+\d{1,3}[- ]?)?\d{11}$/,
                message: "Phone number is Invalid",
              },
            })}
            type="number"
            aria-invalid={!!errors.phone}
            name="phone"
            id="phone"
            placeholder="Type your phone number here .."
          />
        </label>
        {errors.phone && <ErrorBox message={errors.phone.message} />}

        {/*
        <label htmlFor="facebook">
          Facebook
          <input
            {...register("social.facebook",{required : "This field is required"})}
            name="facebook"
            type="text"
            aria-invalid={!!errors.social?.facebook}
            placeholder="Add your facebook profile "
          />
        </label>
        {errors.social?.facebook && <ErrorBox message={errors.social.facebook?.message} />}

        <label htmlFor="twitter">
          Twitter
          <input
            {...register("social.twitter",{required : "This field is required"})}
            name="twitter"
            type="text"
            aria-invalid={!!errors.social?.twitter}
            placeholder="Add your twitter profile "
          />
        </label>
        {errors.social?.twitter && <ErrorBox message={errors.social.twitter?.message} />}

        <label htmlFor="github">
          Github
          <input
            {...register("social.github",{required : "This field is required"})}
            name="github"
            type="text"
            aria-invalid={!!errors.social?.github}
            placeholder="Add your github profile "
          />
        </label>
        {errors.social?.github && <ErrorBox message={errors.social.github?.message} />}
*/}

        <label htmlFor="location">Location</label>
        <select
          aria-invalid={!!errors.location}
          id="location"
          defaultValue=""
          {...register("location", { required: "location is required" })}
        >
          <option value="">Select your location…</option>
          {[
            "Dhaka",
            "Chittagong",
            "Rajshahi",
            "Barisal",
            "Khulna",
            "Rangpur",
            "Shylet",
            "Cumilla",
          ].map((item, id) => (
            <option key={id} value={item}>
              {item}
            </option>
          ))}
        </select>
        {errors.location && <ErrorBox message={errors.location.message} />}
        <label htmlFor="date">
          Date of Birth
          <input
            {...register("date", { required: "Date of Birth is required" })}
            type="date"
            aria-invalid={!!errors.date}
            id="date"
            name="date"
          />
        </label>
        {errors.date && <ErrorBox message={errors.date.message} />}
        <label htmlFor="color">
          Favourite color
          <input
            {...register("color", { required: "Color is required" })}
            type="color"
            id="color"
            aria-invalid={!!errors.color}
            name="color"
          />
        </label>
        {errors.color && <ErrorBox message={errors.color.message} />}
        <label htmlFor="age">
          Age
          <input
            {...register("age", { required: "Age is required" })}
            type="range"
            name="age"
            id="age"
            aria-invalid={!!errors.age}
            placeholder="Select your age here .."
            min="0"
            max="150"
            step="0.1"
          />
        </label>
        {errors.age && <ErrorBox message={errors.age.message} />}
        <label className="w-full">
          Sleeping Time
          <div className="flex gap-x-2">
            <label className="w-full" htmlFor="fromtime">
              From
              <input
                {...register("fromtime")}
                type="time"
                id="fromtime"
                name="fromtime"
              />
            </label>
            <label className="w-full" htmlFor="totime">
              To
              <input
                {...register("totime")}
                type="time"
                id="totime"
                name="totime"
              />
            </label>
          </div>
        </label>
        <fieldset>
          Married[yes/no]
          <label htmlFor="married">
            <input
              {...register("married")}
              type="checkbox"
              id="married"
              name="married"
            />
            Married
          </label>
        </fieldset>
        <fieldset>
          Select gender
          <label htmlFor="male">
            <input
              {...register("gender", { required: "This field is required" })}
              type="radio"
              id="male"
              name="gender"
              aria-invalid={!!errors.gender}
              value="male"
            />
            Male
          </label>
          <label htmlFor="female">
            <input
              {...register("gender", { required: "This field is required" })}
              type="radio"
              aria-invalid={!!errors.gender}
              id="female"
              name="gender"
              value="female"
            />
            Female
          </label>
        </fieldset>
        {errors.gender && <ErrorBox message={errors.gender.message} />}
        <button disabled={isSubmitting} aria-busy={isSubmitting} type="submit">
          Submit
        </button>
        {errors.root && <ErrorBox message={errors.root.message} />}
      </form>
      {json && (
        <pre>
          <code className="w-full">{json}</code>
        </pre>
      )}
      <Link to="/demo/useformHook/code">Source code</Link>
    </div>
  );
};

export default UseformHook;
`}
    />
  );
};
