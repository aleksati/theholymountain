import Button from "./Button";
import Spinner from "./Spinner";
import { useState } from "react";
import { SITE_DOMAIN } from "../config";

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
    console.log("Sending message...");
    setIsLoading(true);

    let data = {
      name,
      email,
      subject,
      message,
    };

    try {
      let res = await fetch(`${SITE_DOMAIN}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      let data = await res.json();
      console.log(data.message);
      setIsSubmit(true);
    } catch (error) {
      console.log("Error with the mailing service: ", error.message);
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
        <div className="grid grid-cols-1 gap-6 mt-4 text-size-regular">
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
              <Spinner />
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
