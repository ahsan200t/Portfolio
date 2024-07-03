const Projects = () => {
  return (
    <section className="p-4 bg-black">
      <h2 className="text-2xl text-white text-center mb-8 font-bold">
        My Recent Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-4 shadow-md">
          <h3 className="text-xl font-bold mb-2">
            BloodBridge{" "}
            <span className="text-xs">(Blood Donation Related Website)</span>
          </h3>
          <p>
            This project aims to facilitate blood donation by connecting donors
            with recipients and providing essential information on donation
            drives and eligibility. Our goal is to create a seamless and
            informative platform to encourage more people to donate blood and
            save lives.
          </p>
          <div className="my-2 flex justify-between">
            <div>
              <h1 className="font-semibold mb-2">Core Feature</h1>
              <p>1.Individual Dashboard</p>
              <p>2.Authentication</p>
              <p>3.Token Verified System</p>
            </div>
            <div>
              <h1 className="font-semibold">Uses Technologies</h1>
              <div className="flex gap-6 mt-2 text-green-600">
                <div>
                  <p>HTML</p>
                  <p>Tailwind Css</p>
                  <p>Javascript</p>
                  <p>React.js</p>
                </div>
                <div>
                  <p>node.js</p>
                  <p>Express.js</p>
                  <p>mongoDB</p>
                  <p>Firebase</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <a
              href="https://assignment-12-client-90a98.web.app"
              className="text-blue-500"
            >
              View Project
            </a>
            <div>
              <a
                className="text-blue-500 mr-4 border-b-2 border-blue-500"
                href="https://github.com/ahsan200t/Blood-Donation-A12-Server"
              >
                Server Link
              </a>
              <a
                className="text-blue-500 border-b-2 border-blue-500"
                href="https://github.com/ahsan200t/Blood-Donation-A12"
              >
                Client Link
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 shadow-md">
          <h3 className="text-xl font-bold mb-2">
            AwesomeBlog <span className="text-xs">(Blog Related Website)</span>
          </h3>
          <p>
            This project is a versatile blog platform designed to cater to a
            wide audience with engaging articles, expert tips, and inspiring
            stories across multiple topics. Whether you`re into tech, lifestyle,
            travel, or creativity, this blog aims to provide valuable content
            for everyone.
          </p>
          <div className="my-2 flex justify-between">
            <div>
              <h1 className="font-semibold mb-2">Core Feature</h1>
              <p>1.Content Management System (CMS)</p>
              <p>2.Authentication</p>
              <p>3.Responsive Design</p>
            </div>
            <div>
              <h1 className="font-semibold">Uses Technologies</h1>
              <div className="flex gap-6 mt-2 text-green-600">
                <div>
                  <p>HTML</p>
                  <p>Tailwind Css</p>
                  <p>Javascript</p>
                  <p>React.js</p>
                </div>
                <div>
                  <p>node.js</p>
                  <p>Express.js</p>
                  <p>mongoDB</p>
                  <p>Firebase</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <a
              href="https://assignment-11-de1f3.web.app"
              className="text-blue-500"
            >
              View Project
            </a>
            <div>
              <a
                className="text-blue-500 mr-4 border-b-2 border-blue-500"
                href="https://github.com/ahsan200t/AwesomeBlog-A11-Server"
              >
                Server Link
              </a>
              <a
                className="text-blue-500 border-b-2 border-blue-500"
                href="https://github.com/ahsan200t/AwesomeBlog-A11-Client"
              >
                Client Link
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 shadow-md">
          <h3 className="text-xl font-bold mb-2">
            AdventureAxis <span className="text-xs">(Travel Related Website)</span>
          </h3>
          <p>
          This project is a comprehensive travel blog website designed to inspire and guide travelers from around the world. Here, you will find everything from stunning travel destination features and expert travel tips to personal travel stories and practical guides.
          </p>
          <div className="my-2 flex justify-between">
            <div>
              <h1 className="font-semibold mb-2">Core Feature</h1>
              <p>1.Quality Assurance</p>
              <p>2.Accessibility Features</p>
              <p>3.Authentication</p>
            </div>
            <div>
              <h1 className="font-semibold">Uses Technologies</h1>
              <div className="flex gap-6 mt-2 text-green-600">
                <div>
                  <p>HTML</p>
                  <p>Tailwind Css</p>
                  <p>Javascript</p>
                  <p>React.js</p>
                </div>
                <div>
                  <p>node.js</p>
                  <p>Express.js</p>
                  <p>mongoDB</p>
                  <p>Firebase</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <a
              href="https://assignment-10-e03a2.web.app"
              className="text-blue-500"
            >
              View Project
            </a>
            <div>
              <a
                className="text-blue-500 mr-4 border-b-2 border-blue-500"
                href="https://github.com/ahsan200t/AdventueAxis-A10-Server"
              >
                Server Link
              </a>
              <a
                className="text-blue-500 border-b-2 border-blue-500"
                href="https://github.com/ahsan200t/AdventueAxis-A10-Client"
              >
                Client Link
              </a>
            </div>
          </div>
        </div>
        {/* Add more projects as needed */}
      </div>
    </section>
  );
};

export default Projects;
