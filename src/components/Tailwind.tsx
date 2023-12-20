import "../css/index.css";

function Tailwind(params: any) {
  return (
    <div className="mt-4">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <img
            className="h-12 w-12"
            src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg"
            alt="ChitChat Logo"
          />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>

      <div className="py-8 px-8 mt-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img
          className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
          src="https://tailwindcss.com/img/erin-lindford.jpg"
          alt="Woman's Face"
        />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">Erin Lindford</p>
            <p className="text-slate-500 font-medium">Product Engineer</p>
          </div>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Message
          </button>
        </div>
      </div>

      <button className="bg-sky-500 mt-6 px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none ...">
        Save changes
      </button>

      <div className="flex flex-row">
        <iframe
          title="youtube-test-video"
          className="m-10 lg:w-full aspect-video"
          src="https://www.youtube.com/embed/P-z3aLhp9w4?si=dJlWanqGyz6bhh01"
        />

        <iframe
          title="youtube-test-video"
          className="m-10 aspect-video lg:w-full"
          src="https://www.youtube.com/embed/P-z3aLhp9w4?si=dJlWanqGyz6bhh01"
        />
      </div>
    </div>
  );
}

export default Tailwind;
