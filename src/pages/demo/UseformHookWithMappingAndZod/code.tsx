import Highlighter from "@/components/Highlighter";

export default () => {
  return (
    <Highlighter
      code={`import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import fieldData from "@/constant/fieldData";
const ErrorBox = ({ message }: { message: string | undefined }) => {
  return (
    <div className="w-full p-1 border text-red-700 border-red-700 rounded text-center">
      {message}
    </div>
  );
};

const Home = () => {
  const [json, setJson] = useState("");
  const fieldType = z
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
          message: "Password didn't match",
          path: ["repassword"],
        });
      }
      return z.NEVER;
    });
  type Input = z.infer<typeof fieldType>;
  type FieldName =
    | "location"
    | "phone"
    | "name"
    | "email"
    | "password"
    | "repassword"
    | "date"
    | "color"
    | "age"
    | "fromtime"
    | "age"
    | "married"
    | "gender";

  const {
    register,
    handleSubmit,
    setError,
    formState: { isSubmitting, errors },
  } = useForm<Input>({
    resolver: zodResolver(fieldType),
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

  return (
    <div className="w-full min-h-screen">
      <h1 className="w-full text-center underline">
        React hook form with mapping
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fieldData.map((data) => {
          if (data.variant === "regular") {
            return (
              <label key={data.name} htmlFor={data.name}>
                {data.name.toUpperCase()}
                <input
                  {...register(data.name as FieldName)}
                  placeholder={data.placeholder}
                  id={data.name}
                  aria-invalid={!!errors[data.name as FieldName]}
                  type={data.type}
                />
              </label>
            );
          } else if (data.variant === "location") {
            return (
              <label key={data.name} htmlFor="location">
                LOCATION
                <select
                  id={data.name}
                  defaultValue=""
                  aria-invalid={!!errors[data.name as FieldName]}
                  {...register(data.name as "location")}
                >
                  <option value="">Select your location…</option>
                  {data.data?.map((item) => {
                    return (
                      <option
                        key={JSON.stringify(item)}
                        value={item.toString()}
                      >
                        {item.toString()}
                      </option>
                    );
                  })}
                </select>
              </label>
            );
          } else if (data.variant === "time") {
            return (
              <label key={data.name} htmlFor={data.name}>
                {data.name.toUpperCase()}
                <input
                  placeholder={data.placeholder}
                  id={data.name}
                  aria-invalid={!!errors[data.name as FieldName]}
                  type={data.type}
                  {...register(data.name as FieldName)}
                />
              </label>
            );
          } else if (data.variant === "gender") {
            return (
              <fieldset key={data.name}>
                Select gender
                <label htmlFor="male">
                  <input
                    {...register(data.name as FieldName)}
                    type="radio"
                    id="male"
                    name="gender"
                    aria-invalid={!!errors[data.name as FieldName]}
                    value="male"
                  />
                  Male
                </label>
                <label htmlFor="female">
                  <input
                    {...register(data.name as FieldName)}
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                  />
                  Female
                </label>
              </fieldset>
            );
          } else if (data.variant === "married") {
            return (
              <label
                className="w-full flex  relative"
                key={data.name}
                htmlFor={data.name}
              >
                <input
                  {...register(data.name as FieldName)}
                  aria-invalid={!!errors[data.name as FieldName]}
                  type={data.type}
                />
                <div>{data.name.toUpperCase()}</div>
              </label>
            );
          }

          {
            errors[data.name as FieldName] && (
              <ErrorBox message={errors[data.name as FieldName]?.message} />
            );
          }
        })}
        <button disabled={isSubmitting} aria-busy={isSubmitting} type="submit">
          Submit
        </button>
        {json && (
          <pre>
            <code className="w-full">{json}</code>
          </pre>
        )}
      </form>
    </div>
  );
};

export default Home;
`}
    />
  );
};
