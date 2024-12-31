import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="text-black relative w-full">
      <div className="flex items-center justify-between p-5 text-gray-500">
        <p>Gemini</p>
        <img className="w-10 rounded-lg" src={assets.user_icon} alt="" />
      </div>

      <div className="max-w-[60rem] m-auto">
        {!showResult ? (
          <>
            <div className="mx-12 my-0 text-gray-400 text-4xl p-5">
              <p>
                <span className="bg-gradient-to-r from-blue-400 to-red-300">
                  {" "}
                  Hello, Naman :)
                </span>
              </p>
              <p>How can I help you today?</p>
            </div>

            <div className="grid grid-cols-4 gap-4 p-5">
              <div className="h-[13rem] p-4 bg-[#f0f4f9] rounded-md relative cursor-pointer hover:bg-[#dfe4ea]">
                <p className="text-[#585858] text-[1rem]">
                  Suggest Beautiful places to see an upcoming road trip...
                </p>
                <img
                  className="absolute w-8 p-1 bg-white rounded-md bottom-2 right-2"
                  src={assets.compass_icon}
                  alt=""
                />
              </div>

              <div className="h-[13rem] p-4 bg-[#f0f4f9] rounded-md relative cursor-pointer hover:bg-[#dfe4ea]">
                <p className="text-[#585858] text-[1rem]">
                  Briefly summarize this concept: urban planning
                </p>
                <img
                  className="absolute w-8 p-1 bg-white rounded-md bottom-2 right-2"
                  src={assets.bulb_icon}
                  alt=""
                />
              </div>

              <div className="h-[13rem] p-4 bg-[#f0f4f9] rounded-md relative cursor-pointer hover:bg-[#dfe4ea]">
                <p className="text-[#585858] text-[1rem]">
                  Brainstorm team bonding activities for our work retreat
                </p>
                <img
                  className="absolute w-8 p-1 bg-white rounded-md bottom-2 right-2"
                  src={assets.message_icon}
                  alt=""
                />
              </div>

              <div className="h-[13rem] p-4 bg-[#f0f4f9] rounded-md relative cursor-pointer hover:bg-[#dfe4ea]">
                <p className="text-[#585858] text-[1rem]">
                  Improve the readability of the following code
                </p>
                <img
                  className="absolute w-8 p-1 bg-white rounded-md bottom-2 right-2"
                  src={assets.code_icon}
                  alt=""
                />
              </div>
            </div>
          </>
        ) : (
          <div className="px-[5%] py-0 max-h-[70vh] overflow-y-auto ">
            <div className="mx-0 my-10 flex items-center gap-5">
              {" "}
              <img src={assets.user_icon} className="w-12 rounded-md" alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div>
              <div className="flex items-start gap-5">
                <img src={assets.gemini_icon} className="size-10" alt="" />
                {loading && (
                  <div className="w-full flex flex-col gap-3">
                    <hr className="border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] to-[#ffffff] h-5 animate-pulse" />
                    <hr className="border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] to-[#ffffff] h-5 animate-pulse" />
                    <hr className="border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] to-[#ffffff] h-5 animate-pulse" />
                  </div>
                )}
                <p className=""  dangerouslySetInnerHTML={{ __html: resultData }}></p>
              </div>
            </div>{" "}
          </div>
        )}

        {/* main bottom */}
        <div className="absolute bottom-0 w-[100%] max-w-[56rem] m-auto px-5 py-0 ">
          <div className="flex items-center justify-between gap-5 bg-[#f0f4f9] px-2 py-5 rounded-[50px]">
            <input
              className="flex-1 bg-transparent border-none outline-none p-2 text-[1rem]"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div className="flex items-center gap-4">
              <img
                className="w-6 cursor-pointer"
                src={assets.gallery_icon}
                alt=""
              />
              <img
                className="w-6 cursor-pointer"
                src={assets.mic_icon}
                alt=""
              />
              <img
                className="w-6 cursor-pointer"
                src={assets.send_icon}
                onClick={() => onSent()}
                alt=""
              />
            </div>
          </div>
          <p className="text-[1rem] my-4 mx-auto text-center font-normal">
            Gemini may also display inaccurate information, including about
            people, so double check its response, your privacy and gemini apps{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
