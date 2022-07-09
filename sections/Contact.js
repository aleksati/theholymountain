import { useEffect, useState } from "react";
import LayoutPage from "../components/LayoutPage";
import Button from "../components/Button";
// import CoverPhoto from "../components/CoverPhoto";
// import CoverTextPoster from "../components/CoverTextPoster";

{
  /* <CoverPhoto
imgSrc={"/img/cover.png"}
placeholder={"/img/placeholder/cover.png"}
/> */
}

const Contact = () => {
  const [name, setName] = useState("Dummy dummy");
  const [email, setEmail] = useState("dummy@dum.com");
  const [subject, setSubject] = useState("dumm test");
  const [message, setMessage] = useState("dum dum dum dum");
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
    <LayoutPage id="contact" className="pb-4 ">
      <h1 className="mt-4 overflow-hidden text-center text-clip text-size-header-big">
        CONTACT
      </h1>
      <div className="flex flex-col items-center justify-center p-4">
        <form
          onSubmit={e => {
            handleSubmit(e);
          }}
        >
          <div className="grid grid-cols-1 gap-6 w-96">
            <p>
              We would love to hear from you. Fill out the form below and we'll
              be in touch. If you want to report any page issues, please use the
              "Report issues" button at the bottom of the page.
            </p>
            <label className="block text-size-regular">
              <span className="text-primary-light dark:text-primary-dark">
                Your full name
              </span>
              <input
                type="text"
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
                Your email address
              </span>
              <input
                type="email"
                name="email"
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
                onChange={e => {
                  setMessage(e.target.value);
                }}
                value={message}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm text-primary-light focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                rows="6"
                placeholder="Elaborate..."
                required
              ></textarea>
            </label>
            {!isSubmit ? (
              isError ? (
                <div className="flex place-content-center">
                  <p>
                    Sorry, something's not right with the messaging service..
                  </p>
                </div>
              ) : !isLoading ? (
                <Button className="place-content-center">
                  <input type="submit" />
                </Button>
              ) : (
                <div className="flex place-content-center">
                  <img src="/img/loading/loading.gif" width="20px" />
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
    </LayoutPage>
  );
};

export default Contact;
