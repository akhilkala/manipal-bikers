import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { useToasts } from "react-toast-notifications";
import Input from "../components/Input";
import useInputState from "../hooks/useInputState";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useLottie } from "lottie-react";

const Home: NextPage = () => {
  const { addToast } = useToasts();

  const number = useInputState();
  const model = useInputState();
  const place = useInputState();
  const [loading, setLoading] = useState(false);
  const [registered, setRegistered] = useState(false);

  const options = {
    animationData: require("../public/loading.json"),
    loop: true,
    autoplay: true,
  };

  const { View: LoadingView } = useLottie(options);

  const handleSubmit = async () => {
    if (!number.value)
      return addToast("Number is required", { appearance: "error" });

    setLoading(true);
    try {
      await addDoc(collection(db, "responses"), {
        number: number.value,
        model: model.value,
        place: place.value,
      });
      addToast("Successfully Registered!", { appearance: "success" });
      setLoading(false);
      setRegistered(true);
    } catch (err) {
      addToast("Something went wrong", { appearance: "error" });
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Manipal Bikers</title>
        <meta name="description" content="Manipal Bikers Registration Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!loading && !registered && (
        <>
          <div className="landing">
            <header>
              <h1>Manipal Bikers</h1>
            </header>
            <main>
              <h1>Let’s Go Places</h1>
              <span>Choose Discomfort. Choose Adventure.</span>
            </main>
            <a href="#about" className="arrows">
              <Image
                src="/arrows.svg"
                alt="Down Arrow"
                width={50}
                height={50}
              />
            </a>
          </div>
          <div id="about" className="about">
            <h2>ABOUT US</h2>
            <p>
              Manipal Bikers aims at creating a biker commuinty for students. It
              all started when we decide to drive from Hyderabad to Manipal. Was
              is easy? No. Was it fun? Not at eveny turn. Was it worth it? Hell
              yeah. We interacted with a few localites and local puppies. We
              appreciated views we would not care to look through a bus window.
              We had a blast and would like to continue the adventures in
              Manipal.
            </p>
            <a href="#join" className="arrows">
              <Image
                src="/arrows.svg"
                alt="Down Arrow"
                width={50}
                height={50}
              />
            </a>
          </div>
          <div className="join" id="join">
            <div className="circle"></div>
            <h2>JOIN THE COMMUNITY</h2>
            <span>Come be part of something exciting!</span>
            <form onSubmit={handleSubmit}>
              <Input name="Whatsapp Number *" state={number} />
              <Input name="Bike Model (If you have one)" state={model} />
              <Input
                name="Group Ride Suggestion (Places around Manipal)"
                state={place}
              />
              <div className="illustration">
                <img src="/flag.svg" alt="Down Arrow" />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </>
      )}
      {loading && <div className="screen-center">{LoadingView}</div>}
      {registered && (
        <div className="screen-center">
          <h1 className="success">Successfully Registered</h1>
        </div>
      )}
    </>
  );
};

export default Home;
