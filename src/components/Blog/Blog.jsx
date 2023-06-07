

const Blog = () => {
  return (
    <div className="pt-20">
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close 
        </div>
        <div className="collapse-content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, dolorem. Quibusdam exercitationem minima ratione fugiat dolore quisquam assumenda hic aliquid.</p>
        </div>
      </div>
    </div>
    // <div className="pt-48 mb-10">
    //   <div>
    //     <h2 className="text-3xl "> 1.What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
    //     <p>An access token is a credential that provides temporary access to protected resources. A refresh token is used to obtain a new access token without re-entering credentials. Access tokens are included in requests to access resources, while refresh tokens are used to request new access tokens. Its important to store tokens securely on the client-side.</p>
    //   </div>
    //   <div className="mt-4">
    //     <h2 className="text-3xl">Compare SQL and NoSQL databases?</h2>
    //     <p className="mt-3">SQL databases are based on a relational model, use structured schemas, ensure data integrity, and are suitable for applications with complex data structures. Examples include MySQL and PostgreSQL. NoSQL databases are designed for unstructured and non-relational data, offer flexibility and scalability, prioritize performance over strong consistency, and are suitable for applications handling large volumes of data. Examples include MongoDB and Redis.</p>
    //   </div>
    //   <div className="mt-4">
    //     <h2 className="text-3xl">What is express js? What is Next JS?</h2>
    //     <p className="mt-3">Express.js is a lightweight web application framework for Node.js, used for building APIs and web applications. Next.js is a React framework that provides server-side rendering, static site generation, and other advanced features for building React-based web applications.</p>
    //   </div>
    //   <div className="mt-4">
    //     <h2 className="text-3xl">What is MongoDB aggregate and how does it work?</h2>
    //     <p className="mt-3">MongoDBs aggregate is a feature for performing advanced data aggregation and processing. It uses a pipeline of stages to manipulate and aggregate data, including grouping, filtering, sorting, and computing results. It allows for flexible and powerful data transformations within the database.</p>
    //   </div>
    // </div>
  );
};

export default Blog;