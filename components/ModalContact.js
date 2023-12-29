import getEnvVar from "../functions/getEnvVar";
import sendMail from "../functions/sendMail";
import { useEffect, useState } from "react";
import Spinner from "./Loading";
import Button from "./Button";

const ModalContact = () => {
  const [recipient, setRecipient] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getRecipientMail = async () => {
    setIsLoading(true);
    try {
      const { BANDMAIL } = await getEnvVar();
      setRecipient(BANDMAIL);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      console.log("Error while getting bandMail from API", error);
    }
  };

  useEffect(() => {
    getRecipientMail();
  }, []);

  const resetData = () => {
    setIsLoading(false);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const mail = await sendMail(
        {
          name,
          from_email: email,
          subject,
          message,
        },
        recipient
      );
      setIsSubmit(true);
      console.log(mail.message);
    } catch (error) {
      console.log("Error from ModalContact: ", error);
      setIsError(true);
    }

    resetData();
  };

  return (
    <div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col"
        aria-label="Contact form">
        <h1 className="overflow-hidden text-center text-clip text-size-header">
          CONTACT
        </h1>
        <div className="grid grid-cols-1 gap-6 mt-4">
          <label className="block">
            <span className="text-primary-light dark:text-primary-dark">
              Name
            </span>
            <input
              type="text"
              minLength="3"
              name="full name"
              onChange={(e) => {
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
              onChange={(e) => {
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
              onChange={(e) => {
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
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={message}
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm text-primary-light focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              rows="3"
              placeholder="Elaborate..."
              required></textarea>
            contactholymountain (at) gmail (dot) com
          </label>
          {!isSubmit ? (
            isError ? (
              <div className="flex place-content-center">
                <p>Sorry, something&apos;s not right..</p>
              </div>
            ) : (
              // <Button className="place-content-center" btnType="submit">
              /* </Button> */
              <>
                {!isLoading ? (
                  <input
                    tabIndex="-1"
                    type="submit"
                    className="p-2 mx-36 hover:cursor-pointer rounded text-primary-dark bg-button-filter-light"
                  />
                ) : (
                  <Spinner />
                )}
              </>
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
