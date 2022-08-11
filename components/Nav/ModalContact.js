import { useState } from "react";
import Button from "../Button";
import Image from "next/image";

const ModalContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const resetData = () => {
    setIsLoading(false);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log("Sending");
    setIsLoading(true);

    let data = {
      name,
      email,
      subject,
      message,
    };

    try {
      let res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.status == 200) {
        console.log("Message sent!");
        setIsSubmit(true);
      } else {
        console.log(
          "Error occured (500) on the backend with the mailing service",
          res
        );
        setIsError(true);
      }
    } catch (error) {
      console.log("Error occured when calling the API/backend: ", error);
      setIsError(true);
    }
    resetData();
  };

  return (
    <div>
      <form
        onSubmit={e => {
          handleSubmit(e);
        }}
        className="flex flex-col"
        aria-label="Contact form"
      >
        <h1 className="overflow-hidden font-normal text-center text-clip text-size-header">
          CONTACT
        </h1>
        <div className="grid grid-cols-1 gap-6 mt-4">
          {/* <p>
            We would love to hear from you! Just fill out the form below and
            we&apos;ll be in touch.
          </p> */}
          <label className="block">
            <span className="text-primary-light dark:text-primary-dark">
              Name
            </span>
            <input
              type="text"
              minLength="3"
              name="full name"
              onChange={e => {
                setName(e.target.value);
              }}
              value={name}
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm text-primary-light focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Ola Nordmann"
              required
            />
          </label>
          <label className="block">
            <span className="text-primary-light dark:text-primary-dark">
              Email
            </span>
            <input
              type="email"
              name="email"
              minLength="5"
              onChange={e => {
                setEmail(e.target.value);
              }}
              value={email}
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm text-primary-light focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="ola@nordmann.no"
              required
            />
          </label>
          <label className="block">
            <span className="text-primary-light dark:text-primary-dark">
              Subject
            </span>
            <input
              type="text"
              name="subject"
              onChange={e => {
                setSubject(e.target.value);
              }}
              value={subject}
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm text-primary-light focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="What's it about?"
              required
            />
          </label>
          <label className="block">
            <span className="text-primary-light dark:text-primary-dark">
              Message
            </span>
            <textarea
              name="message"
              minLength="3"
              onChange={e => {
                setMessage(e.target.value);
              }}
              value={message}
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm text-primary-light focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              rows="3"
              placeholder="Elaborate..."
              required
            ></textarea>
          </label>
          {!isSubmit ? (
            isError ? (
              <div className="flex place-content-center">
                <p>Sorry, something&apos;s not right..</p>
              </div>
            ) : !isLoading ? (
              <Button className="place-content-center" btnType="submit">
                <input tabIndex="-1" type="submit" />
              </Button>
            ) : (
              <div className="flex place-content-center">
                <Image
                  src="/img/loading/loading.gif"
                  alt="loading"
                  width="25%"
                  height="25%"
                />
              </div>
            )
          ) : (
            <div className="flex place-content-center">
              <p>Message sent!</p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default ModalContact;
