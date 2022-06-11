import blogPlaceholder from "../../images/blog_placeholder.jpeg";

const BlogDetailPage = () => {
  return (
    <div className="container mx-auto pb-12 pt-4">
      <img
        className="h-96 w-full mx-auto object-cover px-2 sm:px-4 md:px-8 lg:px-44"
        src={blogPlaceholder}
        alt=""
      />
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div
          class=" w-full px-5 py-8 mx-auto lg:px-24
      "
        >
          <div class="flex flex-col w-full mx-auto mb-2 prose text-left md:prose-md lg:prose-lg xl:prose-xl">
            <div class="mb-5 border-b border-gray-200">
              <div class="flex flex-wrap items-baseline -mt-2">
                <h5>July 1st, 2022</h5>
                <p class="mt-1 ml-2"> - Michael Davis</p>
              </div>
            </div>
            <h1>
              Page transitions are a fundamental part of website navigation and
              user experience.
            </h1>
            <p>
              Turd polishing put a record on and see who dances, dog and pony
              show, nor one-sheet. Ensure to follow requirements when developing
              solutions three-martini lunch, that jerk from finance really threw
              me under the bus. Bob called an all-hands this afternoon.
            </p>

            <div className=" border-l-2 border-orange-400 w-full px-4 font-semibold italic">
              <p>
                For God so loved the world that he gave his one and only Son,
                that whoever believes in him shall not perish but have eternal
                life.
              </p>
              <p> ~ John 3:16</p>
            </div>
            <p>
              We've got kpis for that this is a no-brainer viral engagement
              pixel pushing. Run it up the flagpole please use "solutionise"
              instead of solution ideas! :) dunder mifflin form without content
              style without meaning target rich environment. Three-martini
              lunch. Get buy-in prioritize these line items, or deliverables yet
              back to the drawing-board let's put a pin in that, close the loop.
              Manage expectations product market fit win-win-win. The horse is
              out of the barn poop, but can you put it on my calendar? but drink
              from the firehose, but quick-win.
            </p>
            <h2 className="text-center">"Focus on the customer journey"</h2>
            <p>
              If you could do that, that would be great this is a no-brainer, or
              Q1 regroup. Groom the backlog what do you feel you would bring to
              the table if you were hired for this position. Back of the net.
              Scope creep can you slack it to me? shotgun approach build on a
              culture of contribution and inclusion please advise soonest.
            </p>
            <h3>Is a no-brainer, or Q1 regroup.</h3>
            <p>
              Gain traction make it more corporate please we need to harvest
              synergy effects not enough bandwidth, and we want to empower the
              team with the right tools and guidance to uplevel our craft and
              build better nor low-hanging fruit the right info at the right
              time to the right people.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
