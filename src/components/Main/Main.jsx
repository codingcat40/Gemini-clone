import { assets } from "../../assets/assets";

const Main = () => {
  return (
    <div className="text-black relative w-full">
      <div className="flex items-center justify-between p-5 text-gray-500">
        <p>Gemini</p>
        <img className="w-10 rounded-lg" src={assets.user_icon} alt="" />
      </div>

      <div className="max-w-[60rem] m-auto">
        <div className="mx-12 my-0 text-gray-400 text-4xl p-5">
          <p>
            <span className="bg-gradient-to-r from-blue-400 to-red-300"> Hello, Naman :)</span>
          </p>
          <p>How can I help you today?</p>
        </div>

        <div>
          <div>
            <p>
              Suggest Beautiful places to see an upcoming road trip...
            </p>
            <img src={assets.compass_icon} alt="" />
          </div>

          <div>
            <p>
              Briefly summarize this concept: urban planning
            </p>
            <img src={assets.bulb_icon} alt="" />
          </div>

          <div>
            <p>
              Brainstorm team bonding activities for our work retreat
            </p>
            <img src={assets.message_icon} alt="" />
          </div>

          <div>
            <p>
              Improve the readability of the following code
            </p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
