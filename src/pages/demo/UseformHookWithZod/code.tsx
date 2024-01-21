export default () => {
  return (
    <pre>
      <code>{`import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const ErrorBox = ({ message }: { message: string | undefined }) => {
  return (
    <div className="w-full p-1 border text-red-700 border-red-700 rounded text-center">
      {message}
    </div>
  );
};

const FormScheme = z
  .object({
    name: z.string().min(5).max(12),
    email: z.string().email(),
    password: z.string().min(8).max(28),
    repassword: z.string(),
    phone: z.string().length(11),
    location: z.string().min(2),
    date: z.string(),
    color: z.string(),
    age: z.number().min(10).max(90),
    fromtime: z.string(),
    totime: z.string(),
    married: z.boolean(),
    gender: z.string(),
  })
  .superRefine(({ password, repassword }, ctx) => {
    if (password !== repassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Password didn't  match",
        path: ["repassword"],
      });
    }
    return z.NEVER;
  });

type Input = z.infer<typeof FormScheme>;

const UseformHookWithZod = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<Input>({
    resolver: zodResolver(FormScheme),
    defaultValues: {
      name: "JohnD",
      email: "john.doe@example.com",
      password: "ijp_?IUbUv46YS4brF3P2PQpG4l%",
      repassword: "ijp_?IUbUv46YS4brF3P2PQpG4l%",
      phone: "10101010000",
      location: "Chittagong",
      date: "2024-01-21",
      color: "#336699",
      age: 25,
      fromtime: "10:18",
      totime: "13:18",
      married: false,
      gender: "male",
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
      <h1 className="text-center my-2 underline">React hook form + zod</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          Name
          <input
            {...register("name")}
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
            {...register("email")}
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
            {...register("password")}
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
            {...register("repassword")}
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
            {...register("phone")}
            type="number"
            aria-invalid={!!errors.phone}
            name="phone"
            id="phone"
            placeholder="Type your phone number here .."
          />
        </label>
        {errors.phone && <ErrorBox message={errors.phone.message} />}
        <label htmlFor="location">Location</label>
        <select
          aria-invalid={!!errors.location}
          id="location"
          defaultValue=""
          {...register("location")}
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
            {...register("date")}
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
            {...register("color")}
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
            {...register("age", { valueAsNumber: true })}
            type="number"
            name="age"
            id="age"
            aria-invalid={!!errors.age}
            placeholder="Select your age here .."
            min="10"
            max="100"
            step="1"
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
              {...register("gender")}
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
              {...register("gender")}
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
      <Link to="/demo/UseformHookWithZod/code">Source code</Link>
    </div>
  );
};

export default UseformHookWithZod;
`}</code>
    </pre>
  );
};
