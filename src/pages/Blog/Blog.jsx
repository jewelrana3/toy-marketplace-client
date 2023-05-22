

const Blog = () => {
    return (
        <div className="mb-8 bg-red-200 p-4">
            <div>
                <h2 className="text-3xl font-bold">1.What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <h3 className="text-2xl mt-4 font-bold">Access Token</h3>
                <p>Access Token:
                    An access token is a credential that is issued to a client after a successful authentication process.
                    It contains information about the client s identity and permissions, such as user ID, scope, and expiration time.
                    The client includes the access token in each request to the server to access protected resources.
                    The server validates the access token to ensure the client has the necessary authorization to perform the requested actions.
                    Access tokens are short-lived and have an expiration time to enhance security. Once expired, the client needs to obtain a new access token.
                </p>
                <h3 className="text-2xl font-bold">Refresh Token</h3>
                <p>A refresh token is a long-lived credential that is typically issued alongside an access token.
                    It is used to obtain a new access token when the current one expires without requiring the user to reauthenticate.
                    The client sends the refresh token to the server in exchange for a new access token.
                    Refresh tokens are typically more secure than access tokens and are not included in every request to the server.
                    They have a longer expiration time and are used to obtain a new access token when needed.
                </p>
                <h3 className="text-2xl font-bold">Client Side</h3>
                <p>ccess tokens should be stored securely on the client-side, as they represent the client's authorization to access resources.
                    Commonly, access tokens are stored in memory or a temporary storage mechanism, such as in-memory variables or browser memory (e.g., localStorage or sessionStorage in a web browser).
                    It's important to avoid storing access tokens in permanent storage mechanisms like cookies, as they could be vulnerable to attacks like cross-site scripting (XSS) if not properly handled.
                    Refresh tokens, on the other hand, should be stored securely and persistently on the client-side. They are typically stored in a secure HTTP-only cookie or secure storage mechanisms provided by the platform (e.g., Keychain in iOS, KeyStore in Android).
                    Storing refresh tokens securely helps mitigate the risk of unauthorized access or theft, as they have a longer lifespan and can be used to obtain new access tokens.</p>

            </div>
            <div>
                <h2 className="text-3xl font-bold mt-4">2.Compare SQL and NoSQL databases?</h2>
                <div>
                    <h2 className="text-2xl font-bold mt-4">SQL Databasae</h2>
                    <p> SQL databases are based on a rigid, predefined structure known as a schema. Data is organized into tables with fixed columns and data types.
                        Data Model: SQL databases follow a relational data model, where data is stored in tables with relationships defined by keys (primary and foreign keys).
                        Query Language: SQL databases use SQL as the standard query language for performing operations like data retrieval, insertion, updating, and deletion.
                        ACID Compliance: SQL databases prioritize ACID (Atomicity, Consistency, Isolation, Durability) properties, ensuring data integrity and reliability.
                        Scalability: SQL databases traditionally scale vertically by increasing the hardware capacity of a single server. However, modern SQL databases also support horizontal scaling through techniques like sharding and replication.
                        Schema Changes: SQL databases require predefined schemas, and schema changes can be complex and may impact the entire database.</p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mt-4">NoSQL Databasae</h2>
                    <p> NoSQL databases are schema-less or have flexible schemas. They allow storing data in a variety of formats like key-value pairs, documents, columnar, or graph structures.
                        Data Model: NoSQL databases can support various data models like key-value, document, columnar, or graph, offering greater flexibility in data representation.
                        Query Language: NoSQL databases typically have their own query languages or APIs. Some NoSQL databases support SQL-like querying, but it's not as standardized as in SQL databases.
                        Scalability: NoSQL databases are designed for horizontal scalability, making it easier to distribute data across multiple servers and handle large-scale applications.
                        ACID Compliance: NoSQL databases prioritize availability and scalability over strict ACID compliance. They often sacrifice some ACID properties (like consistency) in favor of performance and scalability.
                        Schema Changes: NoSQL databases handle schema changes more easily since they are schema-flexible. Each record/document can have its own structure, and schema changes can be applied individually.</p>
                </div>
                <div>
                    <h2 className="text-3xl font-bold mt-4">3.What is express js? What is Nest JS </h2>
                    <h2 className="text-2xl font-bold mt-4">What is express js</h2>
                    <p>What Is Express JS? Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes</p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mt-4">What is Nest JS</h2>
                    <p>NestJS is a progressive Node.js framework for building efficient, scalable, and reliable server-side applications. It is built on top of Express.js and provides a more structured way of building applications with TypeScript. NestJS uses a modular architecture, making it easy to maintain and scale applications as they grow.</p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mt-4">4.What is MongoDB aggregate and how does it work </h2>
                    <p>What is Aggregation in MongoDB? Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;