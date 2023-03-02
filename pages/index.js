import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

function Button({ text, onClick }) {
  return (
    <button
      className="bg-pink-300 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

function Content({ text }) {
  return <div className="mt-8 bg-gray-100 p-4 rounded-md">{text}</div>;
}

const genInfo = (
  <ul>
    <li>i reply pretty fast but still be patient i have a life 😭</li>
    <li>i do have a cat please let me know if you're allergic</li>
    <li>
      if you're uncomfortable with the trade please let me know! we both have
      the right to back out
    </li>
  </ul>
);

const tradingInfo = (
  <ul>
    <li>
      i am not responsible for lost or damaged mail, do not ask for a
      replacement pc
    </li>
    <li>i will send out first if i have less proofs</li>
    <li>
      i prefer to send out pretty fast; i can do so within a couple of days (:
    </li>
    <li>
      i send a video proof, address confirmation, and mail proof; i expect the
      same in return, out of courtesy!
    </li>
    <li>packaging includes a penny sleeve, toploader, and freebies &lt;3</li>
    <li>i ship to u.s. only and use a bluebox to mail</li>
    <li>shipping is free!</li>
  </ul>
);

const salesInfo = (
  <ul>
    <li>same terms apply as above that are applicable!</li>
    <li>no refunds |:</li>
    <li>i take venmo, paypal, and cc as payments</li>
    <li>i hold photocards for up to 2 days, then they go up for sale again</li>
  </ul>
);

export default function Home() {
  const [content, setContent] = useState(genInfo);

  const handleButtonClick = (buttonIndex) => {
    if (buttonIndex === 1) {
      setContent(genInfo);
    } else if (buttonIndex === 2) {
      setContent(tradingInfo);
    } else {
      setContent(salesInfo);
    }
  };

  return (
    <>
      <Head>
        <title>ushisgf</title>
      </Head>
      <main className="bg-center bg-cover md:bg-repeat md:h-screen bg-[url('/bg.jpg')]">
        <div className="flex flex-col justify-center items-center h-screen flex-grow">
          <div className="Header flex justify-center items-center flex-col gap-2">
            <Image
              className="w-16 h-16 rounded-full border-4 border-pink-200 p-1 outline-black"
              src="/pfp.jpg"
              width="104"
              height="104"
              alt="asian"
            />
            <p className="text-gray-600">hi! i'm sarah (ᵔ.ᵔ) i'm 19 yrs old</p>
          </div>

          <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg px-6 py-4">
              <div className="flex justify-center space-x-4">
                <Button text="gen" onClick={() => handleButtonClick(1)} />
                <Button text="trading" onClick={() => handleButtonClick(2)} />
                <Button text="sales" onClick={() => handleButtonClick(3)} />
              </div>
              <Content text={content} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
