import AudioPlayer from "../components/AudioPlayer/AudioPlayer";
import BackButton from "../components/Music/BackButton";
import PageLayout from "../components/Page/PageLayout";
import AppLayout from "../components/AppLayout";
import Image from "next/image";

const src = "/img/cover.png";
const placeholder = "/img/placeholders/cover.png";
const audioPath = "/audio/celest.mp3";

const awake = () => {
  const meta = {
    title: `The Holy Mountain | Awake`,
  };

  return (
    <AppLayout appMeta={meta}>
      <BackButton />
      <PageLayout border={false}>
        <div
          className="grid min-h-screen grid-cols-1 gap-6 p-4 pb-12 md:pb-0 md:grid-cols-2 md:space-y-0"
          aria-label="Awake page"
        >
          <div className="col-span-1">
            <div className="relative w-full">
              <Image
                src={src}
                className="rounded-md backdrop-brightness-75"
                alt="Awake cover photo"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
                placeholder="blur"
                blurDataURL={placeholder}
                priority
              />
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex flex-col px-4 space-y-2 text-primary-light dark:text-primary-dark">
              <div className="font-normal leading-8 text-size-header">
                <h2>AWAKE</h2>
              </div>
              <div className="text-secondary">
                <p>Single / 2022</p>
              </div>
              {/* <div>
                <Shop />
              </div> */}
              {/* <div>
                <p>You ran, choking,</p>
                <p>Until you fell.</p>
                <p>You waste</p>
                <p>Away</p>
              </div> */}
              <div>
                <p>
                  The first single of our new studio album. Featuring imagery by
                  Katinka Hustad, design by Bjørn Erik Nyhus, and lyrics
                  inspired by poet Arsenij Tarkovsky.
                </p>
              </div>
              <div className="relative w-full pt-4 pb-4">
                <AudioPlayer src={audioPath} />
              </div>
              <div className="text-secondary">
                <p>Produced by The Holy Mountain</p>
                <p>
                  Recorded by Dag Erik Johansen, Audun Strype and David
                  Michelsen
                </p>
                <p>Mixed by Peter Michelsen</p>
                <p>Mastered by Audun Strype</p>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </AppLayout>
  );
};

export default awake;
